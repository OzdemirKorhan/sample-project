<template>
  <div v-if="isModal" class="modal-container">
    <div class="modal">
      <img
        class="close-icon button"
        @click="$emit('close-modal')"
        src="@/assets/close.svg"
        alt=""
      />
      <div class="content">
        <div class="logo-group">
          <h3 class="title">{{ content.login }}</h3>
          <div class="language-select button">
            <img src="@/assets/language.svg" alt="" />

            <div class="language-dropdown">
              <div @click="changeLanguage('en')" class="language english">
                <div class="radio">
                  <img
                    v-if="chosenLanguage === 'en'"
                    src="@/assets/chosen.svg"
                    alt=""
                  />
                  <img v-else src="@/assets/unchosen.svg" alt="" />
                </div>
                <p class="">English</p>
              </div>
              <div @click="changeLanguage('tr')" class="language turkish">
                <div class="radio">
                  <img
                    v-if="chosenLanguage === 'tr'"
                    src="@/assets/chosen.svg"
                    alt=""
                  />
                  <img v-else src="@/assets/unchosen.svg" alt="" />
                </div>
                <p class="">Türkçe</p>
              </div>
            </div>
          </div>
        </div>
        <form class="input-areas">
          <div class="input">
            <label for="name">{{ content.name }}</label
            ><input
              :style="[
                name_error ? { border: '2px solid red' } : { border: 'none' },
              ]"
              v-model="name"
              id="name"
              type="text"
            />
          </div>
          <div class="input">
            <label for="email">{{ content.email }}</label
            ><input
              :style="[
                email_error ? { border: '2px solid red' } : { border: 'none' },
              ]"
              v-model="email"
              id="email"
              type="text"
            />
          </div>
          <div class="input">
            <label for="password">{{ content.password }}</label>
            <input
              :style="[
                password_error
                  ? { border: '2px solid red' }
                  : { border: 'none' },
              ]"
              id="password"
              v-model="password"
              type="password"
            />
          </div>
          <button class="form-button button" @click="login">
            {{ content.login }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  props: ["isModal"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      name_error: 0,
      email_error: 0,
      password_error: 0,

      content: {
        name: "",
        email: "",
        password: "",
        login: "",
      },
      content_tr: {
        name: "İsim",
        email: "Eposta",
        password: "Şifre",
        login: "GİRİŞ",
      },
      content_en: {
        name: "Name",
        email: "Email",
        password: "Password",
        login: "LOGIN",
      },
    };
  },
  methods: {
    ...mapActions({
      setUserInfo: "setUserInfo",
      changeLanguage: "changeLanguage",
    }),
    login() {
      if (!this.name_error && !this.email_error && !this.password_error) {
        const user_info = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.setUserInfo(user_info).then(() => {
          this.$emit("close-modal");
        });
      }
    },
    validateEmail(value) {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    setContentLanguage() {
      this.content =
        this.chosenLanguage === "en" ? this.content_en : this.content_tr;
    },
  },
  watch: {
    // whenever input values change, this function will run
    name: function () {
      if (this.name.length === 0) {
        this.name_error = 1;
      } else {
        this.name_error = 0;
      }
    },
    email: function () {
      if (this.email.length === 0) {
        this.email_error = 1;
      } else {
        this.email_error = 0;
      }
      if (!this.validateEmail(this.email)) {
        this.email_error = 1;
      } else {
        this.email_error = 0;
      }
    },
    password: function () {
      if (this.password.length === 0) {
        this.password_error = 1;
      } else {
        this.password_error = 0;
      }
    },
    chosenLanguage: function () {
      this.setContentLanguage();
    },
  },
  mounted() {
    this.setContentLanguage();
  },
  computed: {
    ...mapGetters(["chosenLanguage"]),
  },
};
</script>

<style scoped>
.modal-container {
  display: flex;
  align-items: center;

  top: 0;
  position: absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  z-index: 2;
}
.modal {
  width: min(90%, 400px);
  padding: 1em;
  background-color: var(--main-bg-color);
  margin: 0 auto;
  height: min-content;
  border: 3px solid var(--primary-color);
  border-radius: 0.25em;
}
.close-icon {
  margin-left: auto;
  width: 1em;
}
.content {
  margin: 2em;
}

.logo-group {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5em;
}
.title {
  font-size: 35px;
  margin: 0;
}
.input-areas {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
.input {
  display: flex;
  flex-direction: column;
}
.input label {
  color: var(--primary-text-color);
}
</style>
