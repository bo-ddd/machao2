<template>
  <div class="home">
    <div class="container">
      <!-- 头部宽屏-->
      <HeaderCom class="mt-10 padding-15_28"></HeaderCom>
      <!-- 头部窄屏 -->
      <header class="header-min">
        <nuxt-link to="/">
            <img class="logo" src="https://codemart.com/images/mart-logo-white.png" alt="logo">
        </nuxt-link>
        <img src="~/assets/image/icon-list.png">
      </header>

      <!-- banner -->
      <div class="view-box">

        <!-- 显示第一个banner -->
        <div class="view-one" v-show="index === 1">
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
        </div>

        <div class="view-two" v-show="index === 2">
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
          <div :class="[{'check' :index == item},{'check-active':index == item},{'check-un':index != item}]" v-for="item in 2" :key="item" @click="handleChangeBanner(item)"></div>
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
          <div class="cm-countup">19,480</div>
          <div class="cm-num-desc">项目数量</div>
        </div>
        <div class="cm-num-box">
          <div class="cm-countup">317,620</div>
          <div class="cm-num-desc">注册开发者</div>
        </div>
      </div>
    </div>

    <!-- 功能选项 -->
    <div class="development-option-wrap wrap">

      <!-- 标题 -->
      <p class="development-option-tit mb-20">我要找专业的软件开发成员</p>
      
      <!-- 列表 -->
      <div class="development-option-list">
        <div class="development-option-item">
          <img src="~/assets/image/icon-dev.png" class="icon">
          <p class="name">开发工程师</p>
          <p class="desc">系统更稳定,数据更安全</p>
        </div>
        <div class="development-option-item">
          <img src="~/assets/image/icon-team.png" class="icon">
          <p class="name">开发团队</p>
          <p class="desc">实施更系统,协作效率更高</p>
        </div>
        <div class="development-option-item">
          <img src="~/assets/image/icon-cp.png" class="icon">
          <p class="name">产品经理</p>
          <p class="desc">需求梳理更彻底,产品更合理</p>
        </div>
        <div class="development-option-item">
          <img src="~/assets/image/icon-test.png" class="icon">
          <p class="name">测试工程师</p>
          <p class="desc">bug数量更少,产品质量更高</p>
        </div>
        <div class="development-option-item">
          <img src="~/assets/image/icon-ui.png" class="icon">
          <p class="name">UI设计师</p>
          <p class="desc">页面更美观,视觉体验更优秀</p>
        </div>
      </div>

    </div>
    <!-- 服务信息 -->
    <div class="cm-info-out">
        <div class="cm-info-wrap wrap">
          <div class="cm-info-left">
            <p class="title">我要找全面的软件开发服务</p>
            <p class="desc c-bababa fs-16">想要更棒的项目协作体验,更高的交付质量,更全面的服务保障吗?试试"英选-码市"软件定制整包服务</p>
            <div class="detail-list mt-50">
              <div class="detail-item">
                <img class="icon-small" src="~/assets/image/icon-info.png">
                <span class="ml-15">信息化系统对接</span>
              </div>
              <div class="detail-item">
                <img class="icon-small"  src="~/assets/image/icon-info.png">
                <span class="ml-15">拥有版权和数据</span>
              </div>
              <div class="detail-item">
                <img class="icon-small"  src="~/assets/image/icon-info.png">
                <span class="ml-15">满足一致视觉要求</span>
              </div>
              <div class="detail-item">
                <img class="icon-small"  src="~/assets/image/icon-info.png">
                <span class="ml-15">企业数据资产化</span>
              </div>
            </div>
            <div class="large-btn them-light fs-18">了解整包服务</div>
          </div>
          <div class="cm-info-right">
            <img src="https://assets.codemart.com/images/index/service.png">
          </div>
        </div>
    </div>

    <!-- 为什么选择 -->
    <div class="why-check-wrap">
      <div class="wrap why-check">
          <p class="title text-center">我为什么选择码市</p>
          <div class="why-check-list">
            <div class="why-check-item">
                <img src="~/assets/image/icon-large.png">
                <p class="title">海量人才匹配</p>
                <div class="line"></div>
            </div>
            <div class="why-check-item">
                <img src="~/assets/image/icon-zy.png">
                <p class="title">专注软件领域</p>
                <div class="line"></div>
            </div>
            <div class="why-check-item">
                <img src="~/assets/image/icon-official.png">
                <p class="title">官方款项托管</p>
                <div class="line"></div>
            </div>
          </div>
      </div>
    </div>

    <!-- 开始寻找人才 -->
    <div class="begin-wrap">
        <div class="wrap begin">
          <div class="begin-left">
            <img src="~/assets/image/banner-find.png">
          </div>
          <div class="begin-right">
            <p class="title">开始寻找你的外包人才</p>
            <p class="desc c-bababa fs-16 mt-15">在码市用同样的价格找到更优的人才，用同样的时间连接更多候选人，在码市寻找项目外包人才，快人一步。</p>
            <div class="large-btn them-light fs-18 mt-30">我要找人才</div>
          </div>
        </div>
    </div>

    <!-- 查找软件开发任务 find-dev-task -->
    <div class="dev-task-wrap">
      <div class="dev-task wrap">
        <p class="title text-center">我要找靠谱的软件开发任务</p>
        <p class="desc text-center fs-16 c-bababa">找任务，找更多任务，快速找更多任务</p>
        <div class="dev-task-list mt-50">
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">APP开发</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">小程序开发</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">Web网站开发</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">前端开发</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">后端开发</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">产品原型设计</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">软件测试</p>
          </div>
          <div class="dev-task-item shadow">
            <img src="~/assets/image/app.png">
            <p class="text-center fs-18">UI设计</p>
          </div>
        </div>
        <div class="btn-wrap mt-30">
          <div class="large-btn them-light fs-18">全部任务</div>
        </div>
      </div>
    </div>

    <!-- 任务说明 -->
    <div class="task-des-wrap">
      <div class="wrap task-desc">
        <div class="task-desc-left">
          <p class="title">我要找任务还需了解</p>
          <img class="mt-20" src="~/assets/image/faqq.png">
        </div>

        <div class="task-desc-right">
            <div class="task-desc-list">
                <div class="task-desc-item" v-for="item in knowList" :key="item.id" @click="handleKnowItem(item)">
                  <div class="question">
                    <div class="question-left">
                      <img class="icon-small" src="~/assets/image/faq.png">
                      <p class="fs-20 ml-15">{{item.question}}</p>
                    </div>
                    <img class="arrow"  src="~/assets/image/arrow.png">
                  </div>
                  <div class="answer fs-16" v-show="item.bool">
                    <p>{{item.answer}}</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <!-- 开启自由之路 -->
    <div class="free-way-wrap">
      <div class="free-way wrap">
        <div class="free-way-left">
          <p class="title cl-fff">开启你的自由职业之路</p>
          <p class="desc cl-fff mt-20 fs-16">发挥擅长技能，弹性安排工作时间，在任何地方工作，灵活选择全职或兼职，拓宽专业技能，发展兴趣爱好......最重要的是还能赚钱，来码市，帮你实现。</p>
          <div class="large-btn them-light fs-18 mt-30">开启自由职业之路</div>
        </div>
        <div class="free-way-right">
          <img src="~/assets/image/free.png">
        </div>
      </div>
    </div>

    <!--为什么选择码市  -->
    <div class="check-us-wrap">
      <div class="check-us wrap">
        <p class="title text-center">他们为什么选择码市</p>
        <p class="desc text-center fs-16 c-bababa mt-10">我们的需求方在码市平台体验高效精准的人才匹配服务，开发者体验更便捷的接单服务。</p>

        <!-- 轮播图 -->
        <div class="check-us-detail mt-50">
            <div class="detail-container shadow">
              <div class="detail-item">
                <div class="detail-item-left">
                  <img src="https://assets.codemart.com/images/index/avatar/zhq.png">
                </div>
                <div class="detail-item-right">
                  <div>
                    <img src="~/assets/image/semi.png">
                    <p class="desc"> “我们从码市创办之初就在码市提供服务了，现在全码市也名列第五咯，码市上的项目相比其他平台会更容易消化，因为大部分的需求方都比较专业，能说清楚自己的要求，也了解软件开发过程，甚至有的专业需求方能自己提供流程图脑图等资料，就很不错。”</p>
                  </div>
                  <p class="from">赵瀚卿·“零云”产品负责人</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- 加入我们 -->
    <div class="join-us-wrap">
      <div class="join-us wrap">
        <p class="title text-center fs-46 cl-fff">来码市，找人才/任务快人一步</p>
        <div class="btn-wrap mt-50">
          <div class="large-btn them-low fs-18">加入码市</div>
        </div>
      </div>
    </div>

    <!-- 关于码超 -->
    <div class="about-us-wrap">
      <div class="about-us wrap">
        <div class="about-info">
          <div class="about-info-left">
            <div class="about-info-list fs-16">
              <div class="about-info-item">关于码市</div>
              <div class="about-info-item">帮助</div>
              <div class="about-info-item">联系方式</div>
            </div>
            <div class="about-info-list fs-14 c-bababa">
              <div class="about-info-item">码市介绍</div>
              <div class="about-info-item">如何发布项目需求?</div>
              <div class="about-info-item">0755-33940</div>
            </div>
            <div class="about-info-list fs-14 c-bababa">
              <div class="about-info-item">码市案例</div>
              <div class="about-info-item">如何为发布的项目需求定价?</div>
              <div class="about-info-item">support @ codemart.com</div>
            </div>
            <div class="about-info-list fs-14 c-bababa">
              <div class="about-info-item">内容中心</div>
              <div class="about-info-item">查看更多></div>
              <div class="about-info-item">周一至周五 09:30-19:00</div>
            </div>
          </div>
          <div class="about-info-right text-right">
            <img src="~/assets/image/logo.png">
          </div>
        </div>
      </div>

      <!-- 版本号 -->
      <div class="copy-wrap text-center wrap fs-12">
        Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号：粤ICP备18032316号-1
      </div>
    </div>
  </div>

</template>

<script>
import HeaderCom from '~/components/HeaderCom.vue';
  const knowList = [
    {
      id : 1,
      question:'如何注册及认证？',
      answer:'注册并认证身份注册成为 “码士”，完成码市测试 能让你更了解码市交易规则，完善个人技能信息和项目经验即可开始报名接单。',
      bool:false
    },
    {
      id : 2,
      question:'是否需要认证真实身份才能接单？',
      answer:'为确保项目与人员的真实性，要求完成实名认证才可接单。需求方会通过报名者的真实性、项目经验等信息考量匹配度。',
      bool:false
    },
    {
      id : 3,
      question:'开发者接单是否需要支付服务费？',
      answer:'开发者在码市承接项目，码市平台需要向非会员的开发方收取总项目金额的 10% 的服务费，服务费会在支付阶段款项时扣除相应比例的服务费，不需再提供发票抵扣。',
      bool:false
    },
    {
      id : 4,
      question:'如何交付项目？',
      answer:'项目每个阶段的交付物和交付的功能以双方协商的为准，建议开发者项目验收时交付该项目必要的源代码、编译程序、说明文档等。',
      bool:false
    },
    {
      id : 5,
      question:'是否需要给需求方提供质保期？',
      answer:'质保期是指在项目完成开发后，开发者仍然要为本次项目中出现的 bug 进行调优和修复的一段时期，质保期周期长短可根据双方协调来确定。建议双方制定阶段划分的时候将最后一个阶段划分为质保期，以便后续bug修复调优',
      bool:false
    },
    {
      id : 6,
      question:'怎么保障需求方准时支付项目款？',
      answer:'在提交交付物后，可适当提醒需求方尽快确认验收，一旦需求方在码市上确认验收，款项便自动转入你的开发宝账户中。',
      bool:false
    },
  ]
export default {
    name: "IndexPage",
    data() {
        return {
            knowList,
            index: 1,
        };
    },
    methods: {
        handleKnowItem(item) {
            item.bool = !item.bool;
        },
        handleChangeBanner(index) {
            this.index = index;
        }
    },
    components: { HeaderCom }
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

.padding-15_28{
  padding: 15px 28px;
}

.container {
  background: #2b3a42;
  display: flow-root;
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

.view-two,.view-one{
  height: 380px;
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
  padding: 50px 0;
}

.cm-num-box .cm-countup{
  color: #3388e9;
  font-weight: bolder;
  font-size: 36px;
}

.cm-nums-out{
  background: #F7F8F9;
}

.development-option-wrap{
  padding: 100px 0 116px;
}

.development-option-wrap .development-option-tit{
  text-align: center;
  font-size: 32px;
  color: #2E3034;
}

.development-option-wrap .development-option-list{
  display: flex;
}

.development-option-wrap .development-option-list .development-option-item{
  width: 20%;
  padding: 40px 0;
  text-align: center;
}

.development-option-item .name{
  margin: 16px 0 8px;
  font-size: 20px;
  font-weight: 600;
}

.development-option-item .desc{
  font-size: 14px;
  color: #ccc;
}

.development-option-item:hover{
  box-shadow: 0 4px 8px #0000001f, 0 0 12px #0000000a;
  cursor: pointer;
}

.icon{
  width: 64px;
}

.icon-small{
  width: 20px;
}

.cm-info-out{
  background: #F7FBFF;
}

.cm-info-wrap{
  padding: 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 100px;
}

.cm-info-wrap .cm-info-right img{
  width: 590px;
}

.cm-info-wrap .cm-info-right img:hover{
  box-shadow: 0 4px 8px #0000001f, 0 0 12px #0000000a;
}

.cm-info-wrap .cm-info-right{
  text-align: right;
}

.title{
  font-size: 32px;
  font-weight: 600;
}

.cm-info-left .desc{
  padding: 12px 0;
}

.cm-info-left .detail-list{
  display: flex;
  flex-wrap: wrap;
}

.cm-info-left .detail-list .detail-item{
  width: 50%;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.mt-50{
  margin-top: 50px;
}

.large-btn{
  display: inline-block;
  padding: 15px 40px;
  border-radius: 5px;
}

.cm-info-left .large-btn:hover{
  cursor: pointer;
  background: #3381db;
}

.them-light{
  background: #3388e9;
  color: #fff;
}

.them-low{
  background: #fff;
  color: #3388e9;
}

.why-check{
  padding: 128px 0;
}

.text-center{
  text-align: center;
}

.why-check .title{
  padding: 32px 0;
}

.why-check-list{
  display: flex;
}

.why-check-list .why-check-item{
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.why-check-list .why-check-item img{
  width: 140px;
}

.why-check-list .why-check-item .title{
  padding: 16px 0;
  font-size: 24px;
  font-weight: 600;
}

.line{
  width: 24px;
  height: 4px;
  background: #3388e9;
}

.begin-wrap{
  background: #F7FBFF;
}

.begin-wrap .begin{
  display: grid;
  padding: 100px 0;
  grid-template-columns: 1fr 1fr;
  gap: 0 100px;
}

.begin-wrap .begin .begin-left img{
  width: 590px;
}

.begin-wrap .begin .begin-right{
  padding: 100px 0;
}

.begin-wrap .begin .begin-right .desc{
  line-height: 150%;
}

.dev-task{
  padding: 100px 0;
}

.dev-task .dev-task-list{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 30px;
}

.dev-task-item img{
  width: 274px;
}

.dev-task-item p{
  padding: 24px;
}

.dev-task-item:hover{
  box-shadow: 0 4px 8px #0000001f, 0 0 12px #0000000a;
  cursor: pointer;
}

.dev-task .btn-wrap{
  display: flex;
  justify-content: center;
}

.task-des-wrap{
  background: #f7fbff;
}

.task-des-wrap .task-desc{
  padding: 100px 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 40px;
}

.text-right{
  text-align: right;
}

.task-desc .task-desc-left img{
  width: 234px;
}

.task-desc .task-desc-left{
  padding-left: 90px;
}

.fs-32{
  font-size: 32px;
}

.task-desc-item .question .question-left{
  display: flex;
  align-items: center;
}

.task-desc-item .question .question-left p{
  font-weight: 600;
}

.task-desc-item .question{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px 32px;
  border-bottom: .5px solid #ccc;
}

.task-desc-item:nth-child(1){
  border-top: .5px solid #ccc;
}

.arrow{
  width: 14px;
}

.task-desc-item .answer{
  padding:20px 32px;
  line-height: 150%;
  background: #fff;
  border-bottom: .5px solid #ccc;
}

.task-desc-item:hover{
  cursor: pointer;
}

.free-way-wrap{
  background: #28384E;
}

.free-way{
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap:0 100px;
}

.cl-fff{
  color: #fff;
}

.free-way .free-way-left .desc{
  line-height: 200%;
}

.free-way .free-way-left{
  padding: 60px 0;
}

.join-us-wrap{
  background: url("~/assets/image/bg.png");
}

.join-us-wrap .join-us{
  padding: 100px 0;
}

.fs-46{
  font-size: 46px;
}

.join-us .btn-wrap{
  display: flex;
  justify-content: center;
}

.about-us-wrap .about-us .about-info{
  padding: 64px 0;
  display: grid;
  grid-template-columns: 6fr 4fr;
}

.about-info-left{
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}

.about-info .about-info-right  img{
  width: 100px;
}

.copy-wrap{
  padding: 20px 0;
}

.about-info-list{
  display: flex;
  align-items: center;
}

.about-info-list .about-info-item{
  width: 100%;
}

.about-info{
  border-bottom: 1px solid #ccc;
}

.check-us{
  padding: 100px 0;
}

.check-us-detail .detail-container{
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 100px;
  width: 980px;
  margin: 0 100px;
}

.check-us-detail .detail-container .detail-item{
  height: 330px;
  display: grid;
  grid-template-columns: 3fr 7fr;
  border-radius: 10px;
}

.detail-item .detail-item-left img{
  width: 184px;
  height: 256px;
  border-radius: 5px;
}

.detail-item .detail-item-left{
  height: 100%;
  display: flex;
  align-items: center;
}

.detail-item .detail-item-right{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.detail-item .detail-item-right img{
  width: 54px;
  height: 44px;
}

.detail-item-right .desc{
  line-height: 200%;
}
</style>