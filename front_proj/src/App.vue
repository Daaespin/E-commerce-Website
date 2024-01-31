<script setup>
import LandingPage from './components/ChampionsPage.vue';
</script>

<template>
  <div>
    <div class="container">
      <div class="navigation">
        MENU HOME INFORMATION CHAMPIONS GAMEMODES GALLERY
      </div>
      <div class="line-top"></div>
    </div>
    <LandingPage/>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.navigation {
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: initial;
  font-size: 21px;
  word-spacing: 40px;
  text-align: left;
  background-color: #000; /* Set the background color to black */
  padding-left: 24px; /* Add left padding to the text */
}

.line-top {
  height: 2px;
  background-color: #DFD046;
  z-index: 15;
}

</style>
