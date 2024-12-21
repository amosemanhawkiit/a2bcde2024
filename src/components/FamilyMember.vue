<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0 grid-flow-row p-0 md:p-8 md:gap-2">
      <!-- 1. pfp -->
      <div class="justify-center flex md:col-span-2 items-center">
        <img :src="member.pfp" class=" mb-4 w-32 h-32 aspect-square object-cover rounded-full max-h-48 shadow-md">
       </div>
      <!--2.Name and bio-->
      <div class="sm:col-span-2 md:col-span-2 text-center">
        <slot name="header">
          <h1 class="font-mono text-8xl text-center object-scale-down">{{ member.name }}</h1>
        </slot>
        <p :class="`text-${member.pageColor}`" class="font-serif tracking-wide text-justify text-md m-4">{{ member.bio }}</p>
      </div>
      <!-- 3. Main Questions -->
      <div>
        <ul class=" leading-6 text-center grid grid-cols-3 grid-flow-row auto-rows-max gap-0 md:gap-y-2" v-if="member.collageImages && member.collageImages.length" >
          <li class="text-start font-mono text-almond col-span-3" :class="`bg-${member.pageColor}`" >
            <div class="w-full h-auto aspect-w-16 aspect-h-9 md:hidden">
              <img
                :src="member.collageImages[0]?.src" :alt="member.collageImages[0]?.alt"
                class="object-cover z-50"
              />
            </div>
            <strong class="m-4 inline-block text-md whitespace-pre-line" >{{member.question1}}</strong>
             <br> 
             <p v-html="member.qa1" class="m-4 mt-0 text-sm inline-block"></p></li>
          <li class="text-start font-mono bg-almond col-span-3" :class="`text-${member.pageColor}`">
            <!-- <div class="w-full h-auto aspect-w-16 aspect-h-9 ">
              <img
                :src="member.collageImages[1]?.src" :alt="member.collageImages[1]?.alt"
                class="object-cover z-50"
              />
            </div> -->
            <strong class="m-4 inline-block text-md whitespace-pre-line">{{member.question2}}</strong> 
            <br>
            <p v-html="member.qa2" class="m-4 mt-0 text-sm inline-block"></p></li>
          <li class="text-start font-mono text-almond col-span-3" :class="`bg-${member.pageColor}`">
            <!-- <div class="w-full h-auto aspect-w-16 aspect-h-9 ">
              <img
                :src="member.collageImages[2]?.src" :alt="member.collageImages[2]?.alt"
                class="object-cover z-50"
              />
            </div> -->
          <strong class="m-4 inline-block text-md whitespace-pre-line" >{{member.question3}}</strong>
            <br> 
            <p v-html="member.qa3" class="m-4 mt-0 text-sm inline-block"></p></li>
          <li class="text-start font-mono bg-almond col-span-3 col-start-1" :class="`text-${member.pageColor}`">
            <!-- <div class="w-full h-auto aspect-w-16 aspect-h-9 ">
              <img
                :src="member.collageImages[0]?.src" :alt="member.collageImages[0]?.alt"
                class="object-cover z-50"
              />
            </div> -->
            <strong class="m-4 inline-block text-md whitespace-pre-line">{{member.question4}}</strong> 
            <br>
            <p v-html="member.qa4" class="m-4 mt-0 text-sm inline-block"></p></li>
        </ul>
      </div>
      <!-- Rapid Fire Accordian -->
       <!-- <div>
        <h2 class="font-mono text-4xl text-center object-scale-down p-4" :class="`text-${member.pageColor}`"> rapid fire! </h2>
       </div> -->
      <div class="grid grid-cols-1 gap-0 mb-4 md:mb-0">
        <div class="w-full h-auto aspect-w-16 aspect-h-9 hidden md:block">
              <img
                :src="member.collageImages[0]?.src" :alt="member.collageImages[0]?.alt"
                class="object-cover z-50"
              /></div>
        <h2 class="font-mono text-4xl text-center object-scale-down p-4 md:pt-4" :class="`text-${member.pageColor}`"> rapid fire! </h2>
        <div 
        v-for="(item, index) in member.rapidFire" 
        :key=index
        class="border-b-2 mx-4"
        :class="`border-${member.pageColor} text-${member.pageColor}`">
        <!-- Accordian -->
        <div 
        class="p-2 text-center font-mono group transition-all duration-500 cursor-pointer  "
        :class="index % 2 === 0 ? ` text-start` : `text-end`"
        @click="toggle(index)">
          <div class=" text-lg">
              <p>{{ item.question }}</p>
          </div>
        </div>
        <div v-if="activeIndex === index" class="transition-all fade duration-700 align-center p-2 ">
        <p v-html="item.answer" class="text-center font-serif tracking-wide" :class="index % 2 === 0 ? ` text-${member.pageColor} text-start` : ` text-${member.pageColor} text-end`"></p>
         </div>
        </div>
      </div>
      <!-- Footer -->
       <div class="text-center md:col-span-2 md:pt-2">
       <footer class="justify-center p-4 font-mono text-almond" :class="`bg-${member.pageColor}`">
        <p  ><i>brought to you by @Moseman6 INC</i></p>
       </footer>
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
      console.log(this.member)
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
  