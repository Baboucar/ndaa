<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>Publications et rapports.</h2>
      <p>Des rapports réguliers et transparents sur nos activités, nos opérations et nos performances, sont un moyen important de démontrer notre responsabilité envers les autres.</p>
      <h2>Rapports annuels</h2>
      <p>
     Le rapport annuel présente les activités et les résultats de NDAA pour l'exercice financier allant du 1er janvier au 31 décembre, les progrès réalisés par rapport aux objectifs de l'organisation, les points forts de nos initiatives d'aide, de développement et de défense des droits, ainsi que notre situation et nos résultats financiers
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
