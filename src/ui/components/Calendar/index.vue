<template>
    <div id="calendar">
        <div v-for="item in data">
            <Item :item="item"/>
        </div>
    </div>
</template>

<script>
  import Item from './Item.vue';
  import {getSessionsData} from '../../../adapters/http/actions';

  export default {
    name: 'Calendar',
    components: {
      Item,
    },
    data: function () {
      return {
        data: []
      };
    },
    created: function () {
      getSessionsData().then(data => this.data = data);
    }
  };
</script>

<style lang="sass">
    #calendar
        background-color: black
        display: flex
        justify-content: center
        .card-title
            color: white
</style>
