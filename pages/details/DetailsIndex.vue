<template>
    <div class="details">
        <div class="wrap">
            <header>
                <div class="header-title_box">
                    <span class="header-title">宣传广告</span>
                    <div class="header-icon">
                        <img src="@/assets/image/eye.png" alt=""> <span>1130</span>
                        <img class="ml-10" src="@/assets/image/info_fill.png" alt=""> <span>官网</span>
                    </div>
                </div>
                <div class="header-nav">
                    <div class="nav-go_btn">详情展示</div>
                    <div class="back-list_btn black-font">返回列表</div>
                </div>
            </header>


            <main>
               <div class="main-left_box"></div>
               <div class=""><img class="main-middle_icon" src="@/assets/image/officialwebsite-8_centent.png" alt=""></div>

               <div class="main-right_box">
                <div class="zoom">
                   <div class="zoom-left"><img src="@/assets/image/full-screen.png" alt=""></div>
                   <div class="zoom-right">
                    <img src="@/assets/image/low.png" alt="">
                    <input type="text" value="80%">
                    <img src="@/assets/image/add.png" alt="">
                   </div> 
                </div>
               </div>

            </main>

            <div class="desc-box">
                <div class="desc-title">
                   <img src="@/assets/image/eat.png" alt=""> 官网
                </div>
                <div class="desc-content">
                    一个企业的官网往往代表这个企业向公众所要传递的核心信息，更能直接与目标受众产生交流，最终完成一次关键信息售卖。
                </div>
            </div>
        </div>

        <!-- <footer>
            <div class="footer-content">
                <h3></h3>
            <span class="font-color_bbb"></span> 
            </div>
        </footer> -->
    </div>

</template>


<style scoped>
.main-left_box{
    width:140px;
}


.main-right_box{
    height: 100%;
    display: flex;
    align-items: flex-end;
}

.zoom img {
    width: 18px;
    height: 100%;
}

.zoom{
    background: white;
    margin: 15px;
    display: flex;
    align-items: center;
    
    justify-content: center;
    padding: 8px 0;
    border-radius: 5px;
}

.zoom-left{
    border-right: 1px solid rgb(229, 229, 229);
    padding:0 10px;
    display: flex;
    align-items: center;
}

.zoom-right{
    padding:0 15px;
    display: flex;
    align-items: center;
}

.zoom-right input{
    width: 50px;
    text-indent:13px;
    font-size: 12px;
}
    
.font-color_bbb{
    color: #adadad;
}

.main-middle_icon{
  height: 600px;
}

main{
    display: flex;
    justify-content: space-between;
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
    background: #2c2d34;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:100px;
}

.footer-content{
   width: 75%;
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