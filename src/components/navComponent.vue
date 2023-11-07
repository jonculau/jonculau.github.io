<script setup lang="ts">
import { ref } from 'vue'
const className = ref('menu-container');

const toggleButton = () => {
  if (className.value.includes('show')) {
    className.value = 'menu-container hide';
  } else {
    className.value = 'menu-container show';
  }
}
</script>
<template>
      <header>
    <nav>
      <button class="material-icons toggleButton" @click="toggleButton()">menu</button>
    </nav>
    <div v-bind:class="className" @click="toggleButton()">
      <nav class="menu">
        <h1>Menu</h1>
        <a href="/#" @click="toggleButton()">
          <span class="material-icons">home</span> Home
        </a>
        <a href="/#about-me" @click="toggleButton()">
          <span class="material-icons">description</span> About-me
        </a>
        <a href="/#talk" @click="toggleButton()">
          <span class="material-icons">record_voice_over</span> Talk at events
        </a>
        <a href="https://www.linkedin.com/in/jonathan-culau/">
          <span class="icon i-linkedin"></span>
          Linkedin
        </a>
        <a href="https://taggo.one/jonculau" @click="toggleButton()" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">contact_phone</span> Contato</a>
        <a href="http://lattes.cnpq.br/2734637525366546">
          <span class="icon i-lattes"></span>Lattes
        </a>
        
      </nav>
    </div>
  </header>
</template>

<style scoped>
.menu {
  width: fit-content;
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding-right: 2em;
  padding-left: 1em;
}
.menu-container.hide>.menu{
    animation: menu-disappears 0.2s linear forwards;
}
.menu-container.show>.menu{
    animation: menu-appears 0.2s linear forwards;
}
.menu-container.hide{
    animation: menu-container-hide 0.2s linear forwards;
}
.menu-container.show,.menu-container.hide{
  display: flex;
}


@keyframes menu-appears{
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
}
@keyframes menu-disappears{
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
    
}
@keyframes menu-container-hide{
    from{
       opacity: 1;
    }
    to{
        opacity: 0;
        z-index:-1;
    }
    
}
.menu-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 18, 0.3);
  z-index: 10;
  display: none;
}
.menu *{
  font-size: 1.1em;
}

.menu a:hover{
  color: var(--accent-color);
}
nav.menu>h1{
  font-weight: bold;
  font-size: 1.3em;
  line-height: 2.4rem;
  box-shadow: 0 2px rgba(0,0,0,.2);
  width: 100%;
}
nav {
  position: fixed;
  padding-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1em;
  height: var(--nav-height);
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--background-color);
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

nav a {
  text-decoration: none;
  font-size: 1.5em;
  color: var(--p-color);
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 10px;
  line-height: 2em;
}

.icon {
  --size: 1.1em;
  background-color: var(--p-color);
}
a:hover .icon{
  background-color: var(--accent-color);
}
</style>