<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Diagnosis | Consultation</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Almost 90% of couples conceive after a year of unprotected intercourse. Evaluation of infertility 
                    is indicated if the female partner is under 35 years of age and the couple has been trying to 
                    conceive for one year. Immediate evaluation and treatment of infertility is appropriate in cases 
                    of known problems that impact fertility such as irregular menstrual cycles, pelvic endometriosis, 
                    past history of pelvic infection or sexually transmitted disease, previous abdominal or pelvic 
                    surgery, or severe male factor infertility. Because fertility declines with advancing age of the 
                    female, evaluation of infertility is warranted for a couple when the female partner is older than 
                    35 and has been trying to conceive for 6 months without success. In the subgroup of women older 
                    than 40 years of age, a more aggressive approach in evaluating and treating infertility is generally 
                    recommended because of the high likelihood for significant and rapid loss of ovarian reserve in this 
                    age group.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Diagnosis | Consultation</span>
                        </div>
                    </div>
                    <div class="book-appointment-button">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' :styleObject="bookAppointmentStyle" @touched="bookAppointment" />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2">
            <p class="treatment-content">After a thorough history and physical examination, additional 
                    infertility diagnostic testing is undertaken to refine the diagnosis. These initial tests are:
                </p>
                <ul class="initial-tests">
                    <li>
                        Ovarian reserve testing (one or more of the following tests may be taken)
                        <ul class="inner-list">
                            <li>Day 3 blood test for FSH (follicle stimulating hormone) and estradiol (estrogen)</li>
                            <li>Day 3 antral follicle count: an ultrasound examination to measure the number of follicles between 4-8 mm on both ovaries.</li>
                            <li>Blood test for anti-mullerian hormone</li>
                            <li>Clomiphene citrate challenge test</li>
                        </ul>
                    </li>
                    <li>
                        Testing for tubal and/or uterine anatomy
                        <ul class="inner-list">
                            <li>Hysterosalpingogram (tubal dye test) and/or</li>
                            <li>Sonohysterogram (an ultrasound examination)</li>
                        </ul>
                    </li>
                    <li>
                        Testing to determine ovulation
                        <ul class="inner-list">
                            <li>Ultrasound to document the time of ovulation</li>
                            <li>Blood test to check progesterone level in mid-luteal phase</li>
                        </ul>
                    </li>
                    <li>
                        Testing to assess mucus and sperm interaction
                        <ul class="inner-list">
                            <li>Post coital test: to see if cervical mucus is optimal and sperm survival is sufficient</li>
                        </ul>
                    </li>
                    <li>
                        Semen testing
                        <ul class="inner-list">
                            <li>Semen analysis</li>
                            <li>Anti-sperm antibodies</li>
                        </ul>
                    </li>

                </ul>
                <p class="treatment-content">
                    In the majority of cases this list of information is enough to indicate the appropriate initial 
                    treatment plan. Laparoscopy is not routinely indicated because it has the risks of surgery and 
                    does not usually change the initial treatment plan. However, laparoscopy may be indicated if there 
                    is suspected endometriosis or tubal disease based on the history, physical findings or ultrasounds 
                    examinations; or if there are other specific gynecologic reasons to perform this procedure.
                </p>
        </div>
    </div>
</template>
<script>
import drRamaButton from './button'
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
            console.log("book");
            this.$router.push({name: "book-appointment"});
        }
    }
}
</script>
<style>
.treatment-section1 {
    background: #E6DCFC;
    width: 65%;
    display: flex;
    margin-left: 4rem;
}
.book-appointment-box {
  width: 400px;
  background: #59548D;
  margin: 48px auto;
  padding: 16px;
  position: relative;
  min-height: 300px;
  position: relative;
    z-index: 1;
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
.treatment-section1-left {
    margin-left: 2rem;
    padding: 1rem;
    line-height: 30px;
    min-width: 550px;
}
.treatment-section1-right {
    width: 40%;
    position: relative;
    left: 70px;
}
.treatment-section2 {
    background: #E6DCFC;
    min-height: 500px;
    width: 80%;
    margin-left: 4rem;
    margin-top: 5rem;
    padding: 3rem;
}
.treatment-heading {
    margin-left: 4rem;
    font-size: 32px;
    font-weight: bold;
    color: #E6DCFC;
    font-family: 'Montserrat', sans-serif;
    transition: ease 0.2s;
}
.treatment-heading:hover {
    color: #59548D;
}
.treatment-content {
    color: #59548D;
    font-size: 18px;
    text-align: justify;
}
.initial-tests > li {
    color: #59548D;
    font-size: 18px;
    text-align: justify;
    font-family: 'Lato', sans-serif;

}
.book-appointment-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    position: relative;
    z-index: 999;
}
</style>
