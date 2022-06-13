<template>
  <div class="root">
    <div class="footer">
      <div class="socials-footer">
        <a href=""> <font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-medium" /></a>
        <a href=""> <font-awesome-icon icon="fa-brands fa-instagram" /></a>
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
    background-color: #333333;
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
