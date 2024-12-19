<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 grid-flow-row p-0 md:p-8">
      <div class="justify-center flex items-center">
        <img :src="member.pfp" class=" mb-4 w-32 h-32 aspect-square object-cover rounded-full max-h-48 shadow-md">
       </div>
      <!-- Bio or Description -->
      <div class="sm:col-span-2 md:col-span-3 text-center">
        <slot name="header">
          <h1 class="font-mono text-8xl text-center object-scale-down">{{ member.name }}</h1>
        </slot>
        <p :class="`text-${member.pageColor}`" class="font-sans font-extrabold text-lg m-4">{{ member.bio }}</p>
      </div>
      <!-- Main Questions -->
      <div>
        <ul class=" leading-6 text-center grid grid-cols-3 grid-flow-row gap-0">
          <li class="text-start font-mono text-almond col-span-3" :class="`bg-${member.pageColor}`">
            <strong class="m-4 inline-block text-md whitespace-pre-line" >{{member.question1}}</strong>
             <br> 
             <p class="m-4 mt-0 text-sm inline-block">{{ member.qa1 }}</p></li>
          <li class="text-start font-mono bg-almond col-span-2" :class="`text-${member.pageColor}`">
            <strong class="m-4 inline-block text-md whitespace-pre-line">{{member.question2}}</strong> 
            <br>
            <p class="m-4 mt-0 text-sm inline-block">{{ member.qa2 }}</p></li>
          <li class="text-start font-mono text-almond col-span-3" :class="`bg-${member.pageColor}`">
          <strong class="m-4 inline-block text-md whitespace-pre-line" >{{member.question3}}</strong>
            <br> 
            <p class="m-4 mt-0 text-sm inline-block">{{ member.qa3 }}</p></li>
          <li class="text-start font-mono bg-almond col-span-2 col-start-2" :class="`text-${member.pageColor}`">
            <strong class="m-4 inline-block text-md whitespace-pre-line">{{member.question4}}</strong> 
            <br>
            <p class="m-4 mt-0 text-sm inline-block">{{ member.qa4 }}</p></li>
        </ul>
      </div>
      <!-- Rapid Fire Collage -->
      <div class="grid grid-cols-1 gap-0 grid-flow-row pt-4">
        <div 
        v-for="(item, index) in member.rapidFire" 
        :key=index
        class="shadow-md">
        <!-- Accordian -->
        <div 
        class="p-4 text-center group transition-all duration-300 cursor-pointer"
        :class="index % 2 === 0 ? 'bg-dred text-almond' : 'bg-almond text-dred'"
        @click="toggle(index)">
          <div class="font-bold text-lg">
              <p>{{ item.question }}</p>
          </div>
        </div>
        <div v-if="activeIndex === index" class="transition-all duration-300 ">
        <p v-html="item.answer" class="text-center font-sans" :class="index % 2 === 0 ? 'bg-dred text-almond' : 'bg-almond text-dred'"></p>
         </div>
        </div>
      </div>
      <!-- Footer -->
       <div>
        <p class="text-center p-8 "><i>brought to you by @Moseman6 INC</i></p>
       </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FamilyMember',
    props: {
      member: Object, // Accepting member data as a prop
    },
    mounted(){
      console.log(this.member.collageImages);
    },
    data() {
    return {
      activeIndex: null, // Tracks which accordion is open
    };
  },
  //   computed: {
  //   collageItems() {
  //     // Combine images and fun facts into one array
  //    const items =[
  //       ...(this.member.collageImages || []).map((img) => ({ type: "image", content: img })),
  //       ...(this.member.rapidFire || []).map((fact) => ({ type: "text", content: fact })),
  //     ];
  //     return this.shuffle(items);
  //   },
  // },
  methods: {
    toggle(index) {
      // Toggle the accordion by setting the active index
      this.activeIndex = this.activeIndex === index ? null : index;
    },
},
  };
  </script>
  
  <style scoped>

  </style>
  