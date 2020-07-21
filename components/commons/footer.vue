<template>
    <footer>
        <footerHead/>
        <footerMiddle/>
        <footerBase/>
    </footer>
</template>
<script>
import footerHead from './logo_bar'
import footerMiddle from './footer_middle'
import footerBase from './footer_base'
export default {

    components:{
        footerHead,
        footerMiddle,
        footerBase
    }
    
}
</script>
<style>
footer {
  position: absolute;
  right: 0;
  left: 0;
  padding: 1rem;
  padding-bottom: 0px;
  padding-top: 0px;
  text-align: center;
}
</style>