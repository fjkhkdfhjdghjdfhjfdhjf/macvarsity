<template>
  <div v-if="playerId !== undefined">
    <div class="columns is-desktop">
      <div class="column">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-5">{{ playerId }}</p>
                <b-button>Refresh Data</b-button>
                <small style="display: block">Last Refresh: 22h ago</small>
              </div>
            </div>
            <b-icon icon="star" style="position: relative; top: -0.9em; right: -0.9em"></b-icon>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="./ranks/Iron-1.png" alt="Rank Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-5">Iron III</p>
                <p>Ranked games won: 44</p>
                <p>Ranked games lost: 23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-tabs type="is-boxed" class="tabsMyStats">
      <b-tab-item label="Summary">
        <div class="columns">
          <div class="column">
            <div class="box">
              <div class="content">
                <p class="title is-4">Global KDA</p>
                <chartjs-doughnut
                  :bind="true"
                  :datasets="datasets"
                  :labels="labels"
                  :option="option"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="content">
                <p class="title is-4">Best Map</p>
                <figure class="image is-3by1" style="margin: 1em;">
                  <img :src="getImgUrl('bind')" style="border-radius: 6px" />
                </figure>
                <p class="title is-5">Bind</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <p class="title is-4">Latest matches</p>
            <latest-matches></latest-matches>
            <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="Characters">
        <agents-grid></agents-grid>
      </b-tab-item>
      <b-tab-item label="Ranked"></b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import LatestMatches from "@/components/MyStats/LatestMatches";
import AgentsGrid from "@/components/MyStats/AgentsGrid";

export default {
  components: {
    LatestMatches,
    AgentsGrid
  },
  asyncData({ params }) {
    if (params.id === undefined) return { playerId: undefined };
    // Api request here...
    return { playerId: params.id };
  },
  data() {
    return {
      datasets: [
        {
          data: [182, 70, 240],
          backgroundColor: ["#f36e60", "#185190", "#ffdb3b"],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],
      labels: ["Kills", "Deaths", "Assists"],
      option: {
        legend: {
          labels: {
            fontColor: "white"
          },
          position: 'bottom'
        }
      },
    };
  },
  methods: {
    getImgUrl(map) {
      return require("./maps/" + map + "-map.png");
    }
  }
};
</script>

<style scoped>
.box {
  height: 100%;
}
</style>