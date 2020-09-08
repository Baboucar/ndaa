<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>POURQUOI NDAA</h2>
      <p>
        L’association gollanade Ndjobbo Sokhna Adama Aïsse fait les choses
        différemment et nous en sommes fiers. Nous nous efforçons de faire la
        différence pour les personnes dans le besoin en adoptant l'approche la
        plus efficace et la plus efficiente.
      </p>
      <p>
        Notre spécificité réside dans la transparence de nos projets. La façon
        dont nous fournissons à nos donateurs des informations sur les progrès
        réalisés à chaque étape nous distingue également des autres
        organisations. Nous disposons d'une équipe diversifiée, expérimentée et
        passionnée par ce que nous faisons. Nous nous attachons à développer
        notre réputation dans le secteur caritatif, à renforcer nos partenariats
        et à développer les communautés que nous servons.
      </p>
      <h2>CE QUI NOUS DISTINGUE</h2>
      <p>
        Nous gérons tous les projets nous-mêmes du début à la fin. Cela signifie
        que nous sommes directement impliqués dans l'exécution du projet à
        chaque étape sans l'intervention de tiers. Nous utilisons des modèles
        internes, ce qui signifie qu'aucun intermédiaire n'est impliqué. Si nous
        ne pouvons pas le contrôler, nous n'y participerons pas
      </p>
      <p>
        Nos talibés, orphelins sont notre principale préoccupation. Nos
        donateurs sont au premier plan de tout ce que nous faisons. Nous sommes
        fiers de tenir nos donateurs au courant, car nous nous efforçons de
        partager le voyage et l'expérience ensemble.
      </p>
      <p>
        Nous sommes très expérimentés sur le terrain et nous veillons à ce que
        chaque franc, euro, dollar fasse une différence. Notre équipe et nos
        dirigeants sont passionnés et déterminés à faire une différence pour
        ceux qui sont dans le besoin.
      </p>
      <h2>OÙ VONT LES FONDS</h2>
      <p>
      NDAA depuis sa création, a veillé à ce que toutes les ressources soient utilisées au maximum de leur potentiel pour que le plus grand nombre possible de personnes puissent en bénéficier.

Notre principal objectif est le développement et la durabilité, en fournissant aux talibés, aux orphelins, aux femmes, et l’alphabétisation de jeunes en rupture de scolarité et d'adultes non instruits, et des couches vulnérables, une base qu'ils pourront utiliser pendant des générations. En construisant des écoles franco-arabe et en donnant aux élèves les moyens de réaliser leurs objectifs et leurs rêves, nous espérons mettre fin au cercle vicieux de la pauvreté.

      </p>

      <p><strong>A tous ceux qui ont fait un don, soyez fiers de vous et réalisez que leur maison à Jannah se construit en même temps. Aucun don n'est trop petit, n'y pensez pas à deux fois, même un dollar fera la différence.</strong></p>
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

  margin-top: 4rem;
}
@media (min-width: 64rem) {
  .section__details {
    padding: 1rem 2rem;
    margin-top: 10rem;
    margin-bottom: 5rem;
    height: auto;
    width: 60%;
  }

}
</style>
