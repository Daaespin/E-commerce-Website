<template>
  <div>
    <div class="title">
      <h1>CHOOSE YOUR</h1>
      <h2>CHAMPION</h2>
      <p class="text">
        With more than 150 unique champions to choose, <br> we are sure that you will find your perfect match or you will master them ALL!
      </p>
    </div>

    <div class="search-bar-container">
      <div class="search-bar">
        <input type="text" placeholder="Search champions..." v-model="searchQuery" @input="filterChampions">
        <button><img src="../assets/searchLogo.png" alt="Search"></button>
      </div>
    </div>

    <div class="champion-list">
      <div class="champion-row" v-for="(row, rowIndex) in championRows" :key="rowIndex">
        <div class="champion-item" v-for="(champion, championIndex) in row" :key="championIndex">
          <div class="champion-frame">
            <div class="image">
              <img :src="champion.imageLink" :alt="champion.name" class="loop-place">
            </div>
            <div class="champion-name">{{ champion.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const champions = ref([]);
const searchQuery = ref('');

async function fetchChampions() {
  try {
    const response = await fetch('http://localhost:3000/champions');
    const data = await response.json();
    champions.value = data.champions.map(champion => ({
      name: champion.name,
      imageLink: `http://localhost:3000${champion.imageLink}`
    }));
    organizeChampionsIntoRows();
  } catch (error) {
    console.error('Error fetching champions from backend:', error);
  }
}

onMounted(async () => {
  await fetchChampions();
});

const championRows = ref([]);

function organizeChampionsIntoRows(championsToOrganize = champions.value) {
  const rows = [];
  const chunkSize = 5;
  for (let i = 0; i < championsToOrganize.length; i += chunkSize) {
    rows.push(championsToOrganize.slice(i, i + chunkSize));
  }
  championRows.value = rows;
}

function filterChampions() {
  const filteredChampions = champions.value.filter(champion =>
      champion.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  organizeChampionsIntoRows(filteredChampions);
}
</script>

<style scoped>
/* Your existing styles */
.title {
  text-align: center;
  margin-top: 120px;
}

.title h1 {
  font-size: 21px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  line-height: .85;
  color: #000000;
  margin-bottom: -25px;
  font-style: italic;
}

.title h2 {
  font-size: 80px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  color: #000000;
  margin-top: -5px;
  font-style: italic;
}

.text {
  font-size: 15px;
  margin-top: 15px;
  font-family: 'Fira Sans', sans-serif;
  color: #000000;
  font-style: initial;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 80%;
  border: 2px solid #7e7a7a;
  border-radius: 5px;
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  outline: none;
}

.search-bar button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.search-bar button img {
  width: 20px;
  height: auto;
}

.champion-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
}

.champion-row {
  display: flex;
  justify-content: center; /* Center the rows */
  margin-bottom: 40px;
}

.champion-item {
  width: 20%;
  margin: 0 20px; /* Add margin between champion items */
}

.champion-frame {
  text-align: center;
  position: relative;
  height: 320px;
  width: 250px;
}

.image {
  height: 100%;
  width: auto;
}

.loop-place {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Use cover to maintain aspect ratio */
  border-radius: 20px;
}

.champion-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 5px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
}

.champion-frame:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
