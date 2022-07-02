<template>
  <div class="home">
    <Header />
    <Banner />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "HomeView",
  components: { Header, Banner },
};
</script>
