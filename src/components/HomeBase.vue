<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-grey-100 p-8">
    <!-- Left Section: Large Text -->
    <div class="md:w-1/2 p-8">
      <h1 class="text-[11rem] font-bold text-dgreen leading-[0.75]">
        Moseman <br> Family <br>
        E-Zine
      </h1>
      <p class="text-lg flex items-end text-lgreen mt-4">
        in order to stay on top of the digital wave, we have digitized this year's Chrismas 'zine.
      </p>
      <p class="italic flex items-end text-lg text-lgreen mt-4">
          to navigate through the website and take a look at what we've been up to, either swipe through each 'page' or use the navigation menu
        </p> 
    </div>

    <!-- Right Section: Slideshow -->
    <div class="md:w-1/2 flex items-end justify-center me-10">
      <div class="slideshow-container relative">
        <img
          :src="images[currentImage]"
          class="w-full h-64 md:h-96 object-cover rounded-sm shadow-lg"
        />
        <!-- Pause Button, NEED TO FIX ICONS-->
        <button
          class="absolute bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 shadow"
          @click=!isPaused
        >
        {{ isPaused ? 'Play' : 'Pause' }}
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
        "/assetspub/FamilyHuddle.jpg",
        // "/path-to-image2.jpg",
        // "/path-to-image3.jpg",
      ],
      isPaused: false,
      intervalId: null,
    };
  },
  mounted(){
    this.start();
  },
  methods: {
    start(){
      this.intervalID = setInterval(()=> {
        if (!this.isPaused) {
          this.next();
        }
      }, 3000)
    },
    next(){
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
.slideshow-container {
  position: relative;
  max-width: 100%;
}
</style>
