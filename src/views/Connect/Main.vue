<template>
  <div>
    <h1>Connecting to Camera</h1>
    {{ fromServer }}
  </div>
</template>

<script>
export default {
  name: 'Connect',

  data() {
    return {
      fromServer: '-'
    }
  },
}
</script>
