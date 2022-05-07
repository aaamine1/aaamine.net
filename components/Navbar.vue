<template>
  <div class="navbar">
    <div class="logo-home" id="top">
      <a href="#top" class="logo-top">aaamine*</a>
    </div>
    <div class="navigation-links">
      <ul >
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>



</template>


<style>
/* General styling for the whole div */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

/* Styling the top-left "logo" */
  .logo-top {
    font-size: 6rem;
    text-decoration: none;
    color: black;
    padding: 40px;
    font-family: "JMH Typewriter Dry";
    font-weight: 700;
  }

  .logo-top:hover {
    text-decoration: none;
    color: white;
  }


/* Side link styling */
  .navigation-links ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .navigation-links li {
    text-decoration: none;
    font-size: 2.5rem;
    padding: 40px;
    font-family: "JMH Typewriter Dry";
    font-weight: 700;


  }

  .navigation-links li a {
    color: black;
  }

  .navigation-links li a:hover {
    color: white;
    text-decoration: none;
  }
</style>
