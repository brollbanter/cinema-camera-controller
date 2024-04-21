<template>
  <div class="flex flex-col space-y-2">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <div class="option-selector flex flex-row justify-center space-x-2">
      <div>
        <button v-on:click="decrement()" class="flex content-start text-2xl bg-green-700 py-2 px-6 rounded">&lt;</button>
      </div>
      <div v-on:click="openMenu">
        <div v-bind:class="{ hidden : menuOpen }" class="text-2xl">{{ store.value }}</div>
        <ul v-bind:class="{ invisible : !menuOpen }" class="border-l-2 border-r-2 border-t-2 border-gray-500">
          <li v-for="(option, index) in store.opts" :key="option" :value="index" v-on:click="selectOpt" v-bind:class="{ 'bg-yellow-600' : option === store.value }" class="text-xl border-b-2 border-gray-500 p-1">{{ option }}</li>
        </ul>
      </div>
      <div>
        <button v-on:click="increment()" class="flex content-start text-2xl bg-green-700 py-2 px-6 rounded">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Camera from '../lib/Camera'
import { bus } from '../main'

export default {
  name: 'OptionSelector',

  props: {
    title: String,
    store: Object,
  },

  data() {
    return {
      menuOpen: false,
    }
  },

  methods: {
    increment() {
      var index = this.store.opts.indexOf(this.store.value)
      index += 1
      index %= this.store.opts.length
      this.set_value(this.store.opts[index])
    },

    decrement() {
      var index = this.store.opts.indexOf(this.store.value)
      index -= 1
      if (index < 0) {
        index = this.store.opts.length - 1
      }
      this.set_value(this.store.opts[index])
    },

    selectOpt(e) {
      this.set_value(this.store.opts[e.target.value])
    },

    set_value(value) {
      Camera.ctrl_set(this.store.attribute, value, () => {
        Camera.ctrl_get(this.store.attribute, (response) => {
          this.store.value = response.value
          this.store.opts = response.opts
        })
      })
    },

    openMenu() {
      this.menuOpen = true
    },
  },

  created() {
    bus.$on('closeMenu', (event) => {
      var optionSelectors = this.$el.getElementsByClassName('option-selector')[0].children
      if (![...optionSelectors].some((elem) => elem.contains(event.target)) && this.menuOpen) {
        this.menuOpen = false
      }
    })
  },
}
</script>
