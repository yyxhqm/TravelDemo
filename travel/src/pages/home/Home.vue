<!--定义组件的模板-->
<template>
<div>
 <home-header></home-header>
 <home-swiper></home-swiper>
 <home-icons></home-icons>
 <home-recommend></home-recommend>
 <home-weekend></home-weekend>
</div>
</template>

<!--整个模板的逻辑-->
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<!--整个模板的样式-->
<style>

</style>
