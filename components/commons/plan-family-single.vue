<template>
    <div :style='styleObject'>
        <!-- <drrama-navbar /> -->
        <div :style='styleObject' class='here'>
            <div class='text-center circle' v-if='slideNumber != 0' :style='backgroundCircle'> 
                <h1>STEP {{slideNumber}}</h1>
                <h3>START PLANNING YOUR FAMILY</h3>
            </div>
            <div class='container-fluid'>
                    <div class='row top-200' v-if='slideNumber != 0'>
                        <div class='cols col-md-6 text-center'>
                            <h2> {{title}}</h2>
                        </div>
                        <div class='cols col-md-6 text-center'>
                            <p class='right-text-fp text-left'>
                                Doctus sententiae definiebas ea per, quo ea eros constituto. Ad dicam docendi mediocritatem mea, tacimates recteque ex pro. Summo decore et nec, munere adolescens intellegam cum in. Sed purto consectetuer ut, et dicit persequeris mea, pri ad utinam perfecto sadipscing. Ad facilis recteque dissentias sit, ridens iriure vim eu
                            </p>
                            <drrama-button type='transi' text='Book Appointment' @touched='bookAppontment' :styleObject='buttonStyle'/>
                        </div>
                    </div>
                </div>
            <img :src='iconic' v-if="slideNumber != 0" class='plan-slide-image'/>
            <div class="first-slide" v-if="slideNumber == 0">
                <div class="first-image-container">
                    <div class="first-box">
                        <img src='~/assets/s1_p.png'/>
                    </div>
                    <div class="second-box">
                        <img src='~/assets/s2_p.png'/>
                    </div>
                    <div class="third-box">
                        <img src='~/assets/s3_p.png'/>
                    </div>
                    <div class="fourth-box">
                        <img src='~/assets/s4_p.png'/>
                    </div>
                    <div class="fifth-box">
                        <img src='~/assets/s5_p.png'/>
                    </div>
                    <div class="sixth-box">
                        <img src='~/assets/s6_p.png'/>
                    </div>
                    <div class="seventh-box">
                        <img src='~/assets/s7_p.png'/>
                    </div>
                    <div class="eighth-box">
                        <img src='~/assets/s8_p.png'/>
                    </div>
                    <div class="first-image-main-wrapper">
                        <div class="first-image-wrapper">
                            <h2 class="plan-first-heading">PLAN YOUR FAMLY</h2>
                            <img :src='iconic' class="plan-first-image" />
                        </div>
                    </div>
                </div>
                <div class="sub-image">
                    <div class="sub-image-wrapper">
                        <img :src="subImage" class="sub-image" width="100%"/>
                    </div>
                    <h4 class="start text-center">START YOUR JOURNEY HERE</h4>
                </div>
            </div>
        
        </div>
    </div>
</template>
<script>
import drramaButton from '~/components/commons/button'
import drRamaNavBar from '~/components/commons/navigation_bar'
export default{
    props:{
        bgColor:{
            type:String,
            default:'#fff'
        },
        color:{
            type:String,
            default:'#111'
        },
        slideNumber:{
            type:Number,
            default:1
        },
        image:{
            type:String,
            default:'appointment2.png'
        }
    },
    methods:{
        bookAppontment(){
            this.$router.push({name:'book-appointment'})
        }
    },
    components:{
        'drrama-button':drramaButton,
        'drrama-navbar':drRamaNavBar
    },
    computed:{
        styleObject(){
            return{
            'height':'100%',
            'width':'100%',
            'background-color':this.bgColor,
            'color':this.color
            }
            
        },
        backgroundCircle(){
            return{
                'background-color':this.bgColor,
            }
               
        },
        buttonStyle(){
            return{
                "position": "absolute",
                 "right": "30px",
                 "top":"400px"
            }
       
        },
        title(){
             var title = ''
            switch(this.slideNumber){
                case 0:title = ''
                break;
                 case 1:title = 'BOOK AN APPOINTMENT'
                break;
                 case 2:title = 'STUDY OF THE PATIENT'
                break;
                 case 3:title = 'BOOK AN APPOINTMENT'
                break;
                 case 4:title = 'BOOK AN APPOINTMENT'
                break;
                 case 5:title = 'BOOK AN APPOINTMENT'
                break;
                 case 6:title = 'BOOK AN APPOINTMENT'
                break;
                 case 7:title = 'BOOK AN APPOINTMENT'
                break;
                 case 8:title = 'BOOK AN APPOINTMENT'
                break;
                
            }
            return title
        },
        iconic(){
            var image = ''
            switch(this.slideNumber){
                case 0:image = 'home_hand.png'
                break;
                 case 1:image = 'appointment2.png'
                break;
                 case 2:image = 'studyOfPat.png'
                break;
                 case 3:image = 'TESTS.png'
                break;
                 case 4:image = 'doctors.png'
                break;
                 case 5:image = 'step5.png'
                break;
                 case 6:image = 'treatment_plan.png'
                break;
                 case 7:image = 'prognosis_treatmemt.png'
                break;
                 case 8:image = 'last.png'
                break;
                
            }
            return require(`~/assets/planfamily/${image}`)
        },
        subImage() {
            return require("~/assets/planfamily/mother.png")
        }
    }
    
}
</script>
<style>
h1{
    z-index: 99;
    text-align: center;
}
.here:after {
    content:"";
    position: absolute;
    z-index: 88;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 2px solid #fff;
    transform: translate(-50%);
}
.here{
    /* z-index:99;
    position: relative; */
}
.right-text-fp{
    width:450px;
  
    margin:auto;
}
.plan-slide-image{
        height: 450px;
    display: block;
    margin: auto;
    position:relative;
    top:200px;
    z-index:99;
   
}
.plan-first-image {
    height: 300px;
    width: 300px;
    display: block;
    margin: auto;
    /* top: 205px; */
    z-index: 99;
    /* margin-top: 30px; */
    /* padding: 1rem; */
    padding-top: 3rem !important;
    padding: 2rem;
    padding-left: 0;  
}
.circle{
    width: 500px;
    height: 120px;
    position: relative;
    margin: 0 auto;
    /* border:1px solid white; */
    /* border-radius: 50%; */
    padding:10px;
    z-index: 100;
    top:100px;
}
.top-200 {
    position: relative;
    top: 200px;
}
.first-image-container {
    position: relative;
    min-height: 90vh;
}
.first-image-wrapper {
    height: 300px;
    display: block;
    margin: auto;
    z-index: 99;
    border: 3px solid;
    padding: 13.4px;
    width: 300px;
    border-radius: 50%;
}
.first-image-main-wrapper {
    height: 340px;
    display: block;
    margin: auto;
    position: relative;
    top: 260px;
    z-index: 99;
    border: 10px solid;
    padding: 5px;
    width: 340px;
    border-radius: 50%;
    padding-top: 10px;
}
.plan-first-heading {
    position: absolute;
    top: 20%;
    width: 200px;
    text-align: center;
    left: 18%;
}
.first-box, .second-box, .third-box, .fourth-box, .fifth-box, .sixth-box, .seventh-box, .eighth-box {
    background: transparent;
    color: #fff;
    min-height: 80px;
    min-width: 80px;
    max-width: 80px;
    max-height: 80px;
    text-align: center;
    position: absolute;
}
.first-box {
    top: 160px;
    left: 40%;
}
.second-box {
    left: 30%;
    top: 270px;
}
.third-box {
    left: 27.5%;
    top: 420px;
}
.fourth-box {
    left: 30%;
    top: 570px;
}
.fifth-box {
    left: 54.4%;
    top: 160px;
}
.sixth-box {
    left: 65%;
    top: 270px;
}
.seventh-box {
    left: 67%;
    top: 420px;
}
.eighth-box {
    left: 65%;
    top: 570px;
}
.sub-image {
    
}
.sub-image-wrapper {
    width: 100px;
    margin: 0 auto;
    position: relative;
    bottom: 120px;
}
.start {
    position: relative;
    bottom: 100px;
}
</style>