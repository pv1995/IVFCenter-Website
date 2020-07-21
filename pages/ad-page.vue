<template>
    <div class="ad-page">
        <header-ad />
        <template-ad />
        <drrama-footer />
    </div>
</template>
<script>
import drramaFooter from '~/components/commons/footer';
import headerAd from '~/components/commons/header-ad';
import adTemplate from '~/components/commons/template-ad';

export default {
    components: {
        "header-ad": headerAd,
        "drrama-footer": drramaFooter,
        "template-ad": adTemplate
    }
}
</script>
<style scoped>

</style>
