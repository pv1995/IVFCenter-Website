<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">HYSTEROSCOPY PROCEDURE</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Hysteroscopy is a procedure to evaluate the inside of the uterus called the endometrial cavity. The hysteroscope is a thin (3-8mm) telescope like device that is inserted into the uterus through the vagina and cervix. It’s connected to a camera and the endometrial cavity can be visualized directly on the monitor. This procedure allows a detailed survey of the endometrial cavity and also a possible treatment option (operative hysteroscopy), if an abnormality such as scar tissue, polyps or fibroids is detected. It is usually done under anesthesia to minimize discomfort, especially in operative cases. Anesthesia is generally in the form of intravenous sedation, during which time the patient is comfortable and free of pain throughout the procedure.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>HYSTEROSCOPY PROCEDURE</span>
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
                The indications for hysteroscopy include infertility, fibroids, endometrial polyps, scar tissue inside the uterus (Asherman’s syndrome), irregular bleeding, repeated miscarriages and uterine anomalies. The benefit of hysteroscopy is its accuracy (100%) in diagnosing the problem and also the fact that it allows treatment during the same procedure. It can be done right after the menstrual cycle ends or while on birth control pills to allow the best visualization.
            </p>
            <p class="test-content">
                In order to visualize the endometrial cavity, a type of distention fluid or CO2 gas is used for hysteroscopy. Whereas CO2 gas can only be used for diagnostic hysteroscopy, distention fluids can be utilized for both diagnostic and operative cases. When distention fluids are used, they are absorbed by the uterus and into the body, and there is a certain limit of fluid that can be used safely during the procedure. Therefore the amount of distention fluid used during the procedure is recorded and if excessive fluid needs to be used, the procedure may be stopped even before the entire pathology is treated. If hysteroscopy is performed for the removal of fibroids or treatment of scar tissue, generally the procedure is longer than a diagnostic process. In such cases, more distention fluid is necessary and sometimes the procedure may need to be terminated because of excessive fluid absorption into the body and for the safety of the patient. Hysteroscopy is a safe procedure overall. The risks include bleeding, injury to the cervix or the uterus or side effects of anesthesia, which occur in less than 1% of all cases.
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
.test-content {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-align: justify;
}
.test-content, .test-subheading, .test-list > li {
    color: #59548D;
}
.test-list > li {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-align: justify;
}
.test-subheading {
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
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
