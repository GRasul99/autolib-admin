<template>
  <div>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tab__selected: index === selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [] // all of the tabs
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    }
  }
}
</script>

<style scoped>
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs__header > li {
  padding: 15px 30px;
  border-radius: 10px;
  display: inline-block;
  margin: 0 5px 0 0;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  font-weight: bolder;
  border: 1px solid;
  color: black;
}
.tab {
  display: inline-block;
  color: black;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  min-height: 400px;
}
</style>
