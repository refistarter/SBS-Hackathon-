<template>
    <div class="position-relative">
        <!-- <CommonHeader ></CommonHeader> -->
        <Header class="sticky-top" />
        <slot />
        <Footer />
        <!-- <CommonFooter></CommonFooter> -->
    </div>
</template>

<script>
export default ({
    data() {
        return {}
    },
})
</script>

<style lang="scss">
.swiper-pagination-bullet {
    -webkit-transform: skew(-10deg);
    -moz-transform: skew(-10deg);
    -ms-transform: skew(-10deg);
    -o-transform: skew(-10deg);
    transform: skew(-10deg);
    width: 15px;
    height: 15px;
    border-radius: 2px;
    background-color: #28DBD1;
}
</style>