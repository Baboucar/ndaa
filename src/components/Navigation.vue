<template>
  <div>
    <div class="flex__nav">
      <header class="container header">
        <!--begin header -->
        <div class="container header__items">
        <router-link to="/">          <img class="header__logo" src="/../images/logo1.png" alt="logo" />
</router-link>
          <span class="menu-button" @click="opennav()">&#9776</span>
          <span href @click="closenav()" class="header__close-btn">&times;</span>
        </div>
      </header>
      <!--end header -->

      <nav class="container nav" role="navigation">
        <!-- begin nav -->

        <router-link to>Accueil</router-link>
        <router-link
          to
          @mouseover.native="hover1=true"
          @mouseleave.native="hover1=false"
        
        >
          À propos de NDAA
          <img class="drop_downicon" src="/../images/menu.png" alt @click="item2Visible = !item2Visible" />
          <div class="toggle__nav" v-if="hover1" v-show="item2Visible">
            <router-link to="/smspro" class="sub__nav--links">NDAA Vision</router-link>
            <router-link to="/smsvocal" class="sub__nav--links">NDAA Mission</router-link>
          </div>
        </router-link>
        <router-link
          to
          @mouseover.native="hover2=true"
          @mouseleave.native="hover2=false"
         
        >
          Ce Que Nous Faisons
          <img class="drop_downicon" src="/../images/menu.png" alt @click="item2Visible = !item2Visible"/>
          <div class="toggle__nav" v-if="hover2" v-show="item2Visible">
            <router-link to="/durable" class="sub__nav--links">Notre modele de durabilite</router-link>
            <router-link to="/smsvocal" class="sub__nav--links">Nos projets</router-link>
          </div>
        </router-link>
        <router-link
          to
          @mouseover.native="hover3=true"
          @mouseleave.native="hover3=false"
          
        >
          Vous pouvez nous Aider
          <img class="drop_downicon" src="/../images/menu.png" alt  @click="item2Visible = !item2Visible"/>
          <div class="toggle__nav" v-if="hover3" v-show="item2Visible">
            <router-link to="/smspro" class="sub__nav--links">Faire un Don</router-link>
            <router-link to="/smsvocal" class="sub__nav--links">Rejoindre NDAA</router-link>
            <router-link to="/smsvocal" class="sub__nav--links">Collecte de fonds</router-link>
          </div>
        </router-link>
        <router-link
          to
          @mouseover.native="hover4=true"
          @mouseleave.native="hover4=false"
          
        >
          Pourquoi NDAA
          <img class="drop_downicon" src="/../images/menu.png" alt @click="item2Visible = !item2Visible"/>
          <div class="toggle__nav" v-if="hover4" v-show="item2Visible">
            <router-link to="/smspro" class="sub__nav--links">Ce que nous distingue</router-link>
            <router-link to="/smsvocal" class="sub__nav--links">Ou vont les fonds</router-link>
          </div>
        </router-link>
        <router-link
          to
          @mouseover.native="hover5=true"
          @mouseleave.native="hover5=false"
          @click.native="togglenav"
        >
          Nos Orphelins
          <img class="drop_downicon" src="/../images/menu.png" alt @click="item2Visible = !item2Visible"/>
          <div class="toggle__nav" v-if="hover5" v-show="item2Visible">
            <router-link to="/smspro" class="sub__nav--links">
              Pourquoi nous aimons
              <br />les Orphelins
            </router-link>
            <router-link to="/smsvocal" class="sub__nav--links">Donner avec NDAA</router-link>
          </div>
        </router-link>
        <router-link to>Faire un Don</router-link>
      </nav>
      <!-- end nav -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      sub: false,
      seenp: false,
       item1Visible:true,
      item2Visible:true
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
  }
}

@include respond-to(tablet-large) {
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
    }
  }
  .flex__nav {
    display: grid;
    grid-template-columns: 1fr 3fr;
    background: $color-primary;
  }
  .header {
    margin-left: auto;
  }
}
</style>