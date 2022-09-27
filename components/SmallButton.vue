<template>
    <button class="small-btn">
        <slot></slot>
    </button>
</template>
<style scoped>
.small-btn {
    border: 1px solid #4289dc;
    color: #4289dc;
    font-size: 12px;
    background-color: white;
    padding: 6.2px 21px;
    border-radius: 5px;
}

.small-btn:hover {
    color: white;
    background-color: #4289dc;
}
</style>