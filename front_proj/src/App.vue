<template>
  <div>
    <div class="container">
      <div class="navigation">
        <div class="logo">
          <img src="./assets/NavLog-removebg-preview.png" alt="Logo"></div>
        <span class="menu-item" @click="goTo('/')">HOME</span>
        <span class="menu-item" @click="goTo('/information')">INFORMATION</span>
        <span class="menu-item" @click="goTo('/champions')">CHAMPIONS</span>
        <span class="menu-item" @click="goTo('/gamemodes')">GAMEMODES</span>
        <span class="menu-item" @click="goTo('/gallery')">GALLERY</span>
        <button class="sign-in-btn" @click="goToSignInPage">SIGN IN</button>
        <button class="play-now-btn" @click="goToPlayNowPage">PLAY NOW</button>
      </div>
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

const goToSignInPage = () => {
  window.open('https://authenticate.riotgames.com/', '_blank');
};

const goToPlayNowPage = () => {
  window.open('https://authenticate.riotgames.com/', '_blank');
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  z-index: 10;

}

.navigation {
  display: flex;
  align-items: center;
  height: 78px;
  width: 100%;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #000;
  padding-left: 24px;
  -webkit-text-stroke: 0.3px #fdfcfc;


}

.logo img {
  margin-top: 5px;
  margin-left: 6px;
  width: 300px;
  height: auto;
}

.menu-item {
  margin-right: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 7.5px 16px;
  border-radius: 12px;

}
.menu-item:hover{
background: #555;
}

.sign-in-btn {
  margin-left: auto;
  margin-right: 20px;
  padding: 9px 16px;
  border-radius: 10px;
  background-color: #413f3f;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Fira Sans', sans-serif;
  font-style: initial;

}

.sign-in-btn:hover {
  background-color: #666;
}

.play-now-btn {
  margin-right: 40px;
  padding: 9px 16px;
  border-radius: 10px;
  background-color: #6380cb;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Fira Sans', sans-serif;
  font-style: initial;
}

.play-now-btn:hover {
  background-color: #2a4588;;
}

.router-view {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
