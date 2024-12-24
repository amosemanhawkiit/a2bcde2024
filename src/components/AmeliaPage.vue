<template>
  <FamilyMember :member="amelia">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-dred text-almond">{{ amelia.name }}</h1>
    </template>
  </FamilyMember>
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
        amelia: {
          name: 'amelia',
          pageColor: 'dred',
          pfp: "./assetspub/ameliahalfbirthday.jpg",
          collageImages: [
          { src: "./assetspub/celebrate.JPG", alt: "Bart at a game" },
          { src: "./assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "./assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: `Despite her old age, it was a year of FIRSTS for Amelia! In January, she celebrated her (twenty)first birthday accompanied by her first drink. Spring brought a visit to California for the first time and her very first post on LinkedIn. This summer, she landed her first internship at the Museum of Science and Industry-- where she was forced to use Microsoft Teams for the first time-- and broke her first major bone! In the fall, she and the rest of the Illinois Tech Women's Soccer team made it to the Sweet Sixteen round of the NCAA tournament for the first time in program history. Overall, it was a very exciting year, serving as an apt precursor to a year that will have quite a few “lasts” (i.e. graduation…) In fact, if anyone is hiring, she has been called a “quick-learner” and “self-starter” and is #opentowork.`,
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Amelia "Mosey" Moseman <br> <br>
          Perptually dodging the "what's next" question, lamenting the end of my collegiate soccer career, going to concerts and occasionally writing about them, brainstorming next year's christmas card `},
          {q: 'What\'s the most 2024 thing to happen to you this year?',
          a: 'Breaking my collarbone while playing a sport that doesn\'t even involve arms.'},
          {q: 'What are you proud of this year?',
          a:  `Having a successful soccer season in terms of both results and amount of joy experienced! Learning and growing as both a leader and a follower?  `},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `Making my bed every morning and doing things one handed`,}
          ],
          rapidFire:[
            {question: 'WOTY?',
          answer: `evergreen [adjective]: retaining freshness or interest`,},
            {question: 'SOTY?',
            answer: `Diet Pepsi by Addison Rae or You Don't Know the Shape I'm In by MJ Lenderman`,},
            { question: 'Favorite Form of Consuming Media?', 
            answer: 'funny tweets via instagram explore page or interesting articles that people send me',},
            { question: 'Best Meal of 2024?',
           answer: 'Pregame Pancakes (iykyk)',},
            { question: 'Best Read?',
            answer: `<i>They Can't Kill Us Until They Kill Us</i> by Hanif Abdurraqib <br><br>
            Honorable Mention: "How to Party (Without Regrets)" <i>from The New York Times</i> by George Gurley and Carson Griffith-- it's not what you think! `}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  