<template>
  <div>
    <p @click="loadData">这是子标签{{ msg }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class extends Vue {
    @Prop({ type: String, required: true })
    msg!: string

    @Emit('hello')
    loadData():number {
      return 100
    }
  }
</script>

<style scoped>

</style>