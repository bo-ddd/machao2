<template>
    <div>
        <ul class="list align-center">
            <li v-for="item in dataList" :key="item.id" :class="item.active==true?'active':''"
                @click="activeParams(item.childern);active(item)">
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
            default: 'all',
        },
        dataList:{
            type: Array,
            default: ()=>([])
        }
    },
    data() {
        return {
            list: [],
        }
    },
    created(){
        this.list = this.lisdataListt;
    },
    methods: {
        activeParams(params) {
            //    params=='全部'? '':''
            console.log(params);
            this.$emit('list', params);
        },
        active(el) {
            this.dataList.forEach(item => { item.active = false });
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