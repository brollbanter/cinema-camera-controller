<template>
  <div class="flex flex-col space-y-2">
      <div>
        <button v-on:click="decrement()" class="text-2xl bg-green-700 py-2 px-6 rounded">&#x25B3;</button>
      </div>
    <h2 class="text-3xl font-bold">{{ title }}</h2>
      <div class="text-2xl">{{ store.value }}</div>
      <div>
        <button v-on:click="increment()" class="text-2xl bg-green-700 py-2 px-6 rounded">&#x25BD;</button>
      </div>
  </div>
</template>

<script>
import Camera from '../lib/Camera'

export default {
  name: 'VerticalOptSelect',

  props: {
    title: String,
    store: Object,
  },

  methods: {
    increment() {
      var index = this.store.opts.indexOf(this.store.value)
      index += 1
      if (index === this.store.opts.length) {
        index = this.store.opts.length - 1
      }
      this.set_value(this.store.opts[index])
    },

    decrement() {
      var index = this.store.opts.indexOf(this.store.value)
      index -= 1
      if (index < 0) {
        index = 0
      }
      this.set_value(this.store.opts[index])
    },

    set_value(value) {
      Camera.ctrl_set(this.store.attribute, value, () => {
        Camera.ctrl_get(this.store.attribute, (response) => {
          this.store.value = response.value
          this.store.opts = response.opts
        })
      })
    },
  },
}
</script>
