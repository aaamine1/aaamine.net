<template>
  <div class="root">
    <h1>*/Projects</h1>
    <section class="hero-section">

      <div class="card-grid">
        <a class="cardo" href="#">
          <div class="card__background" style="background-image: url(https://wallpaperaccess.com/full/1129018.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Fullstack Web Application</p>
            <h3 class="card__heading">Auto-Mate</h3>
          </div>
        </a>
        <a class="cardo" href="#">
          <div class="card__background" style="background-image: url(https://wallpaperaccess.com/full/1129018.jpg)"></div>
          <div class="card__content">
            <p class="card__category">News / Media</p>
            <h3 class="card__heading">The Tech-Post</h3>
          </div>
        </a>
        <a class="cardo" href="#">
          <div class="card__background" style="background-image: url(https://wallpaperaccess.com/full/1129018.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Video</p>
            <h3 class="card__heading">Cooking for Maastricht's Refugees</h3>
          </div>
        </a>
        <a class="cardo" href="#">
          <div class="card__background" style="background-image: url(https://wallpaperaccess.com/full/1129018.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Design / Photo</p>
            <h3 class="card__heading">Album Cover Series</h3>
          </div>
        </a>
      </div>
    </section>
  </div>

</template>

<style>
  :root{
    --background-dark: #2d3548;
    --text-light: rgba(255,255,255,0.6);
    --text-lighter: rgba(255,255,255,0.9);
    --spacing-s: 8px;
    --spacing-m: 16px;
    --spacing-l: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;
    --width-container: 1200px;
  }

  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    font-size: 14px;
  }

  body{
    height: 100%;
  }

  .hero-section{
    align-items: flex-start;
    display: flex;
    min-height: 100%;
    justify-content: center;
    padding: var(--spacing-xxl) var(--spacing-l);
  }

  .card-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: var(--spacing-l);
    grid-row-gap: var(--spacing-l);
    max-width: var(--width-container);
    width: 100%;
  }

  @media(min-width: 540px){
    .card-grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(min-width: 960px){
    .card-grid{
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .cardo{
    list-style: none;
    position: relative;
    height: 100%;
  }

  .cardo:before{
    content: '';
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }

  .card__background{
    background-size: cover;
    background-position: center;
    border-radius: var(--spacing-l);
    bottom: 0;
    filter: brightness(0.75) saturate(1.2) contrast(0.85);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center;
    trsnsform: scale(1) translateZ(0);
    transition:
      filter 200ms linear,
      transform 200ms linear;
  }

  .cardo:hover .card__background{
    transform: scale(1.05) translateZ(0);
  }

  .card-grid:hover > .cardo:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }

  .card__content{
    left: 0;
    padding: var(--spacing-l);
    position: absolute;
    top: 0;
  }

  .card__category{
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-s);
    text-transform: uppercase;
  }

  .card__heading{
    color: var(--text-lighter);
    font-size: 1.9rem;
    text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    line-height: 1.4;

  }
</style>
