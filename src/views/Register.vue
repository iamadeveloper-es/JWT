<template>
  <div class="register flex-center">
      <v-container>
          <v-row>
              <v-col cols="12" sm="8" lg="5" class="mx-auto">
                <register-component></register-component>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import RegisterComponent from "../components/Forms/Regsiter/RegisterComponent.vue"


export default {
    name: 'Register',
    components:{RegisterComponent}
    
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