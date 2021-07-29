<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="10" sm="6" lg="6" class="mx-auto">
          <v-card>
            <v-navigation-drawer
              permanent
              expand-on-hover
            >
              <v-list>
                <v-list-item class="px-2">
                  <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{userLogged}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{userLogged}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
             
              <v-list
                nav
                dense
              >
                <v-list-item 
                link
                @click="logOut()"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>LogOut</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Home",
  methods: {
    logOut(){
       auth.deleteUserLogged()
       this.$router.push('/login')
    }
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    }
  },
  created(){
    this.userLogged
  }
};
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
