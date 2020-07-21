<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Reproductive Surgery</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <h5 class="treatment-subheading">Reproductive Surgery - Men</h5>
                <p class="treatment-content">
                    Male Reproductive System includes two testes, a network of ducts, the seminal vesicles, 
                    the prostate gland and the penis. Sperms are produced in testis and ejaculated through penis. 
                    From the production to the delivery the track is very long – in short the pathway for sperms is 
                    from.
                    <br><br>
                    Seminiferous Tubules straight tubules Rete testis efferent ductules Epididymis Vas deferensurethra. 
                    There can be blockage at any level and few of them can be treated surgically. Few disorders of male 
                    reproductive system which can be treated surgically are as follows.
                </p>
                <h5 class="treatment-subheading">Facility at our center:-</h5>
                <ul class="treatment-list">
                    <li>ultrasound technique to diagnose varicocele</li>
                    <li>surgical treatment like laparoscopy and incisional techniques – “come and go” basis</li>
                    <li><li>ultrasound technique to diagnose varicocele</li></li>
                    <li>Non-surgical treatment options – X-ray immobilization</li>
                </ul>
                <p class="treatment-content">
                    <span style="font-weight:700">Disorders in the Penis:</span>
                    Correction of penile deformities
                </p>
                <p class="treatment-content">
                    <span style="font-weight:700">Anejaculation:</span>
                    absence of ejaculation
                </p>
                <p class="treatment-content">
                    <span style="font-weight:700">Sperm Extraction Procedures:</span>
                    When there is sperm production in the testis but unable to enter into ejaculatory system, sperm 
                    has to be recovered from vas, epididymis or testis, depending upon the location of extraction. 
                    Various techniques has been developed TESA, PESA, MESA etc . This sperm can be used for IVF-ICSI.
                    <br>
                    Some of the structural abnormalities of male reproductive tract can be corrected with surgery. 
                    To treat specific medical condition or to enhance sperm production medical therapy is applicable.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Reproductive Surgery</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">Reproductive surgeries – Female</h5>
            <ul class="treatment-list">
                <li>
                    Diagnostic laparoscopy to identify salpyngitis ( infections in tubes ) uterine size and shape, 
                    tubo – ovarian relationship, endometriosis ( deposition of endometrium ) adhessions between bowel, 
                    omentum, tube ovary, uterus.
                </li>
                <li>
                    Operative Laparoscopy is done for - 
                    <ul class="inner-list">
                        <li>Pcos(micro cauterization)</li>
                        <li>Endometrial deposit fulguration</li>
                        <li>Release adhesions</li>
                        <li>Myomectomy ( fibroid removal)</li>
                        <li>Chocolate syst removal</li>
                    </ul>
                </li>
                <li>
                    Diagnostic hysteroscopy
                    <ul class="inner-list">
                        <li>
                            Hysteroscopy is done to study uterine cavity. there may be septum, polyp, fibrosis 
                            (asherman syndrome) fibroids.
                        </li>
                    </ul>
                </li>
                <li>
                    Operative hysteroscopy
                    <ul class="inner-list">
                        <li>
                            All the above can be removed through operative hysteroscopy.
                        </li>
                    </ul>
                </li>
                <li>
                    Open laparotomy
                    <ul class="inner-list">
                        <li>
                            Big fibroids grade 3 or 4 endometriosis, unifications of bicornuate uterus – may need 
                            open surgery.
                        </li>
                    </ul>
                </li>
            </ul>
            <h5 class="treatment-subheading">Reproductive surgeries – Male</h5>
            <ul class="treatment-list">
                <li>Testicular Biopsy TESA MESA PESA</li>
                <li>Varicocelectomy</li>
                <li>Hydrocelectomy</li>
                <li>Undescended Testis</li>
            </ul>
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
