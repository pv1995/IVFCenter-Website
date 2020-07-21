<template>
<div>
    <button class='btn btn-default default' @click="$emit('touched')" v-if="type=='default'">{{text}}</button>
    <button class='btn btn-default transi mob-transi ipad-transi'  @click.prevent="$emit('touched')" v-if="type=='transi'" :style='styleObject'>{{text}}</button>
    <button class='btn btn-default whitey ' :style='styleObject' @click="$emit('touched')" v-if="type=='whitey'">{{text}}</button>
    <button class='btn btn-default whitey ' :style='styleObject' @click="$emit('touched')" v-if="type=='whitey-l'">{{text}} <span class='background-img-button whitey-l padding-l'><img :src='iconic'></span></button>
    <button class='btn btn-default whitey '  :style='styleObject' @click="$emit('touched')" v-if="type=='whitey-r'"><span class='background-img-button whitey-r padding-r'><img :src='iconic'></span> {{text}} </button>
    <button class="btn btn-default book-appointment-btn" :style="styleObject" v-if="type=='book-appointment-btn'" @click="$emit('touched')">{{text}}</button>
    <button class="btn btn-default more-info-btn" :style="styleObject" v-if="type=='more-info-btn'">{{text}}</button>
    <div class='svg-pl'>
        <div class="svg-wrapper" v-if="type=='swishy'" @click="$emit('touched')">
        <svg height="60" width="320"  xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          
        </svg>
          <p class="text_1" :style={color:color}>{{text}}</p>
    </div>
    </div>
    
</div>
</template>
<script>
export default {
    props:{
        type:{
            type:String, //default,transy,whitey-l,whitey-r,swishy,
            default:'transi'
        },
        icon:{
            type:String,
            default:'doctor'
        },
        text:{
            type:String,
            default:'Click me'
        },
        color:{
            type:String,
            default:'#fff'
        },
        styleObject:{
            type:Object
        }
    },
    data(){
        return{
         
        }
    },
    methods:{
       
       
    },
    created(){
       
},
computed:{
    iconic(){
        return require(`~/assets/${this.icon}.png`)
    }
}///_nuxt/assets/calender.png
}
</script>
<style>
/* linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); */
.btn{
    margin:10px;
    position: relative;
  overflow: hidden;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    outline:none;
    font-family: 'Lato', sans-serif;
}
.btn:focus, .btn.focus {
    outline: 0;
    box-shadow:inherit;
}
/* .svg-pl{
    background: rgb(20,20,20);
  text-align: center;
  height: 100%;
  overflow: hidden;
} */
.btn:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, .5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(40, 40);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(80, 80);
  }
}

.btn:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

.transi{
    
    background-image: linear-gradient(to right, rgba(89 ,81,168,1), rgba(198 ,179,238,1));
    width: 360px;
    font-size: 28px;
    color: white;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    
}
.default{
    background-color: #DAD7F8;
    color:#A9A5D9;
    font-size:21px;
    width: 180px;
    font-weight: bold;
}
.whitey{
  min-width: 300px;
  font-size:24px;
  color: rgba(89 ,81,168,1);
  background-color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  font-weight: bold;
}
.background-img-button{
    background-color: #A9A5D9;
    width: 70px;
    overflow: hidden;
    height: 70px;
    border-radius: 50%;
    padding:20px;
    


}
/* .padding-l{
    padding:10px;
}
.padding-r{
     padding:15px 15px;
} */
.whitey-l{
margin-left: 35px;;
}
.whitey-r{
margin-right: 35px;
}
.background-img-button > img{
    height: 100%;
    max-height: 30px;
}
.svg-wrapper {
    position: absolute;
    top: 650px;
    right:40%;
    transform: translateY(-50%);
	margin: 0 auto;
    width: 320px;  
    z-index: 99;
}
.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: #59548D;
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}
.text_1 {
  
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 8px;
text-align: center;
  top: -48px;
  position: relative;
  cursor: pointer;
  
}
.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}
.book-appointment-btn {
    width: 250px;
    background: rgba(255,255,255,0.5);
    color:#ffffff;
    font-size:21px;
}
.more-info-btn {
    background-image: linear-gradient(to right, rgba(89 ,81,168,1), rgba(198 ,179,238,1));
    color: #ffffff;
    min-height: 50px;
    width: 250px;
}


  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width : 768px) {
    .ipad-transi {
        width: 250px;
        font-size: 16px;
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
}
</style>


