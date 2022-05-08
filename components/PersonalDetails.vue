<template>
  <div class="details">
    <div class="name-details">
      <h1>*/Amine A. Achouri</h1>
    </div>
    <div class="small-details">
      <h2>Brussels, Rome</h2>
      <p>
       email: aaamine.contact@gmail.com <br> tel: +32 040000000 <br> tel2: +44 070000000
      </p>
    </div>
  </div>
</template>

<style>
  .details {
    font-family: "JMH Typewriter Dry";
    color: black;
  }

  .details {
    width: 70%;
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

    .details h1 {
      font-size: 2.5rem;
    }
    .small-details {
      font-size: 1.1rem ;
    }
  }

  @media(max-width: 680px) {
    .details {
    width: 90%;
    }
    .details h1 {
      font-size: 2.5rem
    }

    .small-details {
      font-size:1rem ;
    }

    .small-details h2 {
      font-size: 1.5rem ;
    }
  }

  @media(max-width: 680px) {
      .details {
        padding: 10px;
      }
      .details h1 {
      font-size: 1.8rem;
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
