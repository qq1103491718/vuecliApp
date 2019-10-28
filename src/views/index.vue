<template>
  <div>
      主体内容
      <router-view/>
	  <navCpm></navCpm>
  </div>
</template>

<script>
import navCpm from '../components/nav.vue'
export default {
components:{
	navCpm
}
}
</script>

<style>

</style>