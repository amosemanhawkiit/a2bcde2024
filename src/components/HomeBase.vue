<template>
  <div class="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-screen bg-grey-100 items-start">
    <!-- Large Text (1,1) and (1,2) -->
    <div class="row-start-1 row-end-2 col-span-1 flex flex-col ">
      <h1 class="text-6xl leading-none md:text-6xl lg:text-[11rem] font-extrabold text-dgreen  transition-all duration-500">
        Moseman
      </h1>
      <h1 class="text-6xl leading-none md:text-6xl lg:text-[11rem] font-extrabold text-dgreen  transition-all duration-500 indent-6 lg:indent-0">
        Family 
      </h1>
      <h1 class="text-6xl leading-none md:text-6xl lg:text-[11rem] text-nowrap font-extrabold text-dgreen  transition-all duration-500 indent-12 lg:indent-0">
        E-Zine
      </h1>
      <p class="text-lg italic text-lgreen mt-4 font-mono">
        to stay on top of the digital wave, we digitized this year's christmas 'zine.
        <br>
        swipe on through, page by page, for what we've done and what we've seen 
      </p>
      <p class="text-xl text-lgreen mt-4 font-mono">
        happy holidays! 
      </p>
    </div>

    <!-- Slideshow (1,3) -->
    <div class="row-start-2 row-end-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-start justify-center md:relative">
      <div class="relative w-full h-auto" >
        <img
          :src="images[currentImage]"
          class="w-full h-auto md:h-96 object-cover rounded-sm shadow-lg"
        />
        <!-- Pause Button -->
        <button
          class="absolute bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 shadow"
          @click="isPaused = !isPaused"
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
      intervalID: null,
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

</style>
