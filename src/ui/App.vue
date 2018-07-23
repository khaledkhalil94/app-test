<template>
    <div>
        <Menu/>
        <Body/>
        <Calendar/>
    </div>
</template>

<script>
  import Menu from './components/Menu/index.vue';
  import Body from './components/Body/index.vue';
  import Calendar from './components/Calendar/index.vue';

  export default {
    name: 'app',
    components: {
      Menu,
      Body,
      Calendar,
    }
  };
</script>

<style>
</style>
