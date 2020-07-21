<template>
    <div class="blogs">
        <!-- <drrama-navbar :navStyle="styleObject" /> -->
        <header-new/>
        <section class="doctors-banner blog-banner-mob" :style="backgroundCss">
            <mobile-heading heading='OUR INSIGHTS'/>
           
        </section>
        <div class="blogs-section">
        <h1 class="blogs-heading text-center mob-hidden">OUR INSIGHTS</h1>
        <section>
            <div class="blog-list">
                <ul>
                    <li v-for="blog in blogs" :key="blog.name" class="blog-card-single" @click="goToSingleBlog(blog)">
                        <div class="row">
                            <div class="col-12 col-md-6 d-flex align-items-center">
                                <img :src="blog.img" class="blog-img" />
                            </div>
                            <div class="col-12 col-md-6 d-flex align-items-center">
                                <a class="blog-link" target="_blank">
                                    <div class="card blog-card">
                                        <h3 class="blog-heading">{{blog.name}}</h3>
                                        <p class="blog-para">{{blog.para}}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </div>
        <drrama-footer />
    </div>    
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import drramaFooter from '~/components/commons/footer';
import headerNew from '~/components/commons/header-new';
import mobileHeading from '~/components/commons/mobile-heading';


export default {
    components: {
        'drrama-navbar':drRamaNavBar,
        'drrama-footer':drramaFooter,
        'header-new':headerNew,
        'mobile-heading':mobileHeading

    },
    data() {
        return {
            blogs: [
                {
                    name:"EGG FREEZING/FERTILITY PRESERVATION",
                    para:"Fertility preservation in general, and egg freezing in particular, is quickly becoming a more popular procedure for women all over the world each year.",
                    img: require("~/assets/spermdonatn_1.jpg"),
                    singleColor: ''
                },
                {
                    name:"GENDER SELECTION",
                    para:"Sex selection can be done either before or after the fertilisation of the egg. Gender selection is the attempt to control the gender of human offspring",
                    img: require("~/assets/IMG_0909.jpg")
                },
                {
                    name:"EGG DONOR & SURROGACY",
                    para:"At Felicia center we have comprehensive knowledge and experience in the field of egg donor and surrogacy. We have a booming base of 1,000 donors.",
                    img:require("~/assets/IMG_0914.jpg")
                }
            ]
        }
    },
    computed: {
        styleObject() {
            return {
                'background':'#59548D !important'
            }
        },
        bannerImage() {
         return require("~/assets/blog_banner.png");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh',
                backgroundPosition: 'center'
            }
        }
    },
    methods: {
        goToSingleBlog(blog) {
            this.$router.push({name:"singleblog", params: {blog: blog}});
        }
    }
}
</script>
<style scoped>
.blogs-heading {
    margin-top: 4rem;
    color: #59548D;
    font-weight: 900;
    font-size: 3rem;
}
.blog-list {
    width: 70%;
    margin: 0 auto;
    padding-top: 4rem !important;
}
.blog-list > ul {
    list-style: none;
}
.blog-card {
    position: relative;
    padding: 2rem 3rem;
    border: 2px solid #59548D;
    box-shadow: 0 8px 6px -6px #E6DCFC;
    border-radius: 10px;
    right: 15%;
}
.blog-card-single {
    margin-bottom:3rem;
}
.blog-img {
    height: 400px;
    max-width: 565px;
    border: 5px solid #59548D;
    border-radius: 10px;
}
.blog-heading {
    text-align: center;
    color: #59548D;
    margin-bottom: 1.5rem;
}
.blog-para {
    color: #59548D;
    margin-bottom: 0;
}
.blog-link {
    margin-top: 4rem;
}
.blogs-section {
    margin-bottom: 5rem;
}

/*Responsive styles*/
@media only screen and (min-device-width : 800px) {
    .desktop-hidden {
    display: none;
}
}
@media only screen and (max-device-width : 480px) {
    .mob-hidden {
        display: none;
    }
    .blog-banner-mob {
        background-position: center !important;
        height: 70vh !important;
    }
    .blogs-section {
        padding: 1rem;
        margin-bottom: 0 !important;
    }
    .blog-list {
        width: 100% !important;
        padding-top: 1rem !important;
    }
    .blog-list > ul {
        padding-left: 0 !important;
    }
    .blog-img {
        width: 100% !important;
        height: auto !important;
    }
    .blog-card {
        right: 0 !important;
        padding: 1rem !important;
        bottom: 60px;
        width: 90%;
        margin: 0 auto;
    }
    .blog-card-single {
        margin-bottom: 0 !important;
    }
    .blog-link {
        margin-top: 1rem;
    }
    .blog-heading {
        font-size: 1.2rem !important;
        margin-bottom: 1rem;
    }
    .blog-para {
        text-align: justify;
        width: 90%;
        margin: 0 auto;
    }
    .mob-banner-text {
        position: absolute;
        top: 20%;
        width: 100%;
        height: 100px;
        padding: 33px auto;
        padding: 33px 0;
        background-color: rgba(90, 85, 141,0.7);
    }
    .mob-banner-text > h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 80;
    }
}
</style>
