<template>
  <div class="home">
    <Header />
    <Banner />
    <Description />
    <Community />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Description from "@/components/Description.vue";
import Community from "@/components/Community.vue";

export default {
  name: "HomeView",
  components: { Header, Banner, Description, Community },
};
</script>
