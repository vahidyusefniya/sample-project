

<template>
  <section className="container flex-1 flex flex-col p-4 justify-center items-center">
    <Wizard />
  </section>
</template>

<script>
import Wizard from '@/components/Wizard.vue';

export default {
  name: 'Home',
  components: {
    Wizard,
  },
}

</script>


