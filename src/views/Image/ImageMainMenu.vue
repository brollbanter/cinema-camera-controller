<template>
  <router-link to="/modify_image">
    <div class="flex flex-col space-y-2 text-center">
      <h3>Image</h3>
      <div>{{image.image.value}}</div>
    </div>
  </router-link>
</template>

<script>
import ImageStore from './Store'

export default {
  name: 'ImageMainMenu',

  data() {
    return {
      image: ImageStore.state,
    }
  },
}
</script>
