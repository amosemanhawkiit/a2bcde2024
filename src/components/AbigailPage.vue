<template>
  <FamilyMember :member="abigail">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-lgreen text-almond">{{ abigail.name }}</h1>
    </template>
  </FamilyMember>
</template>
  
  
  <script>
  import FamilyMember from './FamilyMember.vue';
  
  export default {
    name: 'AbigailPage',
    components: {
      FamilyMember,
    },
    data() {
      return {
        abigail: {
          name: 'abigail',
          pageColor: 'lgreen',
          pfp: "/assetspub/absbiking1.jpg",
          collageImages: [
          { src: "/assetspub/abshalfmarathon.jpg", alt: "Bart at a game" },
          { src: "/assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "/assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: '“Seasons” is a word that comes to mind for carrie for 2024. From basketball to track to following 3 different fall soccer seasons, her and Bart\'s time was shaped by these sports seasons-- and she loves watching and supporting from the sidelines. Seasons on the homefront are also ever changing. From having 1 kid at home to 3 and then back to 2 over the summer, the shifting dynamics keep her on her toes, and she cherishes all the moments that the whole crew gets to be together. ',
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Abigail, Abi, Gail, Abs <br> <br>
          Lots of content prep + planning for the year, frantically trying to make cookie boxes for my coworkers, and teaching lots and lots of classes. `},
          {q: 'What\'s the most 2024 thing to happen to you this year?',
          a: 'Not being able to remember anything that happened this year... <br><br> 3 MORE major car issues, getting bullied/becoming a meme online as part of my job, moving into an apartment with crooked floors'},
          {q: 'What are you proud of this year?',
          a: `Running a half marathon, getting promoted, taking a solo trip, starting a substack for the Everygirl `,},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `I really perfected my at home coffee recipe for both hot AND iced. Separate me and my nespresso at your own risk! `,}
          ],
          rapidFire:[
            {question: 'WOTY?',
          answer: `definitely boxing (workout)`,},
            {question: 'SOTY?',
            answer: `Two slices of sourdough bread, a hefty amount of turkey, spicy mustard, a garlic herb cheese spread, greens dressed in green goddess dressing, tomatoes, sweet and spicy pickles and pickled onions. Salt and pepper to taste.`,},
            { question: 'Favorite Form of Consuming Media?', 
            answer: 'A podcast hates to see me coming',},
            { question: 'Best Meal of 2024?',
           answer: 'Girl & The Goat x2',},
            { question: 'Best Read?',
            answer: '<i>Wellness</i> by Nathan Hill'}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  