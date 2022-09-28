<template>
    <div class="registe-page">
        <NavCom logoUrl="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png">
            <template #left-text>
                互联网软件外包服务平台
            </template>
            <template #right-text>
                已有账号？
            </template>
            <template #button>
                <nuxt-link :to="{name:'login-LoginPage'}">
                    <SmallButton>登录</SmallButton>
                </nuxt-link>
            </template>
        </NavCom>
        <div class="container just-center">
            <div class="form form-wrap">
                <div class="con-title mt-40 mb-40">注册需求方</div>
                <TipInput v-model="userName" placeholder="用户名 (即个性后缀，注册后无法修改)" tipText="请输入用户名"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <PhoneInput v-model="iphoneCode" placeholder="请输入手机验证码" tipText="请输入手机验证码"
                    :errorImg="require('@/assets/image/icon-error.png')"></PhoneInput>
                <TipInput v-model="iphoneCode" placeholder="请输入手机验证码" tipText="请输入手机验证码"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput v-model="passWord" placeholder="请输入密码" tipText="请输入密码"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput v-model="againPassWord" placeholder="请确认密码" tipText="请确认密码"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                    <SubmitButton class="mt-10">注册</SubmitButton>
            </div>
        </div>
        <FootInfo></FootInfo>
    </div>
</template>
<script>
import PhoneInput from '~/components/PhoneInput.vue';
export default {
    data() {
        return {
            userName: "",
            iphoneCode: "",
            passWord: "",
            againPassWord: ""
        };
    },
    components: { PhoneInput }
}
</script>
<style scoped>
.form-wrap {
    width: 322px;
    margin: auto;
}

.con-title {
    font-size: 21px;
    padding: 14px 0;
    text-align: center;
    color: black;
}
</style>