<template>
    <header class="sticky_header">
        <div class="sticky_header_logo">
            <img class="sticky_header_logo_name" src="../../public/img/fitfactory로고글씨.png"/>
            <img class="sticky_header_logo_icon" src="../../public/img/iconfinder_gym_512534.svg" height="64" width="64"/>
        </div>
    </header>
</template>

<script>
    export default {
        name: "StickyHeader"
    }
</script>

<style scoped>
    .sticky_header_logo_name{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .sticky_header_logo_icon{
        margin-left: 5px;
    }

</style>
