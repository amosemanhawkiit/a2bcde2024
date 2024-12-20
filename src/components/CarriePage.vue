<template>
  <FamilyMember :member="carrie">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-bittersweet text-almond">{{ carrie.name }}</h1>
    </template>
  </FamilyMember>
</template>
  
  <script>
  import FamilyMember from './FamilyMember.vue';
  
  export default {
    name: 'CarriePage',
    components: {
      FamilyMember,
    },
    data() {
      return {
        carrie: {
          name: 'carrie/mom',
          pageColor: 'bittersweet',
          pfp: "/assetspub/track.jpg",
          collageImages: [
          { src: "/assetspub/track.jpg", alt: "Bart at a game" },
          { src: "/assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "/assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: '“Seasons” is a word that comes to mind for carrie for 2024. From basketball to track to following 3 different fall soccer seasons, her and Bart\'s time was shaped by these sports seasons-- and she loves watching and supporting from the sidelines. Seasons on the homefront are also ever changing. From having 1 kid at home to 3 and then back to 2 over the summer, the shifting dynamics keep her on her toes, and she cherishes all the moments that the whole crew gets to be together. ',
          question1: 'What\'s your name and what are you up to?',
          qa1: `Carrie, Mom, Care to select a few`,
          question2: 'What\'s the most 2024 thing to happen to you this year?',
          qa2: 'The Vikings got my hopes up...',
          question3: 'What are you proud of this year?',
          qa3: `My kids + <br>
          The 2024 Langham Advent devotional! `,
          question4: 'What\'s a skill you picked up or perfected this year?',
          qa4: `Making granola!`,
          rapidFire:[
            {question: 'WOTY?',
          answer: `Mountains (took solo trips to Asheville and Denver)`,},
            {question: 'SOTY?',
            answer: `Steadfast by Sandra McCracken <br> (also the SOTY 2023 for those of you keeping track)`,},
            { question: 'Favorite Form of Consuming Media?', 
            answer: 'Streaming services (with pizza and others watching with me!)',},
            { question: 'Best Meal of 2024?',
           answer: 'Brunch at Eleven City Diner in Chicago',},
            { question: 'Best Read?',
            answer: '<i>The Warmth of the Sun</i> by Isabel Wilkerson or <i>Maybe You Should Talk to Someone</i> by Lori Gottlieb'}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  