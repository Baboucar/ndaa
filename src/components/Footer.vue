<template>
  <div class="wrapper">
    <footer>
      <div>
        <h2 class="links">
          <span class="color">Pour paypal</span> : Cliquez
          <span class="color"> ci-dessous.</span>
        </h2>
        <button class="paypal__button">Faire un don</button>
        <p class="links">
          Pour un virement bancaire : <br />
          RIB: Bientôt disponible
        </p>
      </div>

      <div>
        <h2>RESSOURCES</h2>
        <router-link to="/social" class="links">Médias sociaux</router-link>
        <router-link to="/annual" class="links">Rapports annuels</router-link>
        <router-link to="/enterprise" class="links"
          >Partenariats d'entreprises</router-link
        >
      </div>
      <div>
        <h3>REJOIGNEZ-NOUS</h3>
        <router-link to="/contact" class="links">Contactez-nous</router-link>
        <router-link to="/rejoin" class="links">Rejoindre NDAA</router-link>
      </div>
      <div>
        <h3>Contactez-nous</h3>
        <div class="social__links">
          <a
            href=" https://www.facebook.com/Gollanad%C3%A9-Ndjobbo-Sokhna-Adama-Aisse-108292331002026/?view_public_for=108292331002026"
          >
            <img src="/../images/facebook.png" alt="" />
          </a>
          <a
            href="https://twitter.com/gollanade"
          >
            <img src="/../images/twitter.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UC5M7FwW6Hy_hALdmnovH5HQ">
            <img src="/../images/youtube.png" alt="" />
          </a>
          <a
            href=" https://www.instagram.com/p/CEm1ScyBP2I/?igshid=18lykjz9sqz2j"
          >
            <img src="/../images/instagram-sketched.png" alt="" />
          </a>
        </div>
      </div>
      <div>
        <router-link to="/membership" class="paypal__button"
          >J'adhere</router-link
        >
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
  max-width: 100%;
  box-sizing: border-box;
}
.paypal__button {
  background: #ffaf34;
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  text-decoration: none;
  color: $color-primary;
  margin-top: 1rem;
  display: inline-block;
}
.color {
  color: $color-tertiary;
}
.links {
  display: block;
  text-decoration: none;
  color: $color-white;
}
.tele {
  color: $color-white;
}
.social__links {
  a {
    padding: 0.5rem;
  }
  display: flex;

  align-items: center;
}
@media (min-width: 64rem) {
  footer {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
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
