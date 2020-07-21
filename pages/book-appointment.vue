<template>
 <div class="about-us">
        <!-- <drrama-navbar :navStyle="styleObject" /> -->
        <header-new/>
    <div class="book-appointment-page">
      <!-- <section class="treatments-banner" :style="backgroundCss">
      </section> -->
    
        <section class="book-appointment" >
            
             <!-- <purple-band text='Book an Appointment' /> -->
        <section class="treatments-banner" :style="backgroundCss">
            <purple-band text='Book an Appointment' :styleObject="headingCss" :headcolor='headcolor' />
        </section>
            <div class="row justify-content-center book-appointment-content">
            <div class='container-fluid' >
            <div class="row">
                <div class="col-md-12 ">
                     <div class="grey-back-box-1" >
                         <h2 class="banner-heading text-center" >Request A Call Back</h2>
                         <p class="banner-box-text" >
                             We can call you back
                            We at Dr. Rama’s IVF Centre provides comfortable environment with advanced treatment options for the infertile couples. We are committed to providing patients impressive results with little to no recovery time.
                            Make an Appointment for consultation with one of our infertility specialist doctors in  Bangalore today to help you. We offer FREE online consultations with our doctors for those interested in infertility treatment, and every new patient is evaluated by one of our doctors prior to starting any infertility treatment plan.
                         </p>
                     </div>
                </div>
                   <div class="col-md-12">
                    <section class="half-width-form">
                        <form>
                            <div class="form-group" >
                                <label for="exampleInputName1" >Full Name</label> 
                                <input  type="text" id="exampleInputName1" v-model="form_data.full_name" placeholder="Enter your name" name="name" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                                <span class="help is-danger" style="display: none;"></span>
                            </div> 
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Email address</label> 
                                <input  type="email" id="exampleInputEmail1" v-model="form_data.email" aria-describedby="emailHelp" placeholder="Enter your email" name="email" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                                <span class="help is-danger" style="display: none;"></span>
                            </div> 
                            <div class="form-group">
                                <label for="exampleInputNumber1" >Phone Number</label> 
                                <input  type="text" id="exampleInputNumber1" v-model="form_data.phone" placeholder="Enter your number" name="number" class="form-control drrama-input" aria-required="true" aria-invalid="false"> 
                                <span class="help is-danger" style="display: none;"></span>
                            </div> 
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" >Your Message</label> 
                                <textarea   id="exampleFormControlTextarea1" v-model="form_data.message" rows="3" placeholder="Enter your message" name="message" class="form-control drrama-input" aria-required="true" aria-invalid="false"></textarea> 
                                <span class="help is-danger" style="display: none;"></span>
                            </div> 
                            <!-- <button type="submit" class="btn contact-submit" >Submit</button> -->
                            <div style='text-align:center'>
                                 <drrama-button type='transi'  text='SUBMIT' @touched='sendData()' />
                            </div>
                                
                        </form>
                    </section>
                </div>
            </div>
            </div>
            </div>
        </section>
    </div>
    <drrama-footer/>
 </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import drramaFooter from '~/components/commons/footer';
import PurpleBand from '~/components/commons/purple_band';
import drRamaButton from '~/components/commons/button';
import headerNew from '~/components/commons/header-new';
import _ from 'lodash'
export default {
    data(){
        return{
            form_data:{
                full_name:'',
                email:'',
                message:'',
                phone:''
            }
    
    }
    },   
    components: {
        'drrama-navbar':drRamaNavBar,
        'drrama-footer':drramaFooter,
         'purple-band':PurpleBand,
          'drrama-button':drRamaButton,
          'header-new':headerNew
    },
    methods:{
        sendData(){
            var that = this
            var body = _.pick(this.form_data, ['full_name', 'email','phone','message']);
            console.log(body)
            var toSendBody = JSON.stringify(body)
            //fetch('https://shielded-beyond-89189.herokuapp.com/api/callback',{
            //fetch(' https://drramasivf.herokuapp.com/api/callback',{
            fetch('http://127.0.0.1:3001/api/callback',{
               
                 method: 'post',
                  headers: {
                 "Content-type": "application/json; charset=UTF-8"
                    },
                 body: toSendBody
            })
            .then(
                function(response) {
                    console.log(response)
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    that.$swal('Sorry we are facing some problems at the moment');
                    return;
                }

                
                response.json().then(function(data) {
                    that.$swal('Thanks for reaching out to us');
                    that.form_data.full_name = ''
                    that.form_data.email = ''
                    that.form_data.phone = null
                    that.form_data.message = ''
                    
                 
                    console.log(data);
                });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
                that.$swal('Sorry we are facing some problems at the moment');
            });
        }
    },
     computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        headingCss(){
            return{
                'margin':'0px',
                'color':'#fff'
            }
        },
        headcolor(){
            return{
                'color':'#fff'
            }
        },
         bannerImage() {
         return require("~/assets/book-banner.jpg");    
        },
            backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh',
                backgroundPosition: 'center'
            }
        }
  
     }
}
</script>
<style scoped>
.help {
    font-size: smaller;
    color: red;
}
.contact-submit {
    border: 1px solid #59548D;
    border-radius: 0;
    width: 200px;
    box-shadow: 0 2px #59548D;
}
.book-appointment{
    padding-top:84px;
    
    margin: auto;
}
.drrama-input{
        height: 50px;
    border-radius: 0px;
    background: #C6B3EE;
    color:#fff;
    border-color:#C6B3EE;
      outline:none;
      font-weight: 600;
}
.drrama-input:focus{
     background: #59548D;
      color:#fff;
      border-color:#59548D;
      outline:none;
      box-shadow: 0 0 0 0.2rem rgba(88, 86, 137);
}
.grey-back-box-1 {
    background: rgba(230, 220, 252, 0.5);
    /* margin-top: 20rem !important; */
    width: 85%;
    margin: 0 auto;
    padding: 1rem;
}
.banner-box-text {
    color:#585689;
    font-weight: 600;
    font-size: 22px;
    width: 95%;
    margin: 0 auto;
    padding:50px;
}
.banner-heading {
    color:#59548D;
}
label{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.book-appointment-content {
    width: 80%;
    margin: 0 auto;
    margin-top:5rem !important;
    margin-bottom:5rem !important;
}
.half-width-form {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem !important;
}
::placeholder {
    color: #fff;
    font-weight: 600;
}
@media only screen and (max-width: 450px) {
    .banner-box-text{
        padding:10px;
    }
    .book-appointment-content{
        width:100%
    }
    .grey-back-box-1{
        width: 100%;
    }
}
</style>
