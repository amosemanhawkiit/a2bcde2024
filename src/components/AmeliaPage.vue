<template>
    <FamilyMember :member="abigail" />
  </template>
  
  <script>
  import FamilyMember from './FamilyMember.vue';
  
  export default {
    name: 'AmeliaPage',
    components: {
      FamilyMember,
    },
    data() {
      return {
        abigail: {
          name: 'Amelia',
          image: require('@/assets/logo.png'), // Replace with actual image
          bio: 'Abigail is the youngest member of the family, full of energy and curiosity. She loves Christmas because of all the decorations and holiday treats!',
          favoriteTradition: 'Decorating the Christmas tree with Mom and Dad.',
          favoriteActivity: 'Baking cookies with Grandma.',
          holidayWish: 'I wish for snow on Christmas Day!',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  