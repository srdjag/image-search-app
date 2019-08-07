<template>
  <div>
    <div class="ui segment">
      <div class="ui form" @submit.prevent="limitChanged">
        <div class="field">
          <label>Number of photos</label>
          <input
            type="number"
            v-model="limit"
            min="1"
            max="400"
            placeholder="1-400"
            @change="limitChanged"
          />
          <input
            type="range"
            class="slider"
            v-model="limit"
            min="1"
            max="400"
            @change="limitChanged"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Limit",
  data() {
    return {
      limit: "50"
    };
  },
  methods: {
    limitChanged() {
      this.$emit("limitChanged", this.limit);
    }
  }
};
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin: 20px 0px 20px 0px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #2185d0;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #2185d0;
  cursor: pointer;
}
</style>
