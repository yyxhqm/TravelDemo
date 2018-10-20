<!--定义组件的模板-->
<template>
<div>
 <home-header></home-header>
 <home-swiper></home-swiper>
 <home-icons></home-icons>
</div>
</template>

<!--整个模板的逻辑-->
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<!--整个模板的样式-->
<style>

</style>
