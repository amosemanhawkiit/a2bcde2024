<template>
    <div class="family-member-page">
      <h1>{{ member.name }}</h1>
      
      <!-- Family Member Image -->
      <div class="profile-img">
        <img :src="member.image" alt="Family Member Photo" />
      </div>
      
      <!-- Bio or Description -->
      <div class="bio">
        <h2>About {{ member.name }}</h2>
        <p>{{ member.bio }}</p>
      </div>
      
      <!-- Fun Facts or Holiday Wishes -->
      <div class="fun-facts">
        <h3>Fun Facts</h3>
        <ul>
          <li><strong>Favorite Christmas Tradition:</strong> {{ member.favoriteTradition }}</li>
          <li><strong>Favorite Holiday Activity:</strong> {{ member.favoriteActivity }}</li>
          <li><strong>Holiday Wish:</strong> {{ member.holidayWish }}</li>
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
  .family-member-page {
    text-align: center;
    margin-top: 60px;
  }
  
  .family-member-page h1 {
    font-size: 2rem;
    color: #e7d7c1;
  }
  
  .profile-img img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #bf4342;
    margin-top: 20px;
  }
  
  .bio {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #555;
  }
  
  .fun-facts {
    margin-top: 40px;
    font-size: 1.1rem;
    color: #333;
  }
  
  .fun-facts ul {
    list-style-type: none;
    padding: 0;
  }
  
  .fun-facts li {
    margin: 10px 0;
  }
  
  .fun-facts li strong {
    font-weight: bold;
  }
  </style>
  