<template>
  <FamilyMember :member="bart">
    <template #header>
      <h1 class="custom-header-class font-mono text-8xl text-center bg-dred text-almond">{{ bart.name }}</h1>
    </template>
  </FamilyMember>
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
          pageColor: 'dred',
          pfp: "/assetspub/track.jpg",
          collageImages: [
          { src: "/assetspub/track.jpg", alt: "Bart at a game" },
          { src: "/assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "/assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: 'Abigail is the youngest member of the family, full of energy and curiosity. She loves Christmas because of all the decorations and holiday treats!',
          question1: 'What\'s your name and what are you up to?',
          qa1: `Dad, Bart, Mr. Bart (to the preschoolers at church), the shot doctor (to no one). \n
          Still doing marketing for Langham Partnership, teaching preschoolers 2x/month at church, rebounding jump shots at the JCC when called upon, watching a lot of college (Illinois Tech/Macalester) and high school soccer, AAU and high school basketball, and pizza-night shows.`,
          question2: 'What\'s the most 2024 thing to happen to you this year?',
          qa2: 'The Vikings got my hopes up...',
          question3: 'What are you proud of this year?',
          qa3: `My kids + 
          The 2024 Langham Advent devotional! `,
          question4: 'What\'s a skill you picked up or perfected this year?',
          qa4: `Accompanying children to surgeries and assisting them with recovery... `,
          rapidFire:[
            {question: 'WOTY?',
          answer: `Word: Ordination <br>
          Woman: Carrie <br>
          Wordle:`,},
            {question: 'SOTY?',
            answer: `Song: "Know That I Know" by Lake Street Dive <br>
            Sandwich: Homemade Cubano <br>
            Senior: Amelia`,},
            { question: 'Favorite Form to Consume Media?', 
            answer: 'TV drama series accompanied by pizza',},
            { question: 'Best Meal of 2024?',
           answer: 'Brunch at Eleven City Diner in Chicago!',},
            { question: 'Best Read?',
            answer: '<i>How Far to the Promised Land</i> by Esau McCaulley'}
          ],
        },
    };
  },
};
</script>

<style scoped>
/* Styles specific to Abigail's page */
</style>
