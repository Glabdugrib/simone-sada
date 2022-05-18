<template>
   <div id="app">

      <!-- i18n tests -->
      <p>{{ $t('message') }}</p>
      <p>{{ $t('nav.features') }}</p>

      <!-- Router tests -->
      <router-view></router-view>

      <!-- Router link sample -->
      <router-link :to="`/${$i18n.locale}`">Home</router-link>
      <router-link :to="`/${$i18n.locale}/foo`">Foo</router-link>
   </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   //  HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_variables.scss';
@import './assets/scss/_mixins.scss';
@import './assets/scss/style.scss';

</style>
