<template>
    <div id="menu-logo">
        <img :src="logoUrl"/>
    </div>
</template>

<script>
  import {getLogo} from '../../../adapters/http/actions';

  export default {
    name: 'Logo',
    data: function () {
      return {
        logoUrl: null
      };
    },
    created: function () {
      getLogo().then(logoUrl => this.logoUrl = logoUrl);
    }
  };
</script>

<style lang="sass">
    #menu-logo img
        position: absolute
        z-index: 5
        border: 1px solid black
        padding: 5px
        background-color: white
        width: 200px
        top: 0
</style>
