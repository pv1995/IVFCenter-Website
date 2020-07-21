<template>
    <div class='doctor-indi' @click="goToSingle(id)">
        <div class='doctor-image-wrapper'>
            <img :src='iconic'>
        </div>
        <p class='name'>{{name}}</p>
        <p class='doc_title'>{{title}}</p>
    </div>
</template>
<script>
export default{
    props:{
        name:{
            type:String,
            default:'DR.PAPOLU RAMA DEVI'
        },
        title:{
            type:String,
            default:'managing director and founder'
        },
        image:{
            type:String,
            default:'dr.rama.png'
        },
        id: {
            type:Number,
            default: 3
        }
    },
    computed:{
        iconic(){
            return require(`~/assets/${this.image}`)
        }
    },
    methods: {
        goToSingle(d) {
            this.$router.push({name:"doctor-single", params: {id: d}})
        }
    }
}
</script>
<style scoped>
.doctor-indi{
    cursor:pointer;
}
    .name{
        text-align:center;
        color:#785CBC;
            margin-bottom: 0px;
    margin-top: 20px;
    font-size: 18px;
    }
    .doc_title{
        
        font-size: .75em;
        font-weight: 300;
        text-align: center;
        padding-top: .5em;
        padding-bottom: .7em;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        
    }
    .doctor-image-wrapper{
     
         text-align:center;
    }
    .doctor-image-wrapper > img{
        object-fit:cover;
         -webkit-filter: brightness(40%);
         height:160px;
        width:160px;
        border-radius:50%;
           box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
           transition:2s;
           
    }
     .doctor-image-wrapper > img:hover{
          -webkit-filter: brightness(100%);
          transform:scale(1.01)
     }
</style>
