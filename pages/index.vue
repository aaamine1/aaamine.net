<template>

  <div class="root">
    <div class="home-intro" id="top">
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
        <div class="about-child">
          <img src="~/static/note-card.jpg" class="note-card" alt="">
        </div>
        <img src="~/static/me.png" class="me-window" alt="">
        <div class="socials">
          <a href="https://www.linkedin.com/in/amine-achouri/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a href="https://github.com/aaamine1" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="https://medium.com/@ahmedamine.achouri" target="_blank"><font-awesome-icon icon="fa-brands fa-medium" /></a>
          <a href="https://www.instagram.com/amineachouri/" target="_blank"> <font-awesome-icon icon="fa-brands fa-instagram"/></a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1Sh0961l2iu-DQKPJ_H3bQrJtukXHVURD" class="button-green cv-button"><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /> Download CV</a>

      </div>

    </div>

    <div class="services-section" id="services">
      <h1>*/Services</h1>
      <ServiceCards />
    </div>

    <div class="projects-section" id="projects">

      <Projects />

      <div class="blank">
        <UpButton />
      </div>
    </div>

    <Footer />
  </div>
</template>


<style>
/* HOME INTRO STYLING  */
  .home-intro {
    min-height: 100vh;
    max-height: -webkit-fill-available;
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
    right: 50%;
    margin-right: -25px;
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
  background-color: #252322;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 65vh;


}

.note-card {
  height: 350px;
  margin: 100px;
  position: relative;
  z-index: 1;
  border-radius: 4px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.blank {
  display: flex;
  justify-content: center;
}


/* MEDIA QUERIES  */
  @media (max-width: 490px) {
    .about-child img {
        height: 226px;
      }
    .socials a {
      font-size: 2rem;
    }
  }

  @media(max-width: 560px) {
    .services-section h1 {
      font-size: 4rem;
      margin: 0;
    }


    .projects-section h1 {
      font-size: 4rem;
      margin: 0;
    }

    .me-window {display: none;}
  }

  @media (max-width: 610px) {
    .note-card {
        height: 300px;
      }
  }
  @media (max-width: 990px) {
    .button-position{
      bottom: 100px;
    }

  }
  @media(max-width: 879px) {



      .note-card {
        margin: 60px 0px 15px 0px;
      }

        .me-window {
        display: none;
      }
      .about-parent {
        margin-right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

      .about-section {

        justify-content: s;
      }
      .socials {
        bottom: 80px;
      }
      .cv-button {
        position: static;
        margin-bottom: 25px;

      }
  }



</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
