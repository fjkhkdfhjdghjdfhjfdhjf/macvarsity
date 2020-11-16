
<template style="height:100%">
  <div class="hello" style="height:100%" v-if="skinWeapon">
    <h1 style="font-size:50px;margin-bottom:20px">{{skinWeapon.name}}</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{width:!$device.isMobile?'800px':'' }">
          <div class="card">
            <div class="card-content">
              <div class="columns is-centered">
                <div class="column is-6">
                  <img :src="getImgUrl(skinLevel)" width="500px" />
                  <div class="button" v-for="skinLevel in skinWeapon.imgs" :key="skinWeapon.imgs.indexOf(skinLevel)" @click="changeLevel(skinWeapon.imgs.indexOf(skinLevel))">
                  <div v-if="skinWeapons.imgs.length > 1">
                    Level {{skinWeapon.imgs.indexOf(skinLevel)}}
                    </div>
                </div>
                </div>
                <div class="column is-6" style="text-align: left">
                  <div>
                    <span>
                      <p
                        style="display: inline-block;"
                      >{{skinWeapon.description}}</p>
                    </span>
                </div>
                <br>
                  <div class="button" @click="navBundle()">
                  <p
                      class="title"
                      style="display: inline-block;font-size:25px"
                    >Part of the {{skinBundle}} Bundle</p>
                    </div>
                <div>
                  <span>
                    <p
                      class="title"
                      style="display: inline-block;color:#ff726f; text-align: left;font-size:25px"
                    >Price:</p>
                    <p
                      class="title"
                      style="display: inline-block;font-size:25px"
                    >{{skinWeapon.price}}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <p class="title" style="text-align:left">
          
        </p>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "skinWeapon",
  props: {
    type: String
  },
  data() {
    return {
      skinWeapon: [],
      skinBundle: [],
      skinLevel: 0,
    };
  },
  asyncData({params }) {
    console.log(process.env.baseUrl + "api/skinWeapons/" + params.id);
    return axios.all([
      axios.get(process.env.baseUrl + "api/skinWeapons/" + params.id),
      axios.get(process.env.baseUrl + "api/skinBundles/")
    ])
      .then(axios.spread(
        (
          skinWeaponResult,
          skinBundleResult,
        ) => {
          console.log('res4', skinWeaponResult.data);
          console.log('res5', skinBundleResult.data.data);
          return { 
            skinWeapon: skinWeaponResult.data,
            skinBundle: skinBundleResult.data.data.find(search => search._id === skinWeaponResult.data.bundleId).name
          };
        })).catch(err => console.log(err));
  },
  methods: {

    getImgUrl(index) {
      //console.log(process.env.baseUrl + `api/uploads/skins/${this.skinWeapon.imgs[index]}`);
      return (
        process.env.baseUrl + `api/uploads/skins/${this.skinWeapon.imgs[index]}`
      );
    },
    navBundle(_id) {
      this.$router.push({ path: `/skins/${this.skinWeapon.bundleId}` });
    },
    changeLevel(index) {
      this.skinLevel = index;
    },
  },
  components: { }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$card-content-padding: 0.25rem;
.type-button {
  width: 150px;
}
.button {
  margin-top: 20px;
  margin-bottom: 20px;
}
@media screen and (max-width: 640px) {
  .standings-card {
    margin-left: 5%;
  }
}
.selected {
  color: #bd3734;
}
.unSelected {
  color: #ff726f;
}
.winner {
}
.loser {
  opacity: 0.4;
}
.dark-bkg {
  background-color: #1a212e;
}
.light-bkg {
  background-color: #1a212e;
}
</style>
