<template>
  <div id="app">
    <header>
      <nav>
        <ul class="menu">
          <li><a href="#" @click.prevent="currentPage = 'Moseman'">Moseman</a></li>
          <li><a href="#" @click.prevent="currentPage = 'B'">B</a></li>
          <li><a href="#" @click.prevent="currentPage = 'C'">C</a></li>
          <li><a href="#" @click.prevent="currentPage = 'A'">A</a></li>
          <li><a href="#" @click.prevent="currentPage = 'A2'">A2</a></li>
          <li><a href="#" @click.prevent="currentPage = 'D'">D</a></li>
          <li><a href="#" @click.prevent="currentPage = 'E'">E</a></li>
        </ul>
      </nav>
    </header>
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
      currentPage: 'Moseman', // Default page
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
  }
};
</script>

<style>
/* Same styles as in the router example */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #004aad;
  padding: 10px 20px;
}

.menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 0;
}

.menu li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.menu li a:hover {
  background-color: #008cba;
}

main {
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
