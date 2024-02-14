<template>

    <div class="gallery-page" id="galleryPage">
      <div class="image-container">
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
        <img class="image" src="../assets/placeholder.png" draggable="false" alt="image"/>
      </div>
    </div>

</template>

<script setup>
document.addEventListener("DOMContentLoaded", function() {
  const galleryPage = document.getElementById("galleryPage");
  console.log(galleryPage);
  let startX;
  let scrollLeft;
  let isMouseDown = false; // Track mouse button state

  galleryPage.addEventListener("mousedown", function(e) {
    console.log("mousedown");
    startX = e.pageX - galleryPage.offsetLeft;
    scrollLeft = galleryPage.scrollLeft;

    isMouseDown = true; // Set mouse button state to true
  });

  galleryPage.addEventListener("mouseup", function() {
    console.log("mouseup");

    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mouseleave", function() {
    console.log("mouseleave");

    isMouseDown = false; // Reset mouse button state to false
  });

  galleryPage.addEventListener("mousemove", function(e) {
    console.log("mousemove");
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
  gap: 20px;
}

.image {
  max-width: 100%;
  height: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
