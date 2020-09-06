<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>Pourquoi nous aimons les talibés et les orphelins ?</h2>
      <p>
        Pourvoir aux besoins des enfants talibés et des orphelins nous tiennes
        particulièrement à cœur. Grâce à votre aide, ces enfants ne resteront
        plus dans le dénuement et n'auront plus personne sur qui compter, même
        pour les besoins les plus élémentaires de la vie. Pour seulement 5 euro
        par mois, vous pouvez fournir à un talibés, ou un orphelin des soins de
        santé, des vêtements, de la nourriture, un logement, une éducation et
        des activités de loisirs. Notre équipe fournit également un réseau de
        soutien composé de mentors et de tuteurs sur lesquels les talibés et les
        orphelins peuvent compter, les aidant à grandir et à devenir de jeunes
        adultes.
      </p>
      <h2>DONNER AVEC NDAA</h2>
      <p>Vous souhaitez faire un don ponctuel ou régulier ?</p>
      <p>
      Chaque franc, euro, dollar que vous donnez à nos projets est si significatif et est utilisé intégralement pour aider à assurer un avenir durable à des populations entières pour les générations à venir.
      </p>
      <h2>Notre Prophète</h2>
     <div class="center-text">
      <p>Qu'Allah le bénisse et lui accorde la paix, dit-il :</p>
      <p>"Moi et le gardien d'un orphelin, nous serons dans le Jardin comme ces deux-là."</p>
      <p>
       (Ses deux doigts)
      </p>
            <p class="right">Sahih (Al-Albani)</p>

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

.section__details {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 1rem;
  margin-top: 4rem;
}
@media (min-width: 64rem) {
  .section__details {
    padding: 1rem 2rem;
    margin-top: 14rem;

    margin-bottom: 10rem;
    height: auto;
    width: 60%;
  }
  .right{
      text-align: right;
      font-weight: bold;
  }
}
</style>
