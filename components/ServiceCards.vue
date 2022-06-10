<template>

  <div class="root">

    <div class="service-cards">
      <div class="service-card">
        <img src="~/static/dev.png" alt="">
        <h2>Web Design & Development</h2>
        <p>Proin eget tortor risus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
      </div>
      <div class="service-card">
        <img src="~/static/video.png" alt="">
        <h2>Video & Content Production</h2>
        <p>Proin eget tortor risus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
      </div>
      <div class="service-card">
        <img src="~/static/translation.png" alt="">
        <h2>Translation & Localization</h2>
        <p>Proin eget tortor risus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
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
  margin: 30px;

}

.service-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.service-card h2 {
  text-align: center;
  font-weight: bold;
}

.service-card p {
  text-align: center;
}

.service-card img {
    height: 100px;
    margin-bottom: 30px;
}

</style>
