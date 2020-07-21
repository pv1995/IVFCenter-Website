<template>
     <a  @click='bookAppointment' class="float mobile-show">
        <i class="material-icons md-36 my-float"></i>
     </a>
</template>
<script>
export default {
    methods:{
        bookAppointment(){
             this.$router.push({name: "book-appointment"});
        },
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#9575CD;
	color:#FFF !important;
	border-radius:50px;
	text-align:center;
    z-index: 9999;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	/* box-shadow: 2px 2px 3px #999; */
}

.my-float{
	/* margin-top:22px; */
    padding:9px;
    font-size:40px;
}
.mobile-show{
    display:none;
}
@media only screen and (max-width: 450px) {
.mobile-show{
    display:block;
}
}
</style>


