<template>
  <div class="login-view flex-center">
      <v-container>
          <v-row>
              <v-col cols="12" sm="8" lg="5" class="mx-auto">
                  <login-component></login-component>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import LoginComponent from '../components/Forms/Login/LoginComponent.vue'
export default {
    name: 'Login',
    components: {LoginComponent},
}
</script>
<style lang="scss" scoped>
.flex-center{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
