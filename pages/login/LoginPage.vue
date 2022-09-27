<template>
    <div class="login-page">
        <div class="head-nav fs-14">
            <div class="nav-left flex-align-center">
                <img class="logo-img m-r-28 img-s-28"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt="">
                互联网软件外包服务平台
            </div>
            <div class="nav-right flex-align-center">
                还没注册账号？
                <button class="btn">注册</button>
            </div>
        </div>

        <div class="container">
            <div v-show="flag" class="con-tab1">
                <div class="con-title mr-t-40 mr-b-14">微信扫码登录</div>
                <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH_7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyREJyTUJPVEtleTMxNnZyTnh6MVcAAgSPTTFjAwQQDgAA"
                    alt="">
                <div class="mr-t-35">
                    <span class="link-style" @click="openFlag">使用账号密码登录</span>
                </div>
            </div>
            <div v-show="!flag" class="con-tab2 tab-wrap">
                <div class="con-title mr-t-40 mr-b-14">账号密码登录</div>
                <TipInput v-model="userAccount" :tipFlag="accountFlag" placeholder="手机号 / 用户名 / 电子邮箱" tipText="请输入账号" :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput v-model="passWord" :tipFlag="passwordFlag" placeholder="请输入密码" tipText="请输入密码" :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <div class="flex-bet fs-14">
                    <div class="cur-point flex-align-center">
                        <input type="checkbox">
                        <span class="pa-lr-8">
                            记住我
                        </span>
                    </div>
                    <div class="cur-point">
                        找回密码
                    </div>
                </div>
                <button class="con-btn mt-15">登录</button>
                <div class="wechat-tip mt-35">
                    <img class="mr-6" src="@/assets/image/icon-wechat.png" alt="">
                    <span @click="openFlag">使用微信扫码登录</span>
                </div>
            </div>
        </div>

        <div class="foot flex-align-center tip-text">
            <div class="logo p-lr-7"><img class="logo-img img-s-21"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt=""></div>
            <div class="tip-text p-lr-7">
                Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号：<a class="link-style"
                    href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">粤ICP备18032316号-1</a>
            </div>
        </div>
    </div>
</template>
<script>
import TipInput from '~/components/TipInput.vue';
export default {
    data() {
        return {
            flag: true,
            userAccount: "",
            passWord: "",
            accountFlag: false,
            passwordFlag: false,
            a: "green"
        };
    },
    asyncData() {
        return {};
    },
    methods: {
        openFlag() {
            this.flag = !this.flag;
        },
        checkForm() {
            console.log(this.userAccount);
            if (!this.userAccount) {
                console.log("没输入");
                this.accountFlag = true;
            }
        }
    },
    components: { TipInput }
}
</script>
<style scoped>
.login-page {
    position: relative;
    height: 100vh;
}

.logo-img {
    display: block;
}

.head-nav {
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    padding: 0 28px;
    border-bottom: 2px solid #EFEFEF;
    box-sizing: border-box;
    /* box-shadow: 0px 0.5px 5px #E9E9E9; */
}

.nav-left {
    height: 100%;
}

.m-r-28 {
    margin-right: 28px;
}

.nav-right {
    height: 100%;
    color: #727f8f;
}

.nav-right .btn {
    border: 1px solid #4289dc;
    color: #4289dc;
    font-size: 12px;
    background-color: white;
    padding: 6.2px 21px;
    border-radius: 5px;
}

.nav-right .btn:hover {
    color: white;
    background-color: #4289dc;
}

.flex-align-center {
    display: flex;
    align-items: center;
}

.fs-14 {
    font-size: 14px;
}

.foot {
    width: 100%;
    position: absolute;
    bottom: 0;
    justify-content: center;
    padding: 21px 0;
}

.img-s-21 {
    height: 21px;
}

.img-s-28 {
    height: 28px;
}

.tip-text {
    color: #727F8F;
    font-size: 14px;
}

.p-lr-7 {
    padding: 0 7px;
}

.link-style {
    color: #4289dc;
}

.container {
    display: flex;
    justify-content: center;
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

.mr-t-40 {
    margin-top: 40px;
}

.con-title {
    font-size: 21px;
    padding: 14px 0;
    text-align: center;
    color: black;
}

.mr-b-14 {
    margin-bottom: 14px;
}

.mr-b-8 {
    margin-bottom: 8px;
}

.mr-t-35 {
    margin-top: 35px;
}

.mr-t-14 {
    margin-top: 14px;
}





.tab-wrap {
    width: 322px;
    margin: auto;
}

.flex-bet {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pa-lr-8 {
    padding: 0 8px;
}

.con-btn {
    width: 100%;
    background-color: #4289DC;
    color: white;
    border-radius: 4px;
    padding: 9px 14px;
    font-size: 14px;
    cursor: pointer;
}
.con-btn:hover{
background-color: #08c;

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

.mt-35 {
    margin-top: 35px;
}

.mr-6 {
    margin-right: 6px;
}

.mt-15 {
    margin-top: 15px;
}

.cur-point {
    cursor: pointer;
}



.mr-b-7 {
    margin-bottom: 7px;
}

.mr-b-4 {
    margin-bottom: 4px;
}
.con-tab2 {
    color: #727F8F;
}
</style>