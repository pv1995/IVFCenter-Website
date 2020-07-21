<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Fibroid Uterus</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Fibroid is a commonest benign  tumor in females . It is seen in 20% of women. Most of them do 
                    not show any symptoms highest incidence is between the ages of 35-45 years.
                    <br><br>
                    Development of fibroid has positive family history and also sense genetic abnormalities also 
                    have a role in development of fibroids. The rate of growth of fibroid is slow and it takes 
                    about 3-5years for the fibroid to grow sufficiently to be felt per abdomen.
                    <br><br>
                    Risk factors for development of fibroid are:
                </p>
                <ul class="treatment-list">
                    <li>Nulliparity</li>
                    <li>Obesity</li>
                    <li>Hyperoestrogenic state</li>
                    <li>Blacks</li>
                </ul>
                <p class="treatment-content">
                    Fibroids are been less frequently in multiparous women. Fibroids grows rapidly during pregnancy 
                    or also among oral contraceptive pill users. Most common type of fibroid is intramural type.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Fibroid Uterus</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">Symptoms – 75% of women are asymptomatic</h5>
                <ul class="treatment-list">
                    <li>Excessive bleeding during menses</li>
                    <li>Frequent menstrual cycles</li>
                    <li>Dysmenorrhea</li>
                    <li>infertility – scan in 30% of women having fibroids</li>
                </ul>
                <p class="treatment-content">
                    During pregnancy it can cause abortion , preterm labour and also growth restriction in fetus.
                </p>
                <h5 class="treatment-subheading">POSTPARTUM HEMORRHAGE</h5>
                <p class="treatment-content">
                    If the fibroid size is very big and impacted it can cause pressure symptoms like constipation, 
                    retention of urine . Fibroids can be treated medically and surgically. Patients with fibroid 
                    uterus can be given medications for reducing the amount of bleedind and antispasmedics to relive 
                    pain and dysmenorrhea. GNRH against are also prior to sugery in cases of huge and multiple 
                    fibroids.
                    <br><br>
                    Newer modalities of medical therapy are LNG-IUS which is levonorgestrel releasing intrauterine 
                    system. It is a harmone releasing device like copper-t. This reduces uterine size and bleeding. 
                    Ullipristal acetate is the newest drug available in market for fibroid uterus. This is given 
                    for a continuous period of 3months which shrinks size of fibroids.
                    <br><br>
                    Surgically only fibroids can be removed which is called as myomectomy. This surgery is a 
                    fertility of uterus preserving surgery done in younger age group of females. If family 
                    completed and elderly women hysterectomy can be done.
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
</style>
