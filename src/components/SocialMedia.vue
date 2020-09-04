<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>Médias sociaux</h2>
      <p>Tout le soutien ne passe pas par la valeur monétaire.</p>
      <p>
       Les médias sociaux sont devenus une plateforme mondiale sur laquelle nous pouvons tous nous connecter, notre travail a touché des milliers de personnes grâce à nos plateformes. Nous apprécions tous nos supporters pour leur soutien régulier :
      </p>

<p>
Grâce à votre soutien, nous pouvons tous contribuer à maintenir les personnes démunis.
</p>
     <p>
     L’association gollanade Njobbo Sokhna Adama Aïsse est fière d'informer nos donateurs sur tous nos projets. Nous travaillons en étroite collaboration avec nos équipes locales et étrangères pour nous assurer que les mises à jour sur l'avancement des projets sont facilement accessibles. 
Visitez-nous sur les médias sociaux pour connaître les dernières mises à jour sur la façon dont nous changeons la vie des personnes profondément défavorisées
     </p>
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
