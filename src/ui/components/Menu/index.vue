<template>
    <div id="top-menu">
        <Logo/>
        <MenuItems/>
        <PhoneNumber/>
    </div>
</template>

<script>
  import Logo from './Logo.vue';
  import MenuItems from './MenuItems.vue';
  import PhoneNumber from './PhoneNumber.vue';

  export default {
    name: 'Menu',
    components: {
      Logo,
      MenuItems,
      PhoneNumber,
    },
  };
</script>

<style lang="sass">
    #top-menu
        display: flex
        justify-content: space-between
        margin: auto
        padding: 20px 45px
        border: 1px solid grey
</style>
