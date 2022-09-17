<template>
  <TheHeader id="TheHeader"></TheHeader>
  <TheMain id="TheMain"></TheMain>
  <TheFooter id="TheFooter"></TheFooter>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader, 
    TheFooter, 
    TheMain
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/** Universal Styling */
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;

}

body {
  margin: 0;

}
#app {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 200px auto 150px;
  grid-template-areas: 
    "header header header"
    ". main ."
    "footer footer footer";
  background-color: rgb(255, 144, 255);
}

#TheHeader {
  grid-area: header;
}

#TheMain {
  grid-area: main;
}

#TheFooter {
  grid-area: footer;
}
</style>
