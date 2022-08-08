import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemaStore = defineStore("thema", () => {
  const thema = ref<boolean>(false);

  function changeThemaMode() {
    thema.value = !thema.value;
    if (thema.value === true) {
      document.documentElement.setAttribute("data-dark", "dark");
      document.body.classList.add("dark");
    }

    if (thema.value === false) {
      document.documentElement.removeAttribute("data-dark");
      document.body.classList.remove("dark");
    }
  }

  return { thema, changeThemaMode };
});

export default useThemaStore;
