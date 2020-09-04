<template>
  <div>
    <Navigation />

    <div class="slider"></div>
    <div>
      <section class="container">
        <h1 class="center-text">NDAA</h1>
        <p class="center-text">
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
                rupture de scolarité et d'adultes non instruits,
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
                enfants abandonnés et soutenir les filles-mères,
              </p>
            </div>
          </div>

          <div class="card">
            <img src="/../images/services-4-netrprneur.png"  />
            <div>
              <h3>ENTREPRENARIAT</h3>
              <p>
                Favoriser l'entreprenariat à travers des activités génératrices
                de revenus en faveur des femmes, des jeunes et des couches
                vulnérables,
              </p>
            </div>
          </div>
          <div class="card">
            <img src="/../images/services-5-culture.png" alt />
            <div>
              <h3>CULTURE ET VULGARISATION</h3>
              <p>
                Culture et vulgarisation l'association gollanade Njobbo Sokhna
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
            <h3 class="heading center-text">Our Projects</h3>
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

                <a
                  href="https://youtu.be/R-SNFbjmIyY"
                  class="card__button"
                  >VOIR LA VIDEO</a
                >
              </div>
            </div>
          </section>
        </slide>
        <slide>
          <section class="projects container">
            <h3 class="heading center-text">Our Projects</h3>
            <div class="cards">
              <div class="card">
                <img src="/../images/V4.png" alt />
                <h4 class="card__title center-text">Project Title</h4>
                <div class="card__description center-text">
                  <h4 class="card__location center-text">
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
                <img src="/../images/project1.jpg" alt />
                <h4 class="card__title center-text">Project Title</h4>
                <div class="card__description center-text">
                  <span class="card__location center-text">Mon 02 Jan|</span>
                  <span>Banjul</span>
                </div>

                <a href class="card__button">Read More</a>
              </div>

              <div class="card">
                <img src="/../images/project1.jpg" alt />
                <h4 class="card__title center-text">Project Title</h4>
                <div class="card__description center-text">
                  <span class="card__location center-text">Mon 02 Jan|</span>
                  <span>Banjul</span>
                </div>

                <a href class="card__button">Read More</a>
              </div>
            </div>
          </section>
        </slide>
      </carousel>
    </div>

    <section class="support">
      <div class="support__background-color"></div>
      <a href="/support/" class="support__btn">Support Us</a>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Navigation,
    Carousel,
    Slide,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.slider {
  position: relative;
  left: 0;
  right: 0;
  background-image: url(/../images/slider.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 600px;
  box-sizing: border-box;
}

.card {
  padding: 1rem;
}
</style>
