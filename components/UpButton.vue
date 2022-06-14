<template>
    <a href="#top" class="button-up">
      <img src="~/static/down-arrow.png" class="up-arrow">
    </a>
</template>

<style>
  .button-up {
    margin: 15px 15px 15px 15px;
    height: 50px;
    width: 50px;
    background-color: #252322;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
  }

  .button-up:hover {
    background-color: #4b4846;
  }

  .up-arrow {
    height: 15px;
    display: flex;
    margin-bottom: 2px;

  }

  .button-up img {
    transform: rotate(180deg);
  }

</style>
