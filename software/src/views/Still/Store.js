import { defineStore } from 'pinia'

export const useStillStore = defineStore('still', {
  state: () => ({ count: 0 }),
})
