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
        <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h1>
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
  height: 65vh;
  background-color: #f2f2f2;
  z-index: 0;
  display: flex;
  justify-content: space-around;

}

.note-card {
  height: 350px;
  padding: 100px;
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
  padding: 100px;
  text-align: center;
  display: flex;
  align-items: center;
}

/* MEDIA QUERIES  */


</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
