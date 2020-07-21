<template>

    <div class="treatments">
        <div >
        <!-- <drrama-navbar :navStyle="styleObject"/> -->
        <header-new/>
        <section class="treatments-banner" :style="backgroundCss">
            <mobile-heading heading='OUR TREATMENTS'/>
            <div class="row">
                <div class="col-md-6 offset-md-6">
                     <div class="grey-back-box">
                         <h2 class="banner-heading text-center">Pave your path to fertility treatment</h2>
                         <p class="banner-box-text">
                             From fertility assessments and diagnosis to treatment options, Dr.Rama's Test Tube Baby Centre 
                             offers couples a complete solution to fulfill their dream of parenthood. Using the latest 
                             proven scientific techniques, combined with international experience and cutting-edge 
                             technology, our holistic services provide you with comprehensive, compassionate, patient-focused 
                             care.
                         </p>
                     </div>
                </div>
            </div>
        </section>
        <section class="treatments-content" >
             <b-card no-body class="treatments-card mobile-show">
                   <!-- <fab 
                       bg-color='#9575CD'
                       main-icon='local_phone'
                       icon-size='large'
                       @click.native='bookAppointment'
                    ></fab> -->
                    <!-- <a  @click='bookAppointment' class="float">
                        <i class="material-icons md-36 my-float">local_phone</i>
                    </a> -->
                    <!-- <float-button/> -->
                <b-dropdown id="ddown1" :text="heading" class="m-md-2 dropper">
                    <b-dropdown-item v-for="data in tabData" :key="data.id" @click="renderIt(data.name)">
                        {{data.name}}
                    </b-dropdown-item>
                </b-dropdown>
                <component v-if='showPage' :is="dynamicComponent"></component>
             </b-card>
            <b-card no-body class="treatments-card desktop-show">
                <b-tabs pills card vertical end nav-wrapper-class="w-20">
                    <b-tab  v-for="data in tabData" :key="data.id" :title="data.name" title-link-class="vertical-tabs">
                        <component v-if='showPage' :is="data.componentName"></component>
                    </b-tab>
                </b-tabs>
            </b-card>
        </section>
        <drrama-footer />
        </div>

        <div >
        </div>
    </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import headerNew from '~/components/commons/header-new';
import diagnosisConsultation from '~/components/commons/diagnosis-consultation';
import infertilityTreatments from '~/components/commons/infertility-treatments';
import iui from '~/components/commons/iui';
import ivfTreatment from '~/components/commons/ivf-treatment';
import drramaButton from '~/components/commons/button'
import ivfProcess from '~/components/commons/ivf-process';
import surrogacy from '~/components/commons/surrogacy';
import donation from '~/components/commons/donation';
import ageInfertility from '~/components/commons/age-infertility';
import pcos from '~/components/commons/pcos';
import reprodSurgery from '~/components/commons/reprod-surgery';
import fertilityAcu from '~/components/commons/fertility-acu';
import fertilityOzone from '~/components/commons/fertility-ozone';
import freezing from '~/components/commons/freezing-egg';
import implantationFailure from '~/components/commons/implantation-failure';
import pregnancyLoss from '~/components/commons/pregnancy-loss';
import fibroidUterus from '~/components/commons/fibroid-uterus';
import icsiMulti from '~/components/commons/icsi-multi';
import drramaFooter from '~/components/commons/footer';
import floatButton from '~/components/commons/float-button';
import mobileHeading from '~/components/commons/mobile-heading'
import { setTimeout } from 'timers';

export default {
    components: {
        'drrama-navbar':drRamaNavBar,
        'diagnosis-consulation': diagnosisConsultation,
        'infertility-treatments': infertilityTreatments,
        'drrama-button': drramaButton,
        "iui": iui,
        "ivfProcess": ivfProcess,
        "ivf-treatment": ivfTreatment,
        "donation": donation,
        "age-infertility": ageInfertility,
        "surrogacy": surrogacy,
        "pcos": pcos,
        "reprod-surgery": reprodSurgery,
        "fertility-acu": fertilityAcu,
        "fertility-ozone": fertilityOzone,
        "freezing": freezing,
        "implantation-failure": implantationFailure,
        "pregnancy-loss":pregnancyLoss,
        "fibroid-uterus": fibroidUterus,
        "icsi-multi": icsiMulti,
        'drrama-footer':drramaFooter,
        'header-new':headerNew,
        'float-button':floatButton,
        'mobile-heading':mobileHeading
        
    },
     data() {
        return {
            dynamicComponent:'diagnosis-consulation',
            heading:'Diagnosis | Consultation',
            showPage:false,
            tabData:[
                {
                    name:'Diagnosis | Consultation',
                    componentName:'diagnosis-consulation',
                    id:0
                },
                {
                    name:'Infertility Treatments',
                    componentName:'infertility-treatments',
                    id:1
                },
                {
                    name:'IUI',
                    componentName:'iui',
                    id:2
                },
                {
                    name:'IVF | ICSI Treatment',
                    componentName:'ivf-treatment',
                    id:3
                },
                {
                    name:'IVF Process',
                    componentName:'ivfProcess',
                    id:4
                },
                {
                    name:'Donation',
                    componentName:'donation',
                    id:5
                },
                {
                    name:'Surrogacy',
                    componentName:'surrogacy',
                    id:6
                },
                {
                    name:'Age & Infertility',
                    componentName:'age-infertility',
                    id:7
                },
                {
                    name:'PCOS',
                    componentName:'pcos',
                    id:8
                },
                {
                    name:'Reproductive Surgery',
                    componentName:'reprod-surgery',
                    id:9
                },
                {
                    name:'Fertility Acupunture',
                    componentName:'fertility-acu',
                    id:10
                },
                {
                    name:'Fertility Ozone Therapy',
                    componentName:'fertility-ozone',
                    id:11
                },
                {
                    name:'ICSI | MESA | PESA | TESE',
                    componentName:'icsi-multi',
                    id:12
                },
                {
                    name:'Implantation Failure',
                    componentName:'implantation-failure',
                    id:13
                },
                {
                    name:'Freezing Egg | Sperm | Embryo',
                    componentName:'freezing',
                    id:14
                },
                {
                    name:'Recurrent Pregnancy Loss',
                    componentName:'pregnancy-loss',
                    id:15
                },
                {
                    name:'Fibroid Uterus',
                    componentName:'fibroid-uterus',
                    id:16
                }
                ]
        }
    },
    methods:{
        bookAppointment(){
             this.$router.push({name: "book-appointment"});
        },
        switchTab(id){
             document.getElementById(id).tab('show')
        },
        renderIt(componentTorender){
            console.log(componentTorender)
            switch(componentTorender){
                case 'Diagnosis | Consultation':
                    this.dynamicComponent = 'diagnosis-consulation'
                    this.heading = 'Diagnosis | Consultation'
                    return
                case 'Infertility Treatments':
                    this.dynamicComponent = 'infertility-treatments'
                    this.heading = 'Infertility Treatments'
                    return
                case 'IUI':
                    this.dynamicComponent ='iui'
                    this.heading = 'IUI'
                    return
                case 'IVF | ICSI Treatment':
                    this.dynamicComponent = 'ivf-treatment'
                    this.heading = 'IVF | ICSI Treatment'
                    return
                case 'IVF Process':
                    this.dynamicComponent = 'ivfProcess'
                    this.heading = 'IVF Process'
                    return
                case 'Donation':
                    this.dynamicComponent = 'donation'
                    this.heading = 'Donation'
                    return
                case 'Surrogacy':
                    this.dynamicComponent = 'surrogacy'
                    this.heading = 'Surrogacy'
                    return
                case 'Age & Infertility':
                    this.dynamicComponent = 'age-infertility'
                    this.heading = 'Age & Infertility'
                    return
                case 'PCOS':
                    this.dynamicComponent = 'pcos'
                    this.heading = 'PCOS'
                    return
                case 'Fertility Acupunture':
                    this.dynamicComponent = 'fertility-acu'
                    this.heading = 'Fertility Acupunture'
                    return
                case 'Reproductive Surgery':
                    this.dynamicComponent = 'reprod-surgery'
                    this.heading = 'Reproductive Surgery'
                    return
                case 'Fertility Ozone Therapy':
                    this.dynamicComponent = 'fertility-ozone'
                    this.heading = 'Fertility Ozone Therapy'
                    return
                case 'ICSI | MESA | PESA | TESE':
                    this.dynamicComponent = 'icsi-multi'
                    this.heading = 'ICSI | MESA | PESA | TESE'
                    return
                case 'Implantation Failure':
                    this.dynamicComponent = 'implantation-failure'
                    this.heading = 'Implantation Failure'
                    return
                case 'Freezing Egg | Sperm | Embryo':
                    this.dynamicComponent = 'freezing'
                    this.heading = 'Freezing Egg | Sperm | Embryo'
                    return
                case 'Recurrent Pregnancy Loss':
                    this.dynamicComponent = 'pregnancy-loss'
                    this.heading = 'Recurrent Pregnancy Loss'
                    return
                case 'Fibroid Uterus':
                    this.dynamicComponent = 'fibroid-uterus'
                    this.heading = 'Fibroid Uterus'
                    return
                default:
                    this.dynamicComponent = 'diagnosis-consulation'
                    this.heading = 'Diagnosis | Consultation'
            }

     

     
        }
    },
    created(){
        setTimeout(()=>{
            this.showPage = true
        },1000)
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        bannerImage() {
         return require("~/assets/consultation.jpg");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh',
                backgroundPosition:'center',
                backgroundColor: '#aaa',
                backgroundBlendMode: 'multiply'
            }
        }

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.treatments-banner {
}

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
.grey-back-box {
    background: rgba(230, 220, 252, 0.5);
    margin-top: 20rem !important;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
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
.treatment-list > li {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-align: justify;
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
  .treatment-section1{
      width: 100%;
      margin-left: 0rem;
  }
    .treatment-section2{
      width: 100%;
      margin-left: 0rem;
  }
  .grey-back-box{
          margin-top: 24rem !important;
  }
      .book-appointment-box{
      display:none;
  }
 
  
}
@media only screen and (max-width: 450px) {
     .treatment-content{
      width:300px;
  }
  .banner-box-text{
    
      color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
  }
  .grey-back-box{
      width: 100%;
      background: rgba(90, 84, 141, 0.9)
  }
  .banner-heading{
      color:#fff;
  }
  
}
</style>
