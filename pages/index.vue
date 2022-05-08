<template>
  <div class="home-intro">
    <Navbar/>
    <PersonalDetails/>
    <DownButton/>
  </div>
</template>


<style>
  .home-intro {
    height: 100vh;
    background-image: url('../assets/website-bg.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }




</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
