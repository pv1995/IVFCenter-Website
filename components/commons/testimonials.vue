<template>
    <div>
        <div style='padding:80px 0px; overflow:hidden' class="mob-hidden ipad-hidden">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(testimonial,i) in testimonials" :key='testimonial.by'>
                
                <p class='text-center'>
                    
                    <i class="fas fa-praying-hands"></i>
                    <span v-for='(star, index) in testimonial.rating' :key='index'>
                        <i class="fas fa-star rating-star"></i>
                    </span>
                    <i class="fas fa-praying-hands"></i>
                </p>
                <p class='testimonial_text'><i class="fas fa-quote-left sec-qoute-1"></i> {{testimonial.text}} <i class="fas fa-quote-left sec-qoute"></i> </p> 
                    
                    <p style='float:right'> - by {{testimonials[i].by}}</p>
                </swiper-slide>
            </swiper>
        </div>
        <div style='padding:30px 1rem; overflow:hidden;' class="desktop-hidden">
            <swiper :options="swiperOptionMob">
                <swiper-slide v-for="(testimonial,i) in testimonials" :key='testimonial.by'>
                
                <p class='text-center'>
                    
                    <i class="fas fa-praying-hands"></i>
                    <span v-for='(star, index) in testimonial.rating' :key='index'>
                        <i class="fas fa-star rating-star"></i>
                    </span>
                    <i class="fas fa-praying-hands"></i>
                </p>
                <p class='testimonial_text'><i class="fas fa-quote-left sec-qoute-1"></i> {{testimonial.text}} <i class="fas fa-quote-left sec-qoute"></i> </p> 
                    
                    <p style='float:right'> - by {{testimonials[i].by}}</p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
              swiperOption: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: '3',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay:{
                    delay:5000
                }
            },
            swiperOptionMob: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: '1',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay:{
                    delay:5000
                }
            },
            testimonials:[
                {   

                    text:"We came across Dr. Rama's IVF Centre via Google and by fortune, this turned out to be the best experience for us. It was very professional while speaking to Dr. Rakhi Mishra over the phone. Best Center for Childless Couples! They do not treat you as a patient, they treat you like family.",
                    by:'SELENA FLORA',
                    rating:5
                },
                {
                    text:"We are very thankful to Dr. Sandhya and her excellent staff members for guiding us and supporting us in infertility treatment. We never thought that we would get a positive result in first IVF cycle but they proved that they are the best in IVF treatment. Now I am two months pregnant, all thanks to Dr.Rama's Fertility Center",
                    by:'pushpa balusu',
                     rating:5
                },
                {
                    text:"My husband and I have been trying to conceive a baby for the last 6 years. It was a long journey, we tried fertility treatments in other centers but no luck. Our experience at Dr. Rama’s centre was exceptional. Dr. Sandhya & Dr. Rakhi were very supportive and encouraging during our journey towards parenthood",
                    by:'Raheem Banu',
                     rating:5

                },
                {
                    text:"My wife is 43 years old, we were told by other hospitals that it is very difficult to concieve at this age. I took their number from their website and called Dr. Rakhi and she convinced us otherwise. Now my wife concieved and is carrying twin kids at five months. All thanks to Rakhi madam and her team",
                    by:'Leela Patil',
                     rating:5
                },
                {
                    text:"Thank you Dr. Sandhya and Dr. Rakhi for making my wait worthwhile. Finally pregnancy is here. Thank you for your patience and compassion towards us. We troubled you with lots of questions and doubts but yet you answered it all. I wish your center all the very best. Keep up the good work.",
                    by:'Nalini Pratap',
                     rating:5
                },
                {
                    text:"They have the best doctors and a commendable success ratio!",
                    by:'Venkat Reddy',
                     rating:5
                }
            ]
        }
    }
}
</script>
<style scoped>

  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-container{
      overflow: inherit;
  }
  .rating-star{
      font-size:20px;
      margin:3px;
      color: #f2b01e;
  }
  .swiper-slide {
   background-position: center;
    background-size: cover;
    width: 450px;
    height: 300px;
    background: linear-gradient(to right, rgba(89 ,81,168,1), rgba(126 ,87,194,1));
    padding: 20px;
    border-radius:10px;
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: white;
    transition-delay: 1s;
     
  }
  .swiper-slide:hover{
      transform: scale(1.1) ;
  }
  .sec-qoute{
    position: relative;
    top: -5px;
    transform: scale(-1, 1);

  }
.testimonial_text{
    line-height: 30px;
    font-size:18px;
}
.sec-qoute-1{
        position: relative;
    top: -5px;
}


  /*Responsive styles*/
@media only screen and (min-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-width : 768px) {
    .ipad-hidden {
        display: none;
    }
}
@media only screen and (max-width : 480px) {
    .mob-hidden {
      display: none;
    }
    .swiper-slide {
        width: 100% !important;
        height: 100% !important;
        min-height: 400px;
    }
}
</style>