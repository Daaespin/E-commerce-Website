<template>

    <div class="gallery-page" id="galleryPage">
      <div class="image-container">
        <img class="image" src="../assets/piltover_culture_01.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/piltover-zindeloruneterra.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/mttargon-farewell-ceremony.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/mttargon-carved-into-the-mountain.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/ixtal-secrets-02.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/ionia-the-great-monasteries.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/ionia-the-first-lands.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/ionia-life-as-one.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/ionia-an-ancient-and-respected-history.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/shadow-isles-vaults.jpg" draggable="false" alt="image"/>
        <img class="image" src="../assets/shadow_isles_entities_07.jpg" draggable="false" alt="image"/>
      </div>
    </div>

</template>

<script setup>
document.addEventListener("DOMContentLoaded", function() {
  const galleryPage = document.getElementById("galleryPage");
  let startX;
  let scrollLeft;
  let isMouseDown = false; // Track mouse button state

  galleryPage.addEventListener("mousedown", function(e) {
    startX = e.pageX - galleryPage.offsetLeft;
    scrollLeft = galleryPage.scrollLeft;

    isMouseDown = true; // Set mouse button state to true
  });

  galleryPage.addEventListener("mouseup", function() {

    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mouseleave", function() {

    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mousemove", function(e) {
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
  height: 700px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
