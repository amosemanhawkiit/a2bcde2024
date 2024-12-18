<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row p-0">
      
      <!-- Bio or Description -->
      <div class="sm:col-span-2 md:col-span-3 text-center">
        <slot name="header">
          <h1 class="font-mono text-8xl text-center">{{ member.name }}</h1>
        </slot>
        <p class="font-serif text-xl">{{ member.bio }}</p>
      </div>
      <!-- Fun Facts or Holiday Wishes -->
      <div>
        <ul class="font-serif leading-6 text-center grid grid-cols-1 grid-flow-row gap-8 ">
          <li class="text-start bg-dred text-almond "><strong class="m-4 inline-block text-xl" >{{member.question1}}</strong> <br> <p class="m-4 mt-0 inline-block">{{ member.qa1 }}</p></li>
          <!-- <img src={{member.collage}} class="p-2 col-span-2"> -->
          <li class="text-end"><strong class="text-xl">{{member.question2}}</strong> {{ member.qa2 }}</li>
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
  