<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>À propos de NDAA</h2>
      <p>
        L'association Gollanade Njobbo Sokhna Adama Aïsse, à vocation
        internationale, à but non lucratif a pour but de promouvoir le vivre
        ensemble et le développement socio-économiques et culturel. Elle œuvre
        pour :
      </p>
      <h2>NDAA VISION</h2>
      <p>
        L'association Gollanade Njobbo Sokhna Adama Aïsse envisage que NDAA
        devienne l'une des principales organisations caritatives au monde, se
        concentrant sur le bien-être de la population avec l'accès aux services
        sociaux de base : l'eau potable, l’hygiène et l’assainissement (puits,
        forages, latrines...);
      </p>

      <p>
        <strong>Education :</strong> scolarisation des filles, réalisations
        d'écoles franco-arabe / daras modernes de référence pour la diversité
        des enseignements, la polyvalence des apprenants et surtout leur offrir
        un accueil digne et protecteur et assurer l'alphabétisation de jeunes en
        rupture de scolarité et d'adultes non instruits,
      </p>
      <p>
        <strong>Santé:</strong> Favoriser l’accès des populations à des soins de
        qualité, soutenir et accompagner l'installation et l'équipement de
        structures de santé et de pouponnières pour recueillir les enfants
        abandonnés et soutenir les filles-mères,
      </p>
      <p>
        <strong>Favoriser l'entreprenariat</strong> à travers des activités
        génératrices de revenus en faveur des femmes, des jeunes et des couches
        vulnérables,
      </p>
      <p>
        <strong>Culture et vulgarisation :</strong> l'association gollanade
        Njobbo Sokhna Adama Aïssé œuvrera pour la promotion de l'œuvre complète
        de Cheikh Alhadj Oumar Foutiyou à travers ses écrits et ses
        enseignements, ceux de sa descendance et de ses disciples mais aussi,
        pour la recherche, l'identification et la rénovation de ses vestiges.
        Elle participera à l'organisation des journées culturelles dédiées au
        Saint homme, dans son village natal Halwaar, et à travers le monde.
      </p>
      <p>
        <strong>Adhésion et moyens :</strong> pour la réalisation de ses
        objectifs, l'association compte sur ses ressources internes, fruit des
        cotisations de ses membres (1000 francs mensuellement), aux retombées de
        ses activités, aux subventions publiques et privées et aux dons et
        libéralités des bonnes volontés.
      </p>
      <p>
        La promotion de l’enseignement de base et le renforcement des capacités
        des orphelins, Là où l'aide est nécessaire, nous voulons que NDAA soit
        la première à apporter son aide.
      </p>
      <h2>NDAA LA MISSION</h2>
      <p>
        L'association Gollanade Njobbo Sokhna Adama Aïsse a fondé le projet NDAA
        pour contribuer à l'éradication de la pauvreté et donner à ces
        communautés les moyens d'un avenir plus durable. Sa mission principale
        est de mené à bien de nombreux projets de création puits, forages,
        latrines d'écoles, daras modernes, d'orphelinats, de logements pour les
        enfants. L'aide aux enfants et aux orphelins nous tiennes
        particulièrement à cœur.
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
 
  margin-top: 4rem;
}
@media (min-width: 64rem) {
  .section__details {
    padding: 1rem 2rem;
    margin-top: 10rem;

    margin-bottom: 4rem;
    height: auto;
    width: 60%;
  }
  footer {
    margin-top: 10rem;
  }
}
</style>
