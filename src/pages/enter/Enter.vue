<template>
  <div class="container">
    <div class="title">{{!isRegister ? 'LOGIN' : 'REGISTER'}}</div>
    <div class="forms">
      <UiInput v-if="isRegister" label="User" :has-error="!validity.user" :error-message="errors.user" @changeValue="setUser"></UiInput>
      <UiInput label="Email" type="email" :has-error="!validity.email" :error-message="errors.email" @changeValue="setEmail"></UiInput>
      <UiInput label="Password" type="password" :has-error="!validity.password" :error-message="errors.password" @changeValue="setPassword"></UiInput>
    </div>
    <div class="cta">
      <UiButton :button-text="isRegister ? 'Register' : 'Login'" @click="confirm"></UiButton>
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
import { useRouter } from 'vue-router';
import { noticeService } from '@/reactives/notice.reactive';

const isRegister = ref(false);
const user = ref('');
const email = ref('');
const password = ref('');
const errors = ref({
  user: '',
  email:'',
  password:'',
});
const validity = ref({
  user: true,
  email: true,
  password: true,
});
const router = useRouter();

function confirm(){

  updateErrorMessages();

  if(!isFormValid()){
    noticeService.pushNotification('Login Failed!', 'User name and/or Password is invalid', 'error');
    return;
  }

  router.push({name: 'articles'});
}

function isFormValid() {
  if(isRegister.value){
    return isUsernameValid() && isEmailValid() && isPasswordValid();
  }

  return  isEmailValid() && isPasswordValid();
}

function updateErrorMessages(){
  errors.value.user = (isRegister.value && !isUsernameValid()) ? 'Enter user name is not valid' : '';

  errors.value.email = !isEmailValid() ? 'Entered email is not valid' : '';

  errors.value.password = !isPasswordValid() ? 'Enter password is not valid' : '';
}

function isEmailValid(){
  validity.value.email = email.value && email.value.length > 0 && email.value.toString().includes('@')
  return validity.value.email;
}

function isUsernameValid() {
  validity.value.user = user.value.length > 0;
  return validity.value.user;
}

function isPasswordValid() {
  validity.value.password = password.value.length > 8;
  return validity.value.password;
}

function setEmail(enteredEmail) {
  email.value = enteredEmail;
}

function setPassword(enteredPassword) {
  password.value = enteredPassword;
}

function setUser(enteredUser) {
  user.value = enteredUser;
}

function toggleMode() {
  cleanErrors();
  cleanInputs();
  isRegister.value = !isRegister.value;
}

function cleanInputs() {
  user.value = '';
  email.value = '';
  password.value = '';
}

function cleanErrors() {
  cleanErrorStatus();
  cleanErrorMessages();
}

function cleanErrorStatus() {
  validity.value = {
    user: true,
    email: true,
    password: true,
  }
}

function cleanErrorMessages() {
  errors.value = {
    user: '',
    email: '',
    password: '',
  };
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
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .cta {
      margin-top: 8px;
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

  @media(max-width: 450px){
    .container {
      min-width: unset;
      width: 100%;
    }
  }

</style>