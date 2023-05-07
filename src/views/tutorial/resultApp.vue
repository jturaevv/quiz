<script setup lang="ts"></script>

<template>
  <h2 class="result__title">Ваш результат</h2>
  <div class="result-body">
    <figure class="pie-chart">
      <h3 class="caption-inside">71%</h3>
    </figure>
  </div>
</template>

<style lang="scss">
.pie-chart {
  background: radial-gradient(
      circle closest-side,
      white 0,
      white 52.8%,
      transparent 52.8%,
      transparent 60%,
      #eff5f5 0
    ),
    conic-gradient(#203d48 92%, #203d48 83%, #a9ccd9 75%, #a9ccd9 100%);
  position: relative;
  width: 500px;
  min-height: 350px;
}
.pie-chart .caption-inside {
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  color: #000000;
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  left: 33%;
}
</style>
