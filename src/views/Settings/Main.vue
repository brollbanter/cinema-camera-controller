<template>
  <div>
    <div class="grid grid-cols-2 justify-items-center pt-16 p-2">
      <div v-on:click="verifyExit()" class="w-40 bg-gray-800 p-4 rounded">
        <div class="flex flex-col space-y-2 text-center">
          <h2 class="font-bold text-xl">Exit</h2>
        </div>
      </div>
      <router-link to="/connect" class="w-40 bg-gray-800 p-4 rounded">
        <div class="flex flex-col space-y-2 text-center">
          <h2 class="font-bold text-xl">Connect Camera</h2>
        </div>
      </router-link>
    </div>
  </div>

  <div v-show="showModal" class="p-4 w-full min-h-full fixed top-0 left-0">
    <div class="m-24 bg-gray-600 p-16 rounded text-center">
      <h2 class="font-bold text-4xl mb-16">Exit UI?</h2>
      <div class="grid grid-cols-2 justify-items-center">
        <div v-on:click="exitUI()" class="w-40 bg-gray-800 p-4 rounded">
          <div class="flex flex-col space-y-2 text-center">
            <h2 class="font-bold text-xl">OK</h2>
          </div>
        </div>
        <div v-on:click="hideModal()" class="w-40 bg-gray-800 p-4 rounded">
          <div class="flex flex-col space-y-2 text-center">
            <h2 class="font-bold text-xl">Cancel</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    verifyExit() {
      this.showModal = true
    },

    hideModal() {
      this.showModal = false
    },

    exitUI() {
      axios.get('/api/exit_ui')
    },
  },
};
</script>
