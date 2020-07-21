<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">OVULATION TEST</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Ovulation tests are helpful in diagnosing ovulation disorders and timing intercourse. The first part of the menstrual cycle can vary in length before ovulation, but the second part of the cycle (called the luteal phase) is almost always 13-14 days. Therefore, it would be important to identify the days of maximum fertility by determining the day of ovulation. If a woman has regular monthly cycles, she is considered to be ovulatory compared to someone with irregular cycles who clearly has an ovulation disorder.
                </p>
                <p class="test-content">
                    Historically, basal body temperature (BBT) measurements have been used to document ovulation although its current use is limited. In some women with regular cycles and ovulation, the BBT may not rise and in others who don’t ovulate, BBT may increase giving false information.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>OVULATION TEST</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="test-section2" >
            <p class="test-content">
                Another way to document ovulation is by progesterone measurements 7 days following presumed ovulation. A level above 3ng/ml confirms ovulation if a period follows the blood test. In most women with regular monthly cycles, the levels are almost always above 3ng/ml and the measurement of progesterone becomes irrelevant.
            </p>
            <p class="test-content">
                When trying to conceive, the best way to predict and document ovulation is by using ovulation predictor kits (OPK). OPKs can detect luteinizing hormone (LH) elevations and when the test is positive, ovulation takes place with the following 24 hours. It’s best to use the OPK in the morning and if it’s positive, then evening is a good time to have intercourse.
            </p>
            <p class="test-content">
                If menstrual cycles are irregular or there is documented ovulation dysfunction, a workup by a fertility specialist is necessary to identify the cause. The most common disorder that results in ovulation problem is polycystic ovary syndrome (PCOS). Ovulation induction is the treatment for patients who have irregular cycles or have evidence of ovulation dysfunction.
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
