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
          pfp: "/assetspub/track.jpg",
          collageImages: [
          { src: "/assetspub/track.jpg", alt: "Bart at a game" },
          { src: "/assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "/assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: '“Seasons” is a word that comes to mind for carrie for 2024. From basketball to track to following 3 different fall soccer seasons, her and Bart\'s time was shaped by these sports seasons-- and she loves watching and supporting from the sidelines. Seasons on the homefront are also ever changing. From having 1 kid at home to 3 and then back to 2 over the summer, the shifting dynamics keep her on her toes, and she cherishes all the moments that the whole crew gets to be together. ',
          question1: 'What\'s your name and what are you up to?',
          qa1: `Amelia "Mosey" Moseman <br> <br>
          Perptually dodging the "what's next" question, going to concerts and occasionally writing about them, trying to make mom laugh until she cries, brainstorming next year's christmas card `,
          question2: 'What\'s the most 2024 thing to happen to you this year?',
          qa2: 'breaking my collarbone while playing a sport that doesn\'t even involve arms.',
          question3: 'What are you proud of this year?',
          qa3: `Having a successful soccer season in terms of both results and amount of joy experienced! Also, learning and growing as both a leader and a follower.  `,
          question4: 'What\'s a skill you picked up or perfected this year?',
          qa4: `Making my bed every morning and doing things one handed`,
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
            answer: `"How to Party (Without Regrets)" <i>from The New York Times</i> by George Gurley and Carson Griffith-- it's not what you think! OR <i>They Can't Kill Us Until They Kill Us</i> by Hanif Abdurraqib`}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  