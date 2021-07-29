<template>
  <div class="login">
      <form-component>
          <div slot="title">
              <h3>Login</h3>
          </div>
          <div slot="form">
            <v-form
            class="form"
            lazy-validation
            @submit.prevent="login()"
            >
                <v-text-field
                label="Email"
                v-model="validation.email"
                ></v-text-field>
                <v-text-field
                label="Password"
                v-model="validation.password"
                ></v-text-field>
                <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                <v-btn
                color="primary"
                class="mr-4"
                type="submit"
                >
                Login
                </v-btn>
            </v-form>
          </div>
      </form-component>
  </div>
</template>

<script>
import auth from '@/logic/auth.js'
import FormComponent from '../Form/FormComponent.vue'
export default {
  components: { FormComponent },
  data(){
        return{
            validation:{
                email: '',
                password: ''
            },
            error: false
        }
    },
    methods:{
        async login(){
            try{
                const response = await auth.login(this.validation.email, this.validation.password)
                console.log(response)
                const email = this.validation.email
                auth.setUserLogged(email)
                this.$router.push('/')
            }
            catch(err){
                console.log(err)
                this.error = true
            }
            
        }
    }

}
</script>

<style>

</style>