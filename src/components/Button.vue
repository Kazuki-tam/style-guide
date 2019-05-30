<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button {
  font-size: 1rem;
  padding: 0.3em 1em;
  color: #42b983;
  border: solid 2px #42b983;
  border-radius: 5px;
  transition: .3s;
}
.button:hover {
  background: #42b983;
  color: white;
}
</style>