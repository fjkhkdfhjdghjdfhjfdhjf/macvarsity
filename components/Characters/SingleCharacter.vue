<template style="height:100%">
  <div class="home" style="height:100%">
    <div class="columns is-centered">
      <div class="column is-one-fifth is-centered stick">
        <div class="column is-half stick">
          <h1
            style="font-size:50px;margin-bottom:20px"
          >{{$route.params.name.charAt(0).toUpperCase() + $route.params.name.slice(1)}}</h1>
          <section
            class="info-tiles char-card"
            style="margin-top:22px;width:220px;height:266px"
            @click="navCharacter('sage')"
          >
            <div class="char-img">
              <article class="tile is-child box">
                <div style="width:180px;height:180px;overflow: hidden;">
                  <img :src="getImgUrl()" style="width:180px;" />
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
      <span>
        <div v-for="ability in info[$route.params.name]" :key="ability">
          <div class="column is-vcentered skills">
            <div class="card" style="width:600px">
              <div class="card-content">
                <p class="title">{{ability.title}}</p>
                <div v-if="ability.type!='Ultimate'">
                  <img src="../../assets/credits.svg" style="width:15px;height:15px;" />
                  <span>{{ability.cost}} | {{ability.use}} {{ability.use>1?'uses':'use'}}</span>
                </div>
                <div v-if="ability.type=='Ultimate'">
                  <span>{{ability.cost}}</span>
                </div>
                <div style="text-align: left;">
                  <span v-for="desc in ability.info" :key="desc">
                    <B>{{desc.title}}</B>
                    {{desc.details}}
                    <br />
                  </span>
                </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>{{ability.type}}</span>
                </p>
                <p class="card-footer-item">
                  <span>
                    <a @click="openDemo(ability.demo)" style="color:#ff726f">Demo</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import json from "./Characters.JSON";
export default {
  name: "Characters",
  props: {
    type: String
  },
  data() {
    return {
      info: json
    };
  },
  mounted() {
     if (process.browser) {
    document.title = "Valorant " + this.$route.params.name.charAt(0).toUpperCase() + this.$route.params.name.slice(1);
     }
  },
  methods: {
    openDemo(demo) {
      window.open(demo, "_blank");
    },
    getImgUrl() {
      if (this.$route.params.name === "sova") {
        return require("../../assets/characters/" +
          this.$route.params.name +
          ".webp");
      }
      return require("../../assets/characters/" +
        this.$route.params.name +
        ".png");
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.type-button {
  width: 150px;
}
.button {
  margin-top: 20px;
  margin-bottom: 20px;
}
.skills {
  margin-top: 20px;
}
@media screen and (min-width: 640px) {
  .stick {
    position: sticky;
    top: 0;
  }
}
@media screen and (max-width: 640px) {
  .char-card {
    margin-left: 25%;
  }
}
</style>
