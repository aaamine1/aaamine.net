<template>
  <div class="home-intro">
    <Navbar/>
    <DownButton class="test"/>
    <PersonalDetails/>
  </div>
</template>


<style>
  .home-intro {
    height: 100vh;
    background-image: url('../assets/website-bg-green.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

.test {
  position: absolute;
  left: 49vw;
  bottom: 5vh
}


</style>


<script>
export default {
  name: 'IndexPage'
}
</script>
