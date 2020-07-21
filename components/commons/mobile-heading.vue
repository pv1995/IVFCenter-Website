<template>
     <div class="mob-banner-text">
        <h3>{{heading}}</h3>
     </div>
</template>
<script>
export default{
    props:['heading']
}
</script>
<style>
 .mob-banner-text{
     display: none;
 }
@media only screen and (max-width : 480px) {
   .mob-banner-text {
        display: block;
        position: absolute;
        top: 20%;
        width: 100%;
        height: 100px;
        padding: 33px auto;
        padding: 33px 0;
        background-color: rgba(90, 85, 141,0.7);
    }
    .mob-banner-text > h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 80;
    }
}
</style>