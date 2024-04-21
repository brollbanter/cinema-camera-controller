<template>
  <div class="home">
    <main_screen />
  </div>
</template>

<script>
// @ is an alias to /src

import Main from './Main.vue'

export default {
  name: 'Home',
  components: {
    main_screen: Main,
  },
}
</script>
