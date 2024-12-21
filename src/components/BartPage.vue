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
          bio: 'Bart spent much of his year ruminating and wondering about the future, as one does when they\'re 50+. With four children facing changes in career paths, sports, education, etc., there\'s plenty to envision aside himself. There\'s plenty to envision inside himself as well! New leadership at Langham, new ordination opportunities and life with thick-rimmed glasses. Despite all that visualization, he\'s still his same old self: curly hair that borders on mad scientist, relentless berating of his children with (groan) dad jokes, and extending church on Sunday by an hour with his socializing habits. *maybe add a more serious conclusion about somethings that are true to you?*',
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
