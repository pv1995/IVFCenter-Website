<template>
    <div class='nav-top'>
        <!-- <NavHead/> -->
        <NavBar :navStyle="navStyle"/>
    </div>
</template>
<script>
import NavHead from './logo_bar'
import NavBar from './nav_bar'
export default {
    props:['navStyle'],
    components:{
        NavHead,
        NavBar
    }
}
</script>
<style>
.nav-top{
    position: absolute;
    z-index: 99999999;
    width: 100%;

}
.foot-head-part-one{
    background: transparent;
}
</style>
