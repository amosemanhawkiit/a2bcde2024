<template>
  <FamilyMember :member="drew">
    <template #header>
      <h1 class="custom-header-class font-mono text-6xl text-center bg-bittersweet text-almond">{{ drew.name }}</h1>
    </template>
  </FamilyMember>
</template>
  
  <script>
  import FamilyMember from './FamilyMember.vue';
  
  export default {
    name: 'DrewPage',
    components: {
      FamilyMember,
    },
    data() {
      return {
        drew: {
          name: 'drew',
          pageColor: 'bittersweet',
          pfp: "./assetspub/drewpfp.JPG",
          collageImages: [
          { src: "./assetspub/drewgoalie.jpg", alt: "Bart at a game" },
          { src: "./assetspub/track.jpg", alt: "Bart with the kids" },
          { src: "./assetspub/track.jpg", alt: "Bart baking" },
          ], 
          bio: `2024 felt a little like a “stepping stone” year for Drew. There were no big milestones, but much progress was made on his goals and aspirations. He completed his first year of college with flying colors, spent the summer working at Joy of the People for the second year in a row (as well as playing on their summer team), and continued his collegiate soccer career this fall at Macalester College. `,
          question: [
          {q: 'What\'s your name and what are you up to?',
          a: `Drew, but many people refer to me as Moseman. I'm currently a sophomore, still part of the Macalester men's soccer team and all that involves, and grinding my way through organic chemistry and various biology classes to continue on my pre-medicine journey. `,},
          {q: 'What are you proud of this year?',
          a: `Getting my first minutes in an NCAA game, getting a house to live in junior year, applying to study abroad (adulting things) `},
          {q: 'What\'s a skill you picked up or perfected this year?',
          a: `One skill I picked up this year is the identification of mechanisms that use nucleophilic and electrophilic addition to create new molecules or different shaped molecules from pre-existing ones. It was one that took a lot of practice, and has definitely not been perfected, but I certainly picked up on how to get it done.`,}
          ],
          rapidFire:[
            {question: 'WOTY?',
          answer: `Chicago trip for NACC Championship or Taylor's Falls trip with Anna and her Grandparents`,},
            {question: 'SOTY?',
            answer: `HOPE by NF (#1 on Spotify Wrapped) <br><br> Also "Edenland" by Bandcamp and "Great Are You Lord" by All Sons and Daughters`,},
            { question: 'Favorite Form of Consuming Media?', 
            answer: 'TikTok edits but I also enjoy a long form youtube highlight video',},
            { question: 'Best Meal of 2024?',
           answer: 'Brunch at Eleven City Diner in Chicago',},
            { question: 'Best Read?',
            answer: '<i>The Panther</i> by Nelson DeMille'}
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to Abigail's page */
  </style>
  