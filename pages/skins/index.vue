<template style="height:100%">
  <div class="main" style="height:100%">
    <h1 style="font-size:50px;margin-bottom:20px">Valorant Skins</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div
          class="card team-card"
          v-for="skinBundle in skinBundles"
          :key="skinBundle._id"
          style="cursor:pointer;display:inline-block;padding:0px;margin-top:30px;margin-right:20px"
          @click="navBundle(skinBundle._id)"
        >
          <div class="card-content;padding:0px">
            <div
              style="overflow: hidden;padding:0px"
              :style="{width:!$device.isMobile?'400px': ''}"
            >
              <img :src="getImgUrl(skinBundle)" />
            </div>
            <div class="columns is-mobile">
              <div class="column is-narrow">
                <p
                  class="subtitle"
                  style="text-align:left;font-size:30px;padding-bottom:10px;margin-left:10px"
                >{{skinBundle.name}} Bundle</p>
              </div>
              <div class="column">
                <p class="subtitle" style="text-align:right;font-size:20px;margin-top:10px;margin-right:10px;opacity:0.8">
                  Price: {{skinBundle.price}}
                  <img
                    :src="pointsImage"
                    style="align:right;width:10px;height:10px;"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skins",
  props: {
    type: String
  },
  data() {
    return {
      pointsImage: process.env.baseUrl + "api/uploads/skins/points.png"
    };
  },
  asyncData({ $axios }) {
    return $axios
      .get(process.env.baseUrl + "api/skinBundles")
      .then(response => {
        return { skinBundles: response.data.data };
      });
  },
  methods: {
    getImgUrl(skinBUndle) {
      return process.env.baseUrl + `api/uploads/skins/${skinBUndle.img}`;
    },
    navBundle(_id) {
      this.$router.push({ path: `/skins/${_id}` });
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  justify-content: center;
  align-items: center;
}
.type-button {
  width: 150px;
}
.button {
  margin-top: 20px;
  margin-bottom: 20px;
}
.char-card {
  cursor: pointer;
  padding: 10px;
}
.box {
  width: 220px;
  height: 266px;
}
.title {
  font-size: 31px;
}
@media screen and (max-width: 640px) {
  .char-card {
    margin-left: 22%;
  }
}
</style>
