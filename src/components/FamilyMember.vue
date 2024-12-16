<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-2 p-0">
      
      <!-- Bio or Description -->
      <div class="sm:col-span-2 md:col-span-3 text-end">
        <h1 class="font-mono text-8xl justify-start text-start">{{ member.name }}</h1>
        <p>{{ member.bio }}</p>
      </div>
      <!-- Fun Facts or Holiday Wishes -->
      <div>
        <ul class="font-sans grid grid-cols-4 gap-y-4">
          <li class=""><strong>{{member.question1}}</strong> <br> {{ member.qa1 }}</li>
          <img src={{member.collage}} class="p-2 col-span-2">
          <li class="text-end"><strong>{{member.question2}}</strong> {{ member.qa2 }}</li>
          <li><strong>{{member.quesion3}}</strong> {{ member.qa3 }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FamilyMember',
    props: {
      member: Object, // Accepting member data as a prop
    }
  };
  </script>
  
  <style scoped>

  </style>
  