<template>
    <div id="finished">
        <input type="text" id="search" placeholder="输入代办事项" @keyup.enter="add" v-model="msg">
    </div>
</template>

<script>
export default {
    name:'finished'
}
</script>

<style scoped>

</style>