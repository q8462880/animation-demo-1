<template>
  <main>
    <Header></Header>
    <Menu></Menu>
    <div id="phanta_layout" class="websiteWrap">
      <div class="mainWrap">
        <div>
          <router-view />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default {
  components: {
    Footer,
    Header,
    Menu,
  },
};
</script>
