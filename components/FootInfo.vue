<template>
     <div class="foot tip-text">

        <!-- <div class="foot-wrap">
            <div class="logo plr-8">
                
                <img v-if="theme=='white'" class="logo-img img-s-21 mr-15"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt="">
                <img v-if="theme=='black'" class="logo-img img-s-21  mr-15"
                    src="https://assets.codemart.com/scripts/f21795dd88a706f18e1a63a91f15a54d.png" alt="">
                    
            </div>
            <div class="foot-text plr-8">
                Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号：<a :class="'link-'+theme"
                    href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">粤ICP备18032316号-1</a>
            </div>
        </div> -->

            
        </div>
</template>
<script>
    export default{
        props:{
            theme:{
                type:String,
                default:'black'
            }
        },
        data(){
            return {
                backColor:'',
                directionRes:''
            }
        },
        mounted(){
            switch(this.theme){
                case 'white':
                    this.backColor='white';
                    this.directionRes='center';
                    break
                case 'black':
                    this.backColor='#1f2d3d';
                    this.directionRes='flex-start';
                    break

            }
        }
    }
</script>
<style scoped>

.foot {
    width: 100%;

    padding: 17.5px 0;
    background-color: v-bind(backColor);
}
.foot-wrap{
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: v-bind(directionRes);
}
.foot-wrap img{
    display: block;
}
.foot-text {
    text-align: center;
}
.tip-text {
    color: #727F8F;
    font-size: 14px;
}

.img-s-21 {
    height: 21px;
}

.img-s-28 {
    height: 28px;
}

.link-white {
    color: #4289dc;
}
.link-black{
    color: #727F8F;
}
.link-black:hover {
    color: #4289dc;
}

@media screen and (max-width: 500px) {

.foot-text {
    text-align: center;
    font-size: 12px;
}
}

@media screen and (max-width: 680px) {
.foot-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

}

</style>