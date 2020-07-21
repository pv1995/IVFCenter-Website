<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Fertility Ozone Therapy</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    Ozone in the form of gas, administered through various routes such as, in saline, ear, Rectal 
                    etc. to kill disease causing micro organisms, to improve cellular function and promote healing 
                    of damaged tissues.
                </p>
                <h5 class="treatment-subheading">
                    Ozone therapy as a modern and viable technique in the management of infertility issues
                </h5>
                <ul class="treatment-list">
                    <li>
                        Improvement of macro- and microcirculation that results in the normalization of placenta 
                        hormonogenic function.
                    </li>
                    <li>
                        Decrease in the activity of lipid peroxidation processes and simultaneous stimulation of 
                        the antioxidant defense system of human body.
                    </li>
                    <li>
                        Immunomodulating action develops particularly through a decrease in blood level of circulating 
                        immune complexes, IgM, group and Rh antibodies, increase in the phagocytic activity of neutrophiles.
                    </li>
                    <li>
                        Decrease (if available) in the hypercoagulation activity of blood.
                    </li>
                    <li>
                        Intensification of the protein-synthesizing function of liver.
                    </li>
                </ul>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Fertility Ozone Therapy</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2" >
            <ul class="treatment-list">
                <li>
                    Stimulates production of WBC’s.
                </li>
                <li>
                    Kills viruses, bacteria, fungi and other germs.
                </li>
                <li>
                    Helps diseased cells to get rid of toxins and harmful free radicals.
                </li>
                <li>
                    Release of PDGF—helps in healing and repairs.
                </li>
                <li>
                    Release of immunosuppressive cytokines TGF-B and IL-10 may inhibit inflammation.
                </li>
                <li>
                    Proteolytic enzymes and endogenous ROS are inhibited.
                </li>
                <li>
                    Bradykinin inflammatory PG pelease is inhibited.
                </li>
                <li>
                    Disappearance of edema leads to improved circulation, washing away of lactic acid and pain relief.
                </li>
                <li>
                    Ozone also helps in improving oocyte quality, reduces insulin resistance in diabetics, PCO’s, 
                    improves blood vasculature and supply to the uterus, improvs endometrial milieu, increases 
                    fertilization rates, promotes embryo transplantation, decreases the effects of endometriosis,
                     hydrosalpinx, adenomyosis, corrects hormonal dysregulations. Thus enhancing a healthy viable 
                     pregnancy,culminating in the birth of healthy children.
                </li>
            </ul>
            <h5 class="treatment-subheading">
                Ozone therapy in male infertility
            </h5>
            <ul class="treatment-list">
                <li>Ozone enhances the circulation of all organs including the male organs.</li>
                <li>Stimulates the function of testicles,therefore naturally stimulates the performance.</li>
                <li>Effectively helpful in cases of infections like leucocytospermia.</li>
            </ul>
            <h5 class="treatment-subheading">
                Treatments in ozone therapy
            </h5>
            <ul class="treatment-list">
                <li>
                    Patients with viral infections were given Intravenous insufflation of ozonised isotonic 
                    NaCl 200 ml with the concentration of ozone 20mcg/ml.- 10-15 sessions along with topical 
                    application, rectal insufflation and minor auto injections – 5-10 sessions for local 
                    infections Patients were prescribed ozonised distilled water or ozonized olive oil per 
                    os. Along with rectal and vaginal insufflations. Ozone saline hydrotubation 3-5 sessions 
                    given(in tubal pathologies, endometriosis, fibroids, cysts etc..) ozone minor auto 
                    injections 5-8 sessions given (in cases of presence of autoantibodies like TPO, ATA, 
                    ANA, Antiphospholipid antibodies).
                </li>
                <li>
                    The well-known antimicrobic properties of ozonized olive oil as found out can be successfully 
                    used in the treatment of vulvar dystrophic diseases. Ozone therapy produces not only an 
                    anti-inflammatory effect, but also improves tissue trophism, allows rejecting the use of 
                    hormonal ointments and laser therapy.
                </li>
                <li>
                    The use of ozone- oxygen mixture in IVF seems to bring definite advantages both for reducing
                     FSH dosage administration and in better preparing the endometrium, improving thus the chances
                      of implantation.
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
