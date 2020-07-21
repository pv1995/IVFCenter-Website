<template>
    <div class="male-infertility">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Male Infertility</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Male infertility accounts 35-40% of all fertility problems and it can be classified into four main types.
                </p>
                <p class="treatment-content">
                    It is estimated that one in six couples face difficulties in conceiving.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Male Infertility</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <b-tooltip target="tooltip-1" title="No sperm in the ejaculate." />
            <h5 class="treatment-subheading" id="tooltip-1">AZOOSPERMIA</h5>
            <h6><strong>Possible Solutions</strong></h6>
            <ul class="treatment-list">
                <li>
                    <span style="font-weight:bold">ICSI For obstructive and non-obstructive Azoospermia:</span>
                    Normal spermatogenis, no sperm in the ejaculate.
                </li>
                <li>
                    <span style="font-weight:bold">Sperm donation:</span>
                    - No sperm in the testes.
                    <br>
                    - Can't afford IVF/ICSI treatment
                </li>
            </ul>
            <p class="treatment-content">Our team makes sure you understand what’s going on and why, and have the support you need through your treatment.</p>
            <h5 class="treatment-subheading" id="tooltip-2">OLIGO ASTHENOZOOSPERMIA</h5>
            <b-tooltip target="tooltip-2" title="Abnormality in number, morphology and movement of sperm." />
            <p class="treatment-content">
                <strong>Causes:</strong>
            </p>
            <ul class="treatment-list">
                <li>Hormone deficiency</li>
                <li>Hyper prolactanemia</li>
                <li>Varicocele (abnormal swollen blood vessels around the testicles)</li>
                <li>Infection</li>
                <li>Use of certain drugs like anti-depressants, anti-cancer and anti-hypertensive</li>
                <li>Use of steroids</li>
                <li>Excess alcohol</li>
                <li>Heavy smoking</li>
                <li>Frequent hot baths or saunas</li>
                <li>Antisperm antibodies</li>
                <li>Testicular cancer</li>
                <li>Life style variation (physical, mental stress & strain, pollution, unbalanced diet)</li>
            </ul>
            <p class="treatment-content">
                <strong>Possible Solutions:</strong>
            </p>
            <ul class="treatment-list">
                <li>Fertility drugs to increase sperm production</li>
                <li>Use of Antioxidants invitro or invivo</li>
                <li>Change in life style</li>
                <li>Balanced diet</li>
                <li>IUI</li>
                <li>IVF-ICSI</li>
                <li>Use of donor sperms</li>
            </ul>
            <div class="more-info-button">
                <drrama-button type='more-info-btn' text='For More Info on IVF/ICSI' />
            </div>
        </div>
    </div>
</template>
<script>
import drRamaButton from './button'
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