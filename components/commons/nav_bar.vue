<template>
    <nav class="nav navbar navbar-light bg-mojave" :style="[navStyle]">
         <div class="nav__logo">
            <a href="#">
              <img src='~/assets/header_logo.png'/>
            </a>
        </div>
         <div id="mainListDiv" class="main_list nav__wrapper">
        <a class="naver-link" href="#" @click="goToHome">Home</a>
        <a class="naver-link" href="#" @click="goToTreatments">Treatments</a>
        <a class="naver-link" href="#" @click="goToTests">Tests</a>
        <a class="naver-link" href="#" @click="goToAboutUs">About us</a>
        <a class="naver-link" href="#" @click="goToDoctors">Our Doctors</a>
        <a class="naver-link" href="#" @click="goToBlogs">Blogs</a>
        <a class="naver-link" href="#" @click="goToFaq">FAQ</a>
         </div>

    </nav>
</template>
<script>
export default {
  props:['navStyle'],
    data() {
      return {}
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
        this.$router.push({name:"ad-page"});
      },
      goToFaq() {
        this.$router.push({name:"faq"});
      }
    },
    computed:{
           
    }
}
</script>
<style scoped>
img{
  width:200px;
}
.bg-mojave{
    /* background: #59548D; */
    background: transparent;
    padding:50px 50px 15px 50px ;
    /* padding-top:50px;
    padding-left: 50px;
    padding-right: 50px; */
    
}
.nav {
    width: 100%;
    margin-bottom:105px;
    position: fixed;
    line-height: 65px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
}
.naver-link{
    color: #fff;
    text-transform: uppercase;
    font-size:18px;
}
.naver-link:before {
  transition: all .5s;
}
.naver-link:hover {
  color: #555;
}
.naver-link{
  position: relative;
}
.naver-link:after{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #aaa;
  height: 1px;
}
.naver-link:hover:after {
  width: 100%;
}
.naver-link {
  transition: all 2s;
  padding:20px;
}
.naver-link:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
.naver-link:hover {
  color: #fff;
  z-index: 1;
}
.naver-link:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
@-webkit-keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(89 ,81,168,1), rgba(198 ,179,238,1));
  }
}

</style>
