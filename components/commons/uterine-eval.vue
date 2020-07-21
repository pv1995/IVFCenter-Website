<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">UTERINE EVALUATION</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <h5 class="test-subheading">METHODS OF UTERINE EVALUATION</h5>
                <p class="test-content">
                    Although uterine pathologies are relatively uncommon causes of infertility, evaluation of the endometrial cavity prior to initiating infertility treatment remains an important part of the workup. Currently there are four basic methods for evaluation of the uterus, which include:
                </p>
                <ul class="test-list">
                    <li>Transvaginal (Pelvic) Ultrasound (TVS)</li>
                    <li>Fluid Ultrasound (Hydrosonography)</li>
                    <li>Hysterosalpingogram (HSG)</li>
                    <li>Hysteroscopy</li>
                </ul>
                <p class="test-content">
                    Each of these four methods has its advantages and limitations, and therefore it is important to determine which method to select for the specific clinical problem. All methods are utilized in the first part of the menstrual cycle (at the end of menses) to minimize the risk of infection, avoid interference from intrauterine blood and clots, and an early intrauterine pregnancy. Alternatively, evaluation can be done anytime while on birth control pills.
                </p>
                <p class="test-content">
                    In addition, fertility specialist may perform an endometrial biopsy to evaluate the endometrial lining of the uterus to obtain an objective assessment of ovulation or to rule out “luteal phase defect” (LPD).
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Uterine Evaluation</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="test-section2" >
            <h5 class="test-subheading">PELVIC ULTRASOUND (TRANSVAGINAL ULTRASOUND)</h5>
            <p class="test-content">
                Transvaginal ultrasound (TVS) is routinely used in the initial evaluation of the infertile patient and provides information about tubo-ovarian pathology (i.e. ovarian cyst, endometrioma, large hydrosalpinx) and uterine pathology (i.e. fibroids, endometrial polyps, and uterine anomalies). Advantages of TVS are that it is a simple tool with almost no infection risk, generally well tolerated, radiation-free method which provides information on the size and position of the uterus, and tubo-ovarian pathology. The disadvantages of TVS are its limited sensitivity and specificity in diagnosing abnormalities of the endometrial cavity and tubal pathology such as tubal blockage (i.e. hydrosalpinx).
            </p>
            <h5 class="test-subheading">FLUID ULTRASOUND (HYDROSONOGRAPHY)</h5>
            <p class="test-content">
                Hydrosonography (fluid ultrasound) involves fluid injection (normal saline – salt water) into the endometrial cavity and simultaneous transvaginal sonography to visualize the endometrial cavity. Hydrosonography provides information about the pathological lesions in the endometrial cavity (i.e. myomas, polyps, adhesions, and congenital anomalies) as well as limited information on tubal patency. Fluid in the cul-de-sac during the procedure suggests tubal patency, but whether one or both tubes are patent cannot be determined. For intracavitary lesions it has the sensitivity and specificity almost comparable to hysteroscopy (gold standard), except intrauterine adhesions which may be better evaluated by hysteroscopy and treated during the same procedure.
            </p>
            <p class="test-content">
                Advantages of hydrosonography include low infection risk, easy tolerability and the lack of need for anesthesia. Disadvantages are the lack of comprehensive evaluation of fallopian tubes and the need for a second procedure such as hysteroscopy if an intracavitary lesion is suspected. If good distention is not accomplished with fluid ultrasound, endometrial cavity may not be fully assessed and a hysteroscopy in such cases is a better option.
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
