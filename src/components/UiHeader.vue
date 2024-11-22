<template>
  <div class="ui-header">
    <div class="titles">
      <div class="main-title">Arvan Challenge</div>
      <div class="greeting-title">Welcome {{props.username}}</div>
    </div>
    <div class="cta">
      <ui-button button-type="b-black" button-text="Logout" @click="logout"></ui-button>
    </div>
  </div>
</template>

<script setup>
import UiButton from '@/components/UiButton.vue';
import { UserService } from '@/services/user.service';
const props = defineProps(['username']);
const userService = UserService();

function logout() {
  userService.logoutUser();
}
</script>

<style>
  .ui-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: var(--charcoal-grey);
    padding: 17px 20px;

    .titles {
      display: flex;
      flex-direction: row;
      gap: 20px;

      .main-title {
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.23;
        letter-spacing: normal;
        text-align: left;
        color: var(--white);
        display: flex;
      }

      .greeting-title {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.13;
        letter-spacing: normal;
        color: var(--white);
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    }

    .cta {
      width: 86px;
    }
  }

  @media(max-width: 744px){
    .ui-header {
      flex-direction: column-reverse;

      .titles {
        flex-direction: column;
        margin-top: 16px;

        .main-title, .greeting-title {
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>