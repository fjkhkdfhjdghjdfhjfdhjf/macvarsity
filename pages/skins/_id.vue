
<template style="height:100%">
  <div class="hello" style="height:100%" v-if="skinBundle">
    <h1 style="font-size:50px;margin-bottom:20px">{{skinBundle.name}} Bundle</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{width:!$device.isMobile?'800px':'' }">
          <div class="card">
            <div class="card-content">
              <div class="columns is-centered">
                <div class="column is-6">
                  <img :src="getImgUrl()" width="500px" />
                </div>
                <div class="column is-6" style="text-align: left">
                  <div>
                    <span>
                      <p style="display: inline-block;">{{skinBundle.description}}</p>
                    </span>
                  </div>
                  <br />
                  <div>
                    <span>
                      <p
                        class="title"
                        style="display: inline-block;color:#ff726f; text-align: left;font-size:25px"
                      >Price:</p>
                      <p
                        class="title"
                        style="display: inline-block;font-size:25px"
                      >{{skinBundle.price}}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p class="title" style="text-align:left">Bundle skins</p>
          <div v-if="skinWeapons">
            <div
              class="card team-card"
              v-for="skinWeapon in skinWeapons"
              :key="skinWeapon._id"
              style="cursor:pointer;display:inline-block;width:250px;height:290px;margin-top:30px;margin-right:10px"
            >
              <div class="card-content;padding:10px">
                <p
                  class="title"
                  style="display: inline-block;font-size:25px;margin-top:10px"
                >{{skinWeapon.name}}</p>
                <br />
                <p
                  class="title"
                  style="display: inline-block;color:#ff726f; text-align: left;font-size:20px"
                >Price:</p>
                <p class="title" style="display: inline-block;font-size:20px">
                  {{skinWeapon.price}}
                  <img
                    :src="pointsImage"
                    style="align:right;width:15px;height:15px;"
                  />
                </p>
                <div
                  style="width:200px;height:100px;overflow: hidden;margin-top:10px;display:inline-block"
                >
                  <img :src="getSkinImgUrl(skinWeapon)" @click="openGallery(0)" />
                  
                </div>
                <div style="height:35px;">
                  <div v-if="skinWeapon.imgs.length > 0" style="display:inline-block;" :style="{'visibility':skinWeapon.imgs.length==1?'hidden':''}">
                    <div
                      class="button"
                      v-for="skinLevel in skinWeapon.imgs"
                      :key="skinWeapon.imgs.indexOf(skinLevel)"
                      @click="changeLevel(skinWeapon, skinWeapon.imgs.indexOf(skinLevel))"
                      style="width:55px;height:35px;margin-right:5px;margin-bottom:20px;background-color:#171e29;border-color:black"
                    >Level {{skinWeapon.imgs.indexOf(skinLevel) + 1}}</div>
                    <br />
                  </div>
                </div>
              </div>
              
            </div>
            <LightBox
                  ref="lightbox"
                  :media="this.media"
                  :show-caption="false"
                  :show-light-box="false"
                />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import LightBox from "vue-image-lightbox";
import axios from "axios";
//import media from './media'
export default {
  name: "skinBundle",
  props: {
    type: String
  },
  components: {
    LightBox,
  },
  data() {
    return {
      media: [],
      skinBundle: [],
      skinWeapons: [],
      pointsImage: process.env.baseUrl + "api/uploads/skins/points.png"
    };
  },
  asyncData({ params }) {
    return axios
      .all([
        axios.get(process.env.baseUrl + "api/skinBundles/" + params.id),
        axios.get(process.env.baseUrl + "api/skinWeapons/")
      ])
      .then(
        axios.spread((skinBundleResult, skinWeaponResult) => {
          skinWeaponResult.data.data.forEach(element => {
            element.currentLevel = 0;
          });
          return {
            skinBundle: skinBundleResult.data,
            skinWeapons: skinWeaponResult.data.data.filter(weapon => skinBundleResult.data.skinWeaponIds.includes(weapon._id)),
            media:[{
              thumb: process.env.baseUrl + `api/uploads/skins/${skinBundleResult.data.img}`,
              src: process.env.baseUrl + `api/uploads/skins/${skinBundleResult.data.img}`,
            }]
          };
        })
      )
      .catch(err => console.log(err));
  },
  methods: {
    getImgUrl() {
      console.log(
        process.env.baseUrl + `api/uploads/skins/${this.skinBundle.img}`
      );
      return process.env.baseUrl + `api/uploads/skins/${this.skinBundle.img}`;
    },
    getSkinImgUrl(weapon) {
      console.log(
        process.env.baseUrl +
          `api/uploads/skins/${weapon.imgs[weapon.currentLevel]}`
      );
      return (
        process.env.baseUrl +
        `api/uploads/skins/${weapon.imgs[weapon.currentLevel]}`
      );
    },
    navBundle(_id) {
      this.$router.push({ path: `/skins/weapons/${_id}` });
    },
    changeLevel(weapon, index) {
      weapon.currentLevel = index;
    },
    openGallery(index) {
      console.log(this.$refs.lightbox.media);
      this.$refs.lightbox.showImage(index);
    }
  }
}
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
