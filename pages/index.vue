<template>
  <div class="home-intro">
    <Navbar/>
    <DownButton class="button-position"/>
    <PersonalDetails class="details"/>
  </div>
</template>


<style>
  .home-intro {
    height: 100vh;
    background-image: url("~assets/website-bg-green.jpg");
    /* background-image: url('~/assets/website-bg-green.jpg'); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .button-position {
    position: absolute;
    left: 49vw;
    bottom: 5vh
  }

/* MEDIA QUERIES  */

  @media(max-width: 990px) {
    .details {
      position: absolute;
      bottom: 10vh;

    }
  }

</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
