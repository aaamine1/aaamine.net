<template>
  <div class="root">
    <div class="footer">
      <div class="socials-footer">
        <a href="https://www.linkedin.com/in/amine-achouri/" target="_blank"> <font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/aaamine1" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://medium.com/@ahmedamine.achouri" target="_blank"><font-awesome-icon icon="fa-brands fa-medium" /></a>
        <a href="https://www.instagram.com/amineachouri/" target="_blank"> <font-awesome-icon icon="fa-brands fa-instagram" /></a>
      </div>
      <p>👨‍💻 made by [aaa* media©]</p>
      <a href="mailto: aaamine.contact@gmail.com"><p>aaamine.contact@gmail.com</p></a>
    </div>
  </div>
</template>
p
<style>
  .footer {
    height: 100px;
    background-color: #252322;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer p {
    color: white;
    font-size: 1.1rem;
  }

  .footer a {
    color:white;
  }

  .footer a:hover {
    opacity: 0.8;
    color: #5ec07d;
  }

  .socials-footer {
    font-size: 2rem;
  }

  /* MEDIA QUERIES */

  @media(max-width: 768px) {
    .footer {
      height: 140px;
      flex-direction: column;
      justify-content: center;
    }

    .footer p {
      margin: 4px ;
    }
  }

</style>
