<template>
  <div class="home-intro">
    <Navbar/>
    <div class="button-position">
      <DownButton/>
    </div>
    <div class="details-root">
      <PersonalDetails class="details"/>
    </div>

  </div>
</template>


<style>
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

  }

/* MEDIA QUERIES  */

  @media(max-width: 1440px) {
    .details {
      position: absolute;
      bottom: 9vh;

    }
  }

</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
