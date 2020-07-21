<template>
    <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Age and Infertility</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <p class="treatment-content">
                    As a woman ages ovarian function &amp; reserve also starts depleting.The decline is sharp beyond 35 
                    years of age. But with new innovations in ART &amp; regenerative medicine, PRP (Plateletrich plasma 
                    infusions,stem cell therapy (from self-bone marrow, peripheral ,placental extractions,fetal stem 
                    cell extracts), antioxidant &amp; hormonal therapies,there has been improvement in considerable number 
                    of women. Both ovarian function as well as egg quality &amp; quantity have improved.
                    <br><br>
                    Also with advancements in freezing techniques if there are less number of eggs or formed embryos 
                    these can be frozen pooled ,when sufficient embryos are available they can be successfully 
                    transferred to the womb in a well synchronized embryo transfer cycle. Accupuncture, Ozone 
                    therapy also has proven to increase the implantation rates &amp; also pregnancy outcomes. Now even 
                    with advanced age women are still able to parent a biologicalchild of her own.
                    <br><br>
                    In men onset of decline in fertility parametersstarts later beyond 55-60 years of age. Motility 
                    (in terms of velocity) and DNA fragmentationcan increase. But with Ozone, Chelation, Accupuncture
                    &amp; anti-oxidant therapies we have observed significant improvement in semen parameters leading 
                    to increased fertilization rates.
                </p>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Age &amp; Infertility</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2">
            <p class="treatment-content">
                With the aid of ICSI-IMSI,Laser Assisted Hatching &amp; PGDhave largely improved the success rates 
                culminating in the birth of healthy offspring.
            </p>
            <ul class="treatment-list">
                <li>
                    <span style="font-weight:700">Egg donation:</span>
                    <br>
                    Women over 40, or with evidence of early menopause [premature ovarian failure] egg donation is 
                    the option. Eggs from a younger woman are likey to result in pregnancy and less likely to end 
                    in miscarriage even when carried by an older woman [link- egg donation].
                </li>
                <li>
                    <span style="font-weight:700">Embryo donation:</span>
                    <br>
                    If the male partner also has a sperm problem embryo donation is a right option (link- Egg donation ).
                </li>
                <li>
                    <span style="font-weight:700">Surrogacy:</span>
                    <br>
                    A surrogate is a woman who agrees to become pregnant for a couple using the male partner’s 
                    sperm and her own egg (traditional surrogate) or using the male partner’s sperm and the female 
                    partner’s egg (gestational surrogate) (link – surrogacy).
                </li>
                <li>
                    <span style="font-weight:700">Adoption &amp; Faster Care:</span>
                    <br>
                    Another option for having a family is adoption. Agencies have different rules regarding age and 
                    are now more receptive to older couples. There are generally no age restrictions for private 
                    adoptions.
                </li>
                <li>
                    <span style="font-weight:700">Accepting Child-Free Living:</span>
                    <br>
                    It is important that couples consider the options of remaining child free if they are unable 
                    to have their own child or if they decide to forego infertility treatment.
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
