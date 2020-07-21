<template>
   
        <div class='box-define' :style='styleObject'>
            
           <img :src='iconic'/>
            <p>{{text}}</p>
        </div>
   
</template>
<script>
export default {
    props:{
        icon:{
            type:String,
            default:'box1'
        },
        text:{
            type:String,
            default:'Make an appointment'
        },
        bgcolor:{
            type:String,
            default:'#C6B3EE'
        }
    },
    computed:{
        styleObject(){
            return{
                 backgroundColor:this.bgcolor
            }
           
        },
         iconic(){
                    return  require(`~/assets/${this.icon}.png`)
                }
       
    },
    methods:{
       
    },
    data(){
        return{
            
        }
    },
    created(){
        // setTimeout(()=>{
           
        // },1500)
    }
}
</script>
<style>
.box-define{
    height: 120px;
    width: 100%;
    text-transform: uppercase;
    color:white;
    font-size: 18px;
    padding:20px;
    z-index: 99;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
}
</style>

