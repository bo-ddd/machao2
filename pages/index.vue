<template>
  <div class="home">
    <div class="container">
      <!-- 头部宽屏-->
      <header class="fs-14 header-max">
        <div class="header-l">
          <a href="/">
            <img class="logo" src="https://codemart.com/images/mart-logo-white.png" alt="logo">
          </a>
          <div class="nav-list">
            <div class="nav-item">
              <a>找项目</a>
            </div>
            <div class="nav-item">
              <a> 原型广场</a>
              <svg class="new-tip" xmlns="http://www.w3.org/2000/svg" width="36" height="14" viewBox="0 0 36 14">
                <g fill="none">
                  <rect width="36" height="14" fill="#F75288" rx="2"></rect>
                  <path fill="#FFFFFF"
                    d="M5.77,3.146 L5.77,11 L6.969,11 L6.969,5.093 L7.013,5.093 L11.072,11 L12.238,11 L12.238,3.146 L11.039,3.146 L11.039,8.987 L10.995,8.987 L6.98,3.146 L5.77,3.146 Z M13.789,3.146 L13.789,11 L19.619,11 L19.619,9.977 L14.988,9.977 L14.988,7.48 L19.168,7.48 L19.168,6.457 L14.988,6.457 L14.988,4.169 L19.432,4.169 L19.432,3.146 L13.789,3.146 Z M20.125,3.146 L22.38,11 L23.667,11 L25.262,4.939 L25.306,4.939 L26.901,11 L28.177,11 L30.443,3.146 L29.09,3.146 L27.561,9.262 L27.517,9.262 L25.911,3.146 L24.657,3.146 L23.051,9.262 L23.007,9.262 L21.478,3.146 L20.125,3.146 Z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="nav-item">
              <a>帮助中心</a>
            </div>
          </div>
        </div>
        <div class="header-r">
          <div class="btns">
            <div class="btn"><a href="/loginPage/loginPage">登录</a></div>
            <div class="btn">注册</div>
            <div class="btn btn-border">发布项目</div>
          </div>
        </div>
      </header>
      <!-- 头部窄屏 -->
      <header class="header-min">
        <a href="/">
          <img class="logo" src="https://codemart.com/images/mart-logo-white.png" alt="logo">
        </a>
        <img src="~/assets/imgs/icon-list.png">
      </header>

      <!-- banner -->
      <div class="view-box">

        <!-- 显示第一个banner -->
        <!-- <div class="view-one">
          <div class="index-top">
            <div class="top-motto-container">
              <p class="top-motto">
                互联网软件外包服务平台
              </p>
            </div>
            <div class="btm-motto-container mt-10">
              <p class="btm-motto">
                提供您所需的全套软件开发服务
              </p>
            </div>
          </div>
          <div class="banner-wrap">
            <img
              src="https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/cloudbase-cms/upload/2021-12-02/b96c4m4uqlkvtkgcaitxc8t22036wwhb_.png"
              alt="">
          </div>
        </div> -->


        <div class="view-two">
          <div class="index-top">
            <div class="top-motto-container">
              新版阶段划分
              <br>
              自助验收,轻松交付
            </div>
            <a class="start-button fs-14 mt-30">了解详情</a>
          </div>
          <div class="banner-wrap">
            <img src="https://codemart.com/images/index/banner-project.png" alt="">
          </div>
        </div>

        <!-- 切换banner -->
        <div class="check-banner">
          <div class="check check-active"></div>
          <div class="check-un"></div>
        </div>
      </div>
    </div>

    <!-- 项目信息 -->
    <div class="cm-nums-out">
      <div class="wrap cm-nums">
        <div class="cm-num-box">
          <div class="cm-countup">548,310,503</div>
          <div class="cm-num-desc">累计金额</div>
        </div>
        <div class="cm-num-box">
          <div class="cm-countup">548,310,503</div>
          <div class="cm-num-desc">累计金额</div>
        </div>
        <div class="cm-num-box">
          <div class="cm-countup">548,310,503</div>
          <div class="cm-num-desc">累计金额</div>
        </div>
      </div>
    </div>

    <!-- 功能选项 -->
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {

  }
}
</script>
<style scoped>
@media screen and (max-width:1000px) {
  .header-max {
    display: none;
  }
}

@media screen and (min-width: 1001px) {
  .header-min {
    display: none;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
}

.header-max {
  color: #fff;
}

.header-min>img {
  width: 24px;
}

.header-min {
  padding: 15px 28px;
}

.logo {
  height: 30px;
}

.container {
  background: #2b3a42;
}

.header-l {
  display: flex;
  align-items: center;
  padding: 30px 0;
}

.nav-list {
  display: flex;
  margin-left: 30px;
}

.nav-list .nav-item {
  width: 84px;
  position: relative;
  margin-right: 7px;
}

.nav-list .nav-item svg {
  position: absolute;
  top: -10px;
  right: -3px;
}

.btns .btn {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  margin: 0 5px;
}

.btns .btn a {
  color: #fff;
}

.btn-border {
  border: 1px solid #ccc;
}

.btns .btn:hover {
  border: 1px solid #ccc;
  cursor: pointer;
}

.index-top {
  color: #fff;
}

.index-top>.top-motto-container {
  font-size: 49px;
}

.index-top>.btm-motto-container {
  font-size: 21px;
}

.view-box {
  padding-bottom: 20px;
  width: 980px;
  margin: 0 auto;
}

.view-box .banner-one {
  text-align: right;
}

.view-one {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 91px 0;
}

.view-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 91px 0;
}

.view-box .check-banner {
  display: flex;
  justify-content: center;
}

.view-box .check-banner .check {
  margin: 0 20px;
}

.check-active {
  width: 42px;
  height: 10px;
  background: #3388e9;
}

.check-un {
  width: 10px;
  height: 10px;
  background: #fff;
}

.view-two .banner-wrap img {
  width: 333px;
  min-width: 333px;
}

.view-two .banner-wrap {
  text-align: right;
}

.start-button{
  display:inline-block;
  padding:10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
}

.start-button:hover{
  background: #fff;
  color: #000;
  cursor: pointer;
}

.cm-nums-out .cm-nums{
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3,1fr);
}

.cm-num-box{
  text-align: center;
  padding: 40px 0;
}

.cm-num-box .cm-countup{
  color: #3388e9;
  font-weight: bolder;
  font-size: 36px;
}

.cm-nums-out{
  background: #F7F8F9;
}
</style>