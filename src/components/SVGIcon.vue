<template>
  <span class="social-media-icon">
    <template v-if="type === iconTypes.DRIBBBLE">
      <svg width="25" height="24" xmlns="http://www.w3.org/2000/svg" fill="#bb341b">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M12.913 23.842c-6.187 0-11.22-5.034-11.22-11.221s5.033-11.22 11.22-11.22 11.22 5.033 11.22 11.22-5.033 11.22-11.22 11.22zm9.463-9.685c-.328-.103-2.967-.89-5.97-.41 1.253 3.445 1.764 6.25 1.862 6.834a9.601 9.601 0 0 0 4.108-6.424zm-5.72 7.301c-.142-.84-.698-3.771-2.044-7.268l-.063.021c-5.406 1.884-7.346 5.633-7.519 5.986a9.537 9.537 0 0 0 5.883 2.023 9.531 9.531 0 0 0 3.744-.762zM5.794 19.044c.217-.372 2.847-4.727 7.79-6.325.125-.04.25-.078.378-.114-.241-.544-.503-1.09-.777-1.626-4.787 1.432-9.431 1.373-9.85 1.364a9.546 9.546 0 0 0 2.459 6.701zM3.53 10.673c.429.005 4.377.023 8.86-1.168a61.17 61.17 0 0 0-3.553-5.543 9.62 9.62 0 0 0-5.307 6.71zm7.136-7.355a51.175 51.175 0 0 1 3.576 5.61c3.408-1.277 4.85-3.216 5.023-3.461a9.578 9.578 0 0 0-8.6-2.149zm9.665 3.257c-.202.273-1.809 2.332-5.352 3.779a29.623 29.623 0 0 1 .842 1.883c3.19-.401 6.358.241 6.674.308a9.539 9.539 0 0 0-2.164-5.97z"
          />
        </svg>
      </svg>
    </template>
    <template v-else-if="type === iconTypes.FACEBOOK">
      <svg width="11" height="21" xmlns="http://www.w3.org/2000/svg" fill="#bb341b">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="21">
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M7.172 21.816h-4.1v-9.924H1.024v-3.42h2.048V6.42c0-2.79 1.157-4.448 4.443-4.448h2.736v3.42h-1.71c-1.28 0-1.363.478-1.363 1.37l-.006 1.712h3.099l-.363 3.42H7.172v9.923z"
          />
        </svg>
      </svg>
    </template>
    <template v-else-if="type === iconTypes.RSS">
      <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" fill="#bb341b">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M1.47 9.692c1.866 0 3.62.73 4.938 2.054a7 7 0 0 1 2.047 4.971h2.874c0-5.458-4.422-9.9-9.859-9.9v2.875zm.005-5.096c6.648 0 12.058 5.44 12.058 12.124h2.874c0-8.27-6.698-14.998-14.932-14.998v2.874zM5.45 14.712a1.991 1.991 0 1 1-3.982 0 1.991 1.991 0 0 1 3.982 0z"
          />
        </svg>
      </svg>
    </template>
    <template v-else-if="type === iconTypes.TWITTER">
      <svg width="26" height="19" xmlns="http://www.w3.org/2000/svg" fill="#bb341b">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19">
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M25.786 9.446c-.868.148-2.127-.006-2.794-.284 1.386-.115 2.325-.745 2.686-1.6-.5.308-2.05.643-2.906.324a10.387 10.387 0 0 0-.137-.566c-.651-2.399-2.886-4.331-5.226-4.097.188-.077.38-.148.573-.213.257-.092 1.769-.339 1.531-.872-.201-.47-2.049.353-2.396.462.459-.172 1.218-.47 1.3-.998a3.663 3.663 0 0 0-1.928.914c.193-.208.339-.46.37-.733-1.877 1.2-2.973 3.618-3.86 5.966-.696-.676-1.315-1.209-1.868-1.505-1.553-.833-3.411-1.703-6.326-2.787-.09.966.477 2.25 2.108 3.104-.353-.048-1 .059-1.516.182.21 1.107.898 2.018 2.761 2.459-.851.056-1.292.25-1.69.668.388.77 1.335 1.675 3.036 1.489-1.893.817-.772 2.329.768 2.103-2.626 2.717-6.768 2.516-9.146.245 6.209 8.47 19.707 5.008 21.717-3.15 1.509.013 2.393-.522 2.943-1.111z"
          />
        </svg>
      </svg>
    </template>
  </span>
</template>

<script>
import ICON_TYPES from '../utils/constants/iconTypes';

export default {
  name: 'SVGIcon',
  props: {
    type: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      iconTypes: null
    };
  },
  created() {
    this.iconTypes = ICON_TYPES;
  }
};
</script>
