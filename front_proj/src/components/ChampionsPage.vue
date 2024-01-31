<template>
  <div class="champions-page">
    <div class="overlay">
      <div class="container">
        <div class="header">
          <div class="choose-champion-text">
            Choose your Champion
          </div>
          <div class="button-search">
            <img src="../assets/searchLogo.png" alt="Loop Logo" class="loop-logo">
            SEARCH
          </div>
        </div>
        <div class="champion-list">
          <div class="champion-item" v-for="index in 4" :key="index">
            <div class="champion-frame">
              <!-- Placeholder Image -->
              <div class="placeholder-image"></div>
              <!-- Champion Name (Placeholder) -->
              <div class="champion-name">Name Example</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.champions-page {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e7e7ee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 70%;
  text-align: center; /* Center the text horizontally */
}

.header {
  margin-bottom: 20px;
}

.choose-champion-text {
  color: #1a1919;
  font-size: 55px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
}

.header {
  margin-bottom: 40px;
  padding-bottom: 10px; /* Adjust padding as needed */

}

.button-search {
  display: flex;
  align-items: center;
  color: #1a1919;
  font-size: 22px;
  border: 2px solid #000; /* Add black border to the search button */
  border-radius: 5px; /* Add border-radius for rounded corners */
  padding: 10px; /* Adjust padding as needed */
  margin-top: 20px; /* Increase separation from the placeholder champion frames */
}

.loop-logo {
  width: 40px;
  height: auto;
  margin-right: 10px; /* Between logo and text */
}

.champion-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.champion-item {
  width: 20%;
  margin: 10px;
}

.champion-frame {
  border: 2px solid #DFD046;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.placeholder-image {
  background-color: #2050c0; /* Placeholder background color */
  height: 150px; /* Adjust as needed */
}

.champion-name {
  margin-top: 10px;
  color: #1a1919;
}

</style>
