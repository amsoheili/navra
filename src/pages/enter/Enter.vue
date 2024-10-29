<template>
  <div class="container">
    <div class="title">{{!isRegister ? 'LOGIN' : 'REGISTER'}}</div>
    <div class="forms">
      <UiInput v-if="isRegister" label="User" :has-error="false" error-message="" @changeValue="setUser"></UiInput>
      <UiInput label="Email" type="email" :has-error="false" error-message="" @changeValue="setEmail"></UiInput>
      <UiInput label="Password" type="password" :has-error="false" error-message="" @changeValue="setPassword"></UiInput>
    </div>
    <div class="cta">
      <UiButton :button-text="isRegister ? 'Register' : 'Login'"></UiButton>
    </div>
    <div class="change-side">
      <div class="question">
        {{!isRegister ? 'Don’t have account?' : 'Already Registered?'}}
      </div>
      <div class="action" @click="toggleMode">
        {{!isRegister ? 'Login' : 'Register Now'}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';

const isRegister = ref(false);
const user = ref('');
const email = ref('');
const password = ref('');

function setEmail(enteredEmail) {
  email.value = enteredEmail;
}

function setPassword(enteredPassword) {
  password.value = enteredPassword;
}

function setUser(enteredUser) {
  user.value = enteredUser;
}

function toggleMode(){
  isRegister.value = !isRegister.value;
}

</script>

<style scoped>
  .container {
    background-color: var(--silver);
    padding: 37px 20px 19px 20px;
    min-width: 450px;

    .title {
        font-size: 47px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        color: var(--warm-grey);
    }

    .forms {
      margin-top: 50px;
    }

    .change-side {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      margin-top: 15px;
      gap: 12px;

      .action {
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        color: var(--charcoal-grey);
        cursor: pointer;
      }

    }

  }


</style>