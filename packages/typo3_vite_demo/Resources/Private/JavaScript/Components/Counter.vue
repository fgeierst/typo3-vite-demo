<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
	<button @click="count++">{{ count }}</button>
</template>

<style>
  button {
    all: inherit;
    box-sizing: border-box;
    font-size: 1.6rem;
    border: 2px solid black;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-end: 1rem;
  }
</style>