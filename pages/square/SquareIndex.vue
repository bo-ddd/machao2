<template>
    <div>
        <div class="top">
            <!-- 用来占位 -->
        </div>
        <header class="header">
            <div class="container">
                <div class="container-title align-center">
                    <h1 class="title mr-10 c-ffffff">码市原型广场</h1>
                    <span class="text c-ffffff fs-14 mt-10">[码市x墨刀]</span>
                </div>
                <div class="input-search align-center">
                    <el-input v-model="input" placeholder="搜索素材" clearable class="input"></el-input>
                    <el-button class="borderr-0 button" type="primary">
                        <h3>搜 索</h3>
                    </el-button>
                </div>
            </div>
        </header>
        <main>
            <div class="main wrap mt-18">
                <div class=" list align-center">
                    <p class="title fs-14 mr-44">平台</p>
                    <ul class="list-text align-center ">
                        <li>
                            <span class="fs-14 text">全部</span>
                        </li>
                        <li>
                            <span class="fs-14 text">官网</span>
                        </li>
                        <li>
                            <span class="fs-14 text">后台</span>
                        </li>
                        <li>
                            <span class="fs-14 text">APP</span>
                        </li>
                        <li>
                            <span class="fs-14 text">小程序</span>
                        </li>
                    </ul>
                </div>
                <section class="section mt-40">
                    <template-box v-for="item in renderList" :key="item.id" :src='item.url' :title="item.title"
                        :views="item.views" :type-info="item.typeInfo">
                    </template-box>
                </section>
                <el-pagination class="pagination" background="#fff" layout="prev, pager, next" :current-page="1"
                    :page-size="pageSize" :total="list.length">
                </el-pagination>
            </div>

        </main>
    </div>
</template>

<script>

import TemplateBox from '@/components/TemplateBox';


export default {
    components: {
        TemplateBox
    },
    data() {
        return {
            input: '',
            list: [
                {
                    id: 1,
                    url: require('@/assets/images/template_1.png'),
                    title: '点餐小程序原型',
                    views: '1303',
                    typrInfo: '小程序'
                },
                {
                    id: 2,
                    url: require('@/assets/images/template_2.png'),
                    title: '电影演出票务原型',
                    views: '617',
                    typrInfo: 'APP'
                },
                {
                    id: 3,
                    url: require('@/assets/images/template_3.png'),
                    title: '租房原型',
                    views: '443',
                    typrInfo: 'APP'
                },
                {
                    id: 4,
                    url: require('@/assets/images/template_4.png'),
                    title: '二手车交易原型',
                    views: '341',
                    typrInfo: 'APP'
                },
                {
                    id: 5,
                    url: require('@/assets/images/template_4.png'),
                    title: '二手车交易原型',
                    views: '341',
                    typrInfo: 'APP'
                },
                {
                    id: 6,
                    url: require('@/assets/images/template_3.png'),
                    title: '租房原型',
                    views: '443',
                    typrInfo: 'APP'
                },
                {
                    id: 7,
                    url: require('@/assets/images/template_2.png'),
                    title: '电影演出票务原型',
                    views: '617',
                    typrInfo: 'APP'
                },
                {
                    id: 8,
                    url: require('@/assets/images/template_1.png'),
                    title: '点餐小程序原型',
                    views: '1303',
                    typrInfo: '小程序'
                },
                {
                    id: 9,
                    url: require('@/assets/images/template_1.png'),
                    title: '点餐小程序原型',
                    views: '1303',
                    typrInfo: '小程序'
                },
                {
                    id: 10,
                    url: require('@/assets/images/template_2.png'),
                    title: '电影演出票务原型',
                    views: '617',
                    typrInfo: 'APP'
                },
                {
                    id: 11,
                    url: require('@/assets/images/template_3.png'),
                    title: '租房原型',
                    views: '443',
                    typrInfo: 'APP'
                },
                {
                    id: 12,
                    url: require('@/assets/images/template_4.png'),
                    title: '二手车交易原型',
                    views: '341',
                    typrInfo: 'APP'
                },
                {
                    id: 13,
                    url: require('@/assets/images/template_4.png'),
                    title: '二手车交易原型',
                    views: '341',
                    typrInfo: 'APP'
                },
                {
                    id: 14,
                    url: require('@/assets/images/template_3.png'),
                    title: '租房原型',
                    views: '443',
                    typrInfo: 'APP'
                },
                {
                    id: 15,
                    url: require('@/assets/images/template_2.png'),
                    title: '电影演出票务原型',
                    views: '617',
                    typrInfo: 'APP'
                },
                {
                    id: 16,
                    url: require('@/assets/images/template_1.png'),
                    title: '点餐小程序原型',
                    views: '1303',
                    typrInfo: '小程序'
                },
                {
                    id: 17,
                    url: require('@/assets/images/template_1.png'),
                    title: '点餐小程序原型',
                    views: '1303',
                    typrInfo: '小程序'
                },
            ],
            pageSize: 12,
            renderList: []
        }
    },
    mounted() {
        this.renderList = this.list.slice(0, this.pageSize);
    },
    methods: {

    }

}

</script>

<style scoped>
.top {
    height: 64px;
}

.header {
    width: 100%;
    height: 320px;
    background: url("../../assets/images/banner.png");
    background-size: 100%;
}

.header .container {
    width: 683px;
    margin: 0 auto;
    padding-top: 164px;
}

.header .container-title {
    height: 60px;
}

.header .container-title .text {
    background-color: #fb3867;
    display: inline-block;
    padding: 4px 16px;
    border-radius: 3px;
}

.header .container .input-search {
    width: 100%;
    height: 48px;
}

.header .container :deep(.el-input__inner) {
    border-radius: 0;
    height: 100%;
}

.header .container .input,
.button {
    height: 100%;
}

.header .container .button {
    padding: 14px 25px;
}

.main .list {
    padding: 32px 0;
    margin: 0 20px;
    border-bottom: 1px solid #cccccc;
}

.main .list-text {
    justify-content: left;
}

.main .list-text .text {
    --h: 32px;
    display: inline-block;
    width: 48px;
    height: var(--h);
    line-height: var(--h);
}

.main .section {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 32px;
    padding-bottom: 40px;
}

.pagination {
    text-align: center;
}
</style>
