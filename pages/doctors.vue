<template>
    <div class="doctors">
        <!-- <drrama-navbar :navStyle="styleObject"/> -->
        <header-new/>
        <section class="doctors-banner" :style="backgroundCss">
            <div class="row">
                     <div class="doctors-main-box mob-hidden">
                        <div>
                            <div class="d-flex justify-content-center">
                                <img src="~/assets/GRAPHIC.png" class="our-doctors-img"/>
                            </div>
                            <div class="our-doctors-content">
                                <p class="our-doctors-text">At Dr.Rama's Infertility Clinic, we strive to provide the best quality medial care, using the latest technology round the clock. Our team is committed to helping you make the right medical decision with confidence.</p>
                            </div>
                        </div> 
                     </div>
                     <div class="doctors-mob-box desktop-hidden ipad-hidden">
                         <div>
                            <div class="d-flex justify-content-center">
                                <img src="~/assets/GRAPHIC.png" class="our-doctors-img"/>
                            </div>
                            <div class="doctors-mob-content">
                                <p class="doctors-mob-text">At Dr.Rama's Infertility Clinic, we strive to provide the best quality medial care, using the latest technology round the clock. Our team is committed to helping you make the right medical decision with confidence.</p>
                            </div>
                        </div> 
                     </div>
            </div>
        </section>
        <section class="doctors-list" >
            <h1 class="doctors-heading text-center">OUR DOCTORS</h1>
            <div class="row doctors-row">
                <div class="col-md-3 mb-4 single-doctor" v-for="doctor in doctors" :key="doctor.name" @click="goToSingle(doctor.id)">
                    <div class="doctor-img d-flex justify-content-center">
                        <img :src="doctor.img" width="250px" height="250px" style="border-top-left-radius:10px;border-top-right-radius:10px;object-fit: cover;"/>
                    </div>
                    <div class="content-area">
                        <div class="doctor-name text-center">
                            <h4>{{doctor.name}}</h4>
                            <h6>{{doctor.position}}</h6>
                        </div>
                        <div class="doctor-text text-center">
                            <p>{{doctor.msg}}</p>
                            <div class="row doctor-icons">
                                <div class="col">
                                    <a target="_blank" href=""><i class="fab fa-facebook-f"></i></a>
                                </div>
                                <div class="col">
                                    <a target="_blank" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="col">
                                    <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <drrama-footer />
    </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import drramaFooter from '~/components/commons/footer';
import headerNew from '~/components/commons/header-new';

export default {
    components: {
        'drrama-navbar':drRamaNavBar,
        "drrama-footer": drramaFooter,
        'header-new':headerNew
    },
    head () {
        return {
        title: ' Our Doctors and staff',
        meta: [
            { hid: 'description', name: 'description', content: 'Dr Rama IVF is equipped with a clinical research room for clinical trials as well as a dedicated clinical research office for trial related documentation and administrative activities.' },
            { hid: 'keywords', name: 'keywords', content: ' Clinical Research, Clinical Research in Bangalore, Training and Education, Research Publications, Publications by Dr Rama IVF, Clinical Research courses, Clinical Research phases. ' },
        ]
        }
  },
    data() {
        return {
            doctors: [
                //     {
                //         id:1,
                //     name: "Dr. Rakhi Mishra",
                //     position: "CEO, Bangalore",
                //     img: require("~/assets/dr.rakhi.jpg"),
                //     msg: "Some message",
                //     words: "Dr. Rakhi Mishra is the CEO of Dr. Ramas Test Tube Baby Centre has been driving force behind professionalism, ethics and cumulative success associated with the organization. With the experience of 18 years in all round scaling up of the organization ,business development, sales & marketing, strategic planning of Hospital and healthcare centre, she works on the strategies to make Dr. Ramas Test Tube Baby Centre one of leading fertility centres in the country.",
                //     words1: "She completed her MBA in Marketing and Finance from PSG College Coimbatore and later went on to complete her PhD as well. Before associating with Dr. Rama’s Test Tube Center she occupied important portfolios such as; COO- Maruti Engineering, Assistant General Manager- Reliance Insurance to name a few. She has been the CEO of Dr. Rama’s Test Tube Baby Centre since 2014."
                // },
                {
                         id:3,
                    name: "Dr. Papolu Rama Devi",
                    position: "MD & Founder",
                   
                       img: require("~/assets/dr.rama.png"),
                    msg: "Some message",
                    words: "Dr.Papolu Rama Devi is a world famous expert in the procedure of diagnosis and treatment of infertility. She founded Dr.Rama’s Institute for Fertility way back in 1991 at Hyderabad, India wherein she treated a record number of more than six thousand cases of IVF and consulted more than 60 thousand cases.",
                    words1: "She has traveled and attended over 100 scientific meetings, conferences, workshop in India and around 30 countries as a Delegate, Speaker, Session, Chairperson etc. She has published over a score of scientific papers in national and international journals she is a regular writer for newspaper, magazine and answering queries through net, and live shows on local and national Electronic media.",
                    words2: "Dr.Papolu Rama Devi is an expert in the procedure of diagnosis and treatment of infertility matters. She has established a complete range of ART procedures [IUI, IVF-ET, ICSI-ET, GIFT], Assisted Hatching, Blastocyst culture, Cryo Freezing [Sperm, Embryo], Donation Program [Egg, Sperm, Embryo], Surrogacy and comprehensive counseling of apprehended couples. Dr. Papolu Rama Devi is among the most popular infertility doctor known to about hundred million of people all over the world. She has developed the team of about 200 medical and paramedical colleagues who are rendering excellent services round the clock 365 days at the five cities where the institute has located its service."
                },
                  {
                      id:2,
                    name: "Dr. Sandhya Mishra",
                    position: "Infertility Specialist",
                    img: require("~/assets/dr.sandhyamishra.jpg"),
                    msg: "Some message",
                    words: "Dr. Sandhya Mishra is a Infertility Specialist in Bangalore and has an experience of 10 years in this field. Dr. Sandhya Mishra practices at Dr. Rama’s Test Tube Baby Center in Indiranagar, Bangalore. She completed MBBS from Baba Raghavdas Medical College, Gorakhpur.DNB from K. J. Somaiya Medical College and Research Centre, Sion – Mumbai in.She Started her career in infertility under Dr. Rama Devi and had established herself as a successful infertility specialist at Raichur where she had numerous successful IVF preganancies, later she relocated to Bangalore as Chief Infertility specialist and is continuing her success . She has an expertise in handling patients with PCOs, Recurrent Pregnancy Loss, Endometriosis, Uterine abnormalities and treatment for Premature Ovarian Failure. She is an expert in Laparascopic and Endoscopic surgeries. Apart from being an infertility specialist she is an excellent Obstetrician and capable of managing OHSS and High Risk Pregnancies."
                },
                    {
                        id:4,
                    name: "Dr. Shruthi Manvikar",
                    position: "IVF Specialist",
                   img: require("~/assets/sruthi-malvikar.jpg"),
                    msg: "Some message",
                    words: "After completing MBBS and postgraduation from prestigious Jjmmc at Davanagere Karnataka have done DNB from renowned hospital for maternity Durga bai deshmukh hospital and research centre and also continued to work as registrar in this prestigious institution for 3yrs and was involved actively in teaching DNB students and have been coguide for many pg students. Has publications in Indian and international journals. Has presented papers at various Indian and international conferences. Main areas of interest are infertility , high risk pregnancies, minimal invasive surgery."
                },
                {
                    id:5,
                    name: "Dr. Arun Kumar Gudi",
                    position: "Senior Embryologist",
                    img: require("~/assets/dr.arunkumargudi.jpg"),
                    msg: "Some message",
                    words: "Dr. Arun Kumar Gudi is a Senior Embryologist at Dr. Ramas Test Tube Baby Centre ,Bangalore. He has an experience of 27 years in the field of Embryology. He completed his Post Graduation in Reproductive Biology from Gulbarga University. He completed his M.Phil from Mangalore University through CFTRI Mysore in Applied Zoology. He was awarded Ph.D from Department of Zoology , Benaras Hindu University, Varanasi. He underwent training in several reputed universities/Institutes like IISc- Bangalore, AIIMS-Delhi, CDRI-Lucknow, Human Genetics-BHU, etc. He has worked at various IVF centers across the country and has vast experience in IVF on both Animal and Human gametes. He is an expert IVF specialist, has vast knowledge in other ART techniques such as ICSI, PICSI,IMSI, LAH, Cryopreservation of gametes, handling of TESA/PESA sperms etc. He has also published several research papers in National and International Journals."
                },
                {
                    id:6,
                    name: "Dr. Vijayalaxmi Botla",
                    position: "Embryologist",
                    img: require("~/assets/vijayalaxmi-botla.jpg"),
                    msg: "Some message"
                },
            
           
                {
                    id:7,
                    name: "Dr. Rajyalakshmi",
                    position: "Chief Embryologist",
                    img: require("~/assets/dr-rajyalakshmi.jpg"),
                    msg: "Some message",
                    words: "Rajyalakshmi Adusumilli is the Chief Embryologist at Dr. Rama’s Institute ForFertility, has 18 years of rich experience in the design & establishment of ART Labs at all the sub centers /franchisee centers of the DRIFF group Having Master’s Degree in the field of Biochemistry from the Chennai University 1999. Her thesis was on “Recombinant DNA Technology” & has been a part of the project on Huntington’s chorea at CCMB. She worked for a year and half at the New Citi Hospitals as a Senior Biochemist.",
                    words1: "Once she joined Rama’s being an ardent, quick, all pervasive employee with high grasping power, she has handled thousands of IVF & ICSI cases in her 18 years of experience. Being committed to her work she has exceptionally high success rates in the IVF/ICSI cases. This has been possible because of her belief that “Work is Worship”.",
                    words2: "Apart from her experience with Advanced Assisted Reproductive Techniques, she also has experience of running World Class Sperm Bank, Embryo Freezing Unit. She has assisted many couples & counseled them when in need ultimately helping them achieve their dream of parenthood. She is very skillful and helped, coordinated IVF, surrogacy for foreigners ,NRI,OCI couples all round the world.",
                    words3: "She has very good academic skills & keeps herself busy, always preparing power-point presentations single-handedly, brochures, website updates, success rates, crucial analysis / retrospective analysis of the ART cases, responsible for writing innumerable articles for the newspapers & magazines. She has attended many conferences, seminars, workshops, hands on training at both national and international level. At Seoul South Korea she has undergone full-fledged training for setting-up, maintaining, processing & running of Umbilical cord Blood Banking at the Cha University (both public/private banking); oocyte/embryo-freezing both slow &vitrification techniques. Embryonic Stem Cell culture, isolation & maintenance of cell lines.Haematopoietic, Mesenchymal, stem cell isolation, culture, enumeration & differentiation.Adult stem cell isolation from various sources like bone marrow, peripheral blood, skin, fat etc.",
                    words4: "She has authored a few publications of International ASRM & few at the National level OGSH. Associative MOU’s with Hyderabad Central University & Global Hospitals were done under her leadership for work on stem cells & successfully achieved goals.",
                    words5: "Whole-heartedly she has taken up & conducted several IUI, IVF, & stem cell training courses. Another feather in her hat is training many junior embryologists with individual attention who have now blossomed in very competent, independent embryologists.",
                    words6: "She has successfully introduced modified ICSI, Laser Assisted Hatching &Vitrification techniques at the Rama’s laboratory & dramatically improved Rama’s cryopreservation program making it comparable to the best in the world."
                },
                {
                    id:8,
                    name: "Dr. Vijaya Lakshmi",
                    position: "Assistant Director",
                    img: require("~/assets/dr-vijayalaxmi.jpg"),
                    msg: "Some message",
                    words: "After completion of MBBS from Osmania Medical College, Hyderabad, worked as Resident Doctor in Obstetrics and Gynecology Department in Ministry of Health IRAN for 2 Years.",
                    words1: "Joined in Bombay D G O.",
                    words2: "Worked as senior resident Doctor in Obstetrics and Gynecology Department, Bisha, Ministry of Health, Saudi Arabia for 8 Years. Underwent training in Infertility and Ultra sound Color Doppler in King Fahd Hospital, Riyadh, Saudi Arabia.",
                    words3: "Working as Infertility Specialist in Dr. Rama’s Fertility Center, Hyderabad since 1992. Awarded F C G P Certification. Working as IVF Specialist in Dr Rama’s Fertility center, Hyderabad since 1995.",
                    words4: "Attended various conferences and seminars in India and abroad. Took training in ultra sound Scanning and color Doppler in India."
                },
                {
                    id:9,
                    name: "Dr. Premkumar",
                    position: "Embryologist",
                    img: require("~/assets/dr-premkumar.jpg"),
                    msg: "Some message",
                    words: "K.Premkumar M.Sc.Microbiology University of Madras 2005",
                    words1: "Presently working as an Embryologist at Dr.Rama’s Institute For Fertility from 2017.",
                    words2: "Previously worked as an Andrologist/Jr.Embryologist.Overall working experience of 5 years."
                },
              
                {
                    id:10,
                    name: "Dr. Suchindranath G",
                    position: "Embryologist",
                    img: require("~/assets/mr.suchindranathg.jpg"),
                    msg: "Some message",
                    words: "Mr. Suchindranath G is an Embryologist based in Bangalore and has an experience of 8 years in this field. Mr. Suchindranath is the Senior Embryologist at Dr. Rama’s Test Tube Baby Centre, Bangalore and has been working with them for the past three years. He completed his Post Graduation in Microbiology from Department of Microbiology, Jnana Bharathi Campus,Bangalore University. He did his Certificate Course in Clinical Embryology from Kasturba Medical College, Manipal. Suchindranath has the expertise in ICSI, IVF, PICSI, Embryo Vitrification /Thawing and handling TESA/PESA samples. He has been training upcoming embryologist and Andrology technicians and has experience in setting up Embryology labs at different parts of the country."
                },
                {
                    id:11,
                    name: "Dr. Haritha Samadhi",
                    position: "Gynaecologist",
                    img: require("~/assets/dr.harithasamadhi.jpg"),
                    msg: "Some message",
                    words: "2008- 2011: Civil Assistant Surgeon, PHC (Nellore district, Andhra Pradesh)",
                    words1: "Aug2014- Sep 2015: Consultant OBG Durga Hospital, Nellore.",
                    words2: "July 2017  -Dec 2017:  Fernandez hospital, Hyderabad",
                    words3: "Feb 2017- till date: DR. RAMA Fertility Center, Hyderabad"
                },
                {
                    id:12,
                    name: "Dr. Saritha",
                    position: "Gynaecologist",
                    img: require("~/assets/drsaritha.jpg"),
                    msg: "Some message",
                    words: "Dr.Saritha MBBS (osm) from Gandhi Medical College. As soon as MBBS was over joined as a GP and incharge of maternity section in IRAN from 1983 to 1995. and in the year 1996 started working in own clinics. 2001 – Joined Rama’s Institute for fertility and since then taking care of OP, Inpatients, all procedures and USG."
                },
            
            ]
        }
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        bannerImage() {
         return require("~/assets/doctor-banner.png");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh'
            }
        }
    },
    methods: {
        goToSingle(doctor) {
            console.log(doctor);
            this.$router.push({name: "doctor-single", params: {id: doctor}});
        }
    }
}
</script>
<style scoped>
.doctors-list {
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.doctors-heading {
    margin-bottom: 3rem;
    color: #59548D;
}
.doctors-row {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
}
.single-doctor {
    min-height: 400px;
    max-height: 400px;
    box-shadow: 0 8px 6px -6px #E6DCFC;
    border: 1px solid #E6DCFC;
    border-radius: 10px;
    max-width: 250px;
    margin-right: 1rem;
    padding: 0 !important;
    cursor: pointer;
}
.doctor-img {
    border-radius: 10px;
}
.doctor-name {
    padding: 10px
}
.doctor-name > h4 {
    font-size: 1.2rem;
    color: #59548D;
}
.doctor-name > h6 {
    font-size: 0.8rem;
    color: #59548D;
}
.doctor-icons {
    width: 80%;
    margin: 0 auto;
    position: absolute;
    bottom: 5%;
    left: 10%;
}
.doctor-icons > div > a {
    color: #59548D;
}
.doctor-text > p {
    color: #59548D;
    font-size: 1rem;
}
.doctors-main-box {
    width: 600px;
    height:500px;
    background:#59548D;
    -webkit-transform: perspective(300px) rotateX(-10deg);
    -o-transform: perspective(300px) rotateX(-10deg);
    -moz-transform: perspective(300px) rotateX(-10deg);
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -o-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    position: absolute;
    right: 0;
    top: 43.2%
}
.doctors-main-box > div {
    -webkit-transform: perspective(300px) rotateX(10deg);
    -o-transform: perspective(300px) rotateX(10deg);
    -moz-transform: perspective(300px) rotateX(10deg);
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -o-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    
}
.our-doctors-img {
    width: 50%;
    height: 50%;
    margin-top: 1rem;
}
.our-doctors-content {
    width: 80%;
    margin: 0 auto;
    margin-left: 6rem !important;
}
.our-doctors-text {
    font-size: 1.5rem;
    color: white;
    margin-top: 1.5rem;
}

/*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width: 768px) {
    .ipad-hidden {
        display: none;
    }
    .doctors-main-box {
        top: 54.5% !important;
    }
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
        display: none;
    }
    .doctors-mob-box {
        position: absolute;
        left: 0%;
        top: 66%;
        background: #59548D;
    }
    .doctors-mob-content {
        width: 100%;
        padding: 1rem;
        padding-left: 1.2rem !important;
    }
    .doctors-mob-text {
        font-size: 1rem;
        color: white;
    }
    .single-doctor {
        margin-right:0 !important;
    }
}
</style>
