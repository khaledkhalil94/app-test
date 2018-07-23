<template>
    <div class="body-content">
        <img src="../../../assets/background.jpeg" alt="background-image" style="width:100%;">
        <div class="body-text">POOL & BEACH ACCESS</div>
    </div>
</template>

<script>

  export default {
    name: 'index',
    components: {},
  };
</script>

<style scoped>
    .body-content {
        position: relative;
        color: white;
        font-weight: bold;
    }
    .body-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
    }
</style>
