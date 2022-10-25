<template>
    <div>
        <HeaderCom class="header-com" :background="'#fff'" fontColor="#000" :logo="require('~/assets/image/logo1.png')">
        </HeaderCom>

        <div class="square-wrap">
            <img class="banner" src="~/assets/image/banner-square.png" alt="">
        </div>

        <main  class="main square-wrap" >
            <el-tabs class="mt-20" v-model="activeName" @tab-click="handleClick($event)">
                <el-tab-pane  v-for="item,index in list" :key="index" :label="item.title" :name="item.name">
                    <div class="template">
                        <template-box  v-for="child in arr" :key="child.id" :src="child.url" :views="child.views" :title="child.title" :typeInfo="child.typeInfo"></template-box>
                        <h1 v-show="item.childern.length == 0?true:false">该模块正在努力开发中...</h1>
                    </div>
                    <el-pagination v-show="item.childern.length == 0?false:true" class="flex-ja-center mt-40" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage"  :page-size="pageSize"
                        layout="  prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </main>
        <footer class="footer mt-45">
            <FootInfo></FootInfo>
        </footer>
    </div>
</template>

<script>
import TemplateBox from '~/components/TemplateBox.vue'

export default {

    data() {
        return {
            activeName:'1',
            // succes: "1",
            currentPage:1,
            pageSize:6,
            renderList:[],
            arr:[],
            start:0,
            total:0,
            list: [{
                id: 1,
                title: '全部',
                name: "1",
                childern: [
                    {
                        id: 1,
                        url: require('@/assets/image/officialwebsite-1.png'),
                        title: 'B端设计',
                        views: '1303',
                        typeInfo: '官网'
                    },
                    {
                        id: 2,
                        url: require('@/assets/image/officialwebsite-2.png'),
                        title: 'B端产品官网',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 3,
                        url: require('@/assets/image/officialwebsite-3.png'),
                        title: '官网模型',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 4,
                        url: require('@/assets/image/officialwebsite-4.png'),
                        title: 'WEB B端',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 5,
                        url: require('@/assets/image/officialwebsite-5.png'),
                        title: 'B端官网',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 6,
                        url: require('@/assets/image/officialwebsite-6.png'),
                        title: 'WEB 企业官网',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 7,
                        url: require('@/assets/image/officialwebsite-7.png'),
                        title: '移动端',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 8,
                        url: require('@/assets/image/officialwebsite-8.png'),
                        title: 'B端官网',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 2,
                title: '官网',
                name: "2",
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
                id: 3,
                title: '后台',
                name: "3",
                childern: []
            },
            {
                id: 4,
                title: 'APP',
                name: "4",
                childern: []
            },
            {
                id: 5,
                title: '小程序',
                name: "5",
                childern: []
            }],
        }
    },

    components:{
        TemplateBox,
    },

    created(){
        this.arr = this.list[0].childern.slice(0,this.pageSize);
    },

    mounted(){
        console.log(this.renderList)
        this.total = this.list[0].childern.length
    },


    methods: {

        handleSizeChange(val) {
            this.pageSize = val;
        },

        handleCurrentChange(val) {
            this.currentPage = val;
            this.getRendList();
        },

        handleClick(event) {
            this.currentPage = 1;
            const index= Number(event.index);
            this.renderList = this.list[index].childern;
            this.arr = this.renderList.slice(this.getStart,(this.currentPage * this.pageSize));
            console.log(this.arr);
      },
         
        getRendList(){
            this.arr = this.renderList.slice(this.getStart,(this.currentPage * this.pageSize));
        }

    },

    computed:{
        getStart(){
            return (this.currentPage-1) * this.pageSize;
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

.main .pagination {
    text-align: center;
}

.main .template {
    display: flex;
    flex-wrap: wrap;
    gap: 54px;
    min-height: 440px;
}
.banner{
    width: 100%;
    height: 200px;
}
</style>
          