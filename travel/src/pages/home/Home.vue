<!--定义组件的模板-->
<template>
<div>
 <home-header></home-header>
</div>
</template>

<!--整个模板的逻辑-->
<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<!--整个模板的样式-->
<style>

</style>
