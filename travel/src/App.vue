<template>
  <div id="app">
    <!--显示当前路由地址所对应的地址-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
