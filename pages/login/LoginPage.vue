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
            <!-- <div class="con-tab1" style="display:block">
                <div class="con-title mr-t-40 mr-b-14">微信扫码登录</div>
                <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH_7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyREJyTUJPVEtleTMxNnZyTnh6MVcAAgSPTTFjAwQQDgAA" alt="">
                <div class="mr-t-35">
                    <span class="link-style">使用账号密码登录</span>

                </div>
            </div> -->
            <div class="con-tab2 tab-wrap">
                <div class="con-title mr-t-40 mr-b-14">账号密码登录</div>
                <input type="text" placeholder="手机号 / 用户名 / 电子邮箱" class="con-input mr-t-14">
                <input type="text" placeholder="请输入密码" class="con-input mr-t-14 mr-b-8">
                <div class="flex-bet fs-14 con">
                    <div class=flex-align-center >
                        <input type="checkbox">
                        <span class="pa-lr-8">
                            记住我
                        </span>
                    </div>
                    <div>
                        找回密码
                    </div>
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
<style scoped>
.login-page {
    position: relative;
    height: 100vh;
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
    /* display: flex;
    justify-content: center; */
}

.container .con-tab1 {
    display: inline-block;
    margin: 0 auto;
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
}

.mr-b-14 {
    margin-bottom: 14px;
}
.mr-b-8{
    margin-bottom: 8px;
}
.mr-t-35 {
    margin-top: 35px;
}

.mr-t-14 {
    margin-top: 14px;
}

.con-input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cad3de;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px 14px;
}

.con-tab2 input::placeholder {
    color: #cad3de;
}
.con-input:focus{
    border: 1px solid #4289DC;

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
.pa-lr-8{
    padding: 0 8px;
}
</style>