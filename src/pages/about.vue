<template>
  <div>
    <section class="a-s1">
      <div class="about__h">
        <div class="mask">
					<main-title title="My name - Dmitry"></main-title>
        </div>
        <p class="mt--40">
          I have been developing websites for two years. During this time I have
          made more than 30 successful projects. At this point, I'm
          self-employed and i know how to organize my work and be most
          productive and always meet deadlines
        </p>
      </div>

      <div class="about__skills">
        <div class="mask">
          <h1>My skills</h1>
        </div>

        <div class="about__skills-grid">
          <div class="about__skills-grid-item">
            <img src="../assets/images/javascript.svg" alt="javascript" />
          </div>
          <div class="about__skills-grid-item">
            <img src="../assets/images/nuxt-dot-js.svg" alt="nuxt" />
          </div>
          <div class="about__skills-grid-item">
            <img src="../assets/images/jquery.svg" alt="jquery" />
          </div>
          <div class="about__skills-grid-item">
            <img src="../assets/images/html5.svg" alt="hmtl5" />
          </div>
          <div class="about__skills-grid-item">
            <img src="../assets/images/css.svg" alt="css3" />
          </div>
          <div class="about__skills-grid-item">
            <img src="../assets/images/sass.svg" alt="sass" />
          </div>
        </div>
      </div>
    </section>

    <section class="a-s2">
      <div class="mask">
        <h1>What I do before I launch your site</h1>
      </div>

      <div class="a-s2__bl">
        <div class="a-s2__bl-item">
          <h2>LIVE SITES WITH IMPRESSIVE ANIMATIONS</h2>
          <p class="mt--30">
            I'm adding interactivity to the layout to make the site respond to
            the visitor's actions. Setting up complex animations and effects,
            such as 3D animations, parallax, animated icons, etc. This makes
            your site memorable and interesting.
          </p>
        </div>

        <div class="a-s2__bl-item">
          <h2>QUICK LAYOUT</h2>
          <p class="mt--30">
            The term of one page makeup or branding for the finished layout -
            from one day to the next. The average makeup of adaptive branding is
            three. of the day.
          </p>
        </div>

        <div class="a-s2__bl-item">
          <h2>PIXEL-BY-PIXEL MAKE-UP</h2>
          <p class="mt--30">
            I study the layout carefully and transfer all sizes to the layout.
            After that, I put the layout on top of the makeup to rule out any
            discrepancies.
          </p>
        </div>

        <div class="a-s2__bl-item">
          <h2>ADAPTABILITY, EVEN WITHOUT THE LAYOUT.</h2>
          <p class="mt--30">
            I make a layout that adapts to computers, tablets and smartphones to
            make it easy for the visitor to explore and use the website. In
            addition to adaptability, I'm making the layout sympathetic
            (rubber), it makes the site look great on everyone. of possible
            screen resolutions.

            <br /><br />❗️I'll make your site adaptive, even if you have no
            layouts for different permits.
          </p>
        </div>

        <div class="a-s2__bl-item">
          <h2>SPEEDING UP SITE DOWNLOAD</h2>
          <p class="mt--30">
            Processing images to minimize their weight, but still maintain
            quality. Optimizing resolution. of images so that they don't get
            blurred on high screens. sharpness (smartphones, tablets, macbooks).
            For everyone. the image is created by making several copies at
            different resolutions, so as not to load large images on a small
            screen. of a smartphone. This way the site boots up much faster when
            it's slow. on the Internet.
          </p>
        </div>

        <div class="a-s2__bl-item">
          <h2>I INCLUDE ANALYTICS AND ANY OTHER SERVICES</h2>
          <p class="mt--30">
            Connecting Memberstack, Google Analytics, Roystat and adjusting the
            targets. I also connect any other services.
          </p>
        </div>

      </div>
    </section>

    <section class="footer">
			<the-btn cLink="/works" title="My works"></the-btn>
    </section>

  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue'
import TheBtn from '../components/TheBtn.vue'
import { aboutAnimations } from '../plugins/aboutAnimations'

export default {
	name: 'About',

	mixins: [aboutAnimations],
	
  components: { MainTitle, TheBtn },

  data() {
    return {}
  }
}
</script>
