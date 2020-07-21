<template>
<div class='checked-back' @scroll='handlescroll(e)'>
  <!-- <drrama-header/> -->
  <banner-carousel/>
 <!-- <div class='checked-back'> -->
  <purple-band text='a word from our patients' :styleObject='reviewBand' />
    <testimonials />
  <!-- </div> -->
  <section class="container" style='background:#e2e212'>
    <!-- <div class='row'>
      <div v-for='(box,index) in boxes' :key='index' class='col-sm-3 cols no-space'>
        <drrama-col-s-card :icon='box.icon' :text='box.text' :bgcolor='box.bgcolor'></drrama-col-s-card>
      </div>
    </div> -->
   </section>
 
  <purple-band text='Our Milestones' />
  <div class='container-fluid ' >
    <div class='row '>
      <div v-for='(box,index) in transparent_boxes' :key='index' class='col-sm-2 cols no-space'>
        <drrama-col-t-card :icon='box.icon' :stat='box.stat' :successAt='box.successAt' :symbol='box.symbol' ></drrama-col-t-card>
      </div>
    </div>
    <!-- <drrama-chart :chartdata='datacollection'  /> -->
    <!-- <div class='container-fluid'> -->
      
      <div class='row'>
        <div class='cols col-md-6'>
           <purple-band text='IVF Success Rate' ></purple-band>
          <line-chart :chart-data="datacollection" :options='options' class='small' />
        </div>
        <div class='cols col-md-6 no-space' >
           <purple-band text='About us' ></purple-band>
            <div class='milestone-text-box ' >
              <div class='row'>
              <!-- <div class='cols col-md-12'> -->
               
                <div class='about-us-avatar' style='position:relative;top:90px'>
                 <i class="fas fa-user-md"></i>
                  <p>
                    
                 <number
                ref="number2"
                :from="0"
                :to="180"
                :duration="5"
                :delay="2"
                easing="Power1.easeOut"></number></br>
                  Doctors</p>
                </div>
                     <div class='about-us-avatar'>
               <i class="far fa-hospital"></i>
             
                 <p> 
                       <number
                ref="number3"
                :from="0"
                :to="1800"
                :duration="5"
                :delay="2"
                easing="Power1.easeOut"></number></br> Treatments</p>
                   </div>
              <!-- </div>
              <div class='cols col-md-6'> -->
                   <div class='about-us-avatar'>
                 <i class="fas fa-ambulance"></i>

                 <p>     <number
                ref="number2"
                :from="0"
                :to="18000"
                :duration="5"
                :delay="2"
                easing="Power1.easeOut"/></br> Emergencies</p></div>
                   <div class='about-us-avatar' style='position:relative;top:90px'>
              <i class="fas fa-frown"></i>
              <p>    <number
                ref="number2"
                :from="0"
                :to="180"
                :duration="5"
                :delay="2"
                easing="Power1.easeOut"/></br> Casualties</p></div>
              </div>
              <!-- </div> -->
              
            
             
             
              <!-- <p>Choose Well</p> -->
              <h2 class='heading-secondary' >We Take Care of You</h2>
              <p class='padding-lr-50 mob-take-care ipad-take-care' >ART clinics surviving in the 21<sup>st</sup> century will be characterized by team work. It is good to be individually brilliant and to have strong core competencies, but unless you are able to work in a team and harness each other’s core competencies it is difficult to achieve a goal.</p>
              <drrama-button text='LEARN MORE'  @touched="goToAboutUs" type='whitey'/>
            </div>
        </div>
      </div>
    <!-- </div> -->
   
  </div>
  <div class='spacing-section'>
  <purple-band text='Our Leadership' />
  <div class='container' >
    <div class='row'>
      <div class='cols col-md-6 mob-leader-card'>
            <leadership-card />
      </div>
      <div class='cols col-md-6'>
            <leadership-card
            
            photo='dr.rakhi.jpg'
            name='Dr. Rakhi Mishra'
            info='Dr. Rakhi Mishra has been an integral member for the institution. She helped build the brand and reach global recognition. With over seventeen years of experience, her impeccable journey from a dreamer to an inspiration to many is astounding. Apart from being a prominent face of women leadership, she is also an avid participant in promoting health awareness among youth. She builds and maintains a culture which supports our institution in our quest to provide quality diagnosis and treatment.'
            title='CEO'
            :id="drRakhi"
            />
      </div>
    </div>
  </div>
  </div>
  <purple-band text='Our Doctors' />

    <div class='container-fluid ' >
    <div class='row doctors-section-home'>
      <div v-for='(doc,index) in doctors' :key='index' class='col-md-3 cols '>
         <drrama-doctor :name='doc.name' :title='doc.title' :image='doc.image' :id='doc.id'></drrama-doctor>
      </div>
    </div>
 </div>
  <drrama-book-appointment />
    <drrama-footer ></drrama-footer>

  </div>
</template>

<script>


import ColorCard from '~/components/commons/small_card_col'
import LeadershipCard from '~/components/commons/leadership_card'
import PurpleBand from '~/components/commons/purple_band'
import TransparentCard from '~/components/commons/transparent_success_card'
import drramaButton from '~/components/commons/button'
import drramaFooter from '~/components/commons/footer'
import drramaHeader from '~/components/commons/navigation_bar'
import BookAppointment from '~/components/commons/book_appointment_card'
import bannerCarousel from '~/components/commons/banner-carousel'
import Testimonials from '~/components/commons/testimonials'
// import drramaChart from '~/components/commons/chart'
 import LineChart from '~/components/commons/chartsNEW.js'
 import Doctor from '~/components/commons/doctor'

export default {
  components: {
    
    'drrama-button':drramaButton,
    'purple-band':PurpleBand,
    'drrama-col-s-card':ColorCard,
    'drrama-col-t-card':TransparentCard,
    'drrama-footer':drramaFooter,
    'drrama-book-appointment':BookAppointment,
    'drrama-header':drramaHeader,
    'leadership-card':LeadershipCard,
    'banner-carousel':bannerCarousel,
    'testimonials':Testimonials,
    // 'drrama-chart':drramaChart,
    'line-chart':LineChart,
    'drrama-doctor':Doctor
  },
  methods:{
    checkButton(){
      console.log('dhruv is great')
    },
       handlescroll(e){
            console.log(e)
        },
     fillData () {
        this.datacollection = {
          labels: ['Under Age 35', 'Age 35-37','Age 38-40', 'Age 41-42'],
          datasets: [
            {
              label: "Dr Rama's Fertility",
              backgroundColor: '#673AB7',
             data: [62, 50, 38, 13],
             
     
            },
            {
              label: 'National Average',
              backgroundColor: '#B39DDB',
              
               data: [52, 38, 24, 11]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (80 - 5 + 1)) + 5
      },
      goToAboutUs() {
        this.$router.push({name: "about-us"});
      }
  },
   mounted () {
      this.fillData()
    },
  data(){
    return{
      options:{responsive: true,
              display:true,
              
      scales: {
        yAxes: [{
            ticks: {
          
                stepSize: 5
            }
        }]
    }},
       datacollection:null,
   reviewBand:{
     marginTop:'0px'
   },
   drRakhi: 1,
    doctors:[
      // {
      //   name:'Dr. Arun Gudi',
      //   title:'EMBRYOLOGIST',
      //   image:''
      // },
     
      //  {
      //    id:1,
      //   name:'Dr. Rakhi Mishra',
      //   title:'CEO BANGALORE',
      //   image:'dr.rakhi.jpg'
      // },
      {
          id:3,
        name:'Dr.Papolu Rama Devi',
        title:'Managing Director & Founder',
        image:'dr.rama.png'
      },
       {
         id:2,
        name:'Dr. Sandhya Mishra',
        title:'INFERTILITY SPECIALIST',
        image:'dr.sandhyamishra.jpg'
      },
       {
         id:4,
        name:'Dr. Sruthi Malvaker',
        title:'IVF SPECIALIST',
        image:'sruthi-malvikar.jpg'
      },
     
      
        {
          id:6,
        name:'Dr. Vijayalaxmi Botla',
        title:'EMBRYOLOGIST',
        image:'vijayalaxmi-botla.jpg'
      },
       {
         id:7,
        name:'Dr. Rajyalakshmi',
        title:'CHIEF EMBRYOLOGIST',
        image:'dr-rajyalakshmi.jpg'
      },
       {
         id:8,
        name:'Dr. Vijaya Lakshmi',
        title:'ASSISTANT DIRECTOR',
        image:'dr-vijayalaxmi.jpg'
      },
       {
         id:9,
        name:'Dr. Premkumar',
        title:'EMBRYOLOGIST',
        image:'dr-premkumar.jpg'
      },
       {
         id:12,
        name:'Dr. Saritha',
        title:'INFERTILITY SPECIALIST',
        image:'drsaritha.jpg'
      },
      
       {
         id:10,
        name:'Mr.Suchindranath G',
        title:'EMBRYOLOGIST',
        image:'mr.suchindranathg.jpg'
      },
       {
         id:5,
        name:'Dr Arun Kumar Gudi',
        title:'SENIOR EMBRYOLOGIST',
        image:'dr.arunkumargudi.jpg'
      },
       {
         id:11,
        name:'Dr. Haritha Samadhi',
        title:'GYNECOLOGICAL',
        image:'dr.harithasamadhi.jpg'
      },
     
    ],
      transparent_boxes:[
        {
          icon:'icon1',
          stat:'27',
          symbol:'+',
          
          successAt:'ESTABLISHED IN 1991 | SEPTEMBER'

        },{
          icon:'icon2',
           stat:'125722',
           symbol:'+',
          successAt:'TOTAL CONSULTATIONS'
        },{
          icon:'icon3',
           stat:'12926',
            symbol:'',
          successAt:'IVF | ICS | CYCLES DONE'
        },{
          icon:'icon4',
           stat:'65',
            symbol:'%',
          successAt:'IVF | ICSI SUCCESS RATES [CHANGES MONTHLY]'
        },{
          icon:'icon1',
          stat:'60255',
           symbol:'',
          successAt:'IUI | MEDICAL TREATMENT'

        },{
          icon:'icon1',
          stat:'25',
           symbol:'%',
          successAt:'IUI SUCCESS RATES PER CYCLE'

        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('~/assets/css/all.css');
  p {
    font-family: 'Lato', sans-serif;
  }
  .milestone-text-box{
    height: 648px;
    width: 100%;
    background: linear-gradient(to right, rgba(89 ,81,168,1), rgba(198 ,179,238,1));
    padding:20px;
    color:white;
     text-align:center;
     border-radius:4px;


  }
  .heading-secondary{
    margin-top:50px;
    font-family: 'Lato', sans-serif;
  }
  .padding-lr-50{
    padding-left:60px;
    padding-right:60px;
  }
  .about-us-avatar{
      background: #673AB7;
    width: 160px;
    margin: 0 auto;
    height: 160px;
    padding: 23px;
    border-radius: 50%;
    margin-bottom:20px;
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
  .about-us-avatar > p {
    
  font-size:18px;
    margin-bottom: 0;
    font-weight: 700;
  }
   .milestone-text-box  > p{
     font-size:18px;
   }
   .about-us-avatar > i{
    font-size:40px;
    margin-bottom:15px;

  }
   .milestone-text-box > .row > .cols > h2{
    
  }
  .small {
    /* max-width: 600px; */
    width: 80%;
    margin:  10px auto;
  }
  a:hover {
    
    text-decoration: none;
}
.checked-back{
    background-image: linear-gradient(0deg,transparent 24%,hsla(0,0%,86%,.2) 25%,hsla(0,0%,86%,.2) 26%,transparent 27%,transparent 74%,hsla(0,0%,86%,.2) 75%,hsla(0,0%,86%,.2) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,hsla(0,0%,86%,.2) 25%,hsla(0,0%,86%,.2) 26%,transparent 27%,transparent 74%,hsla(0,0%,86%,.2) 75%,hsla(0,0%,86%,.2) 76%,transparent 77%,transparent);
        background-size: 100px 100px;
}
  body {
    position: relative;
    margin: 0;
    min-height: 100%;
  }
  .container {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .container-drdrama{
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links {
    padding-top: 15px;
  }
  .no-space{
    padding-left:0px;
    padding-right:0px;
  }
  .spacing-section{
    padding:80px 0px;
  }
  .doctors-section-home {
    margin: 3rem 0;
  }


  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width : 768px) {
    .small {
      margin-top: 15rem;
    }
    .about-us-avatar {
      top: 0px !important;
      height: 150px;
      width: 150px;
    }
    .about-us-avatar > i {
      font-size: 30px;
    }
    .about-us-avatar > p {
      font-size: 15px;
    }
    .heading-secondary {
      margin-top: 1rem; 
    }
    .ipad-take-care {
      padding: 5px 0;
      font-size: 15px !important;
    }
    .milestone-text-box {
      height: 100%;
      max-height: 700px;
    }
    .profile-card {
      width: 100%;
      min-height: 700px;
      max-height: 700px;
    }
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
      display: none;
    }
    .checked-back {
      overflow: hidden;
    }
    .profile-card {
      width: 100%;
    }
    .milestone-text-box {
      height: 100% !important;
      max-height: 780px;
      padding: 2rem 1rem;
    }
    .about-us-avatar {
      top: 0px !important;
      width: 150px;
      height: 150px;
    }
    .about-us-avatar > i {
      font-size: 35px;
    }
    .about-us-avatar > p {
      font-size: 16px;
    }
    .mob-take-care {
      padding: 1rem !important;
      font-size: 15px !important;
    }
    .mob-leader-card {
      margin-bottom: 2rem;
    }
}
</style>
