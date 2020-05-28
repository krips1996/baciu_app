<template>
  <nav class="navigation-list">
    <ul>
      <li v-for="item in links" :key="item.text">
        <navigation-item :text="item.text" :link="item.link" />
      </li>
    </ul>
  </nav>
</template>

<script>
import NavigationItem from './NavigationItem.vue';

export default {
  name: 'TheNavigation',
  components: {
    NavigationItem
  },
  data() {
    return {
      links: [
        {
          link: '/articles',
          text: 'Articles'
        },
        {
          link: '/tutotials',
          text: 'Tutorials'
        },
        {
          link: '/design',
          text: 'Design'
        },
        {
          link: '/web-design',
          text: 'Web design'
        },
        {
          link: '/other',
          text: 'Other'
        },
        {
          link: '/contacts',
          text: 'Contacts'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation-list {
  padding: 7px;
  margin-left: 23px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline-block;
      margin-right: 20px;
    }
  }
}
</style>
