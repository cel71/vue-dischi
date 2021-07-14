<template>
  <div id="app">
    <Header/>
    <Main :response="response"/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  },
  data: function () {
    return {
      response: [],
    }
  },
  created () {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then ((result) => {
      this.response = result.data.response
    })
  },
};
</script>

<style lang="scss">

</style>
