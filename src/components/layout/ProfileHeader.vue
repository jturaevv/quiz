<script setup lang="ts">
import { ref } from 'vue'
import MainLogo from '@/components/layout/MainLogo.vue'
import BaseInput from '@/ui/BaseInput.vue'
import BaseButton from '@/ui/BaseButton.vue'

const searchItem = ref('')
</script>

<template>
  <div class="profile-header">
    <main-logo class="header__logo" />
    <div class="search-bar">
      <base-button class="notification__btn">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 8.12501C26.25 10.5375 24.2875 12.5 21.875 12.5C19.4625 12.5 17.5 10.5375 17.5 8.12501C17.5 5.71251 19.4625 3.75001 21.875 3.75001C24.2875 3.75001 26.25 5.71251 26.25 8.12501ZM23.75 14.7375C23.125 14.9 22.5 15 21.875 15C20.0527 14.9967 18.3059 14.2713 17.0173 12.9827C15.7287 11.6941 15.0033 9.94736 15 8.12501C15 6.28751 15.725 4.62501 16.875 3.38751C16.6482 3.10943 16.3621 2.88547 16.0378 2.73194C15.7134 2.5784 15.3589 2.49917 15 2.50001C13.625 2.50001 12.5 3.62501 12.5 5.00001V5.36251C8.7875 6.46251 6.25 9.87501 6.25 13.75V21.25L3.75 23.75V25H26.25V23.75L23.75 21.25V14.7375ZM15 28.75C16.3875 28.75 17.5 27.6375 17.5 26.25H12.5C12.5 26.913 12.7634 27.5489 13.2322 28.0178C13.7011 28.4866 14.337 28.75 15 28.75Z"
            fill="#9AC0C0"
          />
        </svg>
      </base-button>
      <base-input
        v-model="searchItem"
        type="search"
        title="Что ищешь?"
        color="#EB6440"
        outlined
        class="input"
      ></base-input>
      <svg
        class="search__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5005 14H14.7105L14.4305 13.73C15.0554 13.0039 15.5122 12.1487 15.768 11.2256C16.0239 10.3024 16.0725 9.33413 15.9105 8.38998C15.4405 5.60998 13.1205 3.38997 10.3205 3.04997C9.33608 2.92544 8.33625 3.02775 7.39749 3.34906C6.45872 3.67038 5.60591 4.20219 4.90429 4.90381C4.20268 5.60542 3.67087 6.45824 3.34955 7.397C3.02823 8.33576 2.92593 9.33559 3.05046 10.32C3.39046 13.12 5.61046 15.44 8.39046 15.91C9.33462 16.072 10.3029 16.0234 11.2261 15.7675C12.1492 15.5117 13.0044 15.0549 13.7305 14.43L14.0005 14.71V15.5L18.2505 19.75C18.6605 20.16 19.3305 20.16 19.7405 19.75C20.1505 19.34 20.1505 18.67 19.7405 18.26L15.5005 14ZM9.50046 14C7.01046 14 5.00046 11.99 5.00046 9.49997C5.00046 7.00997 7.01046 4.99997 9.50046 4.99997C11.9905 4.99997 14.0005 7.00997 14.0005 9.49997C14.0005 11.99 11.9905 14 9.50046 14Z"
          fill="#EB6440"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 10px 110px;
  border-bottom: 2px solid $palette-third-60;

  .search-bar {
    position: relative;
    display: flex;
    align-items: center;

    .search__icon {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }

  .input .field__input {
    padding: 12px 45px 12px 12px;
    border: 1px solid $primaryColor;
    border-radius: 10px;
  }

  .base-button {
    border: none;
    background-color: transparent;
  }
}
</style>
