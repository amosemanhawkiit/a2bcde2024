<template>
  <FamilyMember :member="bart" />
</template>

<script>
import FamilyMember from './FamilyMember.vue';

export default {
  name: 'BartPage',
  components: {
    FamilyMember,
  },
  data() {
    return {
      bart: {
          name: 'Bart',
          image: require('@/assets/logo.png'), // Replace with actual image
          bio: 'Abigail is the youngest member of the family, full of energy and curiosity. She loves Christmas because of all the decorations and holiday treats!',
          question1: 'What are you up to?',
          qa1: 'Decorating the Christmas tree with Mom and Dad.',
          question2: 'Baking cookies with Grandma.',
          qa2: 'I wish for snow on Christmas Day!',
          question3: 'Baking cookies with Grandma.',
          qa3: 'I wish for snow on Christmas Day!',
        },
    };
  },
};
</script>

<style scoped>
/* Styles specific to Abigail's page */
</style>
