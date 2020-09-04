<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>DONNER AVEC NDAA</h2>
      <p>Vous souhaitez faire un don ponctuel ou régulier ?</p>
      <p>
        Chaque franc, dollar, euro que vous donnez à nos projets est si
        significatif et est utilisé intégralement pour aider à assurer un avenir
        durable à des villages entiers pour les générations à venir.
      </p>

      <li>Don général </li>
   <li> Pack alimentaire familial </li>
   <li> Pack de vêtements pour enfants </li>
   <li>Paquets de riz </li> 
   <li>  Puits d'eau, forages, latrines </li>
   <li> Parrainage général des talibés </li>
  <li>  Construction d'une mosquée,</li>
  <li> Construction d'une d'écoles franco-arabe 
    Centre d'éducation
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.section__details {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 4rem;
  margin-top: 4rem;
}
@media (min-width: 64rem) {
  .section__details {
    padding: 18rem 2rem;
    margin-top: 10rem;

    margin-bottom: 2rem;
    height: auto;
    width: 60%;
  }
  footer {
    margin-top: 10rem;
  }
}
</style>
