<template style="height:100%">
  <div class="hello" style="height:100%">
    <h1 style="font-size:50px;margin-bottom:20px">Maps</h1>
    <div class="columns is-centered">
      <div class="column is-half">
         <div class="card">
          <div class="card-content">
            <p class="title">Ascent</p>
                <div class="maps-map">
                  <div class="map">
                    <img
                      src="../../assets/maps/ascent.svg"
                      alt="Bind Bombs"
                      class="map-bombs"
                    />
                  </div>
                </div>
          </div>
        </div>
        <div class="card" style="margin-top:20px">
          <div class="card-content">
            <p class="title">Bind</p>
                <div class="maps-map">
                  <div class="map">
                    <img
                      src="../../assets/maps/bind.svg"
                      alt="Bind Bombs"
                      class="map-bombs"
                    />
                  </div>
                </div>
          </div>
        </div>
         <div class="card" style="margin-top:20px">
          <div class="card-content">
            <p class="title">Haven</p>
                <div class="maps-map">
                  <div class="map">
                    <img
                      src="../../assets/maps/haven.svg"
                      alt="Bind Bombs"
                      class="map-bombs"
                    />
                  </div>
                </div>
          </div>
        </div>
        <div class="card" style="margin-top:20px">
          <div class="card-content">
            <p class="title">Split</p>
                <div class="maps-map">
                  <div class="map">
                    <img
                      src="../../assets/maps/split.svg"
                      alt="Bind Bombs"
                      class="map-bombs"
                    />
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
  name: "Characters",
  props: {
    type: String
  },
  data() {
    return {};
  },
  mounted() {
     if (process.browser) {
    document.title = "Valorant Maps";
     }
  },
  methods: {
    fetchData() {}
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

.maps-map {
  position: relative;
  flex-grow: 1;
  height: 580px;
  margin: 20px;
}
.maps-list,
.maps-map * {
  position: absolute;
  width: 100%;
}
.map{
  background-color: rgb(19, 28, 46);
  border-radius: 5%;
}

element.style {
}
.maps-list,
.maps-map * {
  position: absolute;
  width: 100%;
}
.maps-map * {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 650px;
  height: 100%;
}
.maps-map .map .map-bombs {
  z-index: 5;
}
.maps-map .map .map-names {
  z-index: 4;
}
.maps-map .map .map-environment {
  z-index: 3;
}
.maps-map .map .map-full {
  z-index: 1;
}
.card-content {
}
</style>
