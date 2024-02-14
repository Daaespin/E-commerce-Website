
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
          <div class="champion-item" v-for="index in 5" :key="index">
            <div class="champion-frame">
              <div class="placeholder-image">
                <img src="../assets/placeholder.png" alt="Loop Place" class="loop-place">
              </div>
              <div class="champion-name">Kyle Example</div>
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

}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d8d8de;
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
  width: 16%;
  margin: 10px;
}

.champion-frame {
  border: 2px solid #090808;
  border-radius: 10px;
  padding: 2px;
  text-align: center;
  position: relative; /* Set position to relative */
}

.placeholder-image {
  height: 300px; /* Adjust as needed */

}

.loop-place {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  border-radius: 8px; /* Adjust the border-radius for the image */
}

.champion-name {
  position: absolute; /* Set position to absolute */
  bottom: 0; /* Align to the bottom */
  left: 0; /* Align to the left */
  width: 100%; /* Cover the entire width of the frame */
  color: #fff; /* Text color */
  padding: 5px; /* Padding */
  border-bottom-left-radius: 10px; /* Adjust border radius */
  border-bottom-right-radius: 10px; /* Adjust border radius */
  font-family: 'Inter', sans-serif;
  font-size: 20px; /* Adjust font size */
}

</style>
<script setup>
</script>

