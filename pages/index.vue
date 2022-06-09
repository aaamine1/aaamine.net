<template>
  <div class="root">
    <div class="home-intro">
      <Navbar/>
      <div class="button-position">
        <DownButton/>
      </div>
      <div class="details-root">
        <PersonalDetails class="details"/>
      </div>

    </div>
    <div class="about-section" id="about">
      <div class="about-parent">

        <img src="~/static/me.png" class="me-window" alt="">
        <div class="about-child">
          <img src="~/static/note-card.jpg" class="note-card" alt="">
        </div>
      </div>
      <div class="about-paragraph">
        <span>
        <h3 class="font-weight-bold">I'm a full stack developer with skills in Finance, Localization and Translation. 👨🏽‍💻</h3>
        <h3> Having previously worked in various countries with up-to 5 languages, I can help you localize your business or its content across platforms. </h3>
        </span>

      </div>

    </div>
  </div>
</template>


<style>
/* HOME INTRO STYLING  */
  .home-intro {
    height: 100vh;

    background-image: url("~/static/website-bg-green.jpg");
    /* background-image: url('~/assets/website-bg-green.jpg'); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .button-position {
    display: inline-block;
    position: absolute;
    bottom: 5vh;
    left: calc(50% - 50px);
    z-index: 1;

  }

  .details-root {
    z-index: 0;
  }

/* ABOUT SECTION STYLING */
.about-parent {
  position: relative;
}

.about-section {
  height: 75vh;
  background-color: #f2f2f2;
  z-index: 0;
  display: flex;

}

.note-card {
  height: 350px;
  margin: 100px;
  position: relative;
  z-index: 1;
}

.me-window {
  height: 300px;
  position: absolute;
  left: 520px;
  top: 256px;
  z-index: 2;
}

.about-paragraph {
  margin: 100px;
  display: flex;
  align-items: center;
  font-family: "Inter";
  text-align: center;
}

.about-paragraph h3 {
  font-size: 1.3rem;
}
/* MEDIA QUERIES  */


</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
