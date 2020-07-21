<template>
    <div class="our-team">
        <h4 class="our-team-heading text-center">OUR TEAM</h4>
        <div class="row">
            <div class="col-md-6 col-sm-12 cols d-flex align-items-center">
                <div class="team-img-wrapper">
                    <img src="../../static/team.jpg" width="100%"/>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 cols d-flex align-items-center">
                <div class="team-content">
                    <blockquote class="quote text-center">Where the mind is without fear<br>
                        and the head is held high,<br>
                        Where words come out from the depth of truth,<br>
                        where tireless striving stretches its arms towards perfection
                    </blockquote>
                    <p class="text-justify">Our passionate team of physicians are recognized for their extensive clinical experience as well as their outstanding academic credentials and contributions to research. They are successful in treating the most difficult male and female fertility cases.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.our-team {
    margin-top: 3rem !important;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem !important;
}
.our-team-heading {
    font-size: 2.5rem;
    color: #59548D;
    font-weight: 700;
    margin-bottom: 1.5rem;
}
.team-img-wrapper, .team-content {
    padding: 2rem;
}
.team-content {
    background: #E6DCFC;
}
.team-content > p{
    color: #59548D;
    font-weight: 500;
    margin-top: 1.5rem;
}
.quote {
    font-weight: 700;
    line-height: 1.5em;
    background: #59548D;
    color: white;
    padding: 1rem;
    margin-bottom: 0;
    font-style: italic;
}
blockquote:before {
  content: "\201C";
}

blockquote:after {
  content: "\201D";
}

blockquote:before {
  display: inline-block;
  vertical-align: bottom;
  color: white;
  font-size: 2.5em;
  right: 0.15em;
  position: relative;
}
blockquote::after {
      top: .1em;
      display: inline-block;
  vertical-align: bottom;
  color: white;
  font-size: 2.5em;
  position: relative;
}

/* //Responsive Styles */

@media only screen and (max-width : 480px) {
    .our-team {
        margin-top: 1.5rem !important;
        width: 100%;
        margin-bottom: 1.5rem !important;
    }
    .team-img-wrapper, .team-content {
        padding: 1rem;
    }
}
</style>
