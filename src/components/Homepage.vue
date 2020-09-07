<template>
  <div>
    <Navigation />
    <div class="slide">
      <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        ref="slider"
      >
        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <template>
          <flux-caption />
        </template>

        <template v-slot:controls>
          <flux-controls />
        </template>

        <template v-slot:pagination>
          <flux-pagination />
        </template>

        <template v-slot:index>
          <flux-index />
        </template>
      </vue-flux>
    </div>
    <div>
      <section class="container">
        <h1 class="center-text title">NDAA</h1>
        <p class="center-text spacer-1">
          L'association gollanade Njobbo Sokhna Adama Aïsse,
          <br />à vocation internationale, à but non lucratif a pour but
          <br />de promouvoir le vivre ensemble et le <br />développement
          socio-économiques et culturel. Elle œuvre pour :
        </p>
        <div class="cards">
          <div class="card">
            <img src="/../images/services1.png" alt />
            <div>
              <h3>EDUCATION</h3>
              <p>
                Scolarisation des filles, réalisations d'écoles franco-arabe /
                daras modernes de référence pour la diversité des enseignements,
                la polyvalence des apprenants et surtout leur offrir un accueil
                digne et protecteur et assurer l'alphabétisation de jeunes en
                rupture de scolarité et d'adultes non instruits.
              </p>
            </div>
          </div>

          <div class="card">
            <img src="/../images/services-2-population.png" alt />
            <div>
              <h3>LA POPULATION</h3>
              <p>
                L'accès des populations aux services sociaux de base: l'eau
                potable, l’hygiène et l’assainissement (puits, forages,
                latrines...); la promotion de l’enseignement de base et le
                renforcement des capacités.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/../images/services-3-sante.png" alt />
            <div>
              <h3>SANTE</h3>
              <p>
                Favoriser l’accès des populations à des soins de qualité,
                soutenir et accompagner l'installation et l'équipement de
                structures de santé et de pouponnières pour recueillir les
                enfants abandonnés et soutenir les filles-mères.
              </p>
            </div>
          </div>

          <div class="card">
            <img src="/../images/services-4-netrprneur.png" />
            <div>
              <h3>
                ENTREPRENEURIAT
              </h3>
              <p>
                Favoriser l'entreprenariat à travers des activités génératrices
                de revenus en faveur des femmes, des jeunes et des couches
                vulnérables.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/../images/services-5-culture.png" alt />
            <div>
              <h3>CULTURE ET VULGARISATION</h3>
              <p>
                L’association  gollanade Njobbo Sokhna
                Adama Aïssé œuvrera pour la promotion de l'œuvre complète de
                Cheikh Alhadj Oumar Foutiyou à travers ses écrits et ses
                enseignements, ceux de sa descendance et de ses disciples mais
                aussi, pour la recherche, l'identification et la rénovation de
                ses vestiges.
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/../images/services-6-adhesion.png" alt />
            <div>
              <h3>ADHESION ET MOYENS</h3>
              <p>
                Adhésion et moyens : pour la réalisation de ses objectifs,
                l'association compte sur ses ressources internes, fruit des
                cotisations de ses membres (1000 francs mensuellement), aux
                retombées de ses activités, aux subventions publiques et privées
                et aux dons et libéralités des bonnes volontés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <carousel :per-page="1" autoplay>
        <slide>
          <section class="projects container">
            <h3 class="heading center-text">Actualités</h3>
            <div class="center-text">
              <p>
                Soyez au plus près de l'actualité en suivant notre fil info mis
                à
                <br />jour en temps réel. Toute l'info en direct est sur Ndjobbo
                Tv <br />International.
              </p>
              <p>
                Merci de vous abonner a notre chaîne YouTube Ndjobbo Tv
                <br />International. Cette chaine a pour mission de promouvoir
                et de <br />vulgariser les enseignements et l'œuvre complète de
                Cheikh Alhadj <br />Oumar Foutiyou ( Gollanadé Ndjobbo Adama
                Aisse), ainsi que celles <br />de tous les grands érudits du
                Sénégal et d'Afrique.
              </p>
            </div>
            <div class="cards">
              <div class="card">
                <img src="/../images/V1.png" alt />

                <div class="card__description center-text">
                  <h4 class="card__title card__location center-text">
                    30 août 2020 | Thierno Djiby Sow
                  </h4>

                  <p class="card__description">
                    Présentation de l'Association
                    <br />Gollanadé Ndjobbo Sokhna Adama <br />Aisse par Thierno
                    Djiby Sow.
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=6diboGHSI-Y"
                  class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>

              <div class="card">
                <img src="/../images/V2.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__title center-text">
                    27 août 2020 | Thierno Djiby Sow
                  </h4>
                  <p>
                    Diangaléy Makgni ak
                    <br />Thierno Djiby Sow sur <br />la chaine Ndjobbo Tv
                    International ( N°1 ).
                  </p>
                </div>

                <a href="https://youtu.be/IyYIOT92sfc" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>

              <div class="card">
                <img src="/../images/V3.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__location center-text">
                    27 août 2020 | Hady Moulkaïry Bousso Tall
                  </h4>
                  <p>
                    Présentation de l'association
                    <br />Gollanade Ndjobbo Sokhna <br />Adama Aissse par Hady
                    Moulkaïry Bousso Tall
                  </p>
                </div>

                <a href="https://youtu.be/R-SNFbjmIyY" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>
            </div>
          </section>
        </slide>
        <slide>
          <section class="projects container">
            <h3 class="heading center-text">Actualités</h3>
            <div class="center-text">
              <p>
                Soyez au plus près de l'actualité en suivant notre fil info mis
                à
                <br />jour en temps réel. Toute l'info en direct est sur Ndjobbo
                Tv <br />International.
              </p>
              <p>
                Merci de vous abonner a notre chaîne YouTube Ndjobbo Tv
                <br />International. Cette chaine a pour mission de promouvoir
                et de <br />vulgariser les enseignements et l'œuvre complète de
                Cheikh Alhadj <br />Oumar Foutiyou ( Gollanadé Ndjobbo Adama
                Aisse), ainsi que celles <br />de tous les grands érudits du
                Sénégal et d'Afrique.
              </p>
            </div>
            <div class="cards">
              <div class="card">
                <img src="/../images/V4.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__title center-text">
                    25 août 2020|Thierno Djiby Sow
                  </h4>

                  <p>
                    Présentation de Ndjobbo
                    <br />Tv International par <br />Thierno Djiby Sow ( version
                    Wolof )
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=Zc3EHBsHtFk"
                  class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>
              <div class="card">
                <img src="/../images/version-poulard.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__title center-text">
                    24 août 2020 | Thierno Djiby Sow
                  </h4>
                  <p>
                    Présentation de Ndjobbo
                    <br />Tv International par <br />Thierno Djiby Sow ( version
                    Poular )
                  </p>
                </div>

                <a href="https://youtu.be/YnC0EgJTYEY" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>

              <div class="card">
                <img src="/../images/version-wolof.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__title center-text">
                    2 sept. 2020 | Cheikh Oumar Kane
                  </h4>
                  <p>
                    La Vie et l'Oeuvre
                    <br />du Prophète Mouhamed <br />ibn Abdalah <br />par
                    Cheikh Oumar Kane ( version Wolof )
                  </p>
                </div>

                <a href="https://youtu.be/AFjduGE8yhE" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>
            </div>
          </section>
        </slide>

        <slide>
          <section class="projects container">
            <h3 class="heading center-text">Actualités</h3>
            <div class="center-text">
              <p>
                Soyez au plus près de l'actualité en suivant notre fil info mis
                à
                <br />jour en temps réel. Toute l'info en direct est sur Ndjobbo
                Tv <br />International.
              </p>
              <p>
                Merci de vous abonner sur notre chaîne YouTube Ndjobbo Tv
                <br />International. Cette chaine a pour mission de promouvoir
                et de <br />vulgariser les enseignements et l'œuvre complète de
                Cheikh Alhadj <br />Oumar Foutiyou ( Gollanadé Ndjobbo Adama
                Aisse), ainsi que celles <br />de tous les grands érudits du
                Sénégal et d'Afrique.
              </p>
            </div>
            <div class="cards">
              <div class="card">
                <img src="/../images/Thierno-Ibrahima-Camara.png" alt />

                <div class="card__description center-text">
                  <h4 class="card__title card__location center-text">
                    30 août 2020 | Thierno Ibrahima Camara
                  </h4>

                  <p class="card__description">
                    Présentation de l'Association
                    <br />Gollanadé Ndjobbo <br />Sokhna Adama Aisse
                    <br />
                    par Thierno Ibrahima Camara
                  </p>
                </div>

                <a href="https://youtu.be/Ltm-pV1JqzM" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>

              <div class="card">
                <img src="/../images/cherif.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__title center-text">
                    31 août 2020 | Shériff Macky Aidara
                  </h4>
                  <p>
                    Les enseignements de
                    <br />Elh Oumar Foutiyoubr <br />Tall sur (Islam, Iman et
                    Ihsan) <br />selon Shériff Macky Aidara.
                  </p>
                </div>

                <a href="https://youtu.be/8mv9Nhpmg0U" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>

              <div class="card">
                <img src="/../images/cherif2.png" alt />
                <div class="card__description center-text">
                  <h4 class="card__location center-text">
                    31 août 2020 | Shériff Macky Aidara
                  </h4>
                  <p>
                    Définition du Mot
                    <br />NDJOBBO ( ce nom mystérieux de Elh Oumar Foutiyou Tall
                    ) <br />par Shériff Macky Aidara.
                  </p>
                </div>

                <a href="https://youtu.be/vhj7dvhH9DY" class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>
            </div>
          </section>
        </slide>
      </carousel>
    </div>

    <section class="support">
      <div class="support__background-color"></div>
      <a href="/support/" class="support__btn">Faire un don</a>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Carousel, Slide } from "vue-carousel";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from "vue-flux";
export default {
  data() {
    return {
      vfOptions: {
        autoplay: true,
      },
      vfImages: [
        "/../images/slider/NDAA-4.png",
        "/../images/slider/NDAA-conception2.png",
        "/../images/slider/NDAA-3.png",
        "/../images/slider/tall.jpg",
      ],
      vfTransitions: ["fade", "book", "wave", "waterfall", "concentric"],
    };
  },
  components: {
    Navigation,
    Carousel,
    Slide,
    Footer,
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.slide {
  position: relative;
  top: 5rem;
  width: 100%;
}
.title {
  margin-top: 6rem;
}

.card {
  padding: 1rem;
}

@media (min-width: 64rem) {
  .slide {
    margin-top: 0.5rem;
    z-index: -1;
  }
  .spacer-1 {
    margin-top: 4rem;
  }
}
</style>
