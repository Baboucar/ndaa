<template>
  <div>
    <Navigation />
    <section class="container section__details">
      <h2>Partenariats d'entreprises</h2>
     
      <p>
        Grâce à des partenariats solides avec des organisations fiables et réputées ; sont bien connectés au sein de la communauté. 
      </p>
       <p>
       Ensemble, nous pouvons contribuer à mettre un terme à la pauvreté aux personnes démunies. 
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
@media (min-width: 64rem) {
  .section__details {
    padding: 18rem 2rem;
    margin-top: 10rem;

    margin-bottom: 2rem;
    height: auto;
    width: 60%;
  }
  footer {
    margin-top: 10rem;
  }
}
</style>
