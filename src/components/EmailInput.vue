<template>
  <div class="email-input">
    <input v-model="value" />
    <div class="submit-button-wrpper">
      <span class="submit-button">
        <slot>Join</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  }
};
</script>
