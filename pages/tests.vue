<template>
    <div class="tests">
        <div>
        <!-- <drrama-navbar :navStyle="styleObject"/> -->
        <header-new/>
        <section class="tests-banner" :style="backgroundCss">
             <mobile-heading heading='OUR TESTS'></mobile-heading>
            <div class="">
                <div class="col-md-6 offset-md-6 desktop-show">
                     <div class="grey-back-box-1">
                         <h2 class="banner-heading text-center">Pave your path to fertility treatment</h2>
                         
                         <p class="banner-box-text">
                             Fertility experts at Dr. Rama's IVF Centre pay special attention on the tests for an 
                             infertile couple as it gives them the opportunity to select the right kind of fertility 
                             treatment for such couples based on the initial reports. These tests are comprehensive 
                             & detailed and are essential to determine the causes of infertility, whether the couples 
                             are diagnosed with any other ailment and which technique would be most suitable for a 
                             particular couple.
                         </p>
                     </div>
                </div>
            </div>
           
        </section>
        
        <section class="treatments-content" >
             <b-card no-body class="treatments-card desktop-show">
                <b-tabs pills card vertical end nav-wrapper-class="w-20">
                     <b-tab  v-for="data in tabData" :key="data.id" :title="data.name" title-link-class="vertical-tabs">
                        <component :is="data.componentName"></component>
                    </b-tab>
                  
                </b-tabs>
            </b-card>
             <b-card no-body class="treatments-card mobile-show">
                    <!-- <a  @click='bookAppointment' class="float">
                        <i class="material-icons md-36 my-float">local_phone</i>
                    </a> -->
                <b-dropdown id="ddown1" :text="heading" class="m-md-2 dropper">
                    <b-dropdown-item v-for="data in tabData" :key="data.id" @click="renderIt(data.name)">
                        {{data.name}}
                    </b-dropdown-item>
                </b-dropdown>
                <component  :is="dynamicComponent"></component>
            </b-card>
        </section>
         <drrama-footer />
    </div>
    </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import uterineEval from '~/components/commons/uterine-eval.vue';
import mobileHeading from '~/components/commons/mobile-heading'
import ovarianTest from '~/components/commons/ovarian-test.vue';
import ovulationTest from '~/components/commons/ovulation-test.vue';
import maleFertilityTest from '~/components/commons/male-fertility-test.vue';
import femaleFertilityTest from '~/components/commons/female-fertility-test.vue';
import immuneFertilityTest from '~/components/commons/immune-fertility-test.vue';
import geneticScreening from '~/components/commons/genetic-screening.vue';
import laproscopyProcedure from '~/components/commons/laproscopy-procedure.vue';
import hysteroscopyProcedure from '~/components/commons/hysteroscopy-procedure.vue';
import headerNew from '~/components/commons/header-new';
import drramaFooter from '~/components/commons/footer';

export default {
    components: {
        'drrama-navbar':drRamaNavBar,
        'header-new':headerNew,
        'uterine-eval':uterineEval,
        'ovarian-test':ovarianTest,
        'ovulation-test':ovulationTest,
        'male-fertility-test':maleFertilityTest,
        'female-fertility-test':femaleFertilityTest,
        'immune-fertility-test':immuneFertilityTest,
        'genetic-screening': geneticScreening,
        'laproscopy-procedure':laproscopyProcedure,
        'hysteroscopy-procedure':hysteroscopyProcedure,
         'drrama-footer':drramaFooter,
         'mobile-heading':mobileHeading
    },
       head () {
        return {
        title: 'Is IVF treatment right for you? | Ask Dr Rama IVF',
        meta: [
            { hid: 'description', name: 'description', content: 'For most couples, IVF is chosen only after other types of fertility treatments have failed. But it might be the only option for some. Consult the best infertility specialists & make an informed decision at the right time. Dr Rama IVF provides holistic solutions for infertility management in Bangalore' },
            { hid: 'keywords', name: 'keywords', content: 'ivf treatment,in vitro fertilization, iui, icsi treatment, infertility mangement' },
        ]
        }
  },
    data() {
        return {
            dynamicComponent:'uterine-eval',
            heading:'Uterine Evaluation',
            tabData:[
                {
                    name:'Uterine Evaluation',
                    componentName:'uterine-eval',
                    id:0
                },
                {
                    name:'Ovarian Reserve Testing',
                    componentName:'ovarian-test',
                    id:1
                },
                {
                    name:'Male Fertility Testing',
                    componentName:'male-fertility-test',
                    id:2
                },
                {
                    name:'Female Fertility Testing',
                    componentName:'female-fertility-test',
                    id:3
                },
                {
                    name:'Immune Fertility Testing',
                    componentName:'immune-fertility-test',
                    id:4
                },
                {
                    name:'Genetic Screening',
                    componentName:'genetic-screening',
                    id:5
                },
                {
                    name:'Ovulation Test',
                    componentName:'ovulation-test',
                    id:6
                },
                {
                    name:'Laproscopy Procedure',
                    componentName:'laproscopy-procedure',
                    id:7
                },
                {
                    name:'Hysteroscopy Procedure',
                    componentName:'hysteroscopy-procedure',
                    id:8
                }
            ]
        }
    },
    methods:{
        bookAppointment(){
             this.$router.push({name: "book-appointment"});
        },
           renderIt(componentTorender){
            console.log(componentTorender)
            switch(componentTorender){
                case 'Uterine Evaluation':
                    this.dynamicComponent = 'uterine-eval'
                    this.heading = 'Uterine Evaluation'
                    return
                case 'Ovarian Reserve Testing':
                    this.dynamicComponent = 'ovarian-test'
                    this.heading = 'Ovarian Reserve Testing'
                    return
                case 'Male Fertility Testing':
                    this.dynamicComponent ='male-fertility-test'
                    this.heading = 'Male Fertility Testing'
                    return
                case 'Female Fertility Testing':
                    this.dynamicComponent = 'female-fertility-test'
                    this.heading = 'Female Fertility Testing'
                    return
                case 'Immune Fertility Testing':
                    this.dynamicComponent = 'immune-fertility-test'
                    this.heading = 'Immune Fertility Testing'
                    return
                case 'Genetic Screening':
                    this.dynamicComponent = 'donation'
                    this.heading = 'genetic-screening'
                    return
                case 'Ovulation Test':
                    this.dynamicComponent = 'ovulation-test'
                    this.heading = 'Ovulation Test'
                    return
                case 'Laproscopy Procedure':
                    this.dynamicComponent = 'laproscopy-procedure'
                    this.heading = 'laproscopy-procedure'
                    return
                case 'Hysteroscopy Procedure':
                    this.dynamicComponent = 'hysteroscopy-procedure'
                    this.heading = 'Hysteroscopy Procedure'
                    return
                default:
                    this.dynamicComponent = 'uterine-eval'
                    this.heading = 'Uterine Evaluation'
            }
            }
    
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        bannerImage() {
         return require("~/assets/tests.png");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundColor: '#777',
                backgroundBlendMode: 'multiply'
            }
        }

    }
}
</script>
<style>

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#9575CD;
	color:#FFF !important;
	border-radius:50px;
	text-align:center;
    z-index: 9999;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	/* box-shadow: 2px 2px 3px #999; */
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle{
   
    font-size: 1.5rem;
    font-weight: 700;
    color: #E6DCFC;
    background: none;
    border: none;
    box-shadow: none;
    text-decoration: underline;
}
.my-float{
	/* margin-top:22px; */
    padding:9px;
    font-size:40px;
}
.dropper > button{
        margin-left: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #E6DCFC;
    background: none;
    border: none;
    box-shadow: none;
    
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle{
   
    font-size: 1.5rem;
    font-weight: 700;
    color: #E6DCFC;
    background: none;
    border: none;
    box-shadow: none;
    text-decoration: underline;
}
.dropdown-item{
     color: #59548D;
}

.desktop-show{
    display: block;
}
.mobile-show{
    display:none;
}
.treatments {
    overflow: hidden;
}
.treatments-card {
    border: none;
}
.treatments-content {
    margin-top: 5rem;
}
.banner-heading {
    color: #59548D;
    font-size: 42px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
}
.grey-back-box-1 {
    background: rgba(230, 220, 252, 0.5);
    /* margin-top: 20rem !important; */
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    position: absolute;
    top: 220px;
}
.banner-box-text {
    color:#ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    width: 95%;
    margin: 0 auto;
}
.treatments-tab {
    color: #59548D;
}
.treatments-nav {
    justify-content: center;
}
.nav-link, .treatments-list-heading {
    color: #59548D;
}
.book-appointment-button {
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
.treatment-list, .treatment-list > li, .treatment-list-heading, .treatment-number-list,  .treatment-number-list > li{
    color: #59548D;
}
.treatments-card > .tabs > .col-auto {
    background: #ffffff !important;
}
.treatments-card > .tabs > .col-auto > .tablist > li {
    color: #59548D;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background: #59548D;
    color: #fff;
}
@media only screen and (max-width: 800px) {
  .mobile-show{
      display: block;
  }
  .desktop-show{
      display:none;
  }
  .treatment-heading{
      display:none;
  }
  .test-section1{
      width: 100%;
      margin-left: 0rem;
  }
    .test-section2{
      width: 100%;
      margin-left: 0rem;
  }
  .grey-back-box-1{
          margin-top:5rem !important;
  }
   .test-heading{
      display: none;
  }
    .book-appointment-box{
      display:none;
  }
  .test-section1-right{
      display:none;
  }
  
}
@media only screen and (max-width: 450px) {
     .test-content{
      width:300px;
  }
  

  .test-section1-left{
          margin-left: 0rem;
    padding: 1rem;
    line-height: 30px;
    min-width: 100%;
  }
  .book-appointment-box{
      display:none;
  }
  .banner-box-text{
    
      color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
  }
  .grey-back-box-1{
      width: 100%;
      background: rgba(90, 84, 141, 0.9)
  }
  .banner-heading{
      color:#fff;
  }
}
</style>

