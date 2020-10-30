<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.back {
  width: 32px;
  height: 32px;
}
.btn-container {
  padding: 16px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
