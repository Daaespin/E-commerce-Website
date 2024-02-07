<template>
  <div class="game-modes-page" :style="{ backgroundImage: `url(${modeBackgrounds[selectedMode]})` }">
    <h2>Game Modes</h2>
    <div class="mode-selector">
      <div class="mode-option" @click="selectMode('Rift')">
        <h3>Summoner's Rift</h3>
        <p> Image placeholder</p>
      </div>
      <div class="mode-option" @click="selectMode('Aram')">
        <h3>ARAM</h3>
        <p>Image placeholder</p>
      </div>
      <div class="mode-option" @click="selectMode('TFT')">
        <h3>Teamfight Tactics</h3>
        <p>Image placeholder</p>
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
import tftBackground from '@/assets/tft.jpg';

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
      }
    };
  },
  methods: {
    selectMode(mode) {
      this.selectedMode = mode;
    }
  }
};
</script>

<style scoped>
.game-modes-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fdfdfd; /* Dark gray text color */
  z-index: 0;
}

.mode-selector {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  z-index: 10;
}

.mode-option {
  width: 30%;
  padding: 20px;
  border: 1px solid #ddd; /* Lighter border color */
  border-radius: 8px; /* Slightly rounder corners */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  z-index: 10;
}

.mode-option:hover {
  background-color: #1B1919; /* Light gray background on hover */
}

.selected-mode {
  margin-top: 40px;
}

.selected-mode h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  color: #fffcfc;
  justify-content: space-around;
}

.selected-mode p {
  font-size: 16px;
  line-height: 1.6; /* Improved readability with slightly increased line height */
  justify-content: center;
}
</style>
