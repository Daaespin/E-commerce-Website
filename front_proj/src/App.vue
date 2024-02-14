<template>
  <div>
    <div class="container">
      <div class="navigation">
        <span class="menu-item" @click="goTo('/')">HOME</span>
        <span class="menu-item" @click="goTo('/information')">INFORMATION</span>
        <span class="menu-item" @click="goTo('/champions')">CHAMPIONS</span>
        <span class="menu-item" @click="goTo('/gamemodes')">GAMEMODES</span>
        <span class="menu-item" @click="goTo('/gallery')">GALLERY</span>
      </div>
      <div class="line-top"></div>
    </div>


    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px; /* Ensure the container covers the entire viewport height */
  z-index: 10;
}

.navigation {
  display: flex;
  align-items: center;
  height: 64px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 21px;
  background-color: #000;
  padding-left: 24px;
}

.menu-item {
  margin-right: 40px;
  cursor: pointer;
}

.line-top {
  height: 2px;
  background-color: #DFD046;
  z-index: 15;
}


.router-view {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
