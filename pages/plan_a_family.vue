<template>
    <div class='plan-family-page container-fluid no-space'>
       
            <swiper :options="swiperOption">
                <swiper-slide v-for='(slide,index) in slideConfig' :key='index'>
                  <drrama-single-slide
                    :bgColor='slide.bgColor'
                    :color='slide.color'
                    :slideNumber='index'
                   />
                </swiper-slide>
     
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    
    </div>
</template>
<script>
import singleSlide from '~/components/commons/plan-family-single'
 export default {
     components:{
         'drrama-single-slide':singleSlide
     },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          parallax:true,
          spaceBetween: 0,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
           effect:'fade',
           iOSEdgeSwipeDetection:true
       
        },
         slideConfig: [
          {
              bgColor:'#F7EDF8',
              color:'#59548D'
          },
            {
              bgColor:'#FFCEF3',
               color:'#59548D'
          },
            {
              bgColor:'#D6C9FF',
               color:'#59548D'
          },
            {
              bgColor:'#C89DCF',
               color:'#59548D'
          },
            {
              bgColor:'#9575CD',
               color:'#fff'
          },
            {
              bgColor:'#7E6BC4',
                  color:'#fff'
          },
            {
              bgColor:'#7453AF',
                  color:'#fff'
          },
            {
              bgColor:'#654F84',
                  color:'#fff'
          },
            {
              bgColor:'#2D235A',
                  color:'#fff'
          }
      ]
      }
     
    }
  }
</script>
<style >
.swiper-pagination{
    z-index:99;
    position:fixed;
}
.swiper-pagination-bullet{
    height:20px !important;
    width:20px !important;
}
.swiper-pagination-bullet-active{
    background:#fff !important;
}
.no-space{
    padding-left:0px;
    padding-right:0px;
}
.plan-family-page{
    position: relative;

}
  .swiper-inner {
    width: 100%;
    /* height: 400px; */
    /* padding-top: 50px;
    padding-bottom: 50px; */
  }
  .swiper-container{
      overflow: inherit;
  }
 
  .swiper-slide {
   /* background-position: center;
    background-size: cover; */
    width: 100%;
    height: 100vh;
    background: black;
   
   
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: white;

     
  }

</style>