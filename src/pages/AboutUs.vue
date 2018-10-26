<template>
<div>
    <div id="Main">

        </div>
    <router-view/>
</div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>

#Main h1 {
  color: white;
  font-size: 3em;
  text-shadow: 5px 4px 0px rgba(255, 255, 255, 0.25),
    4px 3px 0px rgba(0, 0, 0, 0.75);
}
#Main h2 {
  font-size: 2em;
  text-shadow: 4px 3px 0px rgba(255, 255, 255, 0.15),
    3px 2px 0px rgba(0, 0, 0, 0.55);
}
#Main {
  color: white;
  display: flex;
  flex-direction: column;
  margin: 20vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/13482867_579265938919457_598618890180263599_o.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=100f8e63eac108e3b80cc4474ac963ec&oe=5C846D39");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
}
</style>
