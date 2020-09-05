<template>
  <div class="wrapper">
    <footer>
      <div>
    
        <h2 class="links"> <span class="color">Pour paypal</span> : Cliquezs <span class="color"> ci-dessous.</span> </h2>
        <button class="paypal__button">Faire un don</button>
        <p class="links">
        Pour un virement bancaire : <br>
RIB 11112222222222222222222 
        </p>
        <router-link to="/" class="links">Faire un don</router-link>
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
      <div>
      <router-link to="/membership" class="paypal__button">J'adhere</router-link>
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
.paypal__button{
    background:#ffaf34;
    border:none;
    border-radius: 5px;
    padding: .8rem;
    text-decoration: none;
    color: $color-primary;
    margin-top: 1rem;
    display: inline-block;
}
.color{
    color:$color-tertiary;
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
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr ;
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
