<template>
    <div class='row'>
        <div class='col-sm-12 col-md-6 col-lg-3 cols footBoxes footbox-1 ' @click="goToAboutUs">
            <p class='foot-head'>About us</p>
            <p>Dr. Rama's Test Tube Baby Centre is one of the most well-known and well-accepted centre internationally for Infertility Treatment. We offer our 25 years of experience, expertise and latest Reproductive Technologies in the area of infertility and develop custom treatment plans designed for individual needs.</p>
        </div>
        <div class='col-sm-12 col-md-6 col-lg-3 cols footBoxes footbox-2 ' @click="goToTests">
             <p class='foot-head'>our test</p>
             <ul>
                 <li> Uterine Evaluation</li>
                 <li> Ovarian Reserve Testing</li>
                 <li> Ovulation Test</li>
                 <li> Male Fertility Testing</li>
                 <li> Female Fertility Testing</li>
                 <li> Immune Testing</li>
                 <li> Genetic Screening</li>
                 <li> Laparoscopy</li>
            </ul>
        </div>
        <div class='col-sm-12 col-md-6 col-lg-3 cols footBoxes footbox-3 ' @click="goToTreatments">
             <p class='foot-head'>Our treatments</p>
             <ul>
                <li> Diagnosis | Consultation</li>
                 <li>Infertility Treatments</li>
                 <li>Intrauterine Insemination | IUI</li>
                 <li>IVF</li>
                 <li>Assisted Embryo Hatching</li>
                 <li>Surrogacy</li>
             </ul>
        </div>
        <div class='col-sm-12 col-md-6 col-lg-3 cols footBoxes footbox-4 '>
             <p class='foot-head'>Reach us</p>
             <p>
                 <img src='~/assets/address.png'> DC Chamber,<br>
                # 421/M Krishna TempleRoad,<br>
                Indiranagar 1st stage, Banglore-560 038
            </p>
            <p>
                <img src='~/assets/footer2.png'>
                Clinic Hours<br>
                Mon-Sun: 10:00 am to 8:00 pm<br>
                Cell: +91-7022986300<br>
            </p>
            <p>
                <a href="https://www.facebook.com/Dr-Ramas-IVF-Bangalore-630053984096951/" target="_blank"><img src='~/assets/fb_doc.png' ></a>
                <a href="tel:+91-7022986300" target="_blank"><img src='~/assets/call_doc.png' class='reachus_ikon'></a>
                <a href="mailto:drramasbangalore@gmail.com" target="_blank"><img src='~/assets/gmail.png'></a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToTreatments() {
            this.$router.push({name:"treatments"});
        },
        goToAboutUs() {
            this.$router.push({name:"about-us"});
        },
        goToTests() {
            this.$router.push({name:"tests"});
        }
    }
}
</script>
<style>
.footBoxes{
    width: 100%;
    height: 350px;
    color:white;
    font-size:16px;
    padding:20px;

}
.foot-head{
    font-size:24px;
    text-align: center;
    text-transform: uppercase;
}
.footbox-1{
    background: #C6B3EE;
    transition: all .2s ease-in-out;
    cursor: pointer;
}
.footbox-1:hover {
    transform: scale(1.01);
}
.footbox-2{
    background: #B39DDB;
    transition: all .2s ease-in-out;
    cursor: pointer;
}
.footbox-2:hover {
    transform: scale(1.01);
}
.footbox-3{
    background: #9575CD;
    transition: all .1s ease-in-out;
    cursor: pointer;
}
.footbox-3:hover {
    transform: scale(1.01);
}
.footbox-4{
    background: #7E57C2;
    /* text-align: left; */
}
.footBoxes > ul > li{
    list-style-type: none;
}
.footBoxes > ul{
     padding: 0;
}
.reachus_ikon{
   margin: 0px 30px;
}
   

</style>