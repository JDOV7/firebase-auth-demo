<script setup>
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
const provider = ref();
const auth = ref(getAuth());
const route = useRouter();

const iniciarSesionGithub = async () => {
  try {
    provider.value = new GithubAuthProvider();
    const respuesta = await signInWithPopup(auth.value, provider.value);
    const res = await GithubAuthProvider.credentialFromResult(respuesta);
    const data = { access_token: res.accessToken, id: 1 };
    window.localStorage.setItem("data", JSON.stringify(data));
    console.log(JSON.parse(window.localStorage.getItem("data")));
    route.push("/app");
  } catch (error) {
    console.log(error);
    window.alert("No se pudo iniciar sesion");
  }
};
</script>

<template>
  <div>
    <div>
      <h1>Login</h1>
    </div>
    <div>
      <button @click="iniciarSesionGithub">Github</button>
    </div>
  </div>
</template>
