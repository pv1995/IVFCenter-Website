<template>
<div class='book-appointment'>
    <p class="mob-book-index">Consult our doctors right away</p>
    <p class="mob-book-text">You will be evaluated prior to starting any treatment plan</p>
    <div class='row justify-content-center'>
     <drrama-button type='whitey' text='LEARN MORE' @touched="goToDoctors"/>
    <drrama-button type='whitey' text='BOOK AN APPOINTMENT' @touched="goToBookAppointment"/>
</div>
</div>
    
</template>

<script>
import drramaButton from './button'
export default {
    components:{
        'drrama-button':drramaButton
    },
    methods: {
        goToDoctors() {
            this.$router.push({name: "doctors"});
        },
        goToBookAppointment() {
            this.$router.push({name: "book-appointment"});
        }
    }
}
</script>
<style >
.book-appointment{
    min-height: 360px;
    position: relative;
    background: #59548D;
    left: 0;
    right: 0;
    width: 100%;
    color:white;
    font-size:32px;
    text-align: center;
    padding: 20px 30px;
    padding-top: 65px;
}

  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
      display: none;
    }
    .mob-transi {
        max-width: 250px;
        font-size: 18px;
    }
    .book-appointment {
        padding-bottom: 65px;
    }
    .mob-book-index {
    font-size: 24px;
    font-weight: bold;
}
.mob-book-text {
    font-size: 20px;
}
}
</style>

