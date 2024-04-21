<template>
  <div class="flex flex-col space-y-2">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <div class="option-selector flex flex-row justify-center space-x-2">
      <div>
        <button v-on:click="decrement()" class="flex content-start text-2xl bg-green-700 py-2 px-6 rounded">&#x25C1;</button>
      </div>
      <div v-on:click="openMenu">
        <div v-bind:class="{ hidden : menuOpen }" class="text-xl">{{ store.value }}</div>
        <div class="flex flex-row">
          <ul v-for="option_col in optionCols()" :key="option_col.index" v-bind:class="{ invisible : !menuOpen, 'border-l-2' : option_col.index === 0 }" class="w-24 min-w-max border-r-2 border-t-2 border-gray-500">
            <li v-for="option in option_col.options" :key="option.index" :value="option.index" v-on:click="selectOpt" v-bind:class="{ 'bg-yellow-600' : option.option === store.value }" class="text-xl border-b-2 border-gray-500 p-1">{{ option.option }}</li>
          </ul>
        </div>
      </div>
      <div>
        <button v-on:click="increment()" class="flex content-start text-2xl bg-green-700 py-2 px-6 rounded">&#x25B7;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Camera from '../lib/Camera'
//import { bus } from '../main'

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

    optionCols() {
      var options = this.store.opts
      var cols = Math.ceil(options.length / 9)
      var rows = Math.ceil(options.length / cols)
      var result = [...Array(cols).keys()].map(idx => {
        return {
          index: idx,
          options: options.slice(idx * rows, (idx + 1) * rows).map((option, index) => {
            return { option: option, index: (idx * rows) + index }
          })
        }
      })
      return result
    },

    firstCol(idx) {
      return idx === 0
    },
  },

  created() {
    /*
    bus.$on('closeMenu', (event) => {
      var optionSelectors = this.$el.getElementsByClassName('option-selector')[0].children
      if (![...optionSelectors].some((elem) => elem.contains(event.target)) && this.menuOpen) {
        this.menuOpen = false
      }
    })
    */
  },
}
</script>
