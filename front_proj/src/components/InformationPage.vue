<template>
  <div class="information-page">
    <div class="header">
      <h1>League of Legends 2024 Gameplay Preview</h1>
      <p>Greetings Summoners,</p>
    </div>
    <div class="content">
      <div class="section" v-for="(section, index) in sections" :key="index">
        <img :src="section.image" alt="Placeholder Image">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
    </div>
    <div class="footer">
      <p>Stay tuned for more details as we continue to unveil exciting developments in the world of League of Legends. Get ready to embark on an epic journey filled with thrilling battles, strategic depth, and endless excitement!</p>
      <p>See you on the Rift!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationPage',
  data() {
    return {
      sections: []
    };
  },
  mounted() {
    this.fetchSections();
  },
  methods: {
    async fetchSections() {
      try {
        const response = await fetch('http://localhost:3000/sections');
        const data = await response.json();
        this.sections = data.sections;
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    }
  }
}
</script>

<style scoped>
.information-page {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  color: #000;
}

.header {
  margin-top: 120px;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
}

.content {
  text-align: center;
}

.section {
  width: 600px; /* Adjust as needed */
  margin: 0 auto 20px; /* Center sections and add bottom margin for spacing */
}

.section img {
  width: 100%;
  max-width: 600px; /* Adjust as needed */
  margin-bottom: 10px;
}

.footer {
  margin-top: 20px;
  text-align: center;
}
</style>
