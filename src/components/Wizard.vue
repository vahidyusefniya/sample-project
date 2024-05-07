<template>
  <div className="py-5 w-full lg:w-2/3 xl:w-1/2 flex max-w-6xl dark:bg-base-50 mt-16 rounded-lg border dark:border-base-content dark:border-opacity-10 shadow-md dark:bg-opacity-20 flex-col justify-center items-center">
    <img src="../assets/logo.svg" width="145"/>
    
    <div
      className="flex flex-col gap-6 mt-16 w-full justify-center items-center lg:px-20"
      v-if="step === 1"
    > 
      <div class="px-4 w-full flex justify-center flex-col">
        <label>Username:</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        class="textbox w-full" 
        placeholder="Please enter username..."
        v-model="username"/>
      </div>
      <div class="px-4 w-full flex justify-center text-error" v-if="validateMessage !== ''">
        {{ validateMessage }}
      </div>
      <div class="px-4 w-full flex justify-between gap-4">
        <button class="btn btn-outline btn-primary w-full lg:w-1/6" id="btn-prev" disabled>
            Prev
        </button>
        <button class="btn btn-primary w-full lg:w-1/6" id="btn-next" @click="nextStep()">
            Next
        </button>
      </div>
    </div>
    <div
      className="flex flex-col gap-6 mt-16 w-full justify-center items-center lg:px-20"
      v-if="step === 2"
    > 
      <div class="px-4 w-full flex justify-center flex-col">
        <label>Email:</label>
        <input 
        id="email" 
        name="email" 
        class="textbox w-full" 
        placeholder="Please enter email..."
        v-model="email"/>
      </div>
      <div class="px-4 w-full flex justify-center text-error" v-if="validateMessage !== ''">
        {{ validateMessage }}
      </div>
      <div class="px-4 w-full flex justify-between gap-4">
        <button class="btn btn-outline btn-primary w-full lg:w-1/6" id="btn-prev" @click="prevStep()">
            Prev
        </button>
        <button class="btn btn-primary w-full lg:w-1/6" id="btn-next" @click="nextStep()">
            Next
        </button>
      </div>
    </div>
    <div
      className="flex flex-col gap-6 mt-16 w-full justify-center items-center lg:px-20"
      v-if="step === 3"
    >
      <div>
        <h1>Step: review</h1>  
        <div class="flex flex-col">
          <p>Username: valid_username</p>
          <p>Email: user@local.test</p>
          
        </div>
      </div>
      <div class="px-4 w-full flex justify-between gap-4">
        <button class="btn btn-outline btn-primary w-full lg:w-1/6" id="btn-prev" @click="prevStep()">
            Prev
        </button>
        <button class="btn btn-primary w-full lg:w-1/6" id="btn-next" disabled>
            Next
        </button>
      </div>
    </div>
    <Description />
  </div>
</template>

<script>
import Description from './Description.vue'


export default {
  name: 'Wizard',
  components: {
    Description
  },
  data() {
    return {
      username: null,
      email: null,
      step: 1,
      validateMessage: ''
    }
  },

  methods: {
    nextStep () {
      if(this.step === 1){
        if(
          this.username === null || 
          this.username.trim() === '' || 
          this.username.length <= 3 || 
          this.username.length > 15 ||
          (/^[a-z-._[a-z]]*([a-z]+){3,15}$/i.test(this.username))){
            this.validateMessage = 'Invalid Username.'
        }else{
          this.validateMessage = ''
          this.step = 2
        }
      }else if(this.step === 2){
        if(
          this.email === null || 
          !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(this.email))){
            this.validateMessage = 'Invalid email address.'
        }else{
          this.validateMessage = ''
          this.step = 3
        }
      }
    },
    prevStep() {
      this.step = this.step - 1
    }
  }
}

</script>