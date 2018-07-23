<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" fixed="top" variant="light" style="border-radius:0 0 10px 10px">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- <b-navbar-brand class="logo" @click="checkedItem('home')"><router-link to="/home">MINGXIE</router-link></b-navbar-brand> -->
      <b-collapse is-nav id="nav_collapse" style="justify-content: center">
        <b-navbar-nav class="ml-auto" style="margin-left:0 !important">
          <b-nav-item class="header-item home-btn" @click="checkedItem('home')" :class="{'item-active':'home'===isActive}">
            <router-link to="/home">{{$t("message.headerTitle.home")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item news-btn" @click="checkedItem('news')" :class="{'item-active':'news'===isActive}">
            <router-link to="/news">{{$t("message.headerTitle.news")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item concerts-btn" @click="checkedItem('concerts')" :class="{'item-active':'concerts'===isActive}">
            <router-link to="/concerts">{{$t("message.headerTitle.concerts")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item gallery-btn" @click="checkedItem('gallery')" :class="{'item-active':'gallery'===isActive}">
            <router-link to="/gallery">{{$t("message.headerTitle.gallery")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item listen-btn" @click="checkedItem('listen')" :class="{'item-active':'listen'===isActive}">
            <router-link to="/listen">{{$t("message.headerTitle.listen")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item contact-btn" @click="checkedItem('contact')" :class="{'item-active':'contact'===isActive}">
            <router-link to="/contact">{{$t("message.headerTitle.contact")}}</router-link>
          </b-nav-item>
          <b-nav-item class="header-item about-btn" @click="checkedItem('about')" :class="{'item-active':'about'===isActive}">
            <router-link to="/about">{{$t("message.headerTitle.about")}}</router-link>
          </b-nav-item>

        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav style="margin-left:50px">
            <b-nav-item-dropdown class="drop-down-lang" text="Lang" right>
              <b-dropdown-item>ENGLISH</b-dropdown-item>
              <b-dropdown-item>CHINESE</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->
        <!-- <div style="margin-left:50px;color:#ffffff"><a class="english" @click="turnLanguage('en')">EN</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a class="chinese" @click="turnLanguage('ch')">CH</a></div> -->
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import { getCookie } from "@/common/cookie";
export default {
  name: "App",
  data() {
    return {
      isActive: "home"
    };
  },
  methods: {
    checkedItem(index) {
      switch (index) {
        case "home":
          this.isActive = index;
          break;
        case "news":
          this.isActive = index;
          break;
        case "concerts":
          this.isActive = index;
          break;
        case "gallery":
          this.isActive = index;
          break;
        case "listen":
          this.isActive = index;
          break;
        case "contact":
          this.isActive = index;
          break;
        case "about":
          this.isActive = index;
          break;
      }
    },
    turnLanguage(type) {
      if (type === "en") {
        this.$i18n.locale = getCookie("PLAY_LANG", type);
      } else if (type === "ch") {
        this.$i18n.locale = getCookie("PLAY_LANG", type);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  .english {
    cursor: pointer;
  }

  .chinese {
    cursor: pointer;
  }

  .header-item {
    padding: 0 20px;

    a {
      color: #171718;
    }
  }

  .item-active {
    .router-link-active {
      color: #171718 !important;
      border-bottom: 2px solid #867A5E;
      font-weight: bolder;
    }
  }

  .header-item > a > a:hover {
    color: #171718 !important;
    border-bottom: 2px solid #867A5E;
  }
}

a:hover {
  text-decoration: none;
}
</style>
