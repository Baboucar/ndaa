<template>
  <div class="wrapper">
    <footer>
      <div>
        <h3>FAIRE UN DON PAR TÉLÉPHONE AU</h3>
        <p class="tele">+33 6 20278228</p>
        <p class="links">Pour paypal : Cliquez ci-dessous. </p>
        <p class="links">
        Pour un virement bancaire : <br>
RIB 11112222222222222222222 
        </p>
        <router-link to="/" class="links">Faire un don</router-link>
      </div>

      <div>
        <h3>À PROPOS DE NOUS</h3>
        <router-link to class="links">Nos vision</router-link>
        <router-link to class="links">Nos missions</router-link>
        <router-link to class="links">Rappots annuels</router-link>
      </div>

      <div>
        <h2>RESSOURCES</h2>
        <router-link to class="links">Médias sociaux</router-link>
        <router-link to="" class="links">Rapports annuels</router-link>
        <router-link to="" class="links"
          >Partenariats d'entreprises</router-link
        >
      </div>
      <div>
        <h3>REJOIGNEZ-NOUS</h3>
        <router-link to="/contact" class="links">Contactez-nous</router-link>
        <router-link to class="links">Rejoindre NDAA</router-link>
        <router-link to class="links">Faire un don</router-link>
      </div>
      <div>
        <h3>Contactez-nous</h3>
        <div class="social__links">
        <a href=""> <img src="/../images/facebook.png" alt="" /> </a>
        <a href="http://"> <img src="/../images/twitter.png" alt="" /> </a>
        <a href=""> <img src="/../images/youtube.png" alt="" /> </a>
        <a href=""> <img src="/../images/instagram-sketched.png" alt="" /> </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
footer {
  background: $color-primary;
  padding: 1rem;
  width: 100%;
}
.links {
  display: block;
  text-decoration: none;
  color: $color-white;
}
.tele {
  color: $color-white;
}
.social__links{
    a{
  padding: .5rem;
    }
    display: flex;
   
    align-items: center;
  
}
@media (min-width: 64rem) {
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 90%;
    margin: 0 auto;
  }
  .wrapper {
    background: $color-primary;
  }
  .links {
    padding-top: 0.5rem;
  }
}
</style>
