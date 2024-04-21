<template>
  <div id="app" class="h-screen bg-black text-white">
    <div v-if="this.$route.name != 'Home'" class="flex justify-end">
      <router-link to="/" class="py-1 px-4 bg-green-500">Back</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    console.log(this.$route)
  },
}
</script>
