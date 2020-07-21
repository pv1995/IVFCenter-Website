<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">LAPROSCOPY PROCEDURE</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Laparoscopy is a procedure to evaluate the inside of the abdomen using a thin (3-10mm) telescope type instrument called the laparoscope. It is inserted through a sleeve type instrument called the trocar inside the umbilicus (navel). It can also be inserted on the left upper part of the abdomen just below the rib cage. This procedure is done under general anesthesia in the operating suite and CO2 gas is used to distend the abdomen for the procedure. Additional small (0.5 – 1cm) incisions may be necessary in the lower part of the abdomen to introduce instruments for operative laparoscopic procedures.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>LAPROSCOPY PROCEDURE</span>
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
                The laparoscope is connected to a camera system and the inside of the abdomen can be clearly visualized on the monitor (similar to hysteroscopy). Surgery can be done through these small ports (trocars) using special instruments and the patients are generally discharged home the same day. Benefits of laparoscopy include shorter recovery time, less pain medications and smaller incisions compared to laparotomy (open abdominal surgery).
            </p>
            <p class="test-content">
                Some of the gynecologic indications for laparoscopy include pelvic pain, blocked fallopian tubes, abnormal or excessive bleeding, pelvic or intrauterine adhesions (scar tissue), ovarian cysts, tubal disease, ectopic pregnancy, endometriosis, hydrosalpinx (fluid filled tube), tubal ligation and infertility. Laparoscopy is a relatively safe procedure with some risks that include bleeding, infection, injury to bladder, bowel, blood vessels, conversion to open surgery and anesthesia related risks.
            </p>
            <p class="test-content">
                Laparoscopy is now the preferred surgical approach for removal of cysts from the ovaries, treatment of endometriosis, tubal disease, hydrosalpinx, removal of scar tissue, tubal ligation and for almost all diagnostic procedures.
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
