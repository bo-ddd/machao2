<template>
     <div class="foot foot-flex tip-text">
            <div class="logo plr-8"><img class="logo-img img-s-21"
                    src="https://assets.codemart.com/scripts/97b8f071e76549f45dfbe527295955ba.png" alt=""></div>
            <div class="foot-text plr-8">
                Copyright © 2014-2022 深圳市英选码市科技有限公司 版权所有 备案号：<a class="link-style"
                    href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">粤ICP备18032316号-1</a>
            </div>
        </div>
</template>
<style scoped>

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

.link-style {
    color: #4289dc;
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