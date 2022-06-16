<template>

  <div class="root">

    <div class="service-cards">
      <div class="service-card">
        <img src="~/static/dev.png" alt="">
        <h2>Web Design & Development</h2>
        <p>Whether you’re looking for a <strong>robust web application</strong> or a <strong>simple website</strong> for your business, I can help guide you through all stages of the process. Starting from designing a seamless interface to the functionalities that will in term meet the user. If you’re interested, feel free to contact me. </p>
      </div>
      <div class="service-card">
        <img src="~/static/video.png" alt="">
        <h2>Media & Content Production</h2>
        <p>If you need help creating <strong>content for your social media platforms</strong>, whether with branded designs or short to medium-sized video, I can help you create and develop your brand and media. Through a vast network emerging from past experience, I can additionally help you assemble a team of carefully-selected talented filmmakers and designers. </p>
      </div>
      <div class="service-card">
        <img src="~/static/translation.png" alt="">
        <h2>Translation & Localization</h2>
        <p>Speaking <strong>4 languages </strong> natively, I have <strong>5+ years of experience </strong>in translation, having worked mainly with literature and legal documents. I now aim to work on software localization projects. My preferred <strong>source languages</strong>  are French, English and Italian, while my <strong>target languages</strong> are French and English.
            I have since created and currently operate a small translation agency thanks to my recurring clients.</p>
      </div>
    </div>

  </div>

</template>

<style>

  .service-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;
  padding: 30px;

}

.service-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

}

.service-card h2 {
  text-align: center;
  font-weight: bold;
  color:#252322 ;
  opacity: 0.9;
}

.service-card p {
  text-align: center;
  color: #252322;
  opacity: 0.8;
}

.service-card img {
    height: 100px;
    margin-bottom: 30px;
    opacity: 0.8;
}

@media(max-width: 976px) {
  .service-cards {
    grid-template-columns: 1fr ;
    grid-gap: 10px;
  }

  .service-card {
    padding: 15px;
  }
}



</style>
