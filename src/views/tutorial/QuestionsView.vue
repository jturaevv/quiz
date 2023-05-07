<script setup lang="ts"></script>

<template>
  <div class="questions-page page">
    <div class="container">
      <div class="questions-wrapper">
        <h2 class="questions__title">
          Но реплицированные с зарубежных источников, современные исследования
          набирают популярность среди?
        </h2>
        <div class="questions-body">
          <div class="questions-block" v-for="item in 4" :key="item">
            <h5 class="questions__option">A</h5>
            <p class="questions__text">
              Современные технологии достигли такого уровня, что убеждённость
              некоторых оппонентов говорит о возможностях экспериментов,
              поражающих по своей масштабности и грандиозности.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.questions {
  &-page {
    padding: 150px 0;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    margin-bottom: 40px;
    color: #060c0e;
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-block {
    display: flex;
    align-items: center;
    padding: 25px 37px;
    gap: 37px;
    background: #e9f2f5;
    border: 2px solid #dce9e9;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #ffd9cb;
      border: 2px solid #eb6440;
      border-radius: 20px;

      .questions__option {
        color: #e9f2f5;
        background: #eb6440;
        border: 2px solid #eb6440;
        border-radius: 37.037px;
        transition: all 0.3s;
      }
    }
  }

  &__option {
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    padding: 8px 13px;
    border: 2px solid #060c0e;
    border-radius: 37.037px;
    color: #060c0e;
  }

  &__text {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #060c0e;
  }
}
</style>
