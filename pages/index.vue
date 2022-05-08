<template>
  <div class="root">
    <div class="home-intro">
      <Navbar/>
      <PersonalDetails/>
    </div>
  </div>

</template>


<style>
  .home-intro {
    height: 100vh;
    background-image: url('../assets/website-bg.jpg');
  }
</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
