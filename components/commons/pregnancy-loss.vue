<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Recurrent Pregnancy Loss</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    We are the exports and having rich experience in dealing with repeated pregnancy loss patients. 
                    Even after loss of six to seven pregnancies in the past, many patients went home happily with 
                    live, healthy and term babies from our hospital.
                    <br><br>
                    A pregnant woman losing her baby at any stage is very stressful situation to her and family. If 
                    there is three or more pregnancy loss in a row, we call it as bad obstetric history. But in 
                    modern days we cannot wait till loss of 3 pregnancies.
                    <br><br>
                    We need to investigate and treat early. In modern days age at marriage and planning for baby or 
                    delayed when compare to olden days. In view of advanced age we need to address the problem even 
                    with one pregnancy loss.
                </p>
                <div class="treatment-content">
                    Pregnancy loss ( BOH ) can be divided into three groups:
                    <ul class="treatment-list">
                        <li>1st Trimester abortions ( First three of pregnancy )</li>
                        <li>2nd Trimester abortions ( 4th to 6th month of pregnancy )</li>
                        <li>3rd Trimester abortions ( 7th month to term delivery )</li>
                    </ul>
                    Depending upon the period of gestation, reasons and treatments defer.
                </div>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Recurrent Pregnancy Loss</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">1ST TRIMESTER PREGNANCY LOSS</h5>
            <div class="table1">
                <table class="table table-responsive table-bordered">
                    <tr class="thead-purple">
                        <th>REASONS</th>
                        <th>INVESTIGATION</th>
                        <th>TREATMENT</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <ul class="treatment-list">
                                    <li>Corpus Lutetium</li>
                                    <li>Deficiency</li>
                                    <li>Protein</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Soon after missing period(5 to 7 days) serum estrodiol, projesterol</li>
                                    <li>Trasvaginal scan to confirm intrauterine pregnancy</li>
                                </ul>
                            </td>
                            <td>
                                If estrogen or progesterone are low, supplement with hormones till 8to 10 weeks of pregnancy.
                            </td>
                        </tr>
                        <tr>
                            <td>Border line diabetes</td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Glucose tolerance test (GTT)</li>
                                    <li>Serum fasting and post lunch insulin</li>
                                    <li>HbA1c</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Diet control</li>
                                    <li>Oral anti diabetics</li>
                                    <li>Exercise</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Sub Clinical Infections</td>
                            <td>
                                CBP, ESR, CRP, CUE, Urine for C/S
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Pre and probiotics</li>
                                    <li>If necessary, antibiotics.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Cromosomal Abnormalities</td>
                            <td>
                                <ul class="treatment-list">
                                    <li> Chromosomal analysis to both parents and fetus</li>
                                    <li>Chorion villie sample biopsy</li>
                                    <li>Amniocentesis</li>
                                    <li>PGD/PGS</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Most of the time parents chromosomal analysis comes normal but the resultant fetus could be abnormal</li>
                                    <li>IVF/ICSI- after this procedure PGD/PGS has to be done to detect abnormal embryos</li>
                                    <li>Egg/Sperm donation</li>
                                    <li>Embryo donation</li>
                                    <li>Adoption</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>APL Syndrom(Anti phospholipid syndrome)</td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Anti- phospholipid antibodies</li>
                                    <li>Anti cardio lipin antibodies</li>
                                    <li>Lupus anti coagulant</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Heparin injections through out pregnancy</li>
                                    <li>Aspirin</li>
                                    <li>Prednesolone</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Auto Immune Problems</td>
                            <td>
                                ANA /TPO/ ATA
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Intravenous Immunoglobulins</li>
                                    <li>Intravenous lipits</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Viral infections(TORCH)</td>
                            <td>
                                Torch blood test for TORCH
                            </td>
                            <td>
                                Anti viral treatment
                            </td>
                        </tr>
                        <tr>
                            <td>Hypo/hyper thyroidism</td>
                            <td>
                                Serum FT3,FT4,TSH
                            </td>
                            <td>
                                Control thyroid
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul class="treatment-list">
                                    <li>Coagulation Defects</li>
                                    <li>Imbalance between bleeding and coagulation</li>
                                    <li>Factors may result into abortions</li>
                                </ul>
                            </td>
                            <td>
                                Thrombophilia pannel
                            </td>
                            <td>
                                Correct the defect
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Maternal Medical Health Problems
                            </td>
                            <td>
                                blood pressure, depression, heart/kidney/ liver/lung problems
                            </td>
                            <td>
                                Control all the medical issues in the expectant mother
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h5 class="treatment-subheading">TRIMESTER PREGNANCY LOSS</h5>
            <div class="table2">
                <table class="table table-responsive table-bordered">
                    <tr class="thead-purple">
                        <th>REASONS</th>
                        <th>INVESTIGATION</th>
                        <th>TREATMENT</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <ul class="treatment-list">
                                    <li>Uterine anomalies</li>
                                    <li>Uni cornuate/ bi cornuate uterus</li>
                                    <li>Septate utrus</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Hystosal pyngogram</li>
                                    <li>Sono pyngogram</li>
                                    <li>Laparoscopy/hysteroscopy</li>
                                </ul>
                            </td>
                            <td>
                                Surgical correction of the birth defects of uterus.
                            </td>
                        </tr>
                        <tr>
                            <td>Incompetent Cervix</td>
                            <td>
                                Passing 8 No HEGAR DILATOR easily through cervix without anesthesia
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Encirclauge at 13 weeks pregnancy</li>
                                    <li>Abdominal circlauge in non pregnant women, in cases of severe cervical incompetence</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Fibroid Uterus(Liomyoma)</td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Color Doppler ultra somography</li>
                                    <li>MRI</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Medical treatment</li>
                                    <li>GnRha Injections</li>
                                    <li>Fibristol tablets till the size of the fibroid</li>
                                    <li>Becomes small</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Surgical Treatment</td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Blood group to both parents</li>
                                    <li>Indirect coombs test</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="treatment-list">
                                    <li>Repeated blood transfusion</li>
                                    <li>Surrogacy</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Placental Problems/Chorioamnionitis</td>
                            <td>
                                Color Doppler ultrasound scanning
                            </td>
                            <td>
                                Antibiotics to correct Chorioamnionitis
                            </td>
                        </tr>
                    </tbody>
                </table>
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
