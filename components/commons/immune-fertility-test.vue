<template>
    <div class="test-single">
        <div class="test-single-heading">
            <h4 class="test-heading">IMMUNE FERTILITY TEST</h4>
        </div>
        <div class="test-section1">
            <div class="test-section1-left">
                <p class="test-content">
                    Immune dysfunction has been implicated in some cases of recurrent pregnancy loss, unexplained infertility and failed IVF cycles. When the immune system is over- or under- activated, implantation may be compromised resulting in infertility or repeated pregnancy loss. Immunological factors involved in adverse obstetrical outcomes and infertility may include the presence of anti-thyroid antibodies (ATA), anti-phospholipid antibodies (APLA) and activated natural killer cells (NKa). Other immune dysfunction may be due to an immunological mismatch in DQ alpha and HLA genotypes or disorders called thrombophilias.
                </p>
            </div>
            <div class="test-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>IMMUNE FERTILITY TEST</span>
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
                Thrombophilias are a group of disorders that increase the risk of clotting in the body and closely associated with recurrent pregnancy loss. Whether thrombophilias cause infertility or result in failed IVF cycles is still controversial.
            </p>
            <p class="test-content">
                Immune testing is not routine. But in cases of unexplained recurrent pregnancy loss, multiple failed IVF cycles with good embryo quality or true unexplained infertility, testing can be considered. We do offer immune testing in selected cases and discuss treatment options when applicable.
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
