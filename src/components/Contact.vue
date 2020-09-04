<template>
  <div>
    <Navigation />
    <section class="contact fix__container">
      <h1 class="center-text">CONTACT</h1>
    </section>

    <main class="about">
      <div class="about__description container">
        <h1 class="about__title center-text support--title">
          Veuillez remplir le formulaire ci-dessous.
        </h1>
        <div class="contact_details container">
          <div class="contact__description">
            <p>
              Etant donné le grand nombre de mails reçus à NDAA, nous vous
              remercions d'essayer d'être le plus précis possible dans la
              formulation de votre demande ou de votre proposition, merci !
            </p>
            <p class="flex-contact phone center-text">
              <img
                class="icon icon--phone"
                src="/../images/call.png"
                alt="phone-icon"
              />
              <span class="contact_block phone__number">+33 6 20278228</span>
            </p>
            <p class="flex-contact contact__location center-text">
              <img
                class="icon"
                src="/../images/maps-and-flags.png"
                alt="location"
              />
              <span class="contact_block">
                Mme Tall Aminata <br />
                7bis rue des giroflées, <br />
                78130 les mureaux <br />
                France <br />
              </span>
            </p>
            <p class="flex-contact center-text">
              <img
                class="icon"
                src="/../images/close-envelope.png"
                alt="email"
              />
              <span class="contact_block">contact@ndaafoutiyou.com</span>
            </p>
          </div>
          <form class="contact__form" autocomplete="off">
            <div class="form__group">
              <label class="label" for="name">Nom</label>
              <input type="text" name="" id="name" />
            </div>

            <div class="form__group">
              <label class="label" for="name">Prénom</label>
              <input type="text" name="" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="name">Téléphone </label>
              <input type="text" name="" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="name">Adresse de messagerie </label>
              <input type="text" name="" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="email">Objet</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="form__group">
              <label class="label" for="message">Message</label>
              <textarea name="" id="" cols="30" rows="10"> </textarea>
            </div>

            <input type="submit" value="Send" class="card__button" />
          </form>
        </div>
      </div>

      <section class="map"></section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.contact_block {
  display: block;
}

.label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: $color-mission;
}
input[type="submit"] {
  border: none;
}
input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: $color-primary;
}

@include respond-to(tablet-large) {
  .contact_details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .contact__description {
    width: 70%;
  }
  .flex-contact {
    display: flex;
    align-items: center;
  }
  .icon {
    padding: 1rem;
  }
}
.contact {
  background: $color-secondary;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
}
@media (min-width: 64rem) {
  .fix__container {
    margin-top: 5rem;
  }
}
</style>
