<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2 class="center-text">Ce Que Nous Faisons</h2>
      <p>
        Chez NDAA, nous nous concentrons sur l'amélioration de la vie des
        personnes démunies en leur donnant accès aux nécessités de la vie telles
        qu’un abri, de l'eau potable, de la nourriture et des vêtements.
      </p>
      <p>
        Nos projets visent à soutenir et à aider les communautés à établir un
        avenir durable au profit des générations à venir.
      </p>
      <h2 class="center-text">Notre modèle de durabilité</h2>
      <p>
        Le fondement de notre modèle de durabilité est l'autonomisation des
        enfants et des jeunes adultes par l'éducation. L'éducation vise à mettre
        fin au cycle dévastateur de la pauvreté auquel les communautés
        défavorisées sont confrontées depuis des générations.
      </p>

      <p>
        Nous nous efforçons également de favoriser l’entreprenariat afin de
        créer des opportunités d'emploi permanentes pour les communautés que
        nous servons à travers des activités génératrices de revenus en faveur
        des femmes, des jeunes et des couches vulnérables, les projets que nous
        entreprenons en les employant sur place. De cette manière, nous
        soutenons et facilitons en permanence la durabilité et la croissance
        globales des communautés pauvres que nous servons.
      </p>
      <h2>Nos projets</h2>
      <p>
        Les projets de NDAA vont de la fourniture d'eau potable, l’hygiène et
        l’assainissement (puits, forages, latrines...), l’éducation, santé,
        l’entrepreneuriat, Culture et vulgarisation, de nourriture et de
        vêtements à la construction d'orphelinats et à la création de villages
        entiers. Ils sont menés avec passion par notre équipe dévouée et notre
        objectif de fournir des secours partout où l’aide est nécessaire.
      </p>
    </section>
    <Footer/>
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
@media(min-width:64rem){
       
    .section__details{
        padding: 10.5rem 2rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
        height: auto;
        width:60%;

    }
}
</style>
