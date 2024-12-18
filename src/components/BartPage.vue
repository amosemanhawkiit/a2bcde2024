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
          name: 'bart',
          collage: require('@/assets/logo.png'), // Replace with actual image
          bio: 'Abigail is the youngest member of the family, full of energy and curiosity. She loves Christmas because of all the decorations and holiday treats!',
          question1: 'What\'s your name and what are you up to?',
          qa1: '<p>Dad, Bart, Mr. Bart (to the preschoolers at church), the shot doctor (to no one).</p> <p>Still doing marketing for Langham Partnership, teaching preschoolers 2x/month at church, rebounding jump shots at the JCC when called upon, watching a lot of college (Illinois Tech/Macalester) and high school soccer, AAU and high school basketball, and pizza-night shows.</p>',
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
