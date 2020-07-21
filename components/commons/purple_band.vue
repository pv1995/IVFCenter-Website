<template>
<div class='purple-band container-drdrama' :style='styleObject'>
    <p :style='headcolor'>{{this.text}}</p>
</div>
    
</template>
<script>
export default {
    props:{
        text:{
            type:String,
            default:'DR RAMA'
        },
        styleObject:{
            type:Object
        },
        headcolor:{
            type:Object
        }
    }
}
</script>
<style>
.purple-band{
    /* background-color: #59548D; */
    /* background-color: rgb(126, 87, 194); */
    height: 140px;
   
    margin:30px 0px;
    text-align: center;

}
.purple-band > p{
 color: rgb(126, 87, 194);
    font-size: 48px;
    text-transform: uppercase;
    /* font-weight: bold; */
    font-family: 'Montserrat', sans-serif;
    padding-top:22px;
    /* font-weight: bold; */
}
.purple-band > p:after{
    content:'';
    width: 200px;
 background: rgb(126, 87, 194);
 height: 3px;
 display: block;
 margin: 0 auto;
   
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
    .purple-band {
        /* height: 100%; */
        margin-top: 0 !important;
    }
    .purple-band > p {
        font-size: 40px !important;
    }
}
</style>