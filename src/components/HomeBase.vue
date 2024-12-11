<template>
  <div class="flex flex-col md:flex-row items-center justify-between min-h-screen bg-grey-100 p-8">
    <!-- Left Section: Large Text -->
    <div class="md:w-1/2 p-8">
      <h1 class="text-[11rem] font-bold text-dgreen leading-[0.75]">
        Moseman <br> Family <br>
        E-Zine
      </h1>
      <p class="text-lg text-lgreen mt-4">
        in order to stay on top of the digital wave, we have digitized this year's Chrismas 'zine.
      </p>
      <p class="italic text-lg text-lgreen mt-4">
          to navigate through the website and take a look at what we've been up to, either swipe through each 'page' or use the navigation menu
        </p> 
    </div>

    <!-- Right Section: Slideshow -->
    <div class="md:w-1/2">
      <div class="slideshow-container relative">
        <img
          :src="images[currentImage]"
          class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
        <!-- Navigation Buttons -->
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow"
          @click="prevImage"
        >
          &#10094;
        </button>
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow"
          @click="nextImage"
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0,
      images: [
        "/FamilyHuddle.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentImage =
        (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
.slideshow-container {
  /* position: relative; */
  max-width: 100%;
}
</style>
