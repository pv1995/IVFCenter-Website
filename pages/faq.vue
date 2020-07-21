<template>
    <div class="faq">
        <!-- <drrama-navbar :style="styleObject"/> -->
        <header-new/>
        <section class="doctors-banner" :style="backgroundCss">
            <div class="about-us-banner-content">
                        <!-- <h4 class="about-us-left">FAQ</h4> -->
                        <!-- <h1 class="text-center about-us-center">Faq</h1> -->
                        <mobile-heading heading='FAQ'/>
                    </div>
            <!-- <div class="row">
                <div class="col-md-6 offset-md-6">
                     <div class="grey-back-box">
                         <h2 class="banner-heading text-center">Pave your path to fertility treatment</h2>
                         <p class="banner-box-text">
                             From fertility assessments and diagnosis to treatment options, Dr.Ramas Teat tube baby cetre 
                             offers couples a way to achieve tha way to fulfil their dream of parenthood. Using the latest 
                             proven scientific techniques, combined with international experience and cutting-edge technology,
                            our holistic services provide you with comprehensive, compassionate patient-focused care.
                         </p>
                     </div>
                </div>
            </div> -->
        </section>
        <div class="faq-section">
            <div role="tablist">
                <b-card no-body class="purple-faq">
                    <b-card-header header-tag="header" role="tab">
                        <p v-b-toggle.accordion1 class="header-text">Can fibroids interfere with IVF?</p>
                        <span><i class="fas fa-chevron-down"></i></span>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body class="white-content">
                        <p class="card-text">
                            Fibroids are benign tumors consisting of fibrous tissue and muscle which grow in the uterus. The significance of fibroids relates to not only their size but also their location. Even small fibroids located inside the cavity of the uterus where embryos need to implant, may interface with success and need to be removed. Fibroids that do not encroach on the cavity of the uterus are generally not significant unless they are larger than 5 cm in diameter and also if there are many fibroids causing significant uterine enlargement.
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="purple-faq">
                    <b-card-header header-tag="header" role="tab">
                        <p v-b-toggle.accordion2 class="header-text">I have endometriosis, does this affect my fertility & also success with IVF?</p>
                        <span><i class="fas fa-chevron-down"></i></span>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="white-content">
                        <p class="card-text">
                            Endometriosis is a condition where cells that usually remain confined to the cavity of the uterus, grow outside of the uterus usually on or in the ovaries and also on the surface of the pelvic pain and may also decrease the chances of natural conception by about one-third Patients who require IVF who have endometriosis still have the same chances of a successful outcome as patients of the same age without endometriosis as long as immunological factors that may accompany endometriosis are identified and treated appropriately.
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="purple-faq">
                    <b-card-header header-tag="header" role="tab">
                            <p style='word-wrap: break-word;' v-b-toggle.accordion3 class="header-text">
                            I am married for past 9 years, but I am still childless. The problem is with me. My husband is perfect. I would like to know how to find a lady who can become a surrogate mother for our child. That is can she bear a child for us with my husband’s sperms. Please reply to me . Awaiting your reply. We are ready to bear the costs and remunerate her well for this?
                            </p>
                            <span><i class="fas fa-chevron-down"></i></span>
                    </b-card-header>
                    <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="white-content">
                        <p class="card-text">
                            It is necessary to have a complete fertility profile of you and your husband, before coming to the conclusion for a surrogate mother. If you have no normal production of eggs of your own, you need egg donation, either from a lady of your choice that you can organize or from the proposed surrogate herself. Once your husbands sperm and the donor eggs develop into embryos in the IVF lab, the same can be transferred for implantation into the womb of the surrogate. We do have a regular surrogate / egg donation programme at our Hyderabad and Visakhapatnam centers. In case of any difficulty for you in finding access to such a programme in your own city, you may get in touch with us.
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="purple-faq">
                    <b-card-header header-tag="header" role="tab">
                        <p v-b-toggle.accordion4 class="header-text">Me and my husband are 33 years old and married since three years. But we are still issueless. I am suffering from frigidity and also libido. When I consulted a gynec, I was put on medication. Ebexid, Ferty 50 mg for one month and was later started taking 100 mg and also Corion 5000. I did a follicular scan test (Report: Uterus measured 9.0 x 4.2 x 3.3cms, right ovary measured 4.8 x 2.8 cm and left ovary measured 6.8 x 3.8cms and sonography of the pelvis done on day 19 revealed that R+ ovary appears enlarged and irregular follicle of size 20 x 19 mms and L+ovary appears enlarged. There is evidence of a complex mass of size 41 x 32 mms seen in the L+ ovary and features of an endometriotic ovary) and doctor advised me for DTC but anesthesiologist suspected me of hypothyroidism. (Thyroid test results : T3 88.70 mg, T4 5.20mg, TSH third generation 3.27. My husband’s semen analysis- total count 50 mill with 60 percent active motile. What is the reason for not conceiving. Is it endometriosis and enlarged ovaries ? Please advice.</p>
                        <span><i class="fas fa-chevron-down"></i></span>
                    </b-card-header>
                    <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="white-content">
                        <p class="card-text">
                            Infertility is a complex problem. Before pronouncing the reason for infertility we need to investigate both partners. It may be single factor (or) multiple factor problem. Free Thyroxin levels are the main indicator about thyroid function. It may vary from lab to lab. The normal values for free thyroxin are 9-20 miu/ml. Instead of Just total T4 get Free T4 levels. According to that, supplementation of thyroxin is necessary or not can be decided.
                        </p>
                        <p class="card-text">
                            If there is a chocolate cyst in the ovary (menstrual blood collected in an encysted cyst) ovulation will be affected. Cyst can be removed by Ultrasound guided aspiration and methotrexate instillation in to the cyst to prevent recurrence of the cyst. Laparoscopy is also helpful if there is associated pelvic endometriosis. If there is such problem, they can be fulgurated with underwater current cauterization.
                        </p>
                        <p class="card-text">
                            Other tests like PCT, antisperm antibody either in serum (or) cervical mucus, serum prolactin levels, base line FSH, LH have to be completed for you. For husband –semen analysis shows only physical characters. There are tests to know the sperm functions. There is one final critical test to know the DNA integrity. But this is not available yet in India. One should not take ovulation induction drugs too long. There are studies , (over use may lead to ovarian cancers in the future. So it is best to consult a competent fertility specialist 3 months ovulation induction and timing of intercourse can be tried. If no pregnancy 6 months ovulation induction and intrauterine insemination is advised. Still no pregnancy IVF maximum 3-4 attempts.
                        </p>
                        <p class="card-text">
                            Frigidity is a psychological problem to certain extent libido also depends on psychology. Please go through good books on erotica and try to overcome frigidity. To improve libido – imagination, reading, watching, talking about erotica will be helpful . Try to shed the inhibitions and make you sex life a pleasurable one.
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
         <drrama-footer />
    </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import headerNew from '~/components/commons/header-new';
import drramaFooter from '~/components/commons/footer';
import mobileHeading from '~/components/commons/mobile-heading';
export default {
    data() {
        return {
        }
    },
    components: {
        'drrama-navbar':drRamaNavBar,
         "drrama-footer": drramaFooter,
        'header-new':headerNew,
        'mobile-heading':mobileHeading
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        bannerImage() {
         return require("~/assets/blog_banner.png");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '70vh'
            }
        }
    },
    methods: {
    },
   head () {
    return {
      title: 'Best IVF Hospital & Clinic',
      meta: [
        { hid: 'description', name: 'description', content: 'Dr Rama IVF is the best IVF Hospital & Clinic in Bangalore' },
        { hid: 'keywords', name: 'keywords', content: ' IVF Specialist, Fertility Center, Fertility Clinics, Best fertility center in Bangalore, Best fertility center in Hyderabad, Best fertility center in Raichur, Fertility clinics, IVF Treatment, IVF Clinics. ' },
      ]
    }
  }
}
</script>
<style scoped>
/* .grey-back-box {
    background: rgba(230, 220, 252, 0.5);
    margin-top: 20rem !important;
    width: 85%;
    margin: 0 auto;
    padding: 1rem;
}
.banner-heading {
    color: #59548D;
    width: 80%;
    margin: 0 auto;
}
.banner-box-text {
    color:#ffffff;
    font-weight: 600;
    font-size: 22px;
    width: 95%;
    margin: 0 auto;
} */
.about-us-center {
    margin-top:5rem !important;
    color: #59548D;
    width: 70%;
    margin: auto auto;
    font-size: 4rem;
    text-transform: uppercase;
}
.faq-section {
    width: 80%;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.purple-faq > .card-header{
     background: #59548D;
}
.purple-faq {
    background: #59548D;
    margin-bottom: 0.5rem;
    border: none;
    color: #ffffff;
    box-shadow: 0 8px 6px -6px #E6DCFC;
}
.purple-faq:hover {
    box-shadow: 0 1px 10px rgba(108,125,142,.3);
}
.header-text {
    margin-bottom: 0 !important;
    padding: 1rem 0;
    cursor: pointer;
    padding-right: 5rem !important;
    padding-left: 2rem !important;
    font-weight: bold;
}
.white-content {
    background: #ffffff !important;
    color: #59548D !important;
    padding: 1rem 5rem 1rem 3.25rem;
}
@media only screen and (max-width: 450px) {
.white-content{
    padding: 3px 10px;
}
.header-text{
    padding-left:0px !important;
    padding-right:0px !important;
}
.faq-section{
    width: 100%;
}

  /* .banner-box-text{
    
      color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
  } */
  /* .grey-back-box{
      width: 100%;
      background: rgba(90, 84, 141, 0.9)
  } */
  /* .banner-heading{
      color:#fff;
  } */
}
</style>
