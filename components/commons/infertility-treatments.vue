<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Infertility Treatments</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <div class="infertility-qa-wrapper">
                    <h5 class="treatment-subheading">What is Infertility?</h5>
                    <p class="treatment-content">
                        If a couple below age 35 cannot conceive within one year of regular intercourse or 6 months in 
                        case of above 35 years is called infertility
                    </p>
                </div>
                <div class="infertility-qa-wrapper">
                    <h5 class="treatment-subheading">When to approach?</h5>
                    <p class="treatment-content">
                        There will no physical disability like other  in diseases, it can be evaluated on the basis 
                        of time period the couple has been trying to conceive but has been unsuccessful. Proper 
                        diagnosis  of Infertility cannot be done just through physical examination or discussing 
                        the patient history but  by conducting certain tests on both partners, doctors can come 
                        to a final diagnosis.
                    </p>
                </div>
                <div class="infertility-qa-wrapper">
                    <h5 class="treatment-subheading">What are the reasons for low fertility?</h5>
                    <div class="treatment-content">
                        There could be a problem in either female or male or sometimes both Female sub fertility reasons
                        <ul class="inside-list">
                            <li>Ovulation Failure
                                <ul class="inner-list">
                                    <li>Stress</li>
                                    <li>PCO ( altered FSH: LH Ratio ) pheripheral insulin resistance</li>
                                    <li>Obesity</li>
                                    <li>Hypo or Hyper Thyrodism</li>
                                </ul>
                            </li>
                            <li>Pituitary Failure
                                <ul class="inner-list">
                                    <li>Low or high FSH / LH levels</li>
                                </ul>
                            </li>
                            <li>Ovarian Failure
                                <ul class="inner-list">
                                    <li>Primary or Secondary</li>
                                    <li>Uterine Problems</li>
                                    <li>Congenital ( comes by birth )</li>
                                    <li>Congenital absence of uterus</li>
                                    <li>Unicornuate bi-cornuate</li>
                                    <li>Septate uturus ( by birth ) i.e defects in size of shape</li>
                                </ul>
                            </li>
                            <li>Acquaired Uterine Problems
                                <ul class="inner-list">
                                    <li>Fibroids</li>
                                    <li>Adenomysosis ( menstrual blood collection inside uterine muscular wall )</li>
                                    <li>Polyps ( growth )in endo metrium ( inner wall of uterine)</li>
                                    <li>Infections in the endometrium</li>
                                    <li>Thinning or thickinning of endometrium</li>
                                </ul>
                            </li>
                            <li>Fellopian Tubal Problem
                                <ul class="inner-list">
                                    <li>Infections and adhessions of uterine tubes and alteration in tube ovarian 
                                        relationship. Egg cannot enter uterine tube due to thin
                                    </li>
                                </ul>
                            </li>
                            <li>Vaginal Problems
                                <ul class="inner-list">
                                    <li>Any infection in the vagina, changes vaginal PH, where sperm cannot survive, 
                                        so sometimes there may be anti bodies to sperm. By antisperm antibodies are 
                                        there sperm cannot move.
                                    </li>
                                </ul>
                            </li>
                            <li>Stress
                                <ul class="inner-list">
                                    <li>It is one of the important reason for most of the disease including infertility.
                                    </li>
                                </ul>
                            </li>
                            <li>Nutritional deficiency
                                <ul class="inner-list">
                                    <li>Protiens, vitamins and minerals are necessary for successful pregnancy.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Infertility Treatments</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import drRamaButton from './button';
export default {
    components: {
        'drrama-button': drRamaButton
    },
    computed: {
        bookAppointmentStyle() {
            return {
                'position':'relative',
                'z-index':'1000000'
            }
        }
    },
    methods: {
        bookAppointment() {
            this.$router.push({name: "book-appointment"});
        },
        
    }
}
</script>
<style>
.treatment-subheading {
    color: #59548D;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
}
.book-appointment-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
</style>
