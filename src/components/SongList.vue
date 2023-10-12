<template>
	<div v-if="!isPlayerVisible">
		<div class="text-yellow-300 mb-5 font-bold uppercase text-center text-3xl mt-3">
			{{ name }}
		</div>
		<div
		  v-for="(item, index) in list"
		  :key="item.id"
			@click="playSong(index)"
		  class="mb-5 flex flex-row justify-between items-center cursor-pointer"
		>
			<div>
				<p class="mb-1 text-yellow-300">{{ item.name }}</p>
				<span class="inline-block text-gray-200 text-xs">
					{{ item.artistName }} - <span class="text-gray-400"> {{ item.albumName }} ({{ item.year }}) </span>
				</span>
			</div>

			<div>
				<img :src="item.src" :alt="item.name" width="40" height="40" class="rounded-full" />
			</div>
		</div>
	</div>
	<div v-else>
		<SongPlayer 
			:song="list[currentListIndex]"
			@go-back="isPlayerVisible = !isPlayerVisible"
			@next="playNext"
			@previous="playPrevious"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { list } from '../constants.js'
import SongPlayer from './SongPlayer.vue'

console.log(list)

const name = ref('Song list')

const isPlayerVisible = ref(false)
const currentListIndex = ref(0)

const playSong = (index) => {
	currentListIndex.value = index
	isPlayerVisible.value = true
}
const playNext = () => {
	if(currentListIndex.value < list.length - 1) {
		currentListIndex.value += 1
	} else {
		currentListIndex.value = 0
	}
}

const playPrevious = () => {
	if(currentListIndex.value != 0) {
		currentListIndex.value -= 1
	} else {
		currentListIndex.value = list.length - 1
	}
}
</script>

<style>
</style>