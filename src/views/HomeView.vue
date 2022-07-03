<template>
  <div class="home">
    <Header />
    <Banner />
    <Description />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Description from "@/components/Description.vue";

export default {
  name: "HomeView",
  components: { Header, Banner, Description },
};
</script>
