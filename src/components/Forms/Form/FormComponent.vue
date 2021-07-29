<template>
  <div class="form-wrapper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <v-form class="form">
      <slot name="form"></slot>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  /* width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  .title {
        margin-bottom: 2rem;
  }
  .form {
    padding: 1rem;
    background-color: white;
    box-shadow: 2px 2px 8px rgb(196 196 196);
    border-radius: 5px;
    .error {
        padding: 15px;
    }
  }
}

</style>