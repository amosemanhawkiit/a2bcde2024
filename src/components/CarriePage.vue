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
          pfp: "./assetspub/mombrunch.jpg",
          collageImages: [
          { src: "./assetspub/momlaughing.JPG", alt: "Carrie laughing expressively" },
          { src: "./assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "./assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: '“Seasons” is a word that comes to mind for carrie for 2024. From basketball to track to following 3 different fall soccer seasons, her and Bart\'s time was shaped by these sports seasons-- and she loves watching and supporting from the sidelines. Seasons on the homefront are also ever changing. From having 1 kid at home to 3 and then back to 2 over the summer, the shifting dynamics keep her on her toes, and she cherishes all the moments that the whole crew gets to be together. ',
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Carrie, Mom, Care to select a few <br><br>
           Currently loving my work at Restoration Anglican Church, cherishing the youngest's last years of high school, and driving to Chicago on the regular.`},
          {q: 'What\'s one thing you\'re proud of this year?',
          a: 'Reading more books than I have in the past years!',},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `Making granola! `,}
          ],
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
  