<template>
  <div>
    <div class="mask">
			<main-title title="What do you want to know about me?"></main-title>
    </div>

    <div class="home__btns">
			<the-btn cLink="/about" title="My skills"></the-btn>
			<the-btn cLink="/works" title="My works"></the-btn>
    </div>
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue'
import TheBtn from '../components/TheBtn.vue'
export default {
	name: 'Home',

  components: { MainTitle, TheBtn },
}
</script>
