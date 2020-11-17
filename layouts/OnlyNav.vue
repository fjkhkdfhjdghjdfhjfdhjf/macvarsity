<template>
  <div>
    <b-navbar
      transparent
      fixed-top
      style="text-align:left"
      :wrapper-class="$device.isMobile ?'':'menu-content'"
      v-if="!loading"
    >
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/logofinal.png" style="width:35px" />
        </b-navbar-item>
      </template>
      <template slot="start" style="color:white">
        <nuxt-link to="/news" class="menu-section first-section">
          <b-navbar-item dark style="color:white">
            <b>Articles</b>
          </b-navbar-item>
        </nuxt-link>
        <nuxt-link to="/forums" class="menu-section">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Forums</b>
          </b-navbar-item>
        </nuxt-link>
        <nuxt-link to="/matches" class="menu-section">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Matches</b>
          </b-navbar-item>
        </nuxt-link>
        <nuxt-link to="/events" class="menu-section">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Events</b>
          </b-navbar-item>
        </nuxt-link>
        <nuxt-link to="/stats" class="menu-section">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Standings</b>
          </b-navbar-item>
        </nuxt-link>
        <nuxt-link to="/rankings" class="menu-section beta">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Stats</b>
            <!-- <div
              v-if="!$device.isMobile"
              style="font-size:11px;vertical-align: text-bottom;margin-top:20px;color:#ff4653"
            >Beta</div>
            <div
              v-if="$device.isMobile"
              style="font-size:11px;vertical-align: text-bottom;color:#ff4653;display:inline-block"
            >Beta</div> -->
          </b-navbar-item>
        </nuxt-link>
        

        <nuxt-link to="/mystats" class="menu-section beta">
          <b-navbar-item dark class="is-dark" style="color:white">
            <b>Rosters</b>
            <!-- <div
              v-if="!$device.isMobile"
              style="font-size:11px;vertical-align: text-bottom;margin-top:20px;color:#ff4653"
            >soon</div>
            <div
              v-if="$device.isMobile"
              style="font-size:11px;vertical-align: text-bottom;color:#ff4653;display:inline-block"
            >soon</div> -->
          </b-navbar-item>
        </nuxt-link>
        <!--    <nuxt-link to="/skins" class="menu-section beta">
        <b-navbar-item class="is-dark" style="color:white">
          <b>Skins</b><div v-if='!$device.isMobile' style="font-size:11px;vertical-align: text-bottom;margin-top:20px;color:#ff4653">beta</div>
          <div v-if='$device.isMobile' style="font-size:11px;vertical-align: text-bottom;color:#ff4653;display:inline-block">beta</div>
        </b-navbar-item>
        </nuxt-link>-->
        <!-- <b-navbar-item
              dark
              class="is-dark"
              href="/guides"
            >
              <b>Guides</b>
        </b-navbar-item>-->
        <!-- <b-navbar-dropdown
          label="Valorantopedia"
          class="navbar-item"
          style="font-weight:bold;color:white"
        >
          <nuxt-link to="/agents" class="menu-section">
            <b-navbar-item class="is-dark nv-dropdown" style="color:white">
              <b>Agents</b>
            </b-navbar-item>
          </nuxt-link>
          <nuxt-link to="/maps" class="menu-section">
            <b-navbar-item class="is-dark nv-dropdown" style="color:white">
              <b>Maps</b>
            </b-navbar-item>
          </nuxt-link>
          <nuxt-link to="/weapons" class="menu-section">
            <b-navbar-item class="is-dark nv-dropdown" style="color:white">
              <b>Weapons</b>
            </b-navbar-item>
          </nuxt-link>
        </b-navbar-dropdown>-->
        <nuxt-link to="/about" class="menu-section">
          <b-navbar-item class="is-dark" style="color:white">
            <b>About</b>
          </b-navbar-item>
        </nuxt-link>
      </template>
      <template slot="end">
        <b-navbar-item tag="section">
          <section>
            <navBarSearch />
          </section>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons" v-if="!user.username">
            <nuxt-link to="/signup" style="margin-right:0.5em;">
              <a class="button" style="background-color:#ff4653">
                <strong>Sign up</strong>
              </a>
            </nuxt-link>
            <nuxt-link to="/login">
              <a class="button" style="background-color:#8c67ef; border-color:#8c67ef">Log in</a>
            </nuxt-link>
          </div>
          <div
            class="buttons"
            v-if="user.username"
            style="cursor:pointer"
            @click="navUser(user.id)"
          >
            <p class="subtitle" style="margin-right:10px;margin-bottom:15px">
              User
              <span
                v-if="notifications && Object.keys(notifications).length!=0"
                style="margin-left:0px;font-size:15px;vertical-align: text-top;color:#ff726f;font-weight:bold"
              >{{Object.keys(notifications).length}}</span> |
              <span @click="logout()" style="cursor:pointer;color:#ff726f">Logout</span>
            </p>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section>
      <div>
        <div class="columns is-centered ordered-mobile">
          <div class="column" :key="selectedType">
            <div>
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import navBarSearch from "./navBarSearch";
export default {
  layout: "sides",
  created() {
    console.log("Whatsupottret");
    //  if (process.browser) {
    // var h1 = document.createElement('div');
    //     h1.innerHTML = "";
    //     h1.setAttribute('class', 'vm-placement');
    //     h1.setAttribute('data-id', '5ed9034ba624ae2e71257f73');
    //     document.body.appendChild(h1);
    //  }
    this.$nextTick(function() {
      this.loading = false;
    });
    if (process.browser) {
      this.$aes.setKey("SECURE_VAL_PW");
      var authEnc = localStorage.getItem("auth");
      if (authEnc) {
        let auth = undefined;
        try {
          auth = JSON.parse(this.$aes.decrypt(authEnc));
        } catch {
          let encrypted = this.$aes.encrypt(authEnc);
          localStorage.setItem("auth", encrypted);
          window.location.reload();
        }
        if (auth) {
          this.user.username =
            auth.user.username.charAt(0).toUpperCase() +
            auth.user.username.slice(1);
          this.user.id = auth.user._id;
          this.$axios(process.env.baseUrl + `users/${this.user.id}`, {
            method: "get",
            headers: new Headers({ "content-type": "application/json" })
          })
            .then(function(response) {
              return response.data;
            })
            .then(res => {
              auth.permissions = res.permissions;
              this.$aes.setKey("SECURE_VAL_PW");
              let encrypted = this.$aes.encrypt(JSON.stringify(auth));
              localStorage.setItem("auth", encrypted);
              this.$axios.setHeader(
                "Authorization",
                `Bearer ${auth.accessToken}`
              );
              this.notifications = res.notifications;
            });
        }
      }
    }
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" }
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" }
        }
      ],
      user: {
        email: "",
        password: "",
        username: undefined,
        id: ""
      },
      notifications: undefined,
      playerSearchData: [],
      playerSelected: null,
      fetchingPlayer: false,
      playerName: "",
      selected: null,
      loading: true
    };
  },
  methods: {
    logout() {
      if (process.browser) {
        localStorage.removeItem("auth");
      }
      window.location.reload();
    },
    navUser(id) {
      this.$router.push({ path: `/user/${id}` });
    },
    getPlayerSearchResults: debounce(function(name) {
      if (!name.length) {
        this.playerSearchData = [];
        // this.playerPage = 1
        // this.totalPlayerPages = 1
        return;
      }
      this.fetchingPlayer = true;
      this.$axios(process.env.baseUrl + `api/players?name[$search]=${name}`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.playerSearchData = [];
          response.data.forEach(item => this.playerSearchData.push(item));
        })
        .catch(error => {
          this.playerSearchData = [];
          throw error;
        })
        .finally(() => {
          this.fetchingPlayer = false;
        });
    }, 500),
    getPlayerImgUrl(img) {
      return process.env.baseUrl + `api/uploads/players/${img}`;
    },
    navPlayer(player) {
      this.selected = player;
      if (player) {
        this.$router.push({ path: `/players/${player._id}` });
      }
    },
    onFocus(e) {
      e.stopPropagation();
    }
  },
  components: { navBarSearch }
};
</script>
<style lang="scss">
@media screen and (min-width: 640px) {
  .menu-section {
    border-right: 1px solid #59667b;
  }
  .menu-section.first-section {
    border-left: 1px solid #59667b;
  }
  .menu-section:hover {
    background: #313c4f;
  }
  .menu-section:not(.beta) a {
    line-height: 2.2em;
  }
  .navbar-brand:hover {
    background: #313c4f;
  }
}

.menu-content {
  display: flex;
  width: 1300px;
  margin: auto;
}
@media screen and (max-width: 769px) {
  .ordered-mobile {
    display: flex;
    flex-flow: column;
  }
  .ordered-mobile .fl-1 {
    order: 1;
  }
  .ordered-mobile .fl-2 {
    order: 2;
  }
  .ordered-mobile .fl-3 {
    order: 3;
  }
}
</style>

