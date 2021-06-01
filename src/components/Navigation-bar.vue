<template>
  <div class="navigation-bar">
    <div class="container navigation-content">
      <div class="logo-group">
        <img src="@/assets/logo.svg" alt="" class="logo" />

        <h1 v-if="chosenPage === 0" class="page-name">
          {{ content.title }}
        </h1>
        <h1 v-if="chosenPage === 1" class="page-name">{{ content.contact }}</h1>
      </div>
      <div class="user-info-links">
        <div class="links">
          <a
            v-if="chosenPage === 1"
            @click="route('Home')"
            class="link button"
            >{{ content.home }}</a
          >
          <a
            v-if="chosenPage === 0"
            @click="route('Contact')"
            class="link button"
            >{{ content.contact_us }}</a
          >
          <a
            v-if="!userInfo.email"
            @click="$emit('show-modal')"
            class="link button"
            >{{ content.login }}</a
          >
        </div>
        <div v-if="userInfo.email" class="user-info">
          <img src="@/assets/user.svg" alt="" class="user-icon" />
          <p class="user-name">{{ userInfo.name }}</p>
          <img src="@/assets/down-arrow.svg" alt="" class="down-icon" />
          <div class="user-info-dropdown dropdown">
            <div class="email">
              <p>{{ userInfo.email }}</p>
            </div>
            <div @click="logout" class="logout button">
              <img src="@/assets/log-out.svg" alt="" class="logout-icon" />
              <p class="logout-text">{{ content.logout }}</p>
            </div>
          </div>
        </div>
        <div class="language-select button">
          <img src="@/assets/language.svg" alt="" class="language-icon" />
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
      <button class="menu button">
        <img
          @click="toggleDropdown"
          v-if="!is_mobile"
          src="@/assets/Menu.svg"
          alt=""
        />
        <img @click="toggleDropdown" v-else src="@/assets/close.svg" alt="" />
        <div v-if="is_mobile" class="mobile-dropdown dropdown">
          <div class="links">
            <a
              v-if="chosenPage === 1"
              @click="route('Home')"
              class="link button"
              >{{ content.home }}</a
            >
            <a
              v-if="chosenPage === 0"
              @click="route('Contact')"
              class="link button"
              >{{ content.contact_us }}</a
            >
            <a
              v-if="!userInfo.email"
              @click="$emit('show-modal')"
              class="link button"
              >{{ content.login }}</a
            >
          </div>

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

          <div class="user-mobile">
            <p class="user-name">{{ userInfo.name }}</p>
            <p>{{ userInfo.email }}</p>
          </div>

          <div v-if="userInfo.email" @click="logout" class="logout button">
            <img src="@/assets/log-out.svg" alt="" class="logout-icon" />
            <p class="logout-text">{{ content.logout }}</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationBar",
  data() {
    return {
      content: {
        title: "",
        contact: "",
        contact_us: "",
        login: "",
        home: "",
        logout: "",
      },
      content_en: {
        title: "TOAD",
        contact: "CONTACT",
        contact_us: "CONTACT US",
        login: "LOGIN",
        home: "HOME",
        logout: "LOG OUT",
      },
      content_tr: {
        title: "KURBAĞA",
        contact: "İLETİŞİM",
        contact_us: "İLETİŞİM",
        login: "GİRİŞ",
        home: "ANASAYFA",
        logout: "ÇIKIŞ",
      },
      is_mobile: 0,
    };
  },
  methods: {
    ...mapActions({
      changePage: "changePage",
      setUserInfo: "setUserInfo",
      changeLanguage: "changeLanguage",
    }),
    route(name) {
      this.is_mobile = 0;
      this.$router.push({ name: name });
    },
    logout() {
      this.is_mobile = 0;
      this.setUserInfo({
        name: "",
        email: "",
        password: "",
      });
    },
    setContentLanguage() {
      this.content =
        this.chosenLanguage === "en" ? this.content_en : this.content_tr;
    },
    toggleDropdown() {
      this.is_mobile = !this.is_mobile;
    },
  },
  watch: {
    chosenLanguage: function () {
      this.setContentLanguage();
    },
  },
  mounted() {
    this.setContentLanguage();
  },
  computed: {
    ...mapGetters(["userInfo", "chosenPage", "chosenLanguage"]),
  },
};
</script>

<style scoped>
.navigation-bar {
  background-color: var(--secondary-bg-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5em 0;
}
.logo-group {
  display: inline-flex;
  gap: 2em;
}
.logo-group .page-name {
  color: var(--primary-color);
  text-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
}
.navigation-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info-links {
  display: flex;
  align-items: center;
}
.links {
  display: flex;
  gap: 1em;
  margin-right: 2em;
}
.link {
  color: #fff;
  font-size: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.user-info {
  border: 1px solid var(--secondary-text-color);
  color: var(--secondary-text-color);
  padding: 0 0.4em;
  border-radius: 18px;
  display: flex;
  gap: 0.3em;
  margin-right: 0.5em;
  position: relative;
  user-select: none;
}
.user-info img {
  width: 0.8em;
}
.dropdown {
  display: none;
  flex-direction: column;
  padding: 0.5em;
  gap: 0.5em;
  position: absolute;
  background-color: var(--secondary-bg-color);
  border: 3px solid var(--primary-color);
  z-index: 1;
  right: 0;
  border-radius: 0.25em;
  margin-top: 1.6em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--primary-text-color);
}
.logout {
  display: flex;
  gap: 0.5em;
  color: var(--main-bg-color);
  justify-content: center;
  background-color: #fff;
  padding: 0.2em 0.5em;
  flex-shrink: 1;
  font-weight: bold;
  width: min(60%, 110px);
  margin: 0 auto;
  border-radius: 0.25em;
}
.user-info:hover .user-info-dropdown {
  display: flex;
}
.menu {
  display: none;
  background-color: transparent;
  border: none;
  position: relative;
  width: min(90%, 240px);
}
.mobile-dropdown {
  min-width: 100%;
  gap: 0.5em;
}
.mobile-dropdown .language {
  gap: 0.5em;
  background-color: #fff;
  padding: 0.2em 0.5em;

  color: var(--main-bg-color);
  border-radius: 0.25em;
}
.menu>img {
  margin-left: auto;
}
.user-mobile p {
  font-weight: 300;
}
.logout-text {
  font-size: 16px;
}

.language-select {
  margin-left: 0.5em;
  padding-left: 1em;
  border-left: 1px solid var(--secondary-text-color);
  position: relative;
}

@media (max-width: 50em) {
  .user-info-links,
  .logo {
    display: none;
  }
  .links {
    flex-direction: column;
    margin-right: 0;
    gap: 0em;
    text-align: left;
  }
  .user-name {
    text-align: left;
  }
  .menu {
    display: block;
  }
  .mobile-dropdown {
    display: flex;
  }
}
</style>
