<template>
  <div class="gallery-page" id="galleryPage">
    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image" draggable="false" class="image" alt="image"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(async () => {
  await fetchImages();
});

async function fetchImages() {
  try {
    const response = await fetch('http://localhost:3000/images');
    const data = await response.json();
    images.value = data.images.map(image => `http://localhost:3000${image}`);
  } catch (error) {
    console.error('Error fetching images from backend:', error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOMContentLoaded event triggered');

  const galleryPage = document.getElementById("galleryPage");
  if (!galleryPage) {
    console.error('Gallery page element not found');
    return;
  }

  let startX;
  let scrollLeft;
  let isMouseDown = false; // Track mouse button state

  galleryPage.addEventListener("mousedown", function(e) {
    console.log('mousedown event triggered');
    startX = e.pageX - galleryPage.offsetLeft;
    scrollLeft = galleryPage.scrollLeft;
    isMouseDown = true; // Set mouse button state to true
  });

  galleryPage.addEventListener("mouseup", function() {
    console.log('mouseup event triggered');
    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mouseleave", function() {
    console.log('mouseleave event triggered');
    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mousemove", function(e) {
    console.log('mousemove event triggered');
    if (!isMouseDown) return; // Check if mouse button is pressed
    const x = e.pageX - galleryPage.offsetLeft;
    const walk = (x - startX) * 0.8; // Adjust the scrolling speed (slower)
    galleryPage.scrollLeft = scrollLeft - walk;
  });
});
</script>

<style scoped>
.gallery-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-container {
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 0 30px;
}

.image {
  margin-top: 70px;
  max-width: 700px;
  height: 500px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
