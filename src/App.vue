<template>
  <div id="app" v-on:click="closeMenu" class="h-screen bg-black text-white">
    <div v-if="this.$route.name != 'Home'" class="flex justify-end">
      <router-link to="/" class="py-1 px-4 bg-green-500">Back</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { bus } from './main'

export default {
  name: 'App',

  methods: {
    closeMenu(event) {
      bus.$emit('closeMenu', event)
    }
  },
}
</script>
