<script setup>
import { useRoute,useRouter, RouterView } from "vue-router";
import { ref, onBeforeMount } from "vue";
import cars from "../data.json";

const car = ref(null);
const router = useRouter();
const route = useRoute();
const { id } = route.params;

onBeforeMount(() => {
  car.value = cars.find((c) => c.id == id);
});
</script>
<template>
  <div class="container">
    <div v-if="car">
      <h1>The Car</h1>
      <p>Make: {{ car.make }}</p>
      <p>Body: {{ car.body }}</p>
      <p>Price: ${{ car.price }}</p>
      <p>Year: {{ car.year }}</p>
    <button @click="router.back()">Go back</button>
      <RouterView/>
    </div>
    <div v-else>
        <h1>Car Not Found </h1>
    </div>
  </div>
</template>

<style scoped></style>
