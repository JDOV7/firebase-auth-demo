<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import AuthService from "../services/AuthService";
const route = useRouter();
const service = new AuthService();
const objUser = service.getInfo();
onMounted(async () => {
  try {
    await service.obtenerInfoUser();
    if (!objUser.value) {
      route.push("/");
    }
    console.log(objUser.value);
  } catch (error) {
    console.log(error);
    // route.push("/");
  }
});
</script>

<template>
  <div>
    <h1>Principal View</h1>
    <div>
      <h4 v-for="(valor, propiedad) in objUser">
        {{ propiedad }}: {{ valor }}
      </h4>
    </div>
  </div>
</template>
