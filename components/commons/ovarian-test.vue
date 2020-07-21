<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">OVARIAN RESERVE TESTING</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Ovarian reserve refers to the number of eggs remaining in the ovaries, which significantly determines fertility outcome. The exact number of eggs cannot be counted or determined based on hormone levels, but certain tests can provide information about the egg reserve accurately.
                </p>
                <p class="test-content">
                    Women are born with a finite number of eggs and the egg reserve gradually declines throughout the reproductive years. At birth, approximately 1-1.5 million eggs are present, which declines to half at puberty and down to about 25,000 at age 37. The initial drop is estimated to be at age 27 which may not be clinically relevant, but the second drop at age 35 is considered significant. The drop in the egg reserve is asymptomatic and the rate of decline is mostly dependent on genetics. When there are no eggs left in the ovaries, there is no ovulation or menstrual cycles and the woman goes into menopause.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>OVARIAN RESERVE TESTING</span>
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
                Common hormone tests to evaluate the egg reserve include measurement of FSH and estradiol levels on the third day of menses. FSH and estradiol levels may not be reliable in some cycles if the levels are within the normal range. Levels are more meaningful if they are elevated, which suggest decreased ovarian reserve (DOR). More recently, Anti-Mullerian Hormone (AMH) measurements have gained popularity due to their ability to better predict fertility treatment outcomes. Another marker of ovarian reserve is Inhibin B, although it does not add more information to the tests mentioned above.
            </p>
            <p class="test-content">
                The best predictor of fertility outcome and treatment is the measurement of antral follicle count (AFC) on the first few days of the menstrual cycle. Dr. Bayrak recommends the combination of AFC with hormone measurements to accurately determine egg reserve.
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
