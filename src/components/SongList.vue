<template>
	<div v-for="item in list" :key="item.id" class="mb-5">
		<p class="mb-1 text-yellow-300">{{ item.name }}</p>
		<span class="inline-block text-gray-200 text-xs">
			{{ item.artistName }} - <span class="text-gray-400"> {{ item.albumName }} ({{ item.year }}) </span>
		</span>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Song list')

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

</script>

<style>
</style>