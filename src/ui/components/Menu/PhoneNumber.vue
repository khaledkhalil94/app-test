<template>
    <div class="phone-number">
        {{phoneNumber}}
    </div>
</template>

<script>
  import {getPhoneNumber} from '../../../adapters/http/actions';

  export default {
    name: 'PhoneNumber',
    data: function () {
      return {
        phoneNumber: null
      };
    },
    created: function () {
      getPhoneNumber().then(phoneNumber => this.phoneNumber = phoneNumber);
    }
  };
</script>

<style scoped lang="sass">
    .phone-number
        font-weight: bold
        font-size: 20px
</style>
