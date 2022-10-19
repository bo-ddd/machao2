<template>
    <div>
        <HeaderCom class="header-com" :background="'#fff'" fontColor="#000" :logo="require('~/assets/image/logo1.png')">
        </HeaderCom>
        <!-- <header class="header">
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
        </header> -->
        <main>
            <div class="main square-wrap mt-18">
                <div class=" list align-center">
                    <p class="title fs-14 mr-44">平台</p>
                    <TabsList activeName="all"  :dataList="list" @list="getList"></TabsList>
                </div>
                <section class="section mt-40" v-if=" renderList.length != 0 ">
                    <template-box  v-for="item in renderList" :key="item.id" :src='item.url' :title="item.title"
                        :views="item.views" :type-info="item.typeInfo">
                    </template-box>
                </section>
                <section class="section mt-40" v-else>
                    <h1>该模块正在努力开发中...</h1>
                </section>
                <div v-show = "renderList.length != 0">
                    <el-pagination  class="pagination" background layout="prev, pager, next" :current-page="page"
                        :page-size="pageSize" :total="pagination.length" @current-change="currentChange">
                    </el-pagination>
                </div>
            </div>
        </main>
        <footer class="footer mt-45">
            <FootInfo></FootInfo>
        </footer>
    </div>
</template>

<script>

import TemplateBox from '@/components/TemplateBox';
import FootInfo from "@/components/FootInfo.vue";
import HeaderCom from "@/components/HeaderCom";
import TabsList from "@/components/TabsList.vue";

export default {
    components: {
        TemplateBox,
        FootInfo,
        HeaderCom,
        TabsList,
        
    },
    data() {
        return {
            input: '',
            list: [{
                id: 1,
                title: '全部',
                active: true,
                childern: [
                    {
                        id: 1,
                        url: require('@/assets/image/officialwebsite-1.png'),
                        title: '1',
                        views: '1303',
                        typeInfo: '官网'
                    },
                    {
                        id: 2,
                        url: require('@/assets/image/officialwebsite-2.png'),
                        title: '2',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 3,
                        url: require('@/assets/image/officialwebsite-3.png'),
                        title: '3',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 4,
                        url: require('@/assets/image/officialwebsite-4.png'),
                        title: '4',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 5,
                        url: require('@/assets/image/officialwebsite-5.png'),
                        title: '5',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 6,
                        url: require('@/assets/image/officialwebsite-6.png'),
                        title: '6',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 7,
                        url: require('@/assets/image/officialwebsite-7.png'),
                        title: '7',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 8,
                        url: require('@/assets/image/officialwebsite-8.png'),
                        title: '8',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 2,
                title: '官网',
                active: false,
                childern: []
            },
            {
                id: 3,
                title: '后台',
                active: false,
                childern: []
            },
            {
                id: 4,
                title: 'APP',
                active: false,
                childern: []
            },
            {
                id: 5,
                title: '小程序',
                active: false,
                childern: []
            }],
            pageSize: 6,
            renderList: [],
            page:1,
            pagination:[],
        }
    },
    created() {
        this.pagination = this.list[0].childern;
        // console.log(this.renderList.length)
    },
    mounted() {
        this.getRenderList(0,this.pageSize);
    },
    methods: {
        getList(val) {
            this.renderList = val;
        },
        currentChange(currentChange){
            console.log(currentChange);
            this.getRenderList(this.pageSize*(currentChange-1),this.pageSize*currentChange);
        },
        getRenderList(start,end){
            this.renderList = this.pagination.slice(start, end);
        }
    }

}

</script>

<style scoped>
.header-com {
    padding: 12px 22px;
}

.header {
    width: 100%;
    height: 320px;
    background: url("../../assets/image/banner.png");
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


.main .section {
    min-height: 370px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 32px;
    padding-bottom: 40px;
}

.main .pagination {
    text-align: center;
}
/* 
.footer {
    height: 56px;
} */
</style>
