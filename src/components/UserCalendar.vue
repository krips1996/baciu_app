<template>
  <div class="user-calendar">
    <SingleDatePicker @selectDate="handleSelect" />
  </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker';

export default {
  name: 'UserCalendar',
  components: {
    SingleDatePicker
  },
  methods: {
    handleSelect(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';

.user-calendar {
  padding-top: 30px;

  & .single-date-picker__calendar-view {
    margin: 0 auto;
  }

  & .single-date-picker__calendar-month-header {
    background-image: linear-gradient(to right, $buton-primary-color, $orange) !important;
  }

  & .single-date-picker__arrow {
    position: relative;
    i {
      display: inline-block;
      width: 18px;
      height: 18px;
      opacity: 0;
    }

    &.right {
      transform: rotate(180deg);
    }

    &::before {
      content: '<';
      position: absolute;
      display: block;
      width: 18px;
      height: 18px;
      height: 0;
    }
  }

  & .single-date-picker__date {
    border: 2px solid transparent !important;
    border-radius: 50%;
  }

  & .single-date-picker__date.single-date-picker__selected[data-v-7e5b706c],
  .single-date-picker__date[data-v-7e5b706c]:hover {
    border-color: $orange !important;
    border-radius: 50% !important;
  }

  & .single-date-picker__date.single-date-picker__today[data-v-7e5b706c] {
    background: linear-gradient(to right, $buton-primary-color, $orange) !important;
  }
}
</style>
