<template>
    <div @click="change">{{msg}}</div>
</template>

<script>
    import './style.css'

    export default {
        data () {
            return { msg: 'Hello' }
        },
        methods: {
            change () {
                this.msg = 'Goodbye'
            }
        }
    }
</script>

<style scoped>
    div{
        font-weight: bold;
    }
</style>
