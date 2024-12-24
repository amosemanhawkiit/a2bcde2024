<template>
    <div class="min-h-screen grid grid-cols-1">
        <div><h1 class="font-mono text-6xl text-center bg-dgreen text-almond">the end! </h1></div>
        <div>
          <p class="md:px-96 px-4 pt-8 text-center leading-loose text-lgreen align-center font-serif">In so many ways, we are blessed–and had a blessed 2024. But it certainly wasn’t perfect for us (see: Abigail’s car woes), and it definitely isn’t perfect for the world and the many who suffer because of war, oppression, greed, prejudice, apathy and the like. We’d love for it all to be fixed–we’d love to be able to fix it all, actually. Wouldn’t that be great? But we do believe there is one who can and will fix it all–one who came to make his blessings flow far as the curse is found. In His resurrection power, we hope in 2025 to be able to see what new thing(s) we might do to help bring blessing where there is curse in our spheres of influence. And we long for the day when He comes again to make all things new, even as we enjoy the life He’s given us now. Thanks for engaging our e-Zine and for being part of our unfolding story!
        </p> <br>
        <p class="md:px-96 px-4 pt-8 text-center leading-loose text-lgreen font-bold align-center font-serif">Peace, <br> Bart, Carrie, Abigail (24), Amelia (21), Drew (20), Eli (17)
        </p>
      </div>
    <div class="contact-page text-almond flex flex-col gap-2 items-center justify-center bg-dgreen mt-16 w-full font-mono">
        <h1 class="font-bold text-xl pt-8">Contact Us</h1>
        <p class="px-4">We'd love to hear from you! Send us a message below or reach out to any of our family members that you may know!</p>

        <form @submit.prevent="sendEmail">
          <div>
            <label for="name">Your Name:</label>
            <input type="text" id="name" v-model="name" placeholder="Enter your name" required class="w-full p-2 border text-dgreen rounded"/>
          </div>
          <div>
            <label for="message">Your Message:</label>
            <textarea id="message" v-model="message" placeholder="Enter your message" required class="w-full p-2 border text-dgreen rounded"></textarea>
          </div>
          <button type="submit" class="bg-lgreen text-almond w-full p-2 border rounded">Send</button>
        </form>

        <p v-if="submitted" class="thank-you mt-4">Thank you for your message!</p>
        <p v-if="error" class="error mt-4">Something went wrong. Please try again.</p>
    </div>
    </div>
    
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      message: '',
      submitted: false,
      error: false,
    };
  },
  methods: {async sendEmail() {
      try {
        const templateParams = {
          name: this.name,
          message: this.message,
        };

        await emailjs.send(
          "service_i1txetx", // Replace with your EmailJS Service ID
          "template_7jvvbzr", // Replace with your EmailJS Template ID
          templateParams,
          "hxuJ6q9SvDfSoRAJp" // Replace with your EmailJS Public Key
        );

        this.submitted = true;
        this.name = "";
        this.message = "";
      } catch (err) {
        console.error("EmailJS error:", err);
        this.error = true;
      }
    },
  },
};
</script>