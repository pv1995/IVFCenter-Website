<template>
    <div class='transparent-card container-drdrama'>
        <img :src='iconic' class='sizing-50'/>
        <p id='card-trans-stat'>
            <number
                ref="number1"
                :from="0"
                :to="stat"
                :duration="5"
                :delay="2"
                easing="Power1.easeOut"
                class="ipad-number"/>
            {{symbol}}
        </p>
        <p id='card-trans-success-at'>{{successAt}}</p>
    </div>
    
</template>
<script>
export default {
    props:{
        icon:{
            type:String,
            default:'icon1'
        },
        stat:{
            type:String,
            default:'65%'
        },
        symbol:{
            type:String,
            default:''
        },
        successAt:{
            type:String,
            default:'Total Consultations'
        }
    },
    computed:{
        iconic(){
            return require(`~/assets/${this.icon}.png`)
        }
    }
}
</script>
<style>
.transparent-card{
    width: 100%;
    height: 250px;
    color:#59548D;
}
#card-trans-stat{
    font-size:42px;
}
#card-trans-success-at{
 font-size:16px;
}
.sizing-50{
        height: 50px;
    width: 50px;
}


@media only screen and (max-width : 768px) {
    .ipad-hidden {
        display: none;
    }
    .sizing-50 {
        height: 35px;
        width: 35px;
    }
    .ipad-number {
        font-size: 24px;
    }
    #card-trans-stat {
        font-size: 28px;
    }
    #card-trans-success-at{
        font-size:14px;
        text-align: center;
    }
}
@media only screen and (max-width : 480px) {
    .transparent-card {
        height: auto;
    }
}
</style>