<template>
    <div class="ad-band">
        <hr class="hr-text" :data-content="text">
        <p class="text-center start-ad">{{bottomText}}</p>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: "BOOK APPOINTMENT"
        },
        bottomText: {
            type: String,
            default: "Start your journey here"
        }
    }
}
</script>
<style>
.hr-text {
    line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .9;
  font-size: 28px;
  font-weight: 600;
  margin-top: -15px;
  margin-bottom: 0;
}
.hr-text::before {
    content: '';
    background: #59548D;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 4px;
}
.hr-text::after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em;
    color: #59548D;
    background-color: #ffffff;
}
.start-ad {
    width: 100%;
    color: #59548D;
    font-weight: 600;
    font-size: 20px;
    margin-top: -5px;
}
</style>
