<template>
  <div class="container">
    <h1 class="title">{{ content.title }}</h1>

    <div class="form">
      <form class="input-areas">
        <div class="input">
          <label for="name">{{ content.name }}</label
          ><input v-model="name" id="name" type="text" />
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
          <label for="phone">{{ content.phone }}</label
          ><input
            :style="[
              phone_error ? { border: '2px solid red' } : { border: 'none' },
            ]"
            v-model="phone"
            id="phone"
            type="text"
          />
        </div>
        <div class="input countries">
          <label for="country"> {{ content.country }}</label>
          <v-select
            id="country"
            v-model="country"
            :options="country_list"
            label="name"
            class="country-selector"
          ></v-select>
        </div>
        <div class="input">
          <label for="message">{{ content.message }}</label
          ><textarea id="message" v-model="message" type="text" />
        </div>
      </form>
      <button class="form-button button" @click="send">
        {{ content.send }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import translations from "../assets/i18n/contact-us.json";

export default {
  name: "contactPage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      email_error: 0,
      phone_error: 0,
      country_list: [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" },
      ],
      content: {
        title: "REACH TO US",
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        country: "Country",
        message: "Your Message",
        send: "SEND",
      },
      translations: translations,
    };
  },
  computed: {
    ...mapGetters(["userInfo", "chosenLanguage"]),
  },
  methods: {
    send() {
      if (!this.phone_error && !this.email_error) {
        const contact_info = {
          name: this.name,
          email: this.email,
          phonenumber: this.phone,
          country_code: this.country ? this.country.id : "",
          text: this.message,
        };
        console.log("Contact info: ", contact_info);
        this.message = "";
        alert(
          this.chosenLanguage === "en"
            ? "Your message is sent."
            : "Mesajınız gönderilmiştir."
        );
      }
    },
    validateEmail(value) {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    validatePhone(value) {
      return /^\d{10}$/.test(value);
    },
    setInitialValues() {
      this.name = this.userInfo.name;
      this.email = this.userInfo.email;
    },
    setContentLanguage() {
      this.content =
        this.chosenLanguage === "en"
          ? this.translations.content_en
          : this.translations.content_tr;
      this.country_list =
        this.chosenLanguage === "en"
          ? this.translations.country_list_en
          : this.translations.country_list_tr;
    },
  },
  mounted() {
    this.setInitialValues();
    this.setContentLanguage();
  },
  watch: {
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
    phone: function () {
      if (this.phone.length === 0) {
        this.phone_error = 1;
      } else {
        this.phone_error = 0;
      }
      if (!this.validatePhone(this.phone)) {
        this.phone_error = 1;
      } else {
        this.phone_error = 0;
      }
    },
    userInfo: function () {
      this.setInitialValues();
    },
    chosenLanguage: function () {
      this.setContentLanguage();
    },
  },
};
</script>

<style scoped>
.title {
  max-width: 100%;
  margin-bottom: 0.8em;
}
.form {
  width: min(100%, 600px);
}
.input-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}
.input {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 48%;
}

.input textarea {
  resize: none;
  height: 10em;
}
.countries {
  position: relative;
}

@media (max-width: 50em) {
  .input {
    width: 100%;
  }
}
</style>
<style></style>
