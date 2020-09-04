<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>DONNER AVEC NDAA</h2>
      <p>Vous souhaitez faire un don ponctuel ou régulier ?</p>
      <p>
        Chaque franc, dollar, euro que vous donnez à nos projets est si
        significatif et est utilisé intégralement pour aider à assurer un avenir
        durable à des villages entiers pour les générations à venir.
      </p>
      <ul>
      <li>Don général</li>
      <li>Pack alimentaire familial</li>
      <li>Pack de vêtements pour enfants</li>
      <li>Paquets de riz</li>
      <li>Puits d'eau, forages, latrines</li>
      <li>Parrainage général des talibés</li>
      <li>Construction d'une mosquée,</li>
      <li>Construction d'une d'écoles franco-arabe</li>
      <li>Centre d'éducation</li>
     </ul>
      <h2>REJOINDRE NDAA</h2>
      <p>
        Si vous êtes passionné par l'aide aux personnes dans le besoin et que
        vous cherchez à mettre vos compétences à profit, nous serions ravis que
        vous rejoigniez notre association gollanade Njobbo Sokhna Adama Aïsse !
        Nous sommes constamment à la recherche de professionnels énergiques et
        motivés pour élargir notre association dans des domaines liés à
        l'informatique, aux affaires, à la comptabilité et à l'administration
        générale.
      </p>

      <p>
        Nous vous remercions de l'intérêt que vous portez à notre association
        gollanade Njobbo Sokhna Adama Aïsse, nous n'avons pas de postes
        disponibles pour le moment. Si vous souhaitez être informé de nos futurs
        postes vacants, veuillez envoyer votre CV et votre lettre de motivation
        à : <strong>dentalndjobbosokhnaadamaaisse@gmail.com</strong>
      </p>

      <h2>COLLECTE DE FONDS</h2>
      <p>
        NDAA souhaite de nombre précieux donateurs pour contribuer à
        l'amélioration de villages entiers en organisant des initiatives simples
        de collecte de fonds. Vous aussi, vous pouvez participer à ces
        initiatives ! Aidez à changer la vie des personnes les plus démunies !
      </p>

      <div class="cards">
        <div class="card">
          <h3>Financement de la foule</h3>
          <p>
            Financez la construction d'un puits d'eau, latrines, ou d'un talibés
            en vous associant avec vos amis, votre famille et vos collègues !
          </p>
        </div>
        <div class="card">
          <h3>Sensibilisation</h3>
          <p>
            A court d'idées ? Vous pouvez toujours nous aider en nous suivant
            sur les médias sociaux et en aimant et partageant notre page !
            Chaque effort compte !
          </p>
        </div>
        <div class="card">
          <h3>Les boîtes de conserve NDAA</h3>
          <p>
            Accueillez l'une de nos boîtes de conserve gratuites, même si ce
            n'est que pour un franc, euro, dollar par jour, chaque petit geste
            contribue à faire la différence. Faites un don d'un dollar par jour,
            chaque geste compte !
          </p>
        </div>
      </div>

      <p class="center-text bottom__text">
        Contactez-nous dès aujourd'hui pour nous faire part de vos dernières <br>
        idées et initiatives en matière de collecte de fonds !
      </p>

      <p class="center-text">
        A tous ceux qui ont fait un don, soyez fiers de vous et réalisez que <br>
        leur maison à Jannah se construit en même temps. Aucun don n'est trop <br>
        petit, n'y pensez pas à deux fois, même un franc, un euro, un dollar
        fera la différence.
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
.card{
    padding: 1rem;
}
li{
    list-style-type: none;
}
@media (min-width: 64rem) {
  .section__details {
    padding: 1rem 2rem;
    margin-top: 8rem;

    margin-bottom: 2rem;
    height: auto;
    width: 60%;
  }
  footer {
    margin-top: 10rem;
  }
  .bottom__text{
    margin-top: 2rem;
  }
}
</style>
