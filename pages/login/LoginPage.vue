<template>
    <div class="login-page">
        <NavCom toUrl="index" :logoUrl="require('@/assets/image/logo1.png')">
            <template #left-text>
                互联网软件外包服务平台
            </template>
            <template #right-text>
                还没有注册账号？
            </template>
            <template #button>
                    <SmallButton toUrl='register-RegisterPage'>注册</SmallButton>
            </template>
        </NavCom>
        <div class="container just-center">
            <!-- <div v-show="flag" class="con-tab1">
                <div class="con-title mt-40 mb-14">微信扫码登录</div>
                <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH_7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyREJyTUJPVEtleTMxNnZyTnh6MVcAAgSPTTFjAwQQDgAA"
                    alt="">
                <div class="mt-35">
                    <span class="link-style" @click="openFlag">使用账号密码登录</span>
                </div>
            </div> -->
            <div class="con-tab2 form-wrap plr-15">
                <div class="con-title mt-40 mb-14">账号密码登录</div>
                <TipInput class="mt-15 mb-8" v-model="form.username" :tipFlag="accountFlag" placeholder="手机号 / 用户名 / 电子邮箱" tipText="请输入账号"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput class="mt-15 mb-8" v-model="form.password" :tipFlag="passwordFlag" placeholder="请输入密码" tipText="请输入密码" type="password"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <div class="just-between fs-14">
                    <div class="cur-point align-center">
                        <input type="checkbox">
                        <span class="plr-8">
                            记住我
                        </span>
                    </div>
                    <div class="cur-point">
                        找回密码
                    </div>
                </div>
                <SubmitButton class="mt-15"  @btnClick="login">登录</SubmitButton>
                <!-- <div class="wechat-tip mt-35">
                    <img class="mr-6" src="@/assets/image/icon-wechat.png" alt="">
                    <span @click="openFlag">使用微信扫码登录</span>
                </div> -->
            </div>
        </div>
        <FootInfo theme="white" class="position-bottom"></FootInfo>

    </div>
</template>
<script>
import {loginApi} from '@/api/api.js'
export default {
    data() {
        return {
            // flag: true,
            accountFlag: false,
            passwordFlag: false,
            form:{
            username: "",
            password: "",
            }
        };
    },
    asyncData() {
        return {};
    },
    methods: {
        // openFlag() {
        //     this.flag = !this.flag;
        // },
        checkForm() {
            console.log(this.userAccount);
            if (!this.userAccount) {
                console.log("没输入");
                this.accountFlag = true;
            }
        },
        async login(){
            let res=await loginApi(this.form);
            if(res.data.status===1){
                this.$message.success({
                    message: '登录成功,准备跳转'+res.data.msg,
                })
                console.log(res);
                sessionStorage.setItem('token',res.data.data.token)
                setTimeout(()=>{
                    this.to('/')
                },2000)
            }else{
                this.$message.warning({
                    message: '登录失败,'+res.data.msg,
                })
            }
        },
        to(routeName){
            this.$router.push(routeName);
        }
    },
}
</script>
<style scoped>
.position-bottom{
    position: absolute;
    bottom: 0;
}
.login-page {
    position: relative;
    min-width: 320px;
    height: 100vh;
    min-height: 650px;
}
.container{
    position: absolute;
    width: 100%;
}

.container .con-tab1 {
    display: inline-block;
    text-align: center;
}

.container img {
    width: 250px;
    display: block;
}

.con-tab1 .link-style {
    font-size: 14px;
    color: #9B9B9B;
    text-decoration: underline;
    cursor: pointer;
}


.con-title {
    font-size: 21px;
    padding: 14px 0;
    text-align: center;
    color: black;
}


.form-wrap {
    width: 322px;
    margin: auto;
}


.wechat-tip {
    text-align: center;
    color: #9B9B9B;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.wechat-tip img {
    width: 16px;
    height: 16px;
}


.cur-point {
    cursor: pointer;
}

.con-tab2 {
    color: #727F8F;
}

@media screen and (max-width: 480px) {
    .form-wrap {
        width: 100%;
    }
}
</style> 