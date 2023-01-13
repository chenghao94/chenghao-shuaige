<template>
  <div class="scroll-rect">
    <number-item v-for="(item,index) in numArr" :key="index" :i="item" :delay="(index+1)*0.1"></number-item>
  </div>
</template>

<script>
import NumberItem from "./number-item";

export default {
  name: "ScrollNumber",
  components: { NumberItem },
  props: {
    value: {
      type: Number,
      default: 6
    }
  },
  computed: {
    numArr() {
      const str = String(this.value);
      let arr = [];
      for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
      }
      return arr;
    }
  },
  methods: {},
  mounted() {
  }
};
</script>
<style scoped>
.scroll-rect {
  display: flex;
}
</style>
