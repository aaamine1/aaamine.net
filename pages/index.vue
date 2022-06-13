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
        <div class="socials">
          <a href=""><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href=""><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href=""><font-awesome-icon icon="fa-brands fa-medium" /></a>
          <a href=""> <font-awesome-icon icon="fa-brands fa-instagram" /></a>
        </div>
        <a href="" class="button-green cv-button"><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /> Download CV</a>
        <div class="about-child">
          <img src="~/static/note-card.jpg" class="note-card" alt="">
        </div>
      </div>

    </div>

    <div class="services-section">
      <h1>*/Services</h1>
      <ServiceCards />
    </div>

    <div class="projects-section">

      <Projects />

    </div>

    <Footer />
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
}

.about-section {
  height: 65vh;
  background-color: #252322;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;


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

.socials {
  position: absolute;
  bottom: 100px;
  z-index: 3;
}

.socials a {
  font-size: 40px;
  color: #252322;
  text-decoration: none;
  padding: 5px;
}

.socials a:hover {
  opacity: 0.8;
  color: #5ec07d;
}

.cv-button {
  position: absolute;
  bottom: 278px;
  right: -30px;
  z-index: 5;
}

/* SERVICES SECTION STYLING */
.services-section {
  background-color: #faf4f0;
  z-index: 0;

}

.services-section h1 {
  font-family: "JMH Typewriter Dry";
  font-weight: bold;
  font-size: 5.5rem;
  padding: 30px;
  color: #333333;
  display: flex;
  justify-content: center;
  margin: 0px 65px 0px 0px;
}

.projects-section {
  /* background-image: linear-gradient(15deg, #5ec07d 0%, #8cf8cb 150%); */
  background-color: #e1ece3;


}
.projects-section h1 {
  font-family: "JMH Typewriter Dry";
  font-weight: bold;
  font-size: 5.5rem;
  padding: 30px;
  color: #333333;
  display: flex;
  justify-content: center;
  margin: 0px 65px 0px 0px;
}
/* MEDIA QUERIES  */


</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
