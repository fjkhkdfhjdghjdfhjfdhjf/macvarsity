<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">Ads Test Page</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <p class="title">General</p>
            <div style="text-align:left">
              <p class="subtitle is-6">Ads Test Pages</p>
            </div>
            <div class="vm-placement" data-id="5ed9034ba624ae2e71257f73"></div>
            <div class="vm-placement" data-id="5ed9035bf732892da8001c6c"></div>
            <div class="vm-placement" data-id="5ed90364b519801b8a4d5289"></div>

            <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div>
            <div class="vm-placement" data-id="5ed9037cb519801b8a4d528d"></div>
            <div class="vm-placement" data-id="5ed90390a624ae2e71257f75"></div>
          </div>
        </div>
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
