<template>
  <b-navbar toggleable="md" type="dark"  fixed='top'>
      
      <b-navbar-brand href="" class="main-logo d-flex align-items-center" @click="goToHome">
          <img src="../../static/logo-ad.png" width="60px" height="60px"/>
          <div class="mob-hidden">
            <h4>DR. RAMA'S TEST TUBE BABY CENTRE</h4>
            <h6>COME AS A COUPLE....LEAVE AS A FAMILY</h6>
          </div>
          <div class="desktop-hidden">
            <h4 style="font-size:0.8rem;font-weight:700">DR. RAMA'S TEST TUBE BABY CENTRE</h4>
            <h6 style="font-size:0.6rem">COME AS A COUPLE...LEAVE AS A FAMILY</h6>
          </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- <b-navbar-nav class="left-nav desktop-hidden logo-mob" @click="goToHome">
          <h4>DR. RAMA'S TEST TUBE BABY CENTRE</h4>
          <h6>COME AS A COUPLE....LEAVE AS A FAMILY</h6>
      </b-navbar-nav> -->
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item   @click="goToHome" class="nav-color" :active="checkRoute('index')" >Home</b-nav-item>
          <b-nav-item   @click="goToTreatments" class="nav-color"  :active="checkRoute('treatments')">Treatments</b-nav-item>
          <b-nav-item   @click="goToTests" class="nav-color" :active="checkRoute('tests')">Tests</b-nav-item>
          <b-nav-item   @click="goToAboutUs" class="nav-color" :active="checkRoute('about-us')">About us</b-nav-item>
          <b-nav-item   @click="goToDoctors" class="nav-color" :active="checkRoute('doctors')">Our Doctors</b-nav-item>
          <b-nav-item   @click="goToBlogs" class="nav-color" :active="checkRoute('blogs')">Blogs</b-nav-item>
          <b-nav-item   @click="goToFaq" class="nav-color" :active="checkRoute('faq')">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    created() {
      console.log(this.$route);
    },
    computed: {
      // checkRoute() {
      //   var x = this.$route.name;
      //     if(x == 'index') {
      //       return true
      //     }
      //     else if(x == 'about-us') {
      //       return true
      //     }
      //     else if(x == 'tests') {
      //       return true
      //     } 
      //     else if(x == 'treatments') {
      //       return true
      //     }
      //     else if(x == 'blog') {
      //       return true
      //     }
      //     else if(x == 'faq') {
      //       return true
      //     }
      //     else if(x == 'doctors') {
      //       return true
      //     }
      //   }
    },
   methods: {
      goToHome() {
        this.$router.push({name:"index"})
      },
      goToTreatments() {
        this.$router.push({name:"treatments"});
      },
      goToAboutUs() {
        this.$router.push({name:"about-us"});
      },
      goToTests() {
        this.$router.push({name:"tests"});
      },
      goToDoctors() {
        this.$router.push({name:"doctors"});
      },
      goToBlogs() {
        this.$router.push({name:"blogs"});
      },
      goToFaq() {
        this.$router.push({name:"faq"});
      },
      checkRoute(x){
        console.log(this.$route.name,x)
        if(this.$route.name == x){
          return true
        }
      }
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

.navbar{
    background:rgb(89, 84, 141);
        padding: 1rem 1rem;
}
.navbar-toggler {
  border: none;
  outline: 0 !important;
}
.navbar-toggler:focus, .navbar-toggler:active {
  outline: 0 !important;
}
.nav-color > a{
  color: white !important;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  /* font-size: 1.2rem; */
}
.nav-active {
  border-bottom: 2px solid #fff;
}
.nav-active:active {
  font-weight: 900;
  border-bottom: 2px solid #fff;
}
.main-logo {
  margin-right: 0 !important;
  cursor: pointer;
  font-family: 'Libre Baskerville', serif;
}
.left-nav {
    display: block;
    color: white !important;
    font-family: 'Libre Baskerville', serif;
    cursor: pointer;
}
.main-logo > div > h4 {
    font-size: 1rem;
}
.main-logo > div > h6 {
    font-size: 0.8rem;
    margin-bottom: 0;
}
.active {
  border-bottom: 2px solid #fff;
  font-weight:bolder;
}
</style>