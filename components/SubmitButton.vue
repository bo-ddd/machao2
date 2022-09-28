<template>
    <button class="sub-btn">
        <slot></slot>
    </button>
</template>
<script>
export default{
    
}
</script>

<style scoped>
.sub-btn {
    width: 100%;
    background-color: #4289DC;
    color: white;
    border-radius: 4px;
    padding: 9px 14px;
    font-size: 14px;
    cursor: pointer;
}

.sub-btn:hover {
    background-color: #08c;
}
</style>