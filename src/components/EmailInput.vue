<template>
  <div class="email-input">
    <span class="email-input-icon"
      ><svg width="17" height="13" xmlns="http://www.w3.org/2000/svg" fill="#dcdcdc">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13">
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M7.23 9.358a2.02 2.02 0 0 0 1.44.594c.546 0 1.057-.21 1.44-.594l4.235-4.234a2.04 2.04 0 0 0 0-2.88l-.318-.317H3.313l-.317.317a2.021 2.021 0 0 0-.594 1.44c0 .545.21 1.057.594 1.44L7.23 9.358zm8.034-7.09a2.758 2.758 0 0 1-.412 3.364l-4.234 4.234a2.735 2.735 0 0 1-1.948.804c-.738 0-1.43-.285-1.948-.804L2.488 5.632a2.736 2.736 0 0 1-.804-1.948c0-.525.146-1.025.416-1.457-.971.592-.975 1.856-.975 1.856v7.761C1.125 14 3.281 14 3.281 14h10.78c2.156 0 2.156-2.156 2.156-2.156V4.083c0-.994-.46-1.527-.953-1.815z"
          />
        </svg></svg
    ></span>
    <input v-model="value" />
    <div class="email-input-submit-button-wrpper">
      <span class="email-input-submit-button">
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
