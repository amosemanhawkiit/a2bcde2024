<template>
  <div id="app">
    <header>
      <nav>
        <ul class="menu">
          <li><a href="#" @click.prevent="currentPage = 'BartPage'">BartPage</a></li>
          <li><a href="#" @click.prevent="currentPage = 'CarriePage'">CarriePage</a></li>
          <li><a href="#" @click.prevent="currentPage = 'Abigal'">AbigailPage</a></li>
          <li><a href="#" @click.prevent="currentPage = 'AmeliaPage'">AmeliaPage</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <BartPage v-if="currentPage === 'BartPage'" />
      <CarriePage v-if="currentPage === 'CarriePage'" />
      <AbigailPage v-if="currentPage === 'AbigailPage'" />
      <AmeliaPage v-if="currentPage === 'AmeliaPage'" />
    </main>
  </div>
</template>

<script>
import BartPage from './components/BartPage.vue';
import CarriePage from './components/CarriePage.vue';
import AbigailPage from './components/AbigailPage.vue';
import AmeliaPage from './components/AmeliaPage.vue';

export default {
  data() {
    return {
      currentPage: 'BartPage', // Default page
    };
  },
  components: {
    BartPage,
    CarriePage,
    AbigailPage,
    AmeliaPage
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
