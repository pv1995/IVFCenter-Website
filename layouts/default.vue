<template>
  <div>
    <nuxt/>
    <floatButton/>
  </div>
</template>
<script>
import floatButton from '~/components/commons/float-button'
export default {
  components:{
    floatButton
  }
}
</script>

<style>
.vertical-tabs {
     /* background: #59548D; */
    color: #59548D;
}
.card-header{
  background: #fff;
}
.nav-pills .nav-link{
  border-radius:0px;
  padding:22px;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
   background: #59548D;
    color: #fff;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media only screen and (max-width : 480px) {

}
</style>
