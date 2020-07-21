<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">MALE FERTILITY TEST</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <h4 class="test-subheading">SEMEN ANALYSIS</h4>
                <p class="test-content">
                    As a part of standard infertility work up, sperm parameters should be tested with a semen analysis. Sperm analysis should be done after 2-3 days of abstinence and not more than 10 days. If any of the parameter(s) is abnormal, it should be repeated for confirmation of that abnormal parameter(s) and in the absence of sperm (azoospermia) or with poor semen parameters urological evaluation is recommended.
                </p>
                <p class="test-content">
                    Semen analysis provides quantitative information about the sperm and consists of four basic parameters. These include the volume, count (concentration), motility (active moving ability) and morphology (appearance of sperm).
                </p>
                <p class="test-content">
                    Normal semen parameters are as follows:
                </p>
                <ul class="test-list male-fertility-list">
                    <li>
                        <span style="font-weight:700">Volume:</span>
                        At least 2 cc (milliliters) or more
                    </li>
                    <li>
                        <span style="font-weight:700">Count:</span>
                        20 million per cc or greater
                    </li>
                    <li>
                        <span style="font-weight:700">Motility:</span>
                        50% or greater should be moving forward
                    </li>
                    <li>
                        <span style="font-weight:700">Morphology:</span>
                        30% or greater should look normal (WHO Criteria)
                    </li>
                    <li>
                        14% or greater should look normal (IVF or strict criteria)
                    </li>
                </ul>
                <p class="test-content">
                    Semen analysis does not provide information about the function of the sperm, but rather a basic understanding of its production and activity. In some men with normal semen analysis, quality of the sperm may still be compromised. Although there is no perfect test to assess the quality of the sperm, a recently developed test called the sperm DNA integrity assay (SDIA) or sperm chromatin structure assay (SCSA) has been used to diagnose cases of unidentified male infertility with a normal semen analysis.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>MALE FERTILITY TEST</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="test-section2" >
            <h5 class="test-subheading">SPERM DNA TESTING</h5>
            <p class="test-content">
                A formal semen analysis only provides information about the quantitative parameters of semen and does not address its qualitative properties. Recently, a new test called the sperm DNA integrity assay (SDIA) or sperm chromatin structure assay (SCSA) has been developed to diagnose cases of unidentified male infertility with a normal semen analysis.
            </p>
            <p class="test-content">
                SCSA is a helpful tool for measuring clinically important properties of sperm nuclear chromatin integrity. In order to measure the level of sperm DNA damage, a method called flow cytometry is utilized, which involves staining of sperm with a DNA dye called acridine orange. Sperm is then passed through a channel where it’s exposed to laser beam that results in the release of fluorescent light of certain color. If the sperm DNA is damaged, orange (yellow to red) light is observed and if there is no damage, green fluorescence is detected. The percentage of damaged sperm is calculated by the software and reported as two separate variables.
            </p>
            <p class="test-content">
                The two components of this test include DNA Fragmentation Index (DFI) and high DNA stainability (HDS). Less than 15% of fragmentation and stainability are considered normal. Levels above 30-40% have been reported to rarely result in a live birth. SDIA has been shown to predict infertility and poor reproductive performance as it measures DNA damage. The DNA damage analysis may reveal a hidden abnormality of sperm DNA in infertile men classified as unexplained based on apparently normal standard sperm parameters.
            </p>
            <p class="test-content">
                In cases of high DFI and HDS, the cause should be investigated and when identified, treatment options should be discussed to improve sperm parameters. In men with very poor parameters and with a history failed IVF cycles, alternative options such as donor sperm can be considered. Taking multivitamins and anti-oxidants may be helpful in some cases.
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
.book-appointment-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
.test-section1 {
    background: #E6DCFC;
    width: 65%;
    display: flex;
    margin-left: 4rem;
}
.test-section1-left {
    margin-left: 2rem;
    padding: 1rem;
    line-height: 30px;
    min-width: 550px;
}
.test-section1-right {
    width: 40%;
    position: relative;
    left: 70px;
}
.test-section2 {
    background: #E6DCFC;
    min-height: 500px;
    width: 80%;
    margin-left: 4rem;
    margin-top: 5rem;
    padding: 3rem;
}
.test-heading {
    margin-left: 4rem;
    font-size: 2rem;
    font-weight: 700;
    color: #E6DCFC;
}
.test-content, .test-subheading, .test-list > li {
    color: #59548D;
}
.book-appointment-box {
  width: 400px;
  background: #59548D;
  margin: 48px auto;
  padding: 16px;
  position: relative;
  min-height: 300px;
}

.book-appointment-box::after {
  content: '';
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 20px;
  border: solid 4px white;
  border-top: 0;
}

.text {
  color: white; 
  position: absolute;
  text-align: center;
  bottom: 90%;
  left: 20px;
  right: 20px;
  white-space: nowrap;
  overflow: hidden;
  /* font-family: 'fjalla one', sans-serif; */
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text > div {
  width: 2000px;
  margin-left: -820px;
}

.innertext::before,
.innertext::after {
  content: '';
  display: inline-block;
  width: 600px;
  height: 4px;
  background: white;
  vertical-align: middle;
}
  
.innertext::before {
  margin-right: 16px;
}

.innertext::after {
  margin-left: 16px;
}
.book-appointment-button {
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
</style>
