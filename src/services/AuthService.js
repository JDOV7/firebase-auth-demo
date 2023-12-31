import axios from "axios";
import { onMounted, ref } from "vue";

class AuthService {
  #objUser;

  constructor() {
    this.#objUser = ref();
  }

  getInfo() {
    return this.#objUser;
  }

  async obtenerInfoUser() {
    try {
      const dataLocal = JSON.parse(window.localStorage.getItem("data"));
      switch (dataLocal.id) {
        case 1:
          this.#objUser.value = await this.#obtenerInfoGithub();
          break;
        case 2:
          this.#objUser.value = await this.#obtenerInfoGoogle();
          break;

        case 3:
          this.#objUser.value = await this.#obtenerInfoFacebook();
          break;

        default:
          this.#objUser.value = undefined;
          break;
      }
    } catch (error) {
      console.log(error);
      this.#objUser.value = undefined;
    }
  }

  async #obtenerInfoGithub() {
    try {
      const dataLocal = JSON.parse(window.localStorage.getItem("data"));
      console.log(dataLocal);
      console.log(dataLocal.access_token);
      // const sUrlCorreo = import.meta.env.VITE_URL_USER_EMAIL_GITHUB;https://api.github.com/user
      const sUrlCorreo = import.meta.env.VITE_URL_USER_DATA_GITHUB;
      const { data } = await axios.get(sUrlCorreo, {
        headers: {
          Authorization: `Bearer ${dataLocal.access_token}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async #obtenerInfoGoogle() {
    try {
      const dataLocal = JSON.parse(window.localStorage.getItem("data"));
      console.log(dataLocal);
      console.log(dataLocal.access_token);
      // const sUrlCorreo = import.meta.env.VITE_URL_USER_EMAIL_GITHUB;https://api.github.com/user
      const sUrlCorreo = import.meta.env.VITE_URL_USER_DATA_GOOGLE;
      const { data } = await axios.get(sUrlCorreo, {
        headers: {
          Authorization: `Bearer ${dataLocal.access_token}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async #obtenerInfoFacebook() {
    try {
      const dataLocal = JSON.parse(window.localStorage.getItem("data"));
      console.log(dataLocal);
      console.log(dataLocal.access_token);
      const sUrlCorreo = `${import.meta.env.VITE_URL_USER_DATA_FACEBOOK}=${
        dataLocal.access_token
      }&
      fields=id,name,email`;
      const { data } = await axios.get(sUrlCorreo);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
export default AuthService;
