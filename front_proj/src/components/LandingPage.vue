<template>
  <div class="landing-page">
    <div class="video-background">
      <iframe :src="videoUrl" allow="autoplay" allowfullscreen></iframe>
    </div>
    <img src="../assets/aaaaaaaaaaaa-removebg-preview.png" alt="Your Logo" class="logo">
    <img src="../assets/SocialMedia.png" alt="socials" class="SocialM">
    <div class="overlay">
      <button class="button-play" @click="openInNewTab('https://authenticate.riotgames.com/')">PLAY FOR FREE</button>
    </div>
    <div class="news-box">
      <a href="#" class="button-new">NEWS UPDATES</a>
    </div>

    <div class="arrow-right-double"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'https://www.youtube.com/embed/ZHhqwBwmRkI?controls=0&autoplay=1&modestbranding=1&title=0&mute=1&loop=1&start=10',
      currentPage: 'homeSection', // current section
    };
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.video-background {
  z-index: 1;
  border: 0;
  position: fixed;  /* Keep video fixed regardless of scrolling */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;  /* Hide iframe scrollbars */
}

.video-background iframe {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 140%;
  object-fit: cover;  /* Adjust video to fill container */
}

.logo {
  z-index: 2;
  position: absolute;
  top: 30%;
  left: 51%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
}
.SocialM {
  z-index: 2;
  position: absolute;
  top: 97%;
  left: 93%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: auto;
}


.overlay {
  position: absolute;
  top: 80%;
  left: 42%;
  width: 16%;
  height: 7%;
  background-color: #1B1919;
  border: 1px solid #DFD046;
  z-index: 10;
}

.button-play {
  z-index: 10;
  position: relative  ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #f5f1f1;
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  background-color: #1B1919;
}


.news-box {
  position: absolute;
  top: 50%;
  left: 0;
  width: 25%;
  height: 25%;
  background-color: #1B1919;
  border: 1px solid #DFD046;
  z-index: 10; /* Adjust z-index if needed to layer elements properly */
}

.button-new {
  z-index: 10;
  position: absolute; /* Position relative to the overlay */
  top: 12%;
  left: 25%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  font-size: 20px; /* Adjust font size as needed */
  font-weight: initial;
  color: #f5f1f1; /* Match the outline color */
  word-spacing: 40px;
  text-decoration: none; /* Remove default underline for links */
  display: block; /* Ensure the link takes the full width of its container */
}

.arrow-right-double {
  position: fixed;
  top: 50%;
  right: 10px; /* Adjust the distance from the right edge */
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #DFD046;
  transform: translateY(-50%);
  z-index: 2000;
}

.arrow-right-double::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #DFD046;

}

</style>

