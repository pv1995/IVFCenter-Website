<template>
    <div v-if='websiteStat'>
        <!-- <drrama-navbar :navStyle="styleObject" /> -->
        <header-new/>

        <swiper :options="swiperOption">
            <swiper-slide class="slide-1 slidey">

            </swiper-slide>
            <swiper-slide class="slide-2 slidey">

            </swiper-slide>
            <swiper-slide class="slide-3 slidey">

            </swiper-slide>
            <swiper-slide class="slide-4 slidey">

            </swiper-slide>
            <swiper-slide class="slide-5 slidey">

            </swiper-slide>
       </swiper>
        <div class='container-fluid'>
        <div class='row'>
              <div v-for='(box,index) in boxes' :key='index' class='col-sm-6 col-md-3 col-lg-3 cols no-space'>
                    <drrama-purple-card :icon='box.icon' :text='box.text' :bgcolor='box.bgcolor'></drrama-purple-card>
                </div>
            </div>
        </div>
       <drrama-button type='transi' :styleObject='leftButtonStyleOne' text='Concieve Now' class="mob-hidden" @touched="goToTests"/>
       <drrama-button type='transi' :styleObject='leftButtonStyleMob' text='Concieve Now' class="desktop-hidden ipad-hidden" @touched="goToTests"/>
       <drrama-button type='swishy'  text='PLAN A FAMILY' @touched='gotoplanafamily' class="mob-hidden ipad-hidden"/>
       <drrama-button type='transi' icon='calender' :styleObject='rightButtonStyleOne' text='Concieve Later' class="mob-hidden" @touched="goToTreatments"/>
       <drrama-button type='transi' icon='calender' :styleObject='rightButtonStyleMob' text='Concieve Later' class="desktop-hidden ipad-hidden" @touched="goToTreatments"/>
    </div>
    
</template>
<script>
import drRamaButton from '~/components/commons/button'
import drRamaPurpleCard from '~/components/commons/small_card_col'
import drRamaNavBar from '~/components/commons/navigation_bar'
import headerNew from '~/components/commons/header-new'

export default {
    data(){
        return{
            websiteStat:false,
             boxes:[
      {
        icon:'box1',
        text:'Make an appointment',
        bgcolor:'#C6B3EE'
      },
      {
        icon:'box2',
        text:'Study of the patient',
        bgcolor:'#B39DDB'
      },
      {
         icon:'box3',
        text:'Diagnostic tests',
        bgcolor:'#9575CD'
      },
      {
         icon:'box4',
        text:'Assigning doctor',
        bgcolor:'#7E57C2'
      },
      {
         icon:'box5',
        text:'Diagnosing infertility',
        bgcolor:'#673AB7'
      },
      {
         icon:'box6',
        text:'Diagnostic treatment plan',
        bgcolor:'#502DA8'
      },
      {
         icon:'box7',
        text:'Prognosis and treatment',
        bgcolor:'#4527A0'
      },
      {
         icon:'box8',
        text:'Remedy and follow-up',
        bgcolor:'#2D235A'
      }
      ],
            leftButtonStyleOne:{
                    'position': 'absolute',
                    'top': '45%',
                    'z-index': '99',
                    'margin-left':'0px',
                    'border-radius':'0px',
                    'padding-top':'15px',
                    'padding-bottom':'15px',
                    'width':'250px',
                    'font-size':'22px'
            },
             rightButtonStyleOne:{
                    'position': 'absolute',
                    'top': '45%',
                    'z-index': '99',
                    'right':'0',
                    'margin-right':'0px',
                    'border-radius':'0px',
                    'padding-top':'15px',
                    'padding-bottom':'15px',
                    'width':'250px',
                    'font-size':'22px'
            },
            leftButtonStyleMob: {
                    'position': 'absolute',
                    'top': '45%',
                    'left': '13%',
                    'z-index': '99',
                    'border-radius':'0px',
                    'padding-top':'15px',
                    'padding-bottom':'15px',
                    'width':'250px',
                    'font-size':'22px'
            },
            rightButtonStyleMob: {
                    'position': 'absolute',
                    'top': '60%',
                    'left': '13%',
                    'z-index': '99',
                    'right':'0',
                    'border-radius':'0px',
                    'padding-top':'15px',
                    'padding-bottom':'15px',
                    'width':'250px',
                    'font-size':'22px'
            },
             swiperOption: {
                spaceBetween: 30,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                },
            },
        }
    },
    components:{
        'drrama-button':drRamaButton,
        'drrama-purple-card':drRamaPurpleCard,
        'drrama-navbar':drRamaNavBar,
        'header-new':headerNew
    },
    methods:{
        gotoplanafamily(){
            this.$router.push({name:'coming-soon'})
        },
        goToTests() {
            this.$router.push({name: "tests"});
        },
        goToTreatments() {
            this.$router.push({name: "treatments"});
        }
    },
    computed:{
          styleObject() {
       
                     return {
                'background':'#59548D !important'
            }
          
              }
          
           
        },
        created(){
            this.$nextTick(function () {
            // DOM is now updated
            // `this` is bound to the current instance
            this.websiteStat = true
            })
        }
    }

</script>
<style scoped>
/* background-blend-mode: overlay; */
  .swiper-slide {
      background-position: center;
      background-size: cover;
      min-height: 88vh;
      
      }
      .slidey{
         
          -webkit-filter: brightness(80%);
          z-index: 9;
      }
      .slidey::before {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        background-color: rgba(0,0,0,0.5);
      }

  .slide-1 {
      background-image:url('~assets/carousel1.jpg');
        height: 100vh;
  }
  .slide-2{
      background-image:url('~assets/carousel2.jpg');
      height: 100vh;
  }
  .slide-3{
      background-image:url('~assets/carousel3.jpg');
      height: 100vh;
  }
  .slide-4{
      background-image:url('~assets/carousel4.jpg');
      height: 100vh;
  }
  .slide-5{
      background-image:url('~assets/carousel5.jpg');
      height: 100vh;
  }
.no-space {
    padding-left:0px;
    padding-right:0px;
}


  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width : 768px) {
    .ipad-hidden {
        display: none;
    }
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
      display: none;
    }
    .slide-1, .slide-2, .slide-3, .slide-4, .slide-5 {
        background-position: center !important;
        width: 100% !important;
    }
    .mob-index {
        left: 10%;
    }
}
</style>


