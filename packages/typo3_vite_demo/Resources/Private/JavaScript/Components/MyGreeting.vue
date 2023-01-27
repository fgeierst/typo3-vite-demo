<script setup>
import { ref } from 'vue'

const props = defineProps({
	'message': String,
	'age': Number,
});
const name = ref('Vue');
</script>

<template>
	Hello {{ name }}!!
	<p>{{ message }}</p>
	<p>You are {{ age }} years old.</p>
</template>

<style>

</style>