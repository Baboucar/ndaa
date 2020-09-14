<template>
  <div>
  <div>
  </div>
    <div class="flex__nav">
      <header class="container header">
       
        <div class="container header__items">
          <router-link to="/">
            <img class="header__logo" src="/../images/logo1.png" alt="logo" />
          </router-link>
          <span class="menu-button" @click="opennav()">&#9776</span>
          <span href @click="closenav()" class="header__close-btn">&times;</span>
        </div>
      </header>
    

      <nav class="container nav" role="navigation">
     

        <router-link to="/">Accueil</router-link>
        <router-link to="mission">À propos de NDAA</router-link>
        <router-link to="/project">Ce Que Nous Faisons</router-link>
        <router-link to="/pouvez">Vous pouvez nous Aider</router-link>
        <router-link to="/pourquoi">Pourquoi NDAA</router-link>
        <router-link to="/orphane">Nos Orphelins </router-link>
        <router-link to="">Faire un Don</router-link>
      </nav>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sub: false,
      seenp: false,
      item1Visible: true,
      item2Visible: true,
    };
  },
  methods: {
    opennav() {
      document.querySelector(".nav").style.left = "0";
      document.querySelector(".header__close-btn").style.display = "block";
    },

    closenav() {
      document.querySelector(".nav").style.left = "-950px";
      document.querySelector(".header__close-btn").style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.flex__nav {
  background: $color-primary;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 1rem 0;
}

.sub__nav--links {
  display: block;
  text-decoration: none;
  font-size: 0.7rem;
  padding: 0.5rem;
  color: $color-black;
}

.header__items {
  display: flex;
  align-items: center;
}
.menu-button {
  margin-left: auto;
  color: $color-white;
  font-size: 1.5rem;
  cursor: pointer;
}
.block__nav {
  outline: 2px solid;
  display: block;
}
.header__close-btn {
  position: absolute;
  z-index: 1;
  right: 0;
  margin-right: 1rem;
  font-size: 2rem;
  color: $color-black;
  text-decoration: none;
  cursor: pointer;
  display: none;
}
.nav {
  background: $color-primary;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  padding-top: 4rem;

  left: -950px;
  transition: all ease 0.5s;
}
.nav {
  a {
    display: block;
    text-decoration: none;

    padding: 1rem;
    color: $color-white;
    font-weight: bold;
    margin-right: 2rem;
    &:hover{
      color:$color-secondary;
    }
  }
}

@include respond-to(screen-small) {
  .menu-button {
    display: none;
  }

  .toggle__nav {
    position: fixed;
    background: $color-primary;

    display: block;
    padding: 1rem;
  }
  .drop_downicon {
    margin-bottom: -0.1rem;
  }
  .nav {
    position: static;
    background: $color-primary;
    text-align: right;
    padding: 0;
    a {
      display: inline-block;
      margin-right: 1rem;
      padding: 0.5rem;
    }
  }
  .flex__nav {
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: $color-primary;
  }
  .header {
    margin-left: auto;
  }
}
</style>