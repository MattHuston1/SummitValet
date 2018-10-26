<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/11903963_468811816631537_3665392514529807699_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-1.xx&oh=6ef8d6311ad4db7ae94dcca4b236117d&oe=5C813D04");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  /* overflow: hidden; */
}
h1 {
  color: white;
}
</style>
