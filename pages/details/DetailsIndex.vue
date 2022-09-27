<template>
    <div class="details">
        <div class="wrap">
            <header>
                <div class="header-title_box">
                    <span class="header-title">点餐小程序原型</span>
                    <div class="header-icon">
                        <img src="@/assets/image/eye.png" alt=""> <span>1130</span>
                        <img class="ml-10" src="@/assets/image/info_fill.png" alt=""> <span>App</span>
                    </div>
                </div>
                <div class="header-nav">
                    <div class="nav-go_btn">前往墨刀体验</div>
                    <div class="back-list_btn black-font">返回列表</div>
                </div>
            </header>


            <main>
               <img src="@/assets/image/sj.png" alt="">
            </main>

            <div class="desc-box">
                <div class="desc-title">
                   <img src="@/assets/image/eat.png" alt=""> 小程序
                </div>
                <div class="desc-content">
                    当代的我们,不是在吃外卖,就是在点外卖的路上。外卖点餐也从APP 发展到了更轻便的小程序上了～
                    本素材就展示了一个经典点餐小程序的样式设计，具体包含点餐小程序的店铺选择、店铺详情、点餐、结账等核心页面模块，基本覆盖了点餐小程序的完整流程页面。
                    设计保证了页面间配色的统一以及页面布局的简约性，还使用了微信小程序的基础组件。我是后加的
                </div>
            </div>
        </div>

        <footer>
            <div class="footer-content">
                <h3>码市</h3>
            <span class="font-color_bbb">Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号: 粤ICP备18032316号-1</span> 
            </div>
        </footer>
    </div>

</template>


<style scoped>
.font-color_bbb{
    color: #adadad;
}

main img{
  height: 60%;
  padding: 10px;
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
}

.desc-content{
    height: 160px;
    padding: 30px 0;
}

.desc-title img{
 width: 20px;
 height: 20px;
}

footer {
    color: #ffff;
    height: 60px;
    background: rgb(49, 51, 73);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:100px;
}

.footer-content{
   width: 70%;
   display: flex;
   align-items: center;
   gap: 0 20px;
}

.desc-title {
    display: flex;
    align-items: center;
    gap: 0 8px;
}

.desc-box {
    margin-top: 40px;
    font-size: 14px;
    border-bottom: 1px solid #e7e4e4;
}

main {
    background: #e8e8e8;
    width: 100%;
    height: 700px;
    margin-top: 20px;
}

.wrap {
    padding: 0 20px;
    width: 75%;
    margin: 40px auto;
    min-width: 1100px;
}

.ml-10 {
    margin-left: 10px;
}

.header-title {
    font-size: 24px;
}

.header-icon {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 0 5px;
}

header {
    font-size: 12px;
    height: 98px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.header-title_box {
    border-bottom: 1px solid #bbbaba;
    height: 78px;
    width: 75%;
}

.header-nav{
    font-size: 16px;
    color: #ffff;
    display: flex;
    gap: 0 10px;
    align-items: flex-end;
    justify-content: right;
}

.nav-go_btn {
    padding: 10px 16px;
    background: rgb(106, 106, 210);
    height: 20px;
    border-radius: 3px;
}

.back-list_btn {
    padding: 10px 16px;
    background: rgb(238, 238, 238);
    height: 20px;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    color: black;
}

header img {
    width: 18px;
    height: 18px;
}
</style>