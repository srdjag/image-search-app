<template>
  <div>
    <div id="gallery" class="ui segment">
      <br />
      <br />
      <div class="ui small images _grid" v-if="imagesArr.length > 0">
        <img
          v-for="(image) in imagesArr"
          :key="`${image.id}`"
          class="ui rounded image"
          v-bind:src="image.urls.small"
          v-bind:data-src="image.urls.full"
        />
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["imagesArr"],
  methods: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
._grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px 5px;
}
.image {
  width: 100% !important;
  height: 150px !important;
  object-fit: cover;
  margin: 0px !important;
  cursor: zoom-in;
  transition-duration: 320ms;
}
._grid .image:first-of-type {
  grid-column: 1/3;
  grid-row: 1/3;
  height: 305px !important;
}
._grid .image:nth-child(10) {
  grid-column: 6/8;
  grid-row: 2/4;
  height: 305px !important;
}

._grid .image:nth-child(16n) {
  grid-column: span 2;
  grid-row: span 2;
  height: 305px !important;
}
.image:hover {
  transform: scale(0.95);
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.35);
  z-index: 999;
}
</style>
