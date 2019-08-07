<template>
  <div>
    <div class="ui segment">
      <form class="ui form" @submit.prevent="submitForm">
        <div class="field">
          <label>Search photos</label>
          <input type="text" v-model="term" placeholder="Nature" />
        </div>
        <br />
        <div
          class="inline fields"
          style="margin-bottom: 0px;display: flex;justify-content: space-between;"
        >
          <button class="ui blue button" type="submit">Search</button>
          <div class="ui right floated history"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["limit"],
  data() {
    return {
      term: "",
      data: ""
    };
  },
  methods: {
    submitForm() {
      this.$emit("getResults", this.term, true);
    }
  }
};
</script>

<style>
.history a.ui {
  animation: slide 0.75s ease-out;
  transition-duration: 0.5s;
}

@keyframes slide {
  0% {
    display: none;
    margin-right: 50px;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    margin-right: 0px;
    opacity: 1;
  }
}
</style>
