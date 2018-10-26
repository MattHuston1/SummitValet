<template>
  <div id="app">
    <Header />
    <!-- <img src="./assets/summitLogo.png" alt=""> -->
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
    url("./assets/SummitCar.jpg");
  /* background-size: 100% 100%; */
  background-size: cover;
  /* /* width: 100%; */
  /* height: auto;  */
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
h1 {
  color: white;
}
</style>
