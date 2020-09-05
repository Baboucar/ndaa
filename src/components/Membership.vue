<template>
  <div>
    <Navigation />
    <section class="container  top">
      <form-wizard color="#2e7769" title="FORMULAIRE D'ADHÉSION L’ASSOCIATION GOLLANADE NJOBBO SOKHNA ADAMA AÏSSE" subtitle="Adhésion valable du 05/09/2020 au 05/09/2021 ">
        <tab-content title="Choix de l'adhésion">
          <div class="center-text member__title">
            <h3 class="title">Carte de membre</h3>
            <p class="amount">20,00 €</p>
            <select name="" id="" class="gift__number">
              <option value="">0</option>
              <option value="">1</option>
            </select>
          </div>
          <div>
            <h4 class="sub__heading">
              Montant à payer pour la durée de l'adhésion :20,00 €
            </h4>
          
          </div>
        </tab-content>
        <tab-content title="Adhérents">
          <h3 class="title">Catre de membre</h3>

          <div>
            <h3>Coordonnées</h3>
            <form action="" class="name__form">
             <div>
             <label for="surname">Prénom *</label>
             <input type="text" name="" id="">
             </div>
            <div>
            <label for="Nom">Nom*</label>
            <input type="text" name="" id="">
            </div>
            </form>
            <div >
              <div class="flex__items">
              <input type="checkbox" name="" id="" @click="seen=!seen">
               <label for="" class="box_lebel">Recevoir la confirmation d'adhésion à cette adresse</label>

              </div>

              <div v-if="seen">
              <label for="">Email *</label>
               <input type="email" name="" id="">
              </div>
            </div>
          </div>
        </tab-content>
        <tab-content title="Coordonnées">
        <h3>Vérifiez vos coordonnées</h3>
        <div class="btn__toggle">
        <toggle-button color="#2e7769" :value="false" @change="seen =!seen"/>
        <p class="pa__text">Payer en tant qu'organisme</p>
        </div>
        <div v-if="seen">
        <label for="">Organisme</label>
        <input type="text" name="" id="">
        </div>
        <p>J'ai déjà un compte HelloAsso : je me connecte</p>
       <div class="name__form"> 
        <div>
        <label for="">Prénom *</label>
        <input type="text" name="" id="">
        </div>
        <div>
        <label for="">Nom*</label>
        <input type="text" name="" id="">
        </div>
        </div>
        <div>
        <label for="">Adresse email*</label>
        <input type="email" name="" id="">
        </div>
        <div>
        <label for="">Date de naissance *</label>
        <input type="date" name="" id="">
        </div>
        <div>
          <label for="">N° et rue *</label>
          <input type="text" name="" id="">
        </div>
        <div class="name__form">
        <div>
        <label for="">Ville*</label>
        <input type="text" name="" id="">
        </div>
        <div>
        <label for="">Code postal *</label>
        <input type="text" name="" id="">
        </div>

        <div>
        <select name="" id="">
        <option value="">France</option>
        </select>
        </div>
        </div>
        </tab-content>
        <tab-content title="Récapitulatif"> </tab-content>
      </form-wizard>
      <div class="services">
        <h3 class="p_title">
          Plateforme de paiement <br />
          100% sécurisée
        </h3>
        <p>
          Toutes les informations bancaires <br />
          pour traiter ce paiement sont <br />
          totalement sécurisées. Grâce au <br />
          cryptage SSL de vos données <br />
          bancaires, vous êtes assurés de <br />
          la fiabilité de vos transactions sur <br />
          NDAA.
        </p>
        <div class="services__image">
          <img src="/../images/logo-cb.png" alt="" />
          <img src="/../images/logo-visa.png" alt="" />
          <img src="/../images/logo-mastercard.png" alt="" />
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";


export default {
    data(){
        return{
            seen:false
        }
    },
  components: {
    Navigation,
    Footer,
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.top {
  margin-top: 7rem;
}

.btn__toggle{
  display: flex;
  background: $color-grey;
  padding: 1rem;

}
.pa__text{
      padding-left:1rem ;

}
.box_lebel{
    padding-left: 1rem;
}
.services {
  background-color: #fff;
  border: 0.1rem solid #e6e6e6;
  padding: 1rem;
  border-radius: 5px;
}
.services__image {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  img {
    padding-left: 1rem;
  }
}
.p_title {
  color: $color-primary;
}
.gift__number {
  min-width: 9rem;
  height: 30px;

  color: #37474f;
  background-color: #fff;
  border: 0.1rem solid #c5cfd5;
  -webkit-border-radius: 0.4rem;
  border-radius: 0.4rem;
  background-clip: padding-box;
}
.sub__heading {
  background: $color-secondary;
  color: $color-white;
  padding: 1rem;
}
.amount {
  font-weight: bold;
}


form{
        background-color: #fff;
    border: .1rem solid #ddd;
    -webkit-border-radius: .4rem;
    border-radius: .4rem;
    padding: 1rem;
}

label{
    display: block;
    font-weight: bold;
    padding-top: 1rem;
    margin-bottom: .3rem;
}
input[type="text"],input[type="email"], select{
  
  height: 40px;
width: 100%;
  color: #37474f;
  background-color: #fff;
  border: 0.1rem solid #c5cfd5;
  -webkit-border-radius: 0.2rem;
  border-radius: 0.2rem;
  background-clip: padding-box; 
}
.flex__items{
    display: flex;
    align-items: baseline;
}
@media (min-width: 64rem) {
  .top {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .container {
    width: 60%;
    margin-top: 13rem;
    margin-bottom: 8rem;
  }
  .member__title {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  .gift__number {
    width: 4rem;
    margin-top: 0.5rem;
  }
  .title {
    text-align: left;
  }

  .name__form{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
  }
}
</style>
