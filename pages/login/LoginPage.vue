<template>
    <div class="login-page">
        <div class="head-nav just-between fs-14">
            <div class="nav-left align-center">
                <img class="logo-img mr-30 img-s-28"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt="">
                <span class="nav-left-text">
                    互联网软件外包服务平台
                </span>
            </div>
            <div class="nav-right align-center">
                <span class="nav-right-text">
                    还没注册账号？
                </span>
                <SmallButton>注册</SmallButton>
            </div>
        </div>

        <div class="container just-center">
            <div v-show="flag" class="con-tab1">
                <div class="con-title mt-40 mb-14">微信扫码登录</div>
                <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH_7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyREJyTUJPVEtleTMxNnZyTnh6MVcAAgSPTTFjAwQQDgAA"
                    alt="">
                <div class="mt-35">
                    <span class="link-style" @click="openFlag">使用账号密码登录</span>
                </div>
            </div>
            <div v-show="!flag" class="con-tab2 tab-wrap plr-15">
                <div class="con-title mt-40 mb-14">账号密码登录</div>
                <TipInput v-model="userAccount" :tipFlag="accountFlag" placeholder="手机号 / 用户名 / 电子邮箱" tipText="请输入账号"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput v-model="passWord" :tipFlag="passwordFlag" placeholder="请输入密码" tipText="请输入密码"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <div class="just-between fs-14">
                    <div class="cur-point align-center">
                        <input type="checkbox">
                        <span class="pa-lr-8">
                            记住我
                        </span>
                    </div>
                    <div class="cur-point">
                        找回密码
                    </div>
                </div>
                <SubmitButton class="mt-15">登录</SubmitButton>
                <div class="wechat-tip mt-35">
                    <img class="mr-6" src="@/assets/image/icon-wechat.png" alt="">
                    <span @click="openFlag">使用微信扫码登录</span>
                </div>
            </div>
        </div>

        <div class="foot foot-flex tip-text">
            <div class="logo plr-8"><img class="logo-img img-s-21"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt=""></div>
            <div class="foot-text plr-8">
                Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号：<a class="link-style"
                    href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">粤ICP备18032316号-1</a>
            </div>
        </div>
    </div>
</template>
<script>
import TipInput from '~/components/TipInput.vue';
import SubmitButton from '../../components/SubmitButton.vue';
import SmallButton from '~/components/SmallButton.vue';
export default {
    data() {
        return {
            flag: true,
            userAccount: "",
            passWord: "",
            accountFlag: false,
            passwordFlag: false,
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
    components: { TipInput, SubmitButton, SmallButton }
}
</script>
<style scoped>
.login-page {
    position: relative;
    min-width: 320px;
    height: 100vh;
}

.logo-img {
    display: block;
}

.head-nav {
    height: 70px;
    padding: 0 28px;
    border-bottom: 2px solid #EFEFEF;
    box-sizing: border-box;
    box-shadow: 0px 0.5px 5px #E9E9E9;
}

.nav-left {
    height: 100%;
}


.nav-right {
    height: 100%;
    color: #727f8f;
}


.foot {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 20px 0;
}

.foot-flex {
    display: flex;
    justify-content: center;
}

.foot-text {
    text-align: center;
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


.link-style {
    color: #4289dc;
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


.tab-wrap {
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

@media screen and (max-width: 770px) {
    .nav-left-text {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .nav-right-text {
        display: none;
    }

    .tab-wrap {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {

    .foot-text {
        text-align: center;
        font-size: 12px;
    }
}

@media screen and (max-width: 680px) {
    .foot {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}
</style>