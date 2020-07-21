<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Implantation Failure</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <h5 class="treatment-subheading">Implantation failure can be divided into three areas:</h5>
                <ul class="treatment-list">
                    <li>Problems with the embryos</li>
                    <li>Problems with “host” uterus</li>
                    <li>Problems in the interaction between embryo and uterus</li>
                    <li>Failure to achieve a pregnancy following 2-3 IVF cycles in which reasonably good 
                        [ high grade embryos] embryos were transferred is termed as implantation failure</li>
                    <li>Embryonic loss which occurs repeatedly after Assisted Reproduction may be attributed to many factors</li>
                </ul>
                <h5 class="treatment-subheading">These are grouped into three categories:</h5>
                <ul class="treatment-list">
                    <li>Decreased endometrial receptivity</li>
                    <li>Embryonic defect</li>
                    <li>Factors with combined effect</li>
                </ul>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Implantation Failure</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">Assumed etiologies for repeated implantation failure [RIF]</h5>
                <h5 class="treatment-subheading">Decreased endometrial receptivity:</h5>
                <ul class="treatment-list">
                    <li>Uterine cavity abnormalities</li>
                    <li>Thin endometrium</li>
                    <li>Altered expression of adhesive molecules</li>
                    <li>Immunological factors</li>
                    <li>Thrombophilas</li>
                </ul>
                <h5 class="treatment-subheading">Causes:</h5>
                <ul class="treatment-list">
                    <li>18-27% women reveal uterine abnormalities, mainly hyperplasia polyps, endometritis, synechiae and leiomyomata</li>
                    <li>Effect of leiomyomata on implantation is uncertain</li>
                    <li>Impact of intramural lesions or myomas less than 4 cm on implantation failure remain controversial</li>
                    <li>Presence of thin or hyperechogenic endometrium or persistent endometrial fluid impaired the outcome in tubal factor</li>
                    <li>Local dysregulation of the normal expression or action of various cytokines are related to implantation failure</li>
                    <li>Elevated endometrial NK cells</li>
                    <li>Dys regulation of interleukin [IL] 12,15 & 18</li>
                    <li>High IL –Iβ and low interferon –γ & IL-10 are associated with implantation failure</li>
                    <li>Failure of appearance of a specific integrin – α V β 3 in endometrium at the time of implantation can cause implantation failure</li>
                    <li>High levels of aromatase p450 mRNA</li>
                    <li>Changes in pinopodes expression</li>
                    <li>High matrix metalloproteinases are associated with implantation failure</li>
                    <li>Role of immunological causes and thrombophilia in implantation failure 18 specific antiphospholipid antibodies</li>
                    <li>β 2- glycoprotein – I antibodies are related to IVF failure</li>
                    <li>Antibodies to annexin –V, which acts as an inhibitor of phospholipid –dependant coagulation and also necessary for trophoblast differentiation lead to implantation failure</li>
                    <li>T-helper 1 & 2 [Th1,Th2] intracellular cytokine expression was increased in peripheral lymphocytes</li>
                    <li>Presence of natural killer cells also leads to implantation failure</li>
                    <li>Couples sharing HLA alleles are at high risk of recurrent implantation failure & biochemical pregnancies</li>
                    <li>Prevalence of PAT-1 mutation & multiple thrombophilic gene mutations higher in implantation failure group</li>
                    <li>Significantly decreased expression of specific endometrial molecules suggested that functional, not only morphological endometrial defects may be associated with unexplained infertility</li>
                    <li>Suggested methods for investigation and treatment of Recurrent implantation failure</li>
                </ul>
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
