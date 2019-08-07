<template>
  <div id="app">
    <div class="ui container">
      <div class="ui form">
        <div class="fields">
          <div class="twelve wide field">
            <Search :limit="limit" @getResults="GetResults" />
          </div>
          <div class="four wide field">
            <Limit @limitChanged="LimitChanged" />
          </div>
        </div>
        <div class="field">
          <Gallery :imagesArr="imagesArr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Limit from "./components/Limit.vue";
import Gallery from "./components/Gallery.vue";
import axios from "axios";
import { setTimeout } from "timers";
import api from "../api.json";

export default {
  name: "app",
  data() {
    return {
      limit: "50",
      imagesArr: [],
      history: []
    };
  },
  components: {
    Search,
    Limit,
    Gallery
  },
  methods: {
    initGallery() {
      var images = document.querySelectorAll(".image");
      images.forEach(image => {
        image.addEventListener("click", function() {
          var win = window.open(image.getAttribute("data-src"), "_blank");
          win.focus();
        });
      });
    },
    LimitChanged(limit) {
      this.limit = limit;
    },
    GetResults(term, addHistory) {
      document.getElementById("gallery").classList.add("loading");
      var _this = this;
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${term}&client_id=${api.API_KEY}&per_page=${this.limit}&fit=crop&h=150&w=150`
        )
        .then(res => {
          _this.imagesArr = res.data.results;
          setTimeout(() => {
            _this.initGallery();
            document.getElementById("gallery").classList.remove("loading");
            if (addHistory) {
              _this.addHistory(term);
            }
          }, 1000);
        })
        .catch(err => console.log(err));
    },
    addHistory(term) {
      if (this.history.includes(term.toLowerCase())) return;
      this.history.push(term.toLowerCase());

      Array.prototype.randomElement = function() {
        return this[Math.floor(Math.random() * this.length)];
      };

      var colorsArray = [
        "red",
        "orange",
        "blue",
        "yellow",
        "olive",
        "green",
        "teal",
        "purple",
        "pink"
      ];
      var setTerm = function(setTerm) {
        if (term.length > 11) {
          return term.substr(0, 11) + "...";
        } else {
          return term;
        }
      };
      var randomColor = colorsArray.randomElement();
      var node = document.createElement("A");
      var textnode = document.createTextNode(setTerm(term));
      node.appendChild(textnode);
      node.classList.add("ui", "label", randomColor);
      document.querySelector(".history").prepend(node);

      this.initHistory();
    },
    initHistory() {
      var _this = this;
      document.querySelectorAll("a.ui.label").forEach(el => {
        el.addEventListener("click", function() {
          _this.GetResults(el.innerHTML, false);
        });
      });
    }
  },
  computed: {}
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css");

#app {
  padding-top: 100px;
}
a,
a:hover,
a:visited,
a:focus {
  color: unset;
  text-decoration: none;
}

.camera {
  cursor: pointer;
}
body {
  background: linear-gradient(
      316deg,
      rgba(234, 234, 234, 0.02) 0%,
      rgba(234, 234, 234, 0.02) 16.667%,
      rgba(128, 128, 128, 0.02) 16.667%,
      rgba(128, 128, 128, 0.02) 33.334%,
      rgba(161, 161, 161, 0.02) 33.334%,
      rgba(161, 161, 161, 0.02) 50.001000000000005%,
      rgba(154, 154, 154, 0.02) 50.001%,
      rgba(154, 154, 154, 0.02) 66.668%,
      rgba(77, 77, 77, 0.02) 66.668%,
      rgba(77, 77, 77, 0.02) 83.33500000000001%,
      rgba(10, 10, 10, 0.02) 83.335%,
      rgba(10, 10, 10, 0.02) 100.002%
    ),
    linear-gradient(
      75deg,
      rgba(39, 39, 39, 0.03) 0%,
      rgba(39, 39, 39, 0.03) 20%,
      rgba(232, 232, 232, 0.03) 20%,
      rgba(232, 232, 232, 0.03) 40%,
      rgba(33, 33, 33, 0.03) 40%,
      rgba(33, 33, 33, 0.03) 60%,
      rgba(84, 84, 84, 0.03) 60%,
      rgba(84, 84, 84, 0.03) 80%,
      rgba(112, 112, 112, 0.03) 80%,
      rgba(112, 112, 112, 0.03) 100%
    ),
    linear-gradient(
      103deg,
      rgba(174, 174, 174, 0.03) 0%,
      rgba(174, 174, 174, 0.03) 12.5%,
      rgba(190, 190, 190, 0.03) 12.5%,
      rgba(190, 190, 190, 0.03) 25%,
      rgba(191, 191, 191, 0.03) 25%,
      rgba(191, 191, 191, 0.03) 37.5%,
      rgba(23, 23, 23, 0.03) 37.5%,
      rgba(23, 23, 23, 0.03) 50%,
      rgba(227, 227, 227, 0.03) 50%,
      rgba(227, 227, 227, 0.03) 62.5%,
      rgba(71, 71, 71, 0.03) 62.5%,
      rgba(71, 71, 71, 0.03) 75%,
      rgba(162, 162, 162, 0.03) 75%,
      rgba(162, 162, 162, 0.03) 87.5%,
      rgba(85, 85, 85, 0.03) 87.5%,
      rgba(85, 85, 85, 0.03) 100%
    ),
    linear-gradient(
      355deg,
      rgba(38, 38, 38, 0.02) 0%,
      rgba(38, 38, 38, 0.02) 25%,
      rgba(106, 106, 106, 0.02) 25%,
      rgba(106, 106, 106, 0.02) 50%,
      rgba(28, 28, 28, 0.02) 50%,
      rgba(28, 28, 28, 0.02) 75%,
      rgba(66, 66, 66, 0.02) 75%,
      rgba(66, 66, 66, 0.02) 100%
    ),
    linear-gradient(
      137deg,
      rgba(38, 38, 38, 0.03) 0%,
      rgba(38, 38, 38, 0.03) 25%,
      rgba(211, 211, 211, 0.03) 25%,
      rgba(211, 211, 211, 0.03) 50%,
      rgba(4, 4, 4, 0.03) 50%,
      rgba(4, 4, 4, 0.03) 75%,
      rgba(24, 24, 24, 0.03) 75%,
      rgba(24, 24, 24, 0.03) 100%
    ),
    linear-gradient(
      51deg,
      rgba(253, 253, 253, 0.03) 0%,
      rgba(253, 253, 253, 0.03) 14.286%,
      rgba(103, 103, 103, 0.03) 14.286%,
      rgba(103, 103, 103, 0.03) 28.572%,
      rgba(46, 46, 46, 0.03) 28.572%,
      rgba(46, 46, 46, 0.03) 42.858%,
      rgba(68, 68, 68, 0.03) 42.858%,
      rgba(68, 68, 68, 0.03) 57.144%,
      rgba(116, 116, 116, 0.03) 57.144%,
      rgba(116, 116, 116, 0.03) 71.42999999999999%,
      rgba(248, 248, 248, 0.03) 71.43%,
      rgba(248, 248, 248, 0.03) 85.71600000000001%,
      rgba(174, 174, 174, 0.03) 85.716%,
      rgba(174, 174, 174, 0.03) 100.002%
    ),
    linear-gradient(
      283deg,
      rgba(20, 20, 20, 0.01) 0%,
      rgba(20, 20, 20, 0.01) 14.286%,
      rgba(23, 23, 23, 0.01) 14.286%,
      rgba(23, 23, 23, 0.01) 28.572%,
      rgba(19, 19, 19, 0.01) 28.572%,
      rgba(19, 19, 19, 0.01) 42.858%,
      rgba(134, 134, 134, 0.01) 42.858%,
      rgba(134, 134, 134, 0.01) 57.144%,
      rgba(4, 4, 4, 0.01) 57.144%,
      rgba(4, 4, 4, 0.01) 71.42999999999999%,
      rgba(254, 254, 254, 0.01) 71.43%,
      rgba(254, 254, 254, 0.01) 85.71600000000001%,
      rgba(87, 87, 87, 0.01) 85.716%,
      rgba(87, 87, 87, 0.01) 100.002%
    ),
    linear-gradient(90deg, rgb(168, 1, 206), rgb(20, 120, 203));
}
</style>
