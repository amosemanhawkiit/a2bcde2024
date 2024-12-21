<template>
  <div class="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-screen bg-grey-100 gap-x-4 md:p-8">
    <!-- Large Text (1,1) and (1,2) -->
    <div class="row-start-1 row-end-2 col-span-1 flex flex-col items-center text-center">
      <h1 class="text-6xl mt-2 md:text-6xl lg:text-[11rem] font-serif font-bold text-dgreen transition-all duration-500">
        Very
      </h1>
      <h1 class="text-6xl mt-2 md:text-6xl lg:text-[11rem] font-serif font-bold text-dgreen transition-all duration-500 ">
        Merry
      </h1>
      <h2 class="text-3xl mt-2 font-serif font-extrabold md:text-6xl lg:text-[5rem] text-nowrap text-dgreen  transition-all duration-500">
        Vol III
      </h2>
      <h3 class="text-xl mt-2 font-mono font-bold md:text-6xl lg:text-[2.5rem] text-nowrap text-dgreen  transition-all duration-500">
        a Moseman Family E-Zine
      </h3>
      <p class="text-lg italic text-lgreen m-4 mt-4 font-mono leading-8 ">
        to stay on top of the digital wave, we digitized this year's christmas 'zine.
        <br>
        swipe on through, page by page, for what we've done and what we've seen 
      </p>
      <p class="text-xl text-lgreen mt-4 font-bold font-mono">
        happy holidays! 
      </p>
    </div>

    <!-- Slideshow (1,3) -->
    <div class="row-start-2 row-end-2 md:row-start-2 md:col-start-2 md:flex md:row-span-2 md:h-screen items-center justify-center">
      <div class="relative w-full h-auto aspect-w-3 aspect-h-2 md:aspect-w-4 md:aspect-h-3 " >
        <img
          :src="images[currentImage]"
          class="w-full h-full object-cover rounded-sm shadow-lg"
        />
        <!-- Pause Button -->
        <!-- <button
          class="absolute bottom-4 right-4 w-16 h-10 flex align-center justify-center bg-dred text-white rounded-full p-2 shadow"
          @click="isPaused = !isPaused"
        >
          {{ isPaused ? 'Play' : 'Pause' }}
        </button> -->
      </div>
    </div>
    <!-- Footer -->
     <div class="flex justify-center ">
      <p class="font-mono text-dgreen "> <i>swipe to navigate! </i></p>
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
        "/assetspub/marz.jpg",
        "/assetspub/connies.jpg",
        "/assetspub/diner.jpg",
        "/assetspub/emfair.jpg",
        "/assetspub/pickle.jpg",
        "/assetspub/track.jpg",
        "/assetspub/familyhuddle1.jpg",
        "/assetspub/sisterhug.jpg",
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
      }, 4000)
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
