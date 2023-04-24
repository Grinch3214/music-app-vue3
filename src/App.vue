<template>
  <div class="app-container p-3 bg-black m-auto">
		<SongList />
  </div>
</template>

<script setup>
import SongList from './components/SongList.vue';

</script>

<style>
.app-container {
	max-width: 600px;
}
</style>
