<template>
  <div id="app">
    <div class="banner">MING &nbsp; XIE</div>
    <b-navbar toggleable="md" type="dark" fixed="top" variant="white">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- <b-navbar-brand class="logo" @click="checkedItem('home')"><router-link to="/home">MINGXIE</router-link></b-navbar-brand> -->
      <b-collapse is-nav id="nav_collapse" style="justify-content: center">
        <b-navbar-nav class="ml-auto" style="margin-left:0 !important">
          <b-nav-item class="header-item home-btn" @click="checkedItem('home')" :class="{'item-active':'home'===isActive}">
            <router-link to="/home">Home</router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="Latest" class="drop-down-media" :class="{'item-active':'news'===isActive||'reviews'===isActive}">
            <b-dropdown-item @click="checkedItem('news')" :class="{'item-active':'news'===isActive}">
              <router-link to="/news">News</router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('reviews')" :class="{'item-active':'reviews'===isActive}">
              <router-link to="/reviews">Reviews</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="header-item concerts-btn" @click="checkedItem('concerts')" :class="{'item-active':'concerts'===isActive}">
            <router-link to="/concerts">Concerts</router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="Media" class="drop-down-media" :class="{'item-active':'gallery'===isActive||'listen'===isActive||'video'===isActive}">
            <b-dropdown-item @click="checkedItem('gallery')" :class="{'item-active':'gallery'===isActive}">
              <router-link to="/gallery">Gallery</router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('listen')" :class="{'item-active':'listen'===isActive}">
              <router-link to="/listen">Listen</router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('video')" :class="{'item-active':'video'===isActive}">
              <router-link to="/video">Video</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item class="header-item contact-btn" @click="checkedItem('contact')" :class="{'item-active':'contact'===isActive}">
            <router-link to="/contact">Contact</router-link>
          </b-nav-item>
          <b-nav-item class="header-item about-btn" @click="checkedItem('about')" :class="{'item-active':'about'===isActive}">
            <router-link to="/about">About</router-link>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { getCookie } from "@/common/cookie";
export default {
  name: "App",
  data() {
    return {
      isActive: this.$route.name
    };
  },
  methods: {
    checkedItem(index) {
      switch (index) {
        case "home":
          this.isActive = index;
          break;
        case "concerts":
          this.isActive = index;
          break;
        case "contact":
          this.isActive = index;
          break;
        case "about":
          this.isActive = index;
          break;
        case "news":
          this.isActive = index;
          break;
        case "reviews":
          this.isActive = index;
          break;
        case "gallery":
          this.isActive = index;
          break;
        case "listen":
          this.isActive = index;
          break;
        case "video":
          this.isActive = index;
          break;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

titleFontFamily();

#app >>> .navbar-dark .navbar-toggler-icon {
  background-image: url('/static/img/row.png');
}

#app >>> .fixed-top {
  top: 70px;
}

#app {
  .banner {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    text-align: center;
    line-height: 70px;
    font-size: 40px;
    font-family: 'titleFont';
    color: $Probrown;
    z-index: 1030;
    cursor: default;
  }

  .header-item {
    padding: 0 20px;
    border: 0 2px solid #ffffff;

    a {
      color: $ProDark;
    }
  }

  .drop-down-media {
    padding: 0 20px;
  }

  .drop-down-media >>> .dropdown-toggle::after {
  }

  .drop-down-media >>> span:hover {
    color: $ProDark !important;
    border-bottom: 2px solid $Probrown;
  }

  .drop-down-media >>> span {
    color: $ProDark;
  }

  .drop-down-media >>> .dropdown-item > a {
    color: $ProDark !important;

    a {
      border-bottom: 2px solid #ffffff;
    }
  }

  .drop-down-media >>> .dropdown-item > a:hover {
    border-bottom: 2px solid $Probrown;
  }

  .drop-down-media >>>.dropdown-menu {
    min-width: 5rem !important;
  }

  .item-active {
    .router-link-active {
      color: $ProDark !important;
      border-bottom: 2px solid $Probrown;
      font-weight: bolder;
    }
  }

  .item-active >>> span {
    color: $ProDark !important;
    border-bottom: 2px solid $Probrown;
    font-weight: bolder;
  }

  .header-item > a > a:hover {
    color: $ProDark !important;
    border-bottom: 2px solid $Probrown;
  }
}

a:hover {
  text-decoration: none;
}
</style>
