<template>
    <div class="ad-template">
        <!-- <hr class="hr-text" data-content="BOOK APPOINTMENT">
        <p class="text-center start-ad">Start your journey here</p> -->
        <drrama-ad-band text="BOOK APPOINTMENT" bottomText="Start your journey here"/>
        <div>
            <div class="ad-book-box">
                <form class="white-back-form">
                    <div class="form-group" >
                        <label for="exampleInputName1">Full Name</label> 
                        <input type="text" id="exampleInputName1" v-model="form_data.full_name" placeholder="Enter your name" name="name" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                        <span class="help is-danger" style="display: none;"></span>
                    </div> 
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label> 
                        <input type="email" id="exampleInputEmail1" v-model="form_data.email" aria-describedby="emailHelp" placeholder="Enter your email" name="email" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                        <span class="help is-danger" style="display: none;"></span>
                    </div> 
                    <div class="form-group">
                        <label for="exampleInputNumber1">Phone Number</label> 
                        <input type="text" id="exampleInputNumber1" v-model="form_data.phone" placeholder="Enter your number" name="number" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                        <span class="help is-danger" style="display: none;"></span>
                    </div> 
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Message</label> 
                        <textarea  id="exampleFormControlTextarea1" v-model="form_data.message" rows="3" placeholder="Enter your message" name="message" class="form-control drrama-input" aria-required="true" aria-invalid="false"></textarea> 
                        <span class="help is-danger" style="display: none;"></span>
                    </div> 
                    <!-- <button type="submit" class="btn contact-submit">Submit</button> -->
                    <div style='text-align:center'>
                        <drrama-button type='transi'  text='SUBMIT' @touched='sendData()' />
                    </div>                
                </form>
            </div>
            <img src="../../static/toy1_L1.png" class="balloon mob-hidden"/>
            <img src="../../static/bottle_R2.png" class="bottle mob-hidden" />
            <img src="../../static/bib_R1.png" class="bib mob-hidden" />
            <img src="../../static/elepahnt_R2.png" class="elephant mob-hidden" />
        </div>
        <div class="offer-box">
            <img src="../../static/offer-2.png" class="offer-img"/>
        </div>
        <div class="mob-hidden">
            <drrama-ad-band text="DR. RAMA'S TEST TUBE BABY CENTRE" bottomText="Come as a couple, leave as a family"/>
        </div>
        <div class="desktop-hidden">
            <drrama-ad-band text="DR. RAMA'S IVF" bottomText="Come as a couple, leave as a family"/>
        </div>
        <div class="flower-box">
            <img src="../../static/image_drrama.png" class="flower-img"/>
        </div>
        <div class="ad-content">
            <p class="flower-desc">
                At Dr. Rama's Test Tube Baby Center, we don't just provide innovative fertility treatments and cutting-edge embryo science. We diagnose. We instill hope. We offer advice, experience, and a proven track record of success for infertility patients. With more than <strong>25 years</strong> of experience, state of ART laboratory, personal care and leading edge programs we can provide excellent chance of conceiving and having successful pregnancy. we remain . Best IVF specialists, and embryologists work together as a team dedicated to providing effective and comfortable healthcare choices to our patients.
            </p>
            <h4 class="why-ad">WHY DR. RAMA'S TEST TUBE BABY CENTRE</h4>
            <div class="row">
                <div class="col-xs-12 col-md-4 cols d-flex justify-content-center" v-for="w in whyCards" :key="w.id">
                    <b-card :img-src="w.img"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2 why-cards">
                        <p class="card-text-why">
                        {{w.text}}
                        </p>
                    </b-card>
                </div>
            </div>
            <h4 class="numbers-ad">We let the numbers speak for itself</h4>
            <div class='row '>
                <div v-for='(box,index) in transparent_boxes' :key='index' :class='box.className'>
                    <drrama-col-t-card :icon='box.icon' :stat='box.stat' :successAt='box.successAt' :symbol='box.symbol' style="text-align:center"></drrama-col-t-card>
                </div>
            </div>
            <div class="ad-services-border">
                <div class="ad-services">
                    <h4>OUR SERVICES</h4>
                </div>
            </div>
            <div role="tablist">
                <b-card no-body class="mb-1 ad-service-card">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <div class="accordion-btn-border">
                            <b-btn block href="#" v-b-toggle.accordion1 variant="light" class="accordion-btn">{{accordion[0].heading}}</b-btn>
                        </div>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body class="ad-card-body">
                            <p class="card-text">
                                {{ accordion[0].content }}
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1 ad-service-card">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <div class="accordion-btn-border">
                            <b-btn block href="#" v-b-toggle.accordion2 variant="light" class="accordion-btn">{{accordion[1].heading}}</b-btn>
                        </div>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="ad-card-body">
                        <p class="card-text">
                            {{ accordion[1].content }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1 ad-service-card">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <div class="accordion-btn-border">
                            <b-btn block href="#" v-b-toggle.accordion3 variant="light" class="accordion-btn">{{accordion[2].heading}}</b-btn>
                        </div>
                    </b-card-header>
                    <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="ad-card-body">
                        <p class="card-text">
                            {{ accordion[2].content }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
        <div class="purple-ad-section text-center">
            <h4>Consult our doctors right away</h4>
            <h4 style="margin-bottom:2rem" class="mob-consult">You will be evaluated prior to starting any treatment plan</h4>
            <drrama-button type="whitey" text="BOOK APPOINTMENT" />
        </div>
        <div class="success-stories">
            <h2>Our Success Stories</h2>
            <h4>We have happy clients and these are their happiest stories</h4>
            <div class="success-cards">
                <b-card-group deck>
                    <b-card :img-src="s.img"
                            img-alt="Img"
                            img-top
                            class="success-card-single"
                            v-for="s in successStories" :key="s.id">
                        <p class="card-text">
                            {{s.content}}
                        </p>
                        <div slot="footer">
                            <p class="author">{{s.author}}</p>
                        </div>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </div>
</template>
<script>
import drRamaButton from '~/components/commons/button';
import drRamaAdBand from '~/components/commons/ad-band';
import TransparentCard from '~/components/commons/transparent_success_card'

export default {
    components: {
        "drrama-button": drRamaButton,
        "drrama-ad-band": drRamaAdBand,
        "drrama-col-t-card": TransparentCard
    },
    data(){
        return{
            form_data:{
                full_name:'',
                email:'',
                message:'',
                phone:''
            },
            whyCards: [
                {
                    id:1,
                    img: require("~/static/whyDRrama1.png"),
                    text: "We is at the forefront of infertility treatments and technology in India. Our lab's advanced technologies and vast experience give patients a significantly higher chance for pregnancy and delivery."
                },
                {
                    id:2,
                    img: require("~/static/whyDRrama2.png"),
                    text: "At Dr Ramas Test tube baby center, we emphasize a customized model of patient care tailoring our treatments to your own unique circumstances and challenges."
                },
                {
                    id:3,
                    img: require("~/static/doctors-drrama.jpg"),
                    text: "Our team is dedicated to transforming the lives of childless couple to experience the joy of being complete as a family. Our dedicated and expert team for Infertility treatment is an example of art and science of modern Infertility treatment."
                }
            ],
            transparent_boxes:[
                {
                    icon:'icon1',
                    stat:'87',
                    symbol:'%',
                    className: 'col-xs-12 col-sm-3 cols no-space',
                    successAt:'SUCCESSFUL PREGNANCIES'

                },
                {
                    icon:'icon2',
                    stat:'65',
                    symbol:'%',
                    className: 'col-xs-12 col-sm-3 cols no-space',
                    successAt:'IVF | ICS SUCCESS RATES'
                },
                {
                    icon:'icon3',
                    stat:'7226',
                        symbol:'',
                    className: 'col-xs-12 col-sm-3 cols no-space',
                    successAt:'INFERTILE COUPLES TREATED'
                },
                {
                    icon:'icon4',
                    stat:'60255',
                    className: 'col-xs-6 col-sm-3 cols',
                    successAt:'TOTAL CONSULTATIONS'
                }
            ],
            accordion: [
                {
                    id:1,
                    heading: "Infertility Management: IVF, IUI, Surrogacy and more",
                    content: "Dr Ramas Test Tube Center is one of the most trusted fertility hospitals in India incorporating international treatment standards for infertility treatment and assisted reproductive technologies like IUI, IVF/ICSI, PGD|Genetics, PCOD etc."
                },
                {
                    id:2,
                    heading: "Prenatal Diagnostics: Male and female Infertility Tests and more",
                    content: "The more you know about your health, the more you can do to ensure you’re making smart choices and getting the care you need. We offer a wide range of non-invasive and invasive tests to support your reproductive and wellness needs, so you make the right choice!"
                },
                {
                    id:3,
                    heading: "High Risk Pregnancy and Fetal Medications",
                    content: "Dr Ramas Test Tube Center is the leading fertility clinic fully equipped to address and manage High Risk Pregnancies and carryout a full range of complex fetal interventions, prior to, during, and shortly after pregnancy."
                }
            ],
            successStories: [
                {
                    id:1,
                    img: require("~/static/Testimonial1.png"),
                    content: "With several risk factors and complications we came to here. With a very systematic and open approach we received world-class care and treatment. We are now enjoying the joy of parenting.",
                    author: "Mr & Mrs. Gowda"
                },
                {
                    id:2,
                    img: require("~/static/Testimonial2.png"),
                    content: "Thank you Dr Sandhya, for making us proud parents! May you light the lamp of hope to many more, because you are the one who never stops believing in those who look upon you, even if they are on the verge of giving up on themselves.",
                    author: "Mr & Mrs. Sharma"
                },
                {
                    id:3,
                    img: require("~/static/Testimonial3.png"),
                    content: "We got pregnancy in our first IVF attempt. We are grateful to Dr. Rakhi and Dr. Sandhya madam for helping me achieve my pregnancy dream. Thanks to the counselors who were really nice to us. Overall a friendly atmosphere. Thank you all.",
                    author: "Mr & Mrs. Reddy"
                }
            ]
        }
    }
}
</script>
<style scoped>

.hr-text {
    line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .9;
  font-size: 28px;
  font-weight: 600;
  margin-top: -15px;
  margin-bottom: 0;
}
.hr-text::before {
    content: '';
    background: #59548D;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 4px;
}
.hr-text::after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em;
    color: #59548D;
    background-color: #ffffff;
}
.start-ad {
    width: 100%;
    color: #59548D;
    font-weight: 600;
    font-size: 20px;
    margin-top: -5px;
}
.ad-book-box {
    padding: 3rem;
    width: 70%;
    margin: 0 auto;
    background: #C6B3EE;
}
.drrama-input{
        height: 50px;
    border-radius: 0px;
    background: #C6B3EE;
    color:#fff;
    border-color:#C6B3EE;
      outline:none;
      font-weight: 600;
}
.drrama-input:focus{
     background: #59548D;
      color:#fff;
      border-color:#59548D;
      outline:none;
      box-shadow: 0 0 0 0.2rem rgba(88, 86, 137);
}
::placeholder {
    color: #fff;
    font-weight: 600;
}
label{
    width: 100%;
    text-align: left;
    color: #59548D;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.white-back-form {
    background: white;
    padding: 3rem;
}
.offer-box {
    width: 33%;
    margin: 0 auto;
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
}
.flower-box {
    width: 33%;
    margin: 0 auto;
}
.ad-content {
    width: 80%;
    margin: 0 auto;
}
.flower-desc {
    color: #59548D;
    font-size: 20px;
    text-align: justify;
}
.why-ad , .numbers-ad{
    text-align: center;
    color: #59548D;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 3rem;
}
.numbers-ad {
    font-size: 2rem !important;
    text-transform: uppercase;
}
.why-cards {
    border: none;
}
.why-cards > .card-body {
    padding: 0 !important;
    padding-top: 1.25rem !important;
}
.card-text-why {
    color: #59548D;
    font-weight: 500;
    text-align: justify;
}
.ad-content > .row {
    margin-top: 2rem;
}
.ad-content > .row > .no-space {
    justify-content: center;
}
.no-space::after {
    content : "";
    position: absolute;
    right    : 0;
    z-index: 100;
    top  : 0;
    width  : 2px;
    height   : 50%;  /* or 100px */
    background: #C6B3EE;
}
.ad-services-border {
    width: 25%;
    padding: 1rem;
    position: relative;
    background: linear-gradient(to right, #3023AE, #C86DD7);
    padding: 3px;
    margin: 0 auto;
    margin-bottom: 2rem !important;
}
.ad-services {
    background: #ffffff;
    color: #59548D;
    padding: 1.5rem;
}
.ad-services > h4{
    color: #59548D;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
}
.ad-service-card {
    border: none;
}
.ad-service-card > .collapse {
    /* margin-left: 1rem !important; */
    padding-top: 0 !important;
    margin-bottom: 0.5rem;
}
.ad-service-card > .card-header {
    border-bottom: none !important;
    margin-bottom: 3rem;
}
.ad-card-body {
    background: #59548D;
    color: white;
    font-weight: 500;
}
.accordion-btn-border {
    position: relative;
    background: linear-gradient(to right, #3023AE, #C86DD7);
    padding: 1px 1.25rem;
    padding-left: 0 !important;
}
.accordion-btn {
    background: #ffffff;
    color: #59548D;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
}
.purple-ad-section {
    background:#59548D;
    min-height: 350px;
    padding-top: 5rem;
    margin-top: 3rem;
}
.purple-ad-section > h4 {
    font-size: 2rem;
    color: white;
}
.success-stories {
    color: #59548D;
    margin-top: 3rem;
}
.success-stories > h2, .success-stories > h4 {
    text-align: center;
}
.success-stories > h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.5rem;
}
.success-stories > h4 {
    font-weight: 700;
    font-size: 1.75rem;
}
.success-cards {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.success-card-single {
    border: none;
}
.success-card-single > .card-footer {
    background: white;
    border-top: none;
    text-align: right;
}
.author {
    font-weight: 600;
}
.balloon {
    position: absolute;
    top: 80%;
    left: 8%;
}
.bottle {
    position: absolute;
    top: 100%;
    left: 9%;
}
.bib {
    position: absolute;
    top: 80%;
    right: 8%;
}
.elephant {
    position: absolute;
    top: 95%;
    right: 5%;;
}
.desktop-hidden {
    display: none;
}
.mob-hidden {
    display: block;
}

/* //Responsive Styles */
@media only screen and (max-width : 480px) {
    .offer-box, .flower-box, .offer-img, .flower-img, .ad-book-box, .ad-services-border {
        width: 100%;
    }
    .hr-text {
        font-size: 24px !important;
    }
    .ad-book-box, .white-back-form {
        padding: 1rem;
    }
    .desktop-hidden {
        display: block;
    }
    .mob-hidden {
        display: none;
    }
    .offer-box {
        width: 80%;
        margin: 0 auto;
    }
    .ad-content {
        width: 90%;
    }
    .flower-desc {
        font-size: 18px;
    }
    .no-space::after {
        display: none;
    }
    .accordion-btn {
        white-space: initial;
    }
    .purple-ad-section > h4 {
        font-size: 1.5rem;
    }
    .mob-consult {
        font-size: 1rem !important;
    }
    .success-stories > h2 {
        font-size: 2rem;
    }
    .success-stories > h4 {
        font-size: 1.2rem;
    }
    .success-card-single {
        border: 1px solid #59548D;
    }
}
</style>
