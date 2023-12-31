<script setup>
import {
  getAuth,
  signInWithPopup,
  getAdditionalUserInfo,
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
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

const iniciarSesionGoogle = async () => {
  try {
    provider.value = new GoogleAuthProvider();
    const respuesta = await signInWithPopup(auth.value, provider.value);
    const res = await GoogleAuthProvider.credentialFromResult(respuesta);
    const data = { access_token: res.accessToken, id: 2 };
    console.log(await getAdditionalUserInfo(respuesta));
    window.localStorage.setItem("data", JSON.stringify(data));
    console.log(JSON.parse(window.localStorage.getItem("data")));
    route.push("/app");
  } catch (error) {
    console.log(error);
    window.alert("No se pudo iniciar sesion");
  }
};

const iniciarSesionFacebook = async () => {
  try {
    provider.value = new FacebookAuthProvider();
    const respuesta = await signInWithPopup(auth.value, provider.value);
    const res = await FacebookAuthProvider.credentialFromResult(respuesta);
    const data = { access_token: res.accessToken, id: 3 };
    console.log(await getAdditionalUserInfo(respuesta));
    window.localStorage.setItem("data", JSON.stringify(data));
    console.log(JSON.parse(window.localStorage.getItem("data")));
    // route.push("/app");
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
      <button @click="iniciarSesionGoogle">Google</button>
      <button @click="iniciarSesionFacebook">Facebook</button>
    </div>
  </div>
</template>
