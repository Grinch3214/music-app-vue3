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
import { ref } from 'vue';
import SongPlayer from './SongPlayer.vue';

const name = ref('Song list')

const isPlayerVisible = ref(false)
const currentListIndex = ref(0)

const list = ref([
	{
		id: 1,
		name: 'Сочиняй мечты',
		albumName: 'Ясно!',
		artistName: 'Каста',
		year: 2012,
		src: 'https://images.genius.com/37d8d643999044c1a7a73edcfeed06a8.800x800x1.jpg',
		songSrc: 'https://cdn.drivemusic.club/dl/online/ZwxUNXJ5H57di1lakGFwEQ/1682373715/download_music/2012/02/vladi-kasta-sochinjajj-mechty.mp3',
	},
	{
		id: 2,
		name: 'Чемпион мира',
		albumName: 'Несусветное',
		artistName: 'Каста',
		year: 2015,
		src: 'https://images.genius.com/37d8d643999044c1a7a73edcfeed06a8.800x800x1.jpg',
		songSrc: 'https://cdn.drivemusic.club/dl/online/UrJH847mCSn_gvnqi0m3rA/1682373917/download_music/2015/03/vladi-kasta-chempion-mira.mp3',
	},
	{
		id: 3,
		name: 'Любой дурак',
		albumName: 'Чернила осминога',
		artistName: 'Каста',
		year: 2021,
		src: 'https://images.genius.com/37d8d643999044c1a7a73edcfeed06a8.800x800x1.jpg',
		songSrc: 'https://cdn.drivemusic.club/dl/online/6MHi0Hdmj0Xzf13kDTwWDQ/1682374024/download_music/2021/04/kasta-feat.-monetochka-ljubojj-durak.mp3',
	}
])

const playSong = (index) => {
	currentListIndex.value = index
	isPlayerVisible.value = true
}
const playNext = () => {
	if(currentListIndex.value < list.value.length - 1) {
		currentListIndex.value += 1
	} else {
		currentListIndex.value = 0
	}
}

const playPrevious = () => {
	if(currentListIndex.value != 0) {
		currentListIndex.value -= 1
	} else {
		currentListIndex.value = list.value.length - 1
	}
}
</script>

<style>
</style>