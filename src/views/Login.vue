<template>
  <div class="login">
      <v-container>
          <v-row>
              <v-col cols="12" sm="8" lg="5" class="mx-auto">
                <div class="title">
                    <h3>Login</h3>
                </div>
                <v-form
                class="form"
                @submit.prevent="login()"
                lazy-validation
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
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'Login',
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
        login(){
            this.error = true
            console.log(this.validation)
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.title{
    margin-bottom: 2rem;
}
.form{
    padding: 1rem;
    background-color: white;
    box-shadow: 2px 2px 8px rgb(196 196 196);
    border-radius: 5px;
    .error{
        padding: 15px;
    }
}
</style>