<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>REJOINDRE NDAA</h2>
      <p>
        Si vous êtes passionné par l'aide aux personnes dans le besoin et que
        vous cherchez à mettre vos compétences à profit, nous serions ravis que
        vous rejoigniez notre association gollanade Ndjobbo Sokhna Adama Aïsse !
        Nous sommes constamment à la recherche de professionnels dynamiques et
        motivés pour élargir notre équipe dans des domaines liés à
        l'informatique, aux affaires, à la comptabilité et à l'administration
        générale.
      </p>
      <p>
        Nous vous remercions de l'intérêt que vous portez à notre equipe
        gollanade Ndjobbo Sokhna Adama Aïsse, nous n'avons pas de postes
        disponibles pour le moment. Si vous souhaitez être informé de nos futurs
        postes vacants, veuillez envoyer votre CV et votre lettre de motivation.
      </p>

      <div class="contact">
        <router-link to="/contact" class="contact__btn"
          >Contactez-nous</router-link
        >
      </div>
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
.contact__btn {
  background: $color-primary;
  color: $color-white;
  position: relative;
  width: 7rem;
  padding: 0.8rem;
  text-decoration: none;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}
.section__details {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 1rem;
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
