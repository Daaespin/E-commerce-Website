<template>
  <div class="game-modes-page" :style="{ backgroundImage: `url(${modeBackgrounds[selectedMode]})` }">
    <h2>Game Modes</h2>
    <div class="video-container">
      <iframe v-if="selectedMode === 'Rift'" :src="riftVideoUrl" allow="autoplay; encrypted-media" allowfullscreen title=""></iframe>
      <iframe v-if="selectedMode === 'Aram'" :src="aramVideoUrl" allow="autoplay; encrypted-media" allowfullscreen title=""></iframe>
      <iframe v-if="selectedMode === 'TFT'" :src="tftVideoUrl" allow="autoplay; encrypted-media" allowfullscreen title=""></iframe>
    </div>
    <div class="mode-selector">
      <div class="mode-option" @click="selectMode('Rift')">
        <h3>Summoner's Rift</h3>
      </div>
      <div class="mode-option" @click="selectMode('Aram')">
        <h3>ARAM</h3>
      </div>
      <div class="mode-option" @click="selectMode('TFT')">
        <h3>Teamfight Tactics</h3>
      </div>
    </div>
    <div class="selected-mode">
      <h2>{{ selectedMode }}</h2>
      <p>{{ modeDescriptions[selectedMode] }}</p>
    </div>
  </div>
</template>

<script>
import riftBackground from '@/assets/rift.png';
import aramBackground from '@/assets/aram.jpg';
import tftBackground from '@/assets/tft2.jpg';

export default {
  data() {
    return {
      selectedMode: 'Rift',
      modeDescriptions: {
        Rift: "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
        Aram: "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
        TFT: "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing."
      },
      modeBackgrounds: {
        Rift: riftBackground,
        Aram: aramBackground,
        TFT: tftBackground
      },

      riftVideoUrl: 'https://www.youtube.com/embed/jvAAxvX7pXY?controls=0&autoplay=1&modestbranding=1&title=0&mute=1&loop=1&start=100',
      aramVideoUrl: 'https://www.youtube.com/embed/o-LVPh3VQek?controls=0&autoplay=1&modestbranding=1&title=0&mute=1&loop=1&start=10',
      tftVideoUrl: 'https://www.youtube.com/embed/LLVqm0XfXnc?controls=0&autoplay=1&modestbranding=1&title=0&mute=1&start=5&loop=1'
    };
  },
  methods: {
    selectMode(mode) {
      this.selectedMode = mode;
    }
  },
  mounted() {
    // Set Summoner's Rift as default mode on page load
    this.selectMode('Rift');
  }
};
</script>

<style scoped>
.game-modes-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: #fdfdfd;
  z-index: 0;
}

.video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  border: 7px solid #B5C0C9;
}

.video-container iframe {
  width: 180%;
  height: 140%;
  border: none;
  object-fit: cover;
  position: relative;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}


h2 {
  margin-top: 100px;
}

.mode-selector {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
}

.mode-option {
  margin-left: 1600px;
  width: 200px;
  padding: 20px;
  border-radius: 19px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 25px;
  background-color: #1B1919;
}

.mode-option:hover {
  background-color: #413f3f;
}

.selected-mode {
  margin-top: 40px;

}

.selected-mode h2 {
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  color: #f1f1f1;

}

.selected-mode p {
  font-size: 26px;
  line-height: 1.6;
}
</style>
