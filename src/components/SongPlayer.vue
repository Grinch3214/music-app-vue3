<template>
	<audio :src="props.song.songSrc" preload="auto" autoplay ref="audioPlayer" />
	<div class="text-white">
		<div class="flex flex-row justify-between">
			<button @click="goBack">Back</button>
			<div class="text-yellow-300 font-bold text-1xl">VueJS Music App</div>
		</div>
		<div>
			<img class="rounded mt-8 mb-4 max-h-[200px] max-w-[300px] m-auto" :src="props.song.src" />
			<div class="text-center">
				<p class="text-yellow-300 font-bold">{{ props.song.name }}</p>
				<p class="text-gray-200">{{ props.song.artistName }} - {{ props.song.albumName }}</p>
				<p class="text-gray-400">{{ song.year }}</p>
			</div>
		</div>
		<div class="grid grid-cols-3 mt-10">
			<div class="flex items-center justify-center">
				<button @click="previous">Previous</button>
			</div>
			<div class="flex items-center justify-center">
				<button class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold" @click="togglePlay">
					{{ isPlaying ? 'Pause' : 'Play' }}
				</button>
			</div>
			<div class="flex items-center justify-center">
				<button @click="next">Next</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	song: {
		type: Object
	}
})
const audioPlayer = ref(null)
const isPlaying = ref(true)

console.log(audioPlayer.value)

const emit = defineEmits(['goBack', 'next', 'previous'])

const goBack = () => {
	emit('goBack')
}

const next = () => {
	emit('next')
}

const previous = () => {
	emit('previous')
}

const togglePlay = () => {
	isPlaying.value ? audioPlayer.value.pause() : audioPlayer.value.play()
	isPlaying.value = !isPlaying.value
}

</script>