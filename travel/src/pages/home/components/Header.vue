<!--定义组件的模板-->
<template>
<div class="header">
 <div class="header-left">
   <div class="iconfont back-icon">&#xe624;</div>
 </div>
 <div class="header-input">
   <span class="iconfont">&#xe632;</span>
     输入城市/景点/游玩主题</div>
 <div class="header-right arrow-iocn">城市
   <span class="iconfont">&#xe6aa;</span>
 </div>
</div>
</template>

<!--整个模板的逻辑-->
<script>
export default {
  name: 'HomeHeader'
}
</script>

<!--整个模板的样式-->
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-iocn{
        margin-left: -0.4rem
      }
</style>
