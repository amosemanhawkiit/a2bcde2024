<template>
  <FamilyMember :member="eli">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-dred text-almond">{{ eli.name }}</h1>
    </template>
  </FamilyMember>
</template>
  
  <script>
  import FamilyMember from './FamilyMember.vue';
  
  export default {
    name: 'EliPage',
    components: {
      FamilyMember,
    },
    data() {
      return {
        eli: {
          name: 'eli',
          pageColor: 'dred',
          pfp: "/assetspub/elipointfive.jpg",
          collageImages: [
          { src: "/assetspub/elipulley.jpeg", alt: "Eli on the court for howard pulley" },
          { src: "/assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "/assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: '“Seasons” is a word that comes to mind for carrie for 2024. From basketball to track to following 3 different fall soccer seasons, her and Bart\'s time was shaped by these sports seasons-- and she loves watching and supporting from the sidelines. Seasons on the homefront are also ever changing. From having 1 kid at home to 3 and then back to 2 over the summer, the shifting dynamics keep her on her toes, and she cherishes all the moments that the whole crew gets to be together. ',
          question1: 'What\'s your name and what are you up to?',
          qa1: `Homework, sports, buying basketball shoes`,
          question2: 'What\'s the most 2024 thing to happen to you this year?',
          qa2: 'breaking my collarbone while playing a sport that doesn\'t even involve arms.',
          question3: 'What are you proud of this year?',
          qa3: `Expanding my style and growing my shoe collection`,
          question4: 'What\'s a skill you picked up or perfected this year?',
          qa4: `How to sleep on buses`,
          rapidFire:[
            {question: 'WOTY?',
          answer: `evergreen [adjective]: retaining freshness or interest`,},
            {question: 'SOTY?',
            answer: `Chick-fil-a (sauce)`,},
            { question: 'Favorite Form of Consuming Media?', 
            answer: 'Tiktok sports edits',},
            { question: 'Best Meal of 2024?',
           answer: 'Pregame Pancakes (iykyk)',},
            { question: 'Best Read?',
            answer: `N/A`}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  