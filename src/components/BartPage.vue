<template>
  <FamilyMember :member="bart">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-dred text-almond">{{ bart.name }}</h1>
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
          name: 'bart/dad',
          pageColor: 'dred',
          pfp: "./assetspub/dadeligolf.jpg",
          collageImages: [
          { src: "./assetspub/dadquinn.jpg", alt: "Bart making a funny expression" },
          { src: "./assetspub/dadeligolf.jpg", alt: "Bart with the kids" },
          { src: "./assetspub/urkillingmesmalls.jpg", alt: "Bart baking" },
          ], 
          bio: `Bart found that this year prompted a lot of “What will _____ look like?” questions. Maybe that's normal when one is 50+ and looking at new leadership at Langham, new ordination opportunities and life with thick-rimmed (and thick-lensed!) glasses. Or maybe it's because of a wife doing a bang-up job working at a rapidly growing church and four children in various transitions related to career, sports, school, friends, etc. Despite all the mental work, he's still his same old self: curly hair that borders on mad scientist, relentless “engagement” of his children with (groan) dad jokes, deep gratitude for the family and friends (old and new) that impact his life and the ability to extend church on Sunday by an hour with his socializing habits.`,
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Dad, Bart, Mr. Bart (to the preschoolers at church), the shot doctor (to no one). <br><br> 
          Still doing marketing for Langham Partnership, teaching preschoolers 2x/month at church, rebounding jump shots at the JCC when called upon, watching a lot of college (Illinois Tech/Macalester) and high school soccer, AAU and high school basketball, and pizza-night shows.`},
          {q: 'What\'s the most 2024 thing to happen to you this year?',
          a: 'The Vikings got my hopes up...',},
          {q: 'What are you proud of this year?',
          a: `My kids + <br>
          The 2024 Langham Advent devotional! `,},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `Accompanying children to surgeries and assisting them with recovery... `,}
          ],
          rapidFire:[
            {question: 'WOTY?',
          answer: `Word: Ordination? <br>
          Woman: Carrie <br>
          Wordle: October 23, 2024 (my birthday), two guesses, word was "GOOFY"! `,},
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

</style>
