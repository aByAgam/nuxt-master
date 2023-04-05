<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: 'msg',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span>
    <button>
      {{ props.msg }}
    </button>
  </div>
</template>
