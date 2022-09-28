<template>
    <div class="tip-input">
        <input class="mb-8" :value="father" @input="changeValue" @focus="selected" @blur="checkForm" type="text"
            :placeholder='placeholder'>
        <div v-show="tipFlag" class="tip-error"><img :src="errorImg" alt="">{{tipText}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tipFlag: false
        }
    },
    props: ['errorImg', 'placeholder', 'tipText', '', 'father'],
    model: {
        prop: 'father',  // 绑定的props属性，这里是'nameFromFather'
        event: 'dataToFather'    // 触发父组件中v-model绑定的属性发生改变的方法，名称自取
    },
    computed: {
        borderColor() {
            return this.tipFlag ? 'red' : '#cad3de'
        }
    },
    methods: {
        checkForm() {
            console.log(4);
            if (this.father === '') {
                this.tipFlag = true;
            } else {
                this.tipFlag = false;

            }
        },
        changeValue(e) {
            console.log(1);
            this.$emit('dataToFather', e.target.value);
        },
        selected() {
            console.log(84);
            this.tipFlag = false;
        },
    }
}
</script>
<style scoped>
.mt-15 {
    margin-top: 15px;
}

.mb-8 {
    margin-bottom: 8px;
}

.tip-input input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid v-bind(borderColor);
    border-radius: 4px;
    font-size: 14px;
    padding: 10px 14px;
}

.tip-input img {
    width: 16px;
    height: 16px;
}

.tip-error {
    color: #db5858;
    font-size: 12px;
    display: flex;
    align-items: center;
}

.tip-error img {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
}

.tip-input input:focus {
    border: 1px solid #4289DC;
}



.tip-input input::placeholder {
    color: #cad3de;
}
</style>