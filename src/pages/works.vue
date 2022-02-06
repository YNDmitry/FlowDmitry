<template>
  <div>
    <div class="mask">
			<main-title title="My latest works"></main-title>
    </div>

    <section class="w-s1">

      <div class="w-s1__slider"></div>

    </section>

    <section class="footer">
			<the-btn cLink="/about" title="My skills"></the-btn>
    </section>
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue'
import TheBtn from '../components/TheBtn.vue'
export default {
  name: 'Works',
	
  components: { MainTitle, TheBtn },

  data() {
    return {
    }
  },
}
</script>
