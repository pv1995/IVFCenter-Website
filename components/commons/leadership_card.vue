<template>
<div class='profile-card'>
    <img :src='iconic'/>
	<!-- <font-awesome-icon icon="coffee" /> -->


    <p class='profile-card-name'>{{name}}</p>

    <p class="title_1">{{title}}</p>
    <p style='min-height: 216px;' class="mob-leader-info ipad-leader-info info">{{info}} </p>
	
    <div class='button-wrapper'>
			<i class="fab fa-facebook-messenger leader-ikon"></i>
	<i class="fab fa-linkedin leader-ikon margin-left-right"></i>
	<i class="far fa-envelope leader-ikon "></i>
        <drrama-button type='whitey' text='READ MORE' @touched="goToSingle(id)"/>
    </div>
</div>
    
</template>
<script>
import drramaButton from './button'
export default {
	props:{
		photo:{
			type:String,
			default:'dr.rama.png'
		},
		name:{
			type:String,
			default:'Dr. Papolu Rama Devi'
		},
		title:{
			type:String,
			default:'Founder and M.D'
		},
		info:{
			type:String,
			default:'Dr. Papolu Rama Devi founded Dr. Rama’s Institute for Fertility way back in 1991 at Hyderabad, India. As a Director & Chief Consultant for Dr. Rama’s Institute for fertility, Dr. Rama Devi is an expert in the procedure of diagnosis and treatment of infertility matters. She has established a complete range of ART procedures [IUI, IVF-ET, ICSI-ET, GIFT], Assisted Hatching, Blastocyst culture, Cryo Freezing [Sperm, Embryo], Donation Program [Egg, Sperm, Embryo], Surrogacy and comprehensive counseling of apprehended couples.'
		},
		id: {
			type:Number,
			default: 3
		}
	},
    components:{
        'drrama-button':drramaButton
	},
	computed:{
		iconic(){
			// console.log(`~/assets/${this.icon}`)
			return require(`~/assets/${this.photo}`)
		}
	},
	methods: {
		goToSingle(d) {
			this.$router.push({name: "doctor-single", params: {id: d}})
		}
	}
}
</script>
<style>
		p {
			font-family: 'Lato', sans-serif;
		}
		.title_1 {
			color: #fff;
			font-size: .75em !important;
			font-weight: 300;
			text-align: center;
			padding-top: .5em;
			padding-bottom: .7em;
			letter-spacing: 1.5px;
			text-transform: uppercase;
			
		}
		.title_1:after{
				width: 60px;
		height: 1px;
		content:' ';
		display: block;
		margin: 0 auto;
		background: #fff;
		margin-top:10px;
		}
    .profile-card{
        width: 540px;
 
   background-image: linear-gradient(to right, rgba(89 ,81,168,1), rgba(198 ,179,238,1));
	text-align: center;
	border-radius: 10px;
	padding: 20px 20px 20px 20px;
	 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	
    }
	 .profile-card>p{
		 color:#fff;
		 font-size: 18px;
	 }
    .profile-card-name{
        color: #fff;
			font-size: 24px !important;
			font-weight: 600;
			text-align: center;
					padding-bottom:20px;
    }

.profile-card >img{
    width: 250px;
   
    object-fit: cover;
			height: 250px;
			display: flex;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 1.5em;
			border-radius: 100%;
			 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.leader-ikon{
	color:#fff;
	font-size:30px;
	
	
}
.margin-left-right{
	margin-left:30px;
	margin-right:30px;
}
.info {
	text-align: justify;
}

  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}

@media only screen and (max-width: 768px) {
	.ipad-leader-info {
		width: 100%;
		min-height: 100px !important;
		max-height: 150px !important;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.profile-card-name {
		padding-bottom: 0 !important;
	}
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
      display: none;
    }
    .profile-card {
      width: 100%;
    }
	.profile-card-name {
		padding-bottom: 0 !important;
		margin-bottom: 0;
	}
    .mob-leader-info {
		width: 100%;
		min-height: 100px !important;
		max-height: 150px !important;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>