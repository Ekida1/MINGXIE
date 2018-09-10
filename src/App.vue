<template>
  <div id="app">
    <div class="banner"><router-link to="/home">MING&nbsp; XIE </router-link></div>
    <b-navbar toggleable="md" type="dark" fixed="top" variant="white">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse" style="justify-content: center">
        <b-navbar-nav class="ml-auto" style="margin-left:0 !important">
          <b-nav-item class="header-item home-btn" @click="checkedItem('home')" :class="{'item-active':'home'===isActive}">
            <router-link to="/home"><i class="item-text">Home</i></router-link>
          </b-nav-item>
          <b-nav-item class="header-item about-btn" @click="checkedItem('about')" :class="{'item-active':'about'===isActive}">
            <router-link to="/about"><i class="item-text">About</i></router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="Latest" class="drop-down-media" :class="{'toggle-active':'news'===isActive||'reviews'===isActive}">
            <b-dropdown-item @click="checkedItem('news')" :class="{'item-active':'news'===isActive}">
              <router-link to="/news"><i class="item-text">News</i></router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('reviews')" :class="{'item-active':'reviews'===isActive}">
              <router-link to="/reviews"><i class="item-text">Reviews</i></router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="header-item concerts-btn" @click="checkedItem('concerts')" :class="{'item-active':'concerts'===isActive}">
            <router-link to="/concerts"><i class="item-text">Concerts</i></router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="Media" class="drop-down-media" :class="{'toggle-active':'gallery'===isActive||'listen'===isActive||'watch'===isActive}">
            <b-dropdown-item @click="checkedItem('gallery')" :class="{'item-active':'gallery'===isActive}">
              <router-link to="/gallery"><i class="item-text">Gallery</i></router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('listen')" :class="{'item-active':'listen'===isActive}">
              <router-link to="/listen"><i class="item-text">Listen</i></router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="checkedItem('watch')" :class="{'item-active':'watch'===isActive}">
              <router-link to="/watch"><i class="item-text">Watch</i></router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="header-item contact-btn" @click="checkedItem('contact')" :class="{'item-active':'contact'===isActive}">
            <router-link to="/contact"><i class="item-text">Contact</i></router-link>
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
      isActive: this.$route.matched[0].name
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
        case "watch":
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
navFontFamily();

#app >>> .navbar-dark .navbar-toggler-icon {
  background-image: url('/static/img/menu.png');
}

#app >>> .fixed-top {
  top: 70px;
}

#app {
  -webkit-text-size-adjust: none;
  overflow: hidden;

  .banner {
    font-family: 'titleFont';
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    text-align: center;
    line-height: 70px;
    font-size: 40px;
    color: $Probrown !important;
    z-index: 1030;
    cursor: default;

    a {
      color: $Probrown !important;
    }
  }

  .header-item {
    // font-family: navFont;
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

  .drop-down-media >>> .dropdown-item {
    padding: 0;
    text-align: center;
  }

  .drop-down-media >>> .dropdown-item > a {
    color: $ProDark !important;
    display: inline-block;
    width: 100%;
    padding: 2px 0;
    border-bottom: 2px solid #ffffff;
  }

  // .drop-down-media >>> .dropdown-item > i:hover {
  // border-bottom: 2px solid $Probrown;
  // }
  .drop-down-media >>>.dropdown-menu {
    min-width: 5rem !important;
  }

  .item-active {
    .router-link-active {
      .item-text {
        border-bottom: 2px solid $Probrown !important;
        color: $ProDark !important;
        font-weight: bolder;
        font-style: normal;
      }
    }
  }

  .dropdown-item > a :hover {
    border-bottom: 2px solid $Probrown !important;
  }

  .toggle-active >>> span {
    color: $ProDark !important;
    border-bottom: 2px solid $Probrown !important;
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
