<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Polycystic Ovary Syndrome</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    PCOD is characterized by enlarged ovaries with multiple small cysts, an abnormally high number 
                    of follicles at various states of maturation, and a thick, scarred capsule surrounding each ovary.
                    <br><br>
                    Alternative names:
                    <br><br>
                </p>
                <ul class="treatment-list">
                    <li>Polycystic ovaries</li>
                    <li>Polycystic ovarian syndrome</li>
                    <li>Stein-Leventhal syndrome</li>
                    <li>Poly follicular ovarian disease</li>
                </ul>
                <p class="treatment-content" style="margin-top:3rem;">
                    <span style="font-weight:700">PCOS treatment for Infertility :-</span>
                    The first PCOS treatment for infertility is usually the administration of medication to stimulate ovulation.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>PCOS</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <p class="treatment-content">
                Medications Usage :–
            </p>
            <ul class="treatment-list">
                <li>
                    <span style="font-weight:700">Clomiphene Citrate [Clomid or Serophene] – </span>
                    Women over 40, or with evidence of early menopause [premature ovarian failure] egg donation is 
                    the option. Eggs from a younger woman are likey to result in pregnancy and less likely to end 
                    in miscarriage even when carried by an older woman [link- egg donation].
                </li>
                <li>
                    <span style="font-weight:700">Metformin [Glucophage] - </span>
                    If the male partner also has a sperm problem embryo donation is a right option (link- Egg donation ).
                </li>
                <li>
                    <span style="font-weight:700">hCG [Human Chorionic Gonadotrophin] - </span>
                    A surrogate is a woman who agrees to become pregnant for a couple using the male partner’s 
                    sperm and her own egg (traditional surrogate) or using the male partner’s sperm and the female 
                    partner’s egg (gestational surrogate) (link – surrogacy).
                </li>
            </ul>
            <p class="treatment-content">
                The other commonly used PCOS treatment drugs for infertility include hMG [Human Menopausal Gonadotropins]
                , FSH [Follicle Stimulating Hormone], GnRH [Gonadotrophin Releasing Hormone], GnRHa [GnRH analogs] and 
                prolactin inhibition drugs.
            </p>
            <ol class="treatment-number-list">
                <li style="font-weight:500">
                    <span style="font-weight:700">Medical Procedures - </span>
                </li>
                <li style="font-weight:500">
                    <span style="font-weight:700">IUI [Intrauterine Insemination] - </span>
                    A basic PCOS treatment for women with infertility is IUI or also known as Artificial Insemination. 
                    It is a fast and painless procedure where the partner’s sperm is directly introduced into female 
                    uterus for the purpose of conception. The procedure is usually done in conjunction with the ovarian 
                    stimulation drugs because regular menstrual cycle and healthy ovulation makes conception very 
                    successful.
                </li>
                <li style="font-weight:500">
                    <span style="font-weight:700">IVF [In Vitro Fertilization] - </span>
                    A simple, safer and more successful PCOS treatment option to induce ovulation in infertile women 
                    is IVF . The procedure involves the removal of eggs from female partner’s body and fertilizing 
                    them with the sperm of male partner. The resulting embryo is then transferred back to the uterus. 
                    Ovarian stimulation drugs [hCG, hMG, FSH or progesterone] are used to stimulate ovaries to produce 
                    oocytes [eggs]
                </li>
            </ol>
            <p class="treatment-content">
                The success rates of PCOS treatment options to induce ovulation depends on the age of the women, 
                the type of ovarian stimulation medication and other factors that contribute to infertility in the women.    
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
