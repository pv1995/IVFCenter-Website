<template>
    <div class="header-ad">
        <b-navbar toggleable="md" type="light" variant="light" class="nav-ad">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <div class="star-box">
                <img src="../../static/Star.png" class="star-logo" width="150px" height="150px"/>
                <p>25+ years experience</p>
            </div>
            <b-navbar-brand href="#" class="ad-brand">
                <img src="../../static/logo-ad-left.png" class="ad-logo" width="100px" height="150px"/>
            </b-navbar-brand>
            <b-navbar-nav class="left-nav-ad desktop-hidden logo-mob">
                    <h4>DR. RAMA'S TEST TUBE BABY CENTRE</h4>
                    <h6>COME AS A COUPLE....LEAVE AS A FAMILY</h6>
            </b-navbar-nav>
            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="left-nav-ad mob-hidden">
                    <h4>DR. RAMA'S TEST TUBE BABY CENTRE</h4>
                    <h6>COME AS A COUPLE....LEAVE AS A FAMILY</h6>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto right-nav-ad" :style="backgroundCss">
                    <p class="text-right right-nav-text">Start your journey now</p>
                        <div class="d-flex">
                            <img src="../../static/call_doc_ad.png" />
                            <span class="text-right ad-num">+91-7259024745</span>
                        </div>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    computed: {
        bannerImage() {
         return require("~/static/header_img.png");    
        },
        backgroundCss() {
            return {
                backgroundImage: `url(${this.bannerImage})`,
                backgroundSize: 'cover',
                height: '100%',
                minWidth: '420px'
            }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

.nav-ad {
    background: white !important;
}
.ad-brand {
    padding-left: 15rem !important;
}
.left-nav-ad {
    display: block;
    color: #59548D !important;
    margin-left: 2rem;
    font-family: 'Libre Baskerville', serif;
}
.left-nav-ad > h4 {
    font-size: 1.2rem;
}
.left-nav-ad > h6 {
    font-size: 0.8rem;
}
.right-nav-ad {
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    display: block;
    padding: 4rem 0;
}
.right-ad-img {
    width: 100%;
}
.right-nav-text {
    margin-right: 3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.ad-num {
    width: 100%;
    margin-right: 3rem;
    font-weight: 600;
}
.star-box {
    position: relative;
    text-align: center;
    color: white;
}
.star-box > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.75rem;
    font-weight: 700;
}
.desktop-hidden {
    display: none;
}


/* Responsive styles */
@media only screen and (max-width : 480px) {
    .star-box {
        display: none;
    }
    .ad-brand {
        padding-left: 0 !important;
    }
    .nav-ad {
        display: flex;
    }
    .nav-ad > .navbar-toggler {
        display: none;
    }
    .desktop-hidden {
        display: block;
    }
    .left-nav-ad {
        width: 65%;
        margin-left: 0;
    }
}
</style>
