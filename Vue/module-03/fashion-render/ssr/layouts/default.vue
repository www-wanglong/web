<template>
  <div>
    <ul>
      <li>
        <!-- 类似于router-link 用于单页面应用导航 -->
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
    <!-- 子页面出口 -->
    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>