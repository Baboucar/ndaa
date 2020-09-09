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
                L'association Gollanade Ndjobbo Sokhna Adama Aïsse <br />
                7bis rue des giroflées, <br />
                78130 les mureaux <br />
                France
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
          <form class="contact__form" autocomplete="off" action="https://formspree.io/contact@ndaafoutiyou.com" method="POST">
            <div class="form__group">
              <label class="label" for="name">Nom</label>
              <input type="text" name="" id="name" />
            </div>

            <div class="form__group">
              <label class="label" for="name">Prénom</label>
              <input type="text" name="prenom" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="name">Téléphone </label>
              <input type="text" name="telephone" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="name">Adresse de messagerie </label>
              <input type="text" name="address" id="name" />
            </div>
            <div class="form__group">
              <label class="label" for="object">Objet</label>
              <input type="text" name="object" id="object" />
            </div>
            <div class="form__group">
              <label class="label" for="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"> </textarea>
            </div>

            <input type="submit" value="Send" class="card__button" />
          </form>
        </div>
      </div>

      <section class="map"></section>
    </main>
    <section>
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.449619007589!2d1.911190315843887!3d48.983000499878436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e692625528e257%3A0xb097408244800e06!2sRue%20des%20Girofl%C3%A9e%2C%2078130%20Les%20Mureaux%2C%20France!5e0!3m2!1sen!2skr!4v1599284770032!5m2!1sen!2skr"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
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
.map {
  width: 100%;
}
@media (min-width: 64rem) {
  .fix__container {
    margin-top: 5rem;
  }
}
</style>
