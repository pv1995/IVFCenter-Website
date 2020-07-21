<template>
    <div class="treatment-single surrogacy">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Surrogacy Treatment</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Surrogacy has been around since the 1980s, but in the early years it was often shrouded in secrecy 
                    and legal red tape. These days, advances in medicine, law, and public awareness have allowed IVF 
                    surrogacy to become a routine option for many people who might otherwise never have the chance to 
                    have a baby who shares their genetic heritage.
                    <br><br>
                    IVF surrogacy uses a third party “gestational surrogate” to carry the pregnancy when a patient is 
                    unable to carry a baby to term herself.
                    <br><br>
                    <span style="font-weight:bold">
                        The main draw of IVF surrogacy for most couples is the ability to have 
                        a child who shares the genetics of both the mother and father, even when pregnancy is not possible 
                        for the woman.
                    </span>
                    <br><br>
                    Choosing a surrogate is obviously a very important decision. Surrogates undergo strict screening 
                    to ensure that they are physically, mentally, and emotionally healthy enough to carry a pregnancy 
                    for a client couple without undue risk, generally the attributes of an ideal gestational surrogate 
                    include:
                </p>
                <ul class="treatment-list">
                    <li>Between the ages of 21 and 40</li>
                    <li>Healthy lifestyle (no smoking, substance abuse problems, healthy diet, etc)</li>
                    <li>Has had at least one successful pregnancy, preferably with no complications and an easy delivery</li>
                    <li>Has passed medical and psychological tests</li>
                </ul>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Surrogacy Treatment</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <h5 class="treatment-subheading">IVF surrogacy work?</h5>
            <p class="treatment-content">
                At the beginning of the IVF surrogacy process, the biological/intended parents and the gestational 
                surrogate will go through an assessment and laboratory tests with our Institute to make sure that you 
                are all healthy and prepared both mentally and physically, and that there are no sexually transmitted 
                diseases that could damage potential embryos or be given to the surrogate during the embryo transfer. 
                From here the process is relatively simple:
            </p>
            <ul class="treatment-list">
                <li>
                    The biological mother (who is providing the eggs) and the gestational surrogate will take medication 
                    to synchronize their menstrual cycles.
                </li>
                <li>
                    Once the cycles are synchronized, the egg provider will begin her IVF protocol to stimulate her 
                    ovaries for egg production.
                </li>
                <li>
                    The egg provider will undergo an egg retrieval procedure.
                </li>
                <li>
                    Her eggs will be taken to the lab and mixed with her partner’s (or donor) sperm and cultured for 3 to 5 days.
                </li>
                <li>
                    At the same time, the gestational surrogate will begin taking supplemental progesterone to prepare 
                    her uterine lining for pregnancy.
                </li>
                <li>
                    When the embryos are ready, one or more will be transferred to the surrogate’s uterus.
                </li>
                <li>
                    In two weeks, the surrogate will take a pregnancy test to determine whether implantation was successful.
                </li>
                <li>
                    If pregnancy occurs, the surrogate will be monitored by the IVF clinic until the pregnancy is 10 
                    to 12 weeks along, at which point her care is transferred to an OB.
                </li>
                <li>
                    When the pregnancy is complete, the surrogate delivers the baby.
                </li>
                <li>
                    The baby goes home with its intended, biological parents.
                </li>
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
