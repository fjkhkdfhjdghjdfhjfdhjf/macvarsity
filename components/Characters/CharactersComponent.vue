<template style="height:100%">
  <div class="main" style="height:100%">
    <h1 style="font-size:50px;margin-bottom:20px">Valorant Agents</h1>
    <div class="columns is-centered" style="justify-content:center;align-items:centered;">
      <section class="info-tiles char-card" style="margin-top:10px;" @click="navCharacter('sage')">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/sage.png" style="width:180px;" />
          </div>
          <h1 class="title" style="margin-top:10px;">SAGE</h1>
        </article>
      </section>
      <section
        class="info-tiles char-card"
        style="margin-top:10px;"
        @click="navCharacter('breach')"
      >
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/breach.png" style="width:180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">BREACH</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('brimstone')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/brimstone.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">BRIMSTONE</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('cypher')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/cypher.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">CYPHER</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('jett')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/jett.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">JETT</h1>
        </article>
      </section>
    </div>
    <div class="columns is-centered">
      <section class="info-tiles char-card" @click="navCharacter('omen')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/omen.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">OMEN</h1>
        </article>
      </section>

      <section class="info-tiles char-card" @click="navCharacter('phoenix')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/phoenix.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">PHOENIX</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('viper')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/viper.png" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">VIPER</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('sova')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/sova.webp" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">SOVA</h1>
        </article>
      </section>
      <section class="info-tiles char-card" @click="navCharacter('raze')" style="margin-top:10px;">
        <article class="tile is-child box">
          <div style="width:180px;height:180px;overflow: hidden;">
            <img src="../../assets/characters/raze.webp" width="180px" />
          </div>
          <h1 class="title" style="margin-top:10px;">RAZE</h1>
        </article>
      </section>
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
    navCharacter(name) {
      router.push({ path: `/agents/${name}` });
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
@media screen and (max-width: 640px) {
  .char-card {
    margin-left: 22%;
  }
}
</style>
