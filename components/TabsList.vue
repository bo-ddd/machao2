<template>
    <div>
        <ul class="list align-center">
            <li v-for="item in list" :key="item.id" :class="item.active==true?'active':''"
                @click="activeParams(item.childer);active(item)">

                <p class="fs-14 item">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        activeName: {
            type: String,
            default: 'all'
        }
    },
    data() {
        return {
            list: [{
                id: 1,
                title: '全部',
                active: true,
                childer: [
                    {
                        id: 1,
                        url: require('@/assets/image/officialwebsite-1.png'),
                        title: '点餐小程序原型',
                        views: '1303',
                        typeInfo: '官网'
                    },
                    {
                        id: 2,
                        url: require('@/assets/image/officialwebsite-2.png'),
                        title: '电影演出票务原型',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 3,
                        url: require('@/assets/image/officialwebsite-3.png'),
                        title: '租房原型',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 4,
                        url: require('@/assets/image/officialwebsite-4.png'),
                        title: '二手车交易原型',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 5,
                        url: require('@/assets/image/officialwebsite-5.png'),
                        title: '二手车交易原型',
                        views: '341',
                        typeInfo: '官网'
                    },
                    {
                        id: 6,
                        url: require('@/assets/image/officialwebsite-6.png'),
                        title: '租房原型',
                        views: '443',
                        typeInfo: '官网'
                    },
                    {
                        id: 7,
                        url: require('@/assets/image/officialwebsite-7.png'),
                        title: '电影演出票务原型',
                        views: '617',
                        typeInfo: '官网'
                    },
                    {
                        id: 8,
                        url: require('@/assets/image/officialwebsite-8.png'),
                        title: '点餐小程序原型',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 2,
                title: '官网',
                active: false,
                childer: [
                    {
                        id: 21,
                        url: require('@/assets/image/template_1.png'),
                        title: '官网',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 3,
                title: '后台',
                active: false,
                childer: [
                    {
                        id: 21,
                        url: require('@/assets/image/template_1.png'),
                        title: '后台',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 4,
                title: 'APP',
                active: false,
                childer: [
                    {
                        id: 21,
                        url: require('@/assets/image/template_1.png'),
                        title: 'APP',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            },
            {
                id: 5,
                title: '小程序',
                active: false,
                childer: [
                    {
                        id: 21,
                        url: require('@/assets/image/template_1.png'),
                        title: '小程序',
                        views: '1303',
                        typeInfo: '官网'
                    },
                ]
            }],
        }
    },

    methods: {
        activeParams(params) {
            //    params=='全部'? '':''
            // console.log(params);
            this.$emit('list', params);
        },
        active(el) {
            // console.log(e.target);
            // e.target.classList.add('active');
            this.list.forEach(item => { item.active = false });
            console.log(this.list)
            el.active = true;
            // this.$set(this.list,)
        }
    }
}
</script>

<style scoped>
.list {
    justify-content: left;
}

.item {
    --h: 32px;
    display: inline-block;
    width: 48px;
    height: var(--h);
    line-height: var(--h);
    text-align: center;
}

.item:hover {
    color: #2aa6ee;
}

.active {
    background-color: #7fc8f31a;
    color: #2aa6ee;
}
</style>