<template>
  <div class="navbar">
    <div @click="$router.push('/')">My APP</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">
        О сайте
      </my-button>
      <my-button @click="$router.push('/store')">Посты с хранилищем</my-button>
      <my-button @click="$router.push('/composition')">Посты с композицией</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton}
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightblue;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
