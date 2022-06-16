<template>
  <div class="details">
    <div class="name-details">
      <h1>*/Amine A. Achouri</h1>
    </div>
    <div class="small-details">
      <h2>Brussels, Rome, London</h2>
      <p>
        email: aaamine.contact@gmail.com <br> tel: +32 466147913 <br> tel2: +44 7519659572
      </p>
    </div>
  </div>
</template>

<style>
  .details {
    font-family: "JMH Typewriter Dry";
    color: #343434;
  }

  .details {
    width: 50%;
    position: relative;
    padding: 35px;
  }

  .details h1 {
    font-weight: 700;
    font-size: 3rem;
  }

  .small-details {
    font-size: 1.6rem;
    line-height: 130%;
    position: relative;
    left: 3%;
  }

  .small-details h2 {
    font-weight: 700;
  }


  /* MEDIA QUERIES */

  @media(max-width: 1115px) {
    .details {
    width: 50%;
    }

    .details h1 {
      font-size: 2.5rem;
    }
    .small-details {
      font-size: 1.1rem ;
    }
  }

  @media(max-width: 990px) {
    .details {
    width: 80%;
    margin-bottom: 90px;
    }
  }

  @media(max-width: 722px) {
    .details {
    display: none;
    }
    .details h1 {
      font-size: 1.8rem;
    }

    .small-details {
      font-size:1rem ;
    }

    .small-details h2 {
      font-size: 1.5rem ;
    }

  }


  @media(max-width: 360px) {
    .details h1 {
      font-size: 1.6rem;
    }

    .details h2 {
      font-size: 1.3rem;
    }

    .small-details {
      font-size:0.9rem ;
    }
  }


</style>
