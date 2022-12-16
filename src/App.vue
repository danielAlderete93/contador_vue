<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter
      title="Entraron"
      :start=10
  />

</template>

<script>
import Counter from "@/components/Counter";


export default {
  name: 'App',
  components: {
    Counter,
  }
}
</script>

<style>

</style>
