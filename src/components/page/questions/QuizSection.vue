<script setup lang="ts"></script>

<template>
  <div class="quiz-section">
    <h1 class="quiz__title">
      Но реплицированные с зарубежных источников, современные исследования
      набирают популярность среди?
    </h1>
    <div class="quiz-body">
      <div class="quiz-block" v-for="item in 4" :key="item">
        <h5 class="quiz__option">A</h5>
        <p class="quiz__text">
          Современные технологии достигли такого уровня, что убеждённость
          некоторых оппонентов говорит о возможностях экспериментов, поражающих по
          своей масштабности и грандиозности.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.quiz-section {
  .quiz {
    &__title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 40px;
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
      border: 2px solid $palette-third-60;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.2s;

      &:hover,
      &.active {
        background: $palette-fourth-10;
        border: 2px solid $primaryColor;
        border-radius: 20px;

        .quiz__option {
          color: $palette-third-55;
          background: $primaryColor;
          border: 2px solid $primaryColor;
        }
      }
    }

    &__option {
      --size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--size);
      height: var(--size);
      min-width: var(--size);
      min-height: var(--size);
      font-size: 18px;
      font-weight: 700;
      border: 2px solid;
      border-radius: 50%;
      transition: 0.2s;
    }

    &__text {
      font-family: "Inter";
      font-weight: 400;
    }
  }
}
</style>
