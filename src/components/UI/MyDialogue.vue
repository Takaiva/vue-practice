<template>
  <div class="dialogue" v-if="show" @click="hideDialogue">
    <div @click.stop class="dialogue-content">
      <slot />
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialogue",
  mixins: [toggleMixin]
};
</script>

<style scoped>
.dialogue {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialogue-content {
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>
