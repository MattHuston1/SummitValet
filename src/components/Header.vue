<template>
    <div id="Header">
        <nav>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/about">About Us</router-link>
        </nav>
        <div>
            <router-link to="/"><img src="https://i.imgur.com/teFrknW.png" id="logo" alt=""></router-link>
        </div>
        <!-- <router-link to="/"><h1>Summit Valet</h1></router-link> -->
        <nav>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/about">About Us</router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#Header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vw;
  margin-bottom: 10%;
}
#Header h1:active {
  transition: 0.4s;
  color: cadetblue;
}
#Header h1 {
  transition: 0.4s;
  margin-left: 2vw;
  text-shadow: 5px 4px 0px rgba(255, 255, 255, 0.25),
    4px 3px 0px rgba(0, 0, 0, 0.75);
}
#logo {
  display: flex;
  margin-left: 2vw;
  height: 12vw;
}
nav {
  margin: 5vw;
  display: flex;
}
nav a {
  transition: 0.2s;
  font-size: 1.5vw;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  /* border: 2px solid white; */
  border: 2px solid rgb(55, 130, 190);
  padding: 2vw;
  margin: 2vw;
  /* color: white; */
  color: rgb(237, 80, 40);
  display: flex;
}
nav a:hover {
  transition: 0.2s;
  /* background-color: white; */
  background-color: rgb(237, 80, 40);
  /* color: black; */
  color: rgb(55, 130, 190);
  /* box-shadow: inset 0 0 0 3px white; */
  box-shadow: inset 0 0 0 3px rgb(55, 130, 190);
}
nav a:active {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  border-style: hidden;
  /* color: white; */
  color: rgb(237, 80, 40);
  /* color: rgb(55, 130, 190) */
}
a {
  text-decoration: none;
}
</style>
