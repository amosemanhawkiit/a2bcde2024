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
          pfp: "./assetspub/elipointfive.jpg",
          collageImages: [
          { src: "./assetspub/elipulley.jpeg", alt: "Eli on the court for howard pulley" },
          { src: "./assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "./assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: `Eli spent his year living in paradise: car to himself, house to himself, parents to himself, etc... but he's kept himself so busy that he barely gets to take advantage of such perks. As a junior in highschool, academics are no joke with a schedule consisting of Auto Tech II and ceramics. He made a tough decision to say goodbye to club soccer to ball out on the court year round but was still able to play for Central Boys Varsity Soccer Team in the fall (as a captain no less). This year, he and Bart developed an early-morning gym routine that is no doubt going to pay off during the upcoming basketball season. `,
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Homework, sports, buying basketball shoes`},
          {q: 'What\'s the most 2024 thing to happen to you this year?',
          a: ''},
          {q: 'What are you proud of this year?',
          a: `Expanding my style and growing my shoe collection`},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `How to sleep on buses`}
          ],
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
  