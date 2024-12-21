<template>
  <div>
      <nav>
        <button class="fixed top-4 right-4 z-50 p-2 bg-dred text-almond rounded-md focus:outline-none" 
    @click="isSidebarOpen = !isSidebarOpen">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
    </button>
      <div 
      class="space-y-10 fixed top-0 right-0 z-50 h-screen w-full p-4 flex flex-col items-center justify-center bg-dred text-almond md:w-1/3"
      v-if="isSidebarOpen">
        <ul class="space-y-10 items-center text-center text-4xl font-mono">
            <li><a href="#" @click.prevent="currentPage = 'A'; isSidebarOpen = false" class="hover:text-bittersweet">A</a></li>
            <li><a href="#" @click.prevent="currentPage = 'A2'; isSidebarOpen = false" class="hover:text-bittersweet">A2</a></li>
            <li><a href="#" @click.prevent="currentPage = 'B'; isSidebarOpen = false" class="hover:text-bittersweet">B</a></li>
            <li><a href="#" @click.prevent="currentPage = 'C'; isSidebarOpen = false" class="hover:text-bittersweet">C</a></li>
            <li><a href="#" @click.prevent="currentPage = 'D'; isSidebarOpen = false" class="hover:text-bittersweet">D</a></li>
            <li><a href="#" @click.prevent="currentPage = 'E'; isSidebarOpen = false" class="hover:text-bittersweet">E</a></li>
            <li><a href="#" @click.prevent="currentPage = 'Moseman'; isSidebarOpen = false" class="hover:text-bittersweet">Moseman</a></li>
            <li><a href="#" @click.prevent="currentPage = 'The End'; isSidebarOpen = false" class="hover:text-bittersweet">The End</a></li>
          </ul>
          <button class="fixed top-4 right-4 p-2 z-50 bg-almond text-dred rounded-md focus:outline-none" 
            @click="isSidebarOpen = !isSidebarOpen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            </button>
          <!-- <button 
          class="p-2 text-almond bg-bittersweet justify-center rounded-md mb-4 focus:outline-none" @click="showSideNav = false">Close</button>  -->
      </div>
      </nav>
    <main>
      <HomeBase v-if="currentPage === 'Moseman'" />
      <BartPage v-if="currentPage === 'B'" />
      <CarriePage v-if="currentPage === 'C'" />
      <AbigailPage v-if="currentPage === 'A'" />
      <AmeliaPage v-if="currentPage === 'A2'" />
      <DrewPage v-if="currentPage === 'D'" />
      <EliPage v-if="currentPage === 'E'" />
      <FinalPage v-if="currentPage=== 'The End'"/>
    </main>
    <div class="min-h-screen bg-gray-100 perspective-1000 overflow-y-auto">
      <swiper-container
        ref="swiper"
        slides-per-view="1"
        space-between="10"
        :scrollbar= "{draggable: true, sticky: true }"
        :navigation= false
        :keyboard="{
          enabled: true,
        }"
        effect="cards"
        class="h-screen"
      >
        <!-- Dynamically Render Pages using swiper-slide class from swiper-element -->
        <swiper-slide 
          v-for="(page, index) in pages" 
          :key="index">
          <div class="perspective-1000 h-full px-0 py-4  flex justify-center bg-gray-50 overflow-y-auto max-height-100vh ">
            <component
              v-if="page"
              :is="page"
              class="w-full p-0"
            />
            <div v-else class="text-red-500">Invalid Component</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
 
</template>

<script>
/* eslint-disable no-unused-vars */
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import { markRaw } from "vue";
import HomeBase from './components/HomeBase.vue';
import BartPage from './components/BartPage.vue';
import CarriePage from './components/CarriePage.vue';
import AbigailPage from './components/AbigailPage.vue';
import AmeliaPage from './components/AmeliaPage.vue';
import DrewPage from './components/DrewPage.vue';
import EliPage from './components/EliPage.vue';
import FinalPage from './components/FinalPage.vue';

export default {
  data() {
    return {
      currentPage: 'Moseman', 
      isSidebarOpen: false,
      pages: [markRaw(HomeBase), markRaw(BartPage), markRaw(CarriePage), markRaw(AbigailPage), markRaw(AmeliaPage), markRaw(DrewPage), markRaw(EliPage), markRaw(FinalPage)],
    };
  },
  watch: {
    currentPage(newValue, oldValue) {
      // Close the sidebar whenever the page changes
      if (newValue !== oldValue) {
        this.isSidebarOpen = false;
        this.currentPage = newValue;
        console.log("currentPage changed to:", newValue);
      }
    },
  },
  mounted() {
    // Debugging: Log the pages array
    console.log("Pages array on mount:", this.pages);

    // Debugging: Verify Swiper container is initialized
    const swiperElement = this.$refs.swiper;
    if (swiperElement) {
      console.log("Swiper container initialized:", swiperElement);
    } else {
      console.error("Swiper container is not initialized.");
    }
  },
};
</script>

<style scoped>

</style>
