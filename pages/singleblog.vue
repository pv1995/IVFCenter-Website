<template>
    <div class="single-blog" v-if="blog">
        <!-- <drrama-navbar /> -->
        <header-new/>
        <section class="single-blog-banner" :style="backgroundCss">
            <div class="row">
                     <div class="single-blog-box">
                         <h2 class="single-blog-heading text-center">{{blog.name}}</h2>
                     </div>
            </div>
        </section>
        <div class="single-blog-detail">
            <!-- <div class="single-blog-img">
                <img :src="blog.img" class="single-blog-img" />
            </div> -->
            <div class="single-blog-content">
                <div v-if="blog.name === 'EGG FREEZING/FERTILITY PRESERVATION'">
                    <p>Fertility preservation in general, and egg freezing in particular, is quickly becoming a more popular procedure for women all over the world each year.Fertility preservation in general, and egg freezing in particular, is quickly becoming a more popular procedure for women all over the world each year.</p>
                </div>
                <div v-if="blog.name === 'GENDER SELECTION'">
                    <p>Sex selection can be done either before or after the fertilisation of the egg. Gender selection is the attempt to control the gender of human offspring Sex selection can be done either before or after the fertilisation of the egg. Gender selection is the attempt to control the gender of human offspring.</p>
                </div>
                <div v-if="blog.name === 'EGG DONOR & SURROGACY'">
                    <p>At Felicia center we have comprehensive knowledge and experience in the field of egg donor and surrogacy. We have a booming base of 1,000 donors.At Felicia center we have comprehensive knowledge and experience in the field of egg donor and surrogacy. We have a booming base of 1,000 donors.</p>
                </div>
            </div>
        </div>
        <drrama-footer />
    </div>
</template>
<script>
import drRamaNavBar from '~/components/commons/navigation_bar';
import drramaFooter from '~/components/commons/footer';
import headerNew from '~/components/commons/header-new';

export default {
    data() {
        return {
            blog: null
        }
    },
    components: {
        'drrama-navbar':drRamaNavBar,
        'drrama-footer':drramaFooter,
        'header-new':headerNew
    },
    created() {
        this.blog = this.$route.params.blog;
    },
    computed: {
        styleObject() {
            return {
                'color':'#59548D !important'
            }
        },
        bannerImage() {
            if(this.blog) {
                return this.blog.img;    
            }
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100vh'
            }
        }
    }
}
</script>
<style scoped>
.single-blog-box {
    margin-top: 12rem !important;
    width: 50%;
    margin-left: 5rem;
    padding: 1rem;
    color: white;
    
}
.single-blog-heading {
    font-size: 3rem;
    font-weight: 800;
}
.single-blog-detail {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.single-blog-content {
    width: 70%;
    margin: 0 auto;
}
.single-blog-content > div > p {
    font-size: 1.5rem;
    color: #59548D;
}
</style>
