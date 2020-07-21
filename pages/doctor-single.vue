<template>
    <div class="doctor-single">
        <!-- <drrama-navbar :navStyle="styleObject" /> -->
        <header-new/>
        <section class="doctor-description" v-if="getDoctor">
            <div class="row">
                <div class="col-md-4">
                    <div class="img-wrapper">
                        <img class="single-doctor-img" :src="getDoctor[0].img" />
                    </div>
                    <div class="left-content">
                        <h4>{{getDoctor[0].name}}</h4>
                        <h6>{{getDoctor[0].position}}</h6>
                        <div class="row">
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
                <div class="col-md-8">
                    <div class="doctor-words" v-if="getDoctor[0].words">
                        <p>{{getDoctor[0].words}}</p>
                        <p v-if="getDoctor[0].words1">{{getDoctor[0].words1}}</p>
                        <p v-if="getDoctor[0].words2">{{getDoctor[0].words2}}</p>
                        <p v-if="getDoctor[0].words3">{{getDoctor[0].words3}}</p>
                        <p v-if="getDoctor[0].words4">{{getDoctor[0].words4}}</p>
                        <p v-if="getDoctor[0].words5">{{getDoctor[0].words5}}</p>
                        <p v-if="getDoctor[0].words6">{{getDoctor[0].words6}}</p>
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
        'header-new': headerNew
    },
    data() {
        return {
            doctors: [
                    {
                    id:1,
                    name: "Dr. Rakhi Mishra",
                    position: "CEO, Bangalore",
                    img: require("~/assets/dr.rakhi.jpg"),
                    msg: "Some message",
                    words: "Dr. Rakhi Mishra is the CEO of Dr. Ramas Test Tube Baby Centre has been driving force behind professionalism, ethics and cumulative success associated with the organization. With the experience of 18 years in all round scaling up of the organization ,business development, sales & marketing, strategic planning of Hospital and healthcare centre, she works on the strategies to make Dr. Ramas Test Tube Baby Centre one of leading fertility centres in the country.",
                    words1: "She completed her MBA in Marketing and Finance from PSG College Coimbatore and later went on to complete her PhD as well. Before associating with Dr. Rama’s Test Tube Center she occupied important portfolios such as; COO- Maruti Engineering, Assistant General Manager- Reliance Insurance to name a few. She has been the CEO of Dr. Rama’s Test Tube Baby Centre since 2014."
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
            
            ],
            id: null
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        getDoctor() {
            return this.doctors.filter(d=> {
                if(d.id === this.id) {
                    return d;
                }
            })
        }
    }
}
</script>
<style scoped>
.doctor-description {
    padding-top: 15rem;
    margin-bottom: 3rem;
}
.doctor-description > .row {
    width: 80%;
    margin: 0 auto;
}
.single-doctor-img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
}
.left-content {
    text-align: center;
    margin-top: 1rem;
    color: #59548D;
}
.left-content > .row {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem !important;
}
.left-content > .row > div > a {
    color: #59548D;
}
.doctor-words {
    padding: 50px;
    color: #59548D;
}

/*Responsive styles*/
@media only screen and (min-device-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-device-width : 480px) {
    .mob-hidden {
        display: none;
    }
    .doctor-description {
        padding-top: 8rem;
    }
    .doctor-description > .row {
        width: 100%;
    }
    .single-doctor-img {
        width: 300px !important;
        height: 300px !important;
        border-radius: 10px !important;
    }
    .img-wrapper {
        display: flex;
        justify-content: center;
    }
    .doctor-words {
        padding: 10px
    }
}
</style>
