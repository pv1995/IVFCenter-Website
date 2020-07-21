<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">GENETIC SCREENING</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Birth defects occur in 2-3% of the general population and the severity can be categorized as minor or major malformations. Certain risk groups such as couples with infertility may be at a greater risk for having a baby with such defects (regardless of infertility treatment) due to the cause of infertility including advanced reproductive age (decreased egg reserve), sperm deformities or being a carrier of certain genetic diseases. Genetic screening is utilized to identify individuals who are at an increased risk, so that advanced testing can be offered prior to or during the pregnancy for final diagnosis.
                </p>
                <p class="test-content">
                    Although genetic screening has been available for many years, its application has significantly increased with the advent of new genetic tests, increased awareness and our understanding of the pathophysiology of various diseases. Currently, there is no single genetic test that identifies all the risk factors for a couple, but a number of different screening tests are offered based on specific risk factors. Genetic testing along with risk assessment should ideally be done prior to the initiation of the pregnancy, but 50% of pregnancies in the United States are unplanned and therefore genetic screening is commonly offered during the pregnancy.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>GENETIC SCREENING</span>
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
                Currently pregnant women are offered genetic screening for a number of diseases based on their personal risk. Once pregnancy is confirmed, testing for blood type, vaccination status, complete blood count, urine analysis and infectious disease testing have become routine. Additional testing is offered based on racial and social background and include the following:
            </p>
            <ul class="test-list">
                <li>
                    <span style="font-weight:700">Sickle Cell Disease:</span>
                     Patients with African-American ancestry should be screened via hemoglobin electrophoresis for carrier status of this disease, as one in 10 may be a carrier.
                </li>
                <li>
                    <span style="font-weight:700">Cystic fibrosis (CF):</span>
                     It is estimated that 3% to 10% of Caucasians carry an effected CF gene, but do not have the actual disease because a person must inherit two defective CF genes, one from each parent, to develop the disease. CF is the most common inherited disease in Caucasians, and more common in those of northern or central European background and Ashkenazi Jewish background.
                </li>
                <li>
                    <span style="font-weight:700">Thalassemia:</span>
                     People of Turkish, Greek, Italian, Mediterranean or southern Asian descent experience a high incidence of this disease. Patients can have a complete blood count (CBC) with mean corpuscular volume (MCV) to rule out the possibility of thalassemia. An MCV of Tay Sachs: This disease has a high incidence in Eastern European Jews and French Canadians.
                </li>
            </ul>
            <p class="test-content">
                Once the genetic screening test comes back positive prior to pregnancy, the male partner should be tested to further define the risk for a planned pregnancy. If the male partner screens negative for the same disease, the risk of having an affected child is very low. If testing is being done for the first time during pregnancy, male partner should still be tested to assess the actual risk and specific diagnostic testing can be offered. If the screening test comes back positive in pregnancy, partner is tested and if he tests positive, genetic testing during the pregnancy is offered for diagnosis.
            </p>
            <p class="test-content">
                If screening of both partners is positive prior to pregnancy, prenatal testing can determine if the unborn child is affected with the disease. Preimplantation genetic diagnosis (PGD) is one of the methods used along with in vitro fertilization (IVF) treatment to test embryos for specific genetic disorders prior to their transfer to the uterus. With PGD testing, one of the stem cells (blastomere) is removed from each embryo and certain genes in the DNA are amplified and compared to a standard DNA. Once genetically normal embryos are identified, they are transferred to the uterus and the risk of having an affected child is significantly diminished.
            </p>
            <p class="test-content">
                There are two genetic tests available during the pregnancy and include chorionic villus sampling (CVS) and amniocentesis. CVS can be done in the first trimester and results are available earlier than an amniocentesis. In the event that the fetus is affected by a disease, termination of pregnancy can be considered early because it is less risky and complicated than late or second trimester termination. Amniocentesis is offered in the second trimester and its reliability is the same as CVS. Both tests are considered standard of care in diagnosing genetic disorders during pregnancy. CVS requires advanced training such as a maternal fetal medicine specialist to actually do the biopsy, whereas amniocentesis can be done by the general obstetrician because it’s less complex to perform.
            </p>
            <p class="test-content">
                Screening for chromosomal anomalies (i.e. Down’s syndrome) and spina bifida (incomplete closure of the vertebra over the spinal cord) in pregnancy has been offered for many years in the second trimester using a blood test. This blood test initially included alpha fetoprotein level only, which was later replaced by triple and quadruple screen (beta HCG, alpha fetoprotein, estriol and inhibin-A). More recently, first trimester screening for Down’s syndrome and Trisomy 18 has gained popularity because of earlier diagnosis of such disorders. First trimester screening includes ultrasound nuchal translucency measurement (thickness of fluid on the back of the neck) along with blood levels of beta-hCG and pregnancy associated plasma protein A (PAPP-A). If abnormal levels are detected and the calculated risk is increased, advanced genetic testing with either CVS or an amniocentesis is offered for the final diagnosis.
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
