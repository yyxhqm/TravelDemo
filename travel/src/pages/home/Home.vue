<!--定义组件的模板-->
<template>
<div>
 <home-header></home-header>
 <home-swiper></home-swiper>
</div>
</template>

<!--整个模板的逻辑-->
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<!--整个模板的样式-->
<style>

</style>
