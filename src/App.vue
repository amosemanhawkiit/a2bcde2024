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
      class="space-y-10 fixed top-0 right-0 z-50 h-dvh w-1/3 p-4 inline-block items-center justify-center bg-dred text-almond"
      v-if="isSidebarOpen">
        <ul class="space-y-10 text-center text-2xl">
            <li><a href="#" @click.prevent="currentPage = 'A'; showSideNav = false" class="hover:text-bittersweet">A</a></li>
            <li><a href="#" @click.prevent="currentPage = 'A2'; showSideNav = false" class="hover:text-bittersweet">A2</a></li>
            <li><a href="#" @click.prevent="currentPage = 'B'; showSideNav = false" class="hover:text-bittersweet">B</a></li>
            <li><a href="#" @click.prevent="currentPage = 'C'; showSideNav = false" class="hover:text-bittersweet">C</a></li>
            <li><a href="#" @click.prevent="currentPage = 'D'; showSideNav = false" class="hover:text-bittersweet">D</a></li>
            <li><a href="#" @click.prevent="currentPage = 'E'; showSideNav = false" class="hover:text-bittersweet">E</a></li>
            <li><a href="#" @click.prevent="currentPage = 'Moseman'; showSideNav = false" class="hover:text-bittersweet">Moseman</a></li>
          </ul>
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
    </main>
  </div>
</template>

<script>
import HomeBase from './components/HomeBase.vue';
import BartPage from './components/BartPage.vue';
import CarriePage from './components/CarriePage.vue';
import AbigailPage from './components/AbigailPage.vue';
import AmeliaPage from './components/AmeliaPage.vue';
import DrewPage from './components/DrewPage.vue';
import EliPage from './components/EliPage.vue';

export default {
  data() {
    return {
      currentPage: 'Moseman', 
      isSidebarOpen: false,
    };
  },
  components: {
    HomeBase,
    BartPage,
    CarriePage,
    AbigailPage,
    AmeliaPage,
    DrewPage,
    EliPage
  },
  watch: {
    currentPage(newValue, oldValue) {
      // Close the sidebar whenever the page changes
      if (newValue !== oldValue) {
        this.isSidebarOpen = false;
      }
    },
  },
};
</script>

<style>
/* Same styles as in the router example */


</style>
