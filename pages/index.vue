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
        <a href="https://doc-08-bo-docs.googleusercontent.com/docs/securesc/2ojuho09g8kotokn9a0du0tdlckkn4rt/45fb36r5k65g54f4njiv9v5t6pb9qnh3/1655223525000/01397931176994710687/01397931176994710687/1KEJtFub6Zld_SpYPns10DnuxmvuuMccw?e=download&ax=ACxEAsb_LyVHhPq8NUlBrtLKQYS9ImEIwaip9Xlb_ADtbS2iClfeQMphQWrH_9ZDBCbhQ3KfhjLdLGch4y5rCTE63d8zzjwky8AbkTIPb2H0WaKEDjYskuEYU2CcOmcBP_yvcWl8shwhRkePBiDY4A515sEACCiOhcztmczpPmhueFN7B_JGYeNOz68_rE2Ph5QcIqySoCaOnq_q2zhEGpAymf5iWj__KH1CxnMMrEB596xCkBM6djtZfdZt-w8_onJOO_TQIxQtPg0M_yeqqMzo7iZAQS9EtxfZ6IrGJxZWDNZLkTzSk3l1z4neo1vA0pXbQP85ufnhG76-NMqZeZ2uvYXk-fuEbDKl2n7DhNzQXAvQUiV8_BtYsuFe6WFoS6R0sw4Abfm1y3xzKwuRSIE_RqaMWOgDf7xtMzFhKn--w-ibmsU7lTzfV5gVbXNX4F2TKViLuKwFB2JuFFfXDwXeTwyNWTYnb9iU9XPlQzB5376cOwW_L0iVG4kJrPviQFQ5zuVrMA82gbmW_Bkt7RXknKSVZBYqJZBNrwW8Ca46wBXHvUL2P6GJL60tDAA_bBEDWcYJ0qC91wiuntdP-7WgrTWqbvC9GFkIJNnV4ya1bfBllX6_aijTVdSjitMcPZ405LW7KbtyAs2K9FdCi48CPH8PjOBS6y5EBLHHnXhSPXLJrMwvQggty0BqJd6_7UiunJkKXKoLA1Uz-wwiJ4YEtbXaOHtuC7qQiG5SY0gDVk-gg_GPuxnhztTAwDlmb7pJSGx78s-QPfDa6KyU2stPu_y5NhaoRXUHd3dxNqOjL9CJHGMDNyqQDQN2ccgGZmz09bDzJljAGCjbKuriv4bEsHSvmUhD4p3WDqH1GnXIfN3BaJwr1lxw4FuKopB2ZHb9&authuser=0" class="button-green cv-button"><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /> Download CV</a>

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
