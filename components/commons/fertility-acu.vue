<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Fertility Accupuncture</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Acupuncture is claimed to be an ancient system of healing developed over thousands of years as 
                    part of the traditional medicine of China. The aim of the treatment is to restore the balance of 
                    the universal energy Qi (pronounced chee) in the body, through the painless application of fine 
                    needles into strategic points on the body. Qi consists of Yin and Yang and these two opposite, 
                    but complementary, forces need to be in balance otherwise disease or illness occurs in the body.
                    <br><br>
                    Acupuncture, like allopathic, homeopathy or ayurveda is a complete system of medicine. Like other 
                    systems of medicine it has a treatment for almost every disease and like each of these, it is 
                    extremely effective in treating some diseases, but not so effective in others.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Fertility Accupuncture</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">Acupuncture in female infertility</h5>
            <p class="treatment-content">
                Acupuncture can be tried for infertility after structural abnormality in the woman’s reproductive 
                organ is ruled out. Functional related infertility is often stress-related, and is most common 
                among women who work or live in stressful environments. In Chinese medicine, acupuncture is used 
                to decrease stress in the body by regulating the sympathetic branch of the autonomic nervous 
                system. The treatment also addresses possible hormonal imbalances and circulatory problems. 
                Acupuncture increases blood flow to the uterus which improves the chances of ovum implanting 
                on the uterine wall Normalizes hormones and endocrine system without any side effects.
                <br><br>
                Rate of success will be more (30-40%) ,if taken before assisted reproductive techniques like IVF, 
                IUI If you choose to undergo IVF, be assured that recent studies have concluded that acupuncture 
                performed immediately before and after IVF significantly increases the chances for a viable 
                pregnancy (ongoing studies confirm these findings.) Acupuncture reduces uterine contractions, 
                which may contribute to the failure of IVF treatments, before, during and after IVF. 
                Minimally, a treatment should be performed 1/2 hour before implantation and 1/2 hour after. 
                In order to achieve maximum benefit, weekly treatments are recommended at least two months 
                prior to the start of IVF.Both should be treated simultaneously and treatment continued for 
                a couple of months.
            </p>
            <h5 class="treatment-subheading">Acupuncture in male infertility</h5>
            <p class="treatment-content">
                Male infertility is rarely spoken about but can frequently be the problem when couples are having 
                trouble conceiving. In many cases men have poor quality sperm or a decreased quantity. The effects 
                of our environment and/or lifestyle seem to be gradually degrading male sperm counts. Within 
                Chinese medicine once again the kidneys play an important role in semen production and quality; 
                however this is not the only cause for infertility in men. Many times infertility is caused by 
                dampness. One major way that dampness is produced is through poor and improper dietary habits. 
                Low sperm count also responds well to acupuncture.
            </p>
        </div>
    </div>
</template>
<script>
import drRamaButton from './button';
export default {
    components: {
        'drrama-button': drRamaButton
    },
    methods: {
        bookAppointment() {
            this.$router.push({name: "book-appointment"});
        },
        bookAppointmentStyle() {
            return {
                'position':'relative',
                'z-index':'1000000'
            }
        }
    }
}
</script>
<style>
.book-appointment-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
</style>
