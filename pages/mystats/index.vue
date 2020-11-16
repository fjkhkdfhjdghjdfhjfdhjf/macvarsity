<template>
  <section>
    <div class="columns is-centered">
      <div
        class="column is-full-mobile is-four-fifths-tablet is-three-quarters-desktop is-half-widescreen"
      >
      <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
        <div style="padding-bottom: 1em">
          <b-field label="Riot ID">
            <b-input rounded placeholder="RiotID #EUW" size="is-large" v-model="playerName"></b-input>
          </b-field>
          <b-button size="is-large" @click="searchPlayer">Search</b-button>
        </div>
        <p class="title is-4" style="font-weight:bold">The functionality and data you're about to see is a work in-progress. This will be released when RIOT api is out!</p>
        <div
          class="columns"
          v-if="$nuxt.$route.path == '/mystats' || $nuxt.$route.path == '/mystats/'"
        >
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-icon icon="poll-box" size="is-large"></b-icon>
                <div class="content">
                  <p class="title is-4">View your performance</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-icon icon="rewind" size="is-large"></b-icon>
                <div class="content">
                  <p class="title is-4">Analyze past games</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-icon icon="account-group" size="is-large"></b-icon>
                <div class="content">
                  <div class="content">
                    <p class="title is-4">Review premade group performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nuxt-child v-else />
        <!-- <adsbygoogle ad-slot="1375942768" ad-client="ca-pub-3839989252747862" ad-style={backgroundColor:#273142} /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout:"OnlyNav",
  data() {
    return {
      playerName: ""
    };
  },
  methods: {
    searchPlayer() {
      let cleanPlayerName = this.playerName.trim();

      if (cleanPlayerName !== "") {
        let encodedPlayerName = encodeURIComponent(cleanPlayerName);
        this.$router.replace(`/mystats/${encodedPlayerName}`);
      }
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>