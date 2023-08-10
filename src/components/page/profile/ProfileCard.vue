<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="card-wrapper">
    <div class="card-header">
      <h5 class="card__title">Существующая теория предоставляет</h5>
      <button class="card__btn">
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5013 29.2085C14.1957 28.9029 14.043 28.5141 14.043 28.0418C14.043 27.5696 14.1957 27.1807 14.5013 26.8752L21.0013 20.3752L14.5013 13.8752C14.1957 13.5696 14.043 13.1807 14.043 12.7085C14.043 12.2363 14.1957 11.8474 14.5013 11.5418C14.8069 11.2363 15.1957 11.0835 15.668 11.0835C16.1402 11.0835 16.5291 11.2363 16.8346 11.5418L24.5013 19.2085C24.668 19.3752 24.7863 19.5557 24.8563 19.7502C24.9252 19.9446 24.9596 20.1529 24.9596 20.3752C24.9596 20.5974 24.9252 20.8057 24.8563 21.0002C24.7863 21.1946 24.668 21.3752 24.5013 21.5418L16.8346 29.2085C16.5291 29.514 16.1402 29.6668 15.668 29.6668C15.1957 29.6668 14.8069 29.514 14.5013 29.2085Z"
            fill="#EFF5F5"
          />
        </svg>
      </button>
    </div>
    <div class="card-body">
      <div class="score-wrapper">
        <div class="card__score" v-for="i in 5" :key="i">
          <svg
            v-if="i >= props.score"
            class="full"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="star-shape"
          >
            <path
              d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
    C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
    c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
              fill="#ffffff"
              class="color000000 svgShape"
            ></path>
          </svg>
          <svg
            v-else
            class="empty"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="Star"
          >
            <path
              d="M21.9189453,10.1265259c0.0802612-0.546814-0.2979736-1.0551147-0.8447266-1.135376L15.4228516,8.164978l-2.5253906-5.1464844c-0.0909424-0.1569824-0.2214355-0.2873535-0.37854-0.3781128c-0.4960327-0.2866821-1.1306152-0.1170044-1.4173584,0.3790894L8.5771484,8.164978L2.9257812,8.9912109C2.7097168,9.0228882,2.5100098,9.1244507,2.3569946,9.2802734c-0.387146,0.3943481-0.3812256,1.0278931,0.0131226,1.4150391l4.0927734,4.0126953l-0.9658203,5.6640625c-0.0091553,0.0541992-0.013855,0.1090698-0.0139771,0.1641235c-0.0015259,0.5534058,0.4458618,1.0032959,0.9993286,1.0048218c0.163147-0.0002441,0.3237915-0.0404663,0.4677734-0.1171875L12,18.7539062l5.0488281,2.6689453c0.1951294,0.1035767,0.4190063,0.1396484,0.6367798,0.1025391c0.5441895-0.0928345,0.9100952-0.6091309,0.8173218-1.1533203l-0.9658203-5.6640625l4.09375-4.0137329C21.7861328,10.5414429,21.8872681,10.3421021,21.9189453,10.1265259z M16.6503906,14.1766968c-0.1170654,0.1148682-0.1706543,0.2796631-0.1435547,0.4414062l1.0097656,5.9208984l-5.2832031-2.7930298c-0.1463013-0.0761719-0.3204956-0.0761719-0.4667969,0L6.4833984,20.539978l1.0097046-5.921814c0.0271606-0.1617432-0.0264282-0.3265381-0.1435547-0.4414062L3.0702515,9.9814453l5.9121094-0.8642578C9.1456299,9.0927734,9.286499,8.9898682,9.359375,8.8417969L12,3.460022l2.640564,5.3817139c0.072876,0.1480713,0.2138062,0.2509766,0.3770142,0.2753906l5.9130859,0.8632812L16.6503906,14.1766968z"
              fill="#ffffff"
              class="color000000 svgShape"
            ></path>
          </svg>
        </div>
      </div>
      <div class="card__img">
        <img src="/images/card-img.png" />
      </div>
    </div>
    <div class="card-footer">
      <label class="card-input-wrapper">
        <input class="card__input" type="range" min="0" max="100" />
        <p class="input__title">28%</p>
      </label>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  &-wrapper {
    width: 100%;
    height: 210px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $secondaryColor;
    border-radius: 10px;
    border: 3px solid transparent;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
      border: 3px solid #104664;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
  }

  &__title {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 700;
    line-height: 115%; /* 20.7px */
    color: $pageColor;
  }

  &__btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &-body {
    position: relative;
    display: flex;
    height: 100%;
    align-items: flex-start;

    .score-wrapper {
      position: relative;
      display: flex;
      justify-content: flex-start;
      z-index: 1;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    left: -8%;
    transform: translate(0%, -50%);
    z-index: 0;
  }

  &__score {
    width: 20px;
    height: 20px;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-footer {
    margin-top: 10px;
  }

  &-input-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;

    .input__title {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 115%; /* 16.1px */
      color: #104664;
    }
  }

  &__input {
    width: 220px;
    height: 2px;
  }
}
</style>
