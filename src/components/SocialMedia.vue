<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>Médias sociaux</h2>
      <p>Tout le soutien ne passe pas par la valeur monétaire.</p>
      <p>
        Grace à notre plateforme, nous restons connectés avec des milliers de
        personnes un peu partout dans le monde travers les réseaux sociaux. Nous
        apprécions tous nos supporters d’avoir adhéré à notre cause et nous les
        remercions pour leur soutien régulier nous permettant ainsi, de réaliser
        nos objectifs.
      </p>

      <p>
        Grâce à votre soutien, nous pouvons tous contribuer à maintenir les
        personnes démunis.
      </p>
      <p>
        L’association gollanade Njobbo Sokhna Adama Aïsse est fière d'informer
        nos donateurs sur tous nos projets. Nous travaillons en étroite
        collaboration avec nos équipes locales et étrangères pour nous assurer
        que les mises à jour sur l'avancement des projets soient facilement
        accessibles. Suivez-nous sur les réseaux sociaux pour connaître les
        dernières mises à jour de comment avec vos soutiens, nous arrivons à
        changer la vie des populations défavorisées ; ensemble nous pouvons.
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
