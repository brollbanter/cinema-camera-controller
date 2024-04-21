<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
</script>

<template>
  <div id="app" v-on:click="closeMenu" class="h-screen bg-black text-white">
    <div v-if="routeName() != 'Home'" class="flex justify-end">
      <RouterLink to="/" class="text-2xl py-4 px-8 bg-green-700">Back</RouterLink>
    </div>
    <RouterView/>
  </div>
</template>

<script lang="ts">
//import { bus } from './main'
export default {
  name: 'App',

  methods: {
    closeMenu(event) {
      //bus.$emit('closeMenu', event)
    },

    routeName() {
      return useRoute().name
    }
  },
}
</script>
