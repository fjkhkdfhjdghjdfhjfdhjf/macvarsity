<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">About</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{width:!$device.isMobile?'800px':'' }">
          <div class="card">
            <div class="card-content">
              <p class="title">Who We Are</p>
              <div style="text-align:left">
                <p
                  class="subtitle"
                  style="font-size:17px"
                >We at Valorantify ©, are the center of professional VALORANT. This includes news, event coverage, team stats, player stats, map stats, agents stats and much much more. We are rapidly growing and are expanding our team as well as our site features daily.</p>
              </div>
            </div>
          </div>
          <div class="card" style="margin-top:20px;">
            <div class="card-content">
              <p class="title">Contact</p>
              <div style="text-align:left">
                <p class="subtitle">
                  For feature requests, bug fixes or business inquires, feel free to shoot us an email at:
                  <br/>
                  
                </p>
                <div style="text-align:center;font-size:24px"><b >valorantify@gmail.com</b></div>
              </div>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item" style="cursor:pointer" @click="navTwitter">
                <img src="../assets/twitter.png" style="width:30px;" />
              </p>
            </footer>
          </div>
        </div>
        <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  props: {
    type: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    navTwitter() {
      window.open("https://twitter.com/valorantify", "_blank");
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
</style>
