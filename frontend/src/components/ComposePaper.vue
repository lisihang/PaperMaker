<template>
  <div>
    <h2>
      组合试卷
    </h2>
    <pre align="left" overflow="auto">
      {{paper}}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ComposePaper',
  computed: {
    paper () {
      return this.$store.state.paper
    }
  }
}
</script>

<style scoped>

</style>
