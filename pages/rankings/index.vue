<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">Professional Valorant Rankings</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{width:!$device.isMobile?'800px':'' }">
          <div class="card">
            <div class="card-content">
              <p class="title" style="display:inline-block">Top 100 Rankings</p>
              <div style="text-align:right">Min. 200 rounds played</div>
              <b-tabs
                type="is-boxed"
                class="tabsMyStats"
                position="is-centered"
                style="margin-top:20px"
              >
                <b-tab-item label="Total">
                  <b-table
                    ref="element"
                    style="color:white;min-height:650px"
                    :paginated="true"
                    :per-page="10"
                    :mobile-cards="false"
                    :data="(data)"
                    default-sort="matchHistory.rating"
                    default-sort-direction="desc"
                    :striped="true"
                    :hoverable="true"
                  >
                    <template slot-scope="props">
                      <b-table-column sortable label="#" field="rankNum"><div style="width:10px">{{props.row.rankNum}}</div></b-table-column>
                      <b-table-column
                        searchable
                        label="Name"
                        field="player.name"
                        style="text-align:left"
                      >
                        <div style="text-align:left;margin-top:-7px;width:100px" v-if="props.row.player">
                          <country-flag
                            v-if="props.row.player.flag !== undefined"
                            v-bind:country="props.row.player.flag"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <country-flag
                            v-if="props.row.player.flag === undefined"
                            country="un"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <nuxt-link
                            :to="`/players/${props.row.player._id}/${props.row.player.name}`"
                            style="padding:0px;color:white"
                          >{{props.row.player.name}}</nuxt-link>
                        </div>
                      </b-table-column>
                      <b-table-column label="Agents" field="agents" style="width:100px;">
                        <span
                          v-for="(agent,agentId, index) in getAllAgentsUsed(props.row)"
                          :key="agentId"
                        >
                          <span v-if="index<=2">
                            <b-tooltip
                              :label="`${agent} maps played`"
                              position="is-top"
                              type="is-dark"
                            >
                              <img
                                :src="getAgent(agents[agentId].img)"
                                style="border-radius: 50%;width:25px"
                              />
                            </b-tooltip>
                          </span>
                        </span>
                      </b-table-column>
                      <b-table-column label="Rounds" field="rounds">
                        <div
                          style="text-align:left"
                          v-if="props.row.matchHistory.avgCombatScore"
                        >{{props.row.matchHistory.numRoundsPlayed}}</div>
                      </b-table-column>
                      <b-table-column sortable label="Rating" field="matchHistory.rating">
                        <div
                          style="text-align:left"
                          :style="props.row.matchHistory.rating>1?'color:limegreen':'color:orangered'"
                          v-if="props.row.matchHistory.rating"
                        >{{(props.row.matchHistory.rating).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column sortable label="ACS" field="matchHistory.avgCombatScore">
                        <div
                          style="text-align:left"
                          v-if="props.row.matchHistory.avgCombatScore"
                        >{{(props.row.matchHistory.avgCombatScore).toFixed(0)}}</div>
                      </b-table-column>

                      <b-table-column label="K/D" field="kd">
                        <div
                          style="text-align:center"
                          v-if="props.row.matchHistory.econRating"
                        >{{(props.row.matchHistory.kills/props.row.matchHistory.deaths).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column label="KPR" field="kpr">
                        <div
                          style="text-align:left"
                          v-if="props.row.matchHistory.kpr"
                        >{{(props.row.matchHistory.kpr).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column label="DPR" field="dpr">
                        <div
                          style="text-align:left"
                          v-if="props.row.matchHistory.kpr"
                        >{{(props.row.matchHistory.dpr).toFixed(2)}}</div>
                      </b-table-column>
                    </template>
                  </b-table>
                </b-tab-item>
                <b-tab-item :label="map.name" v-for="map in gamemaps" :key="map._id">
                  <b-table
                    style="color:white"
                    :paginated="true"
                    :per-page="10"
                    :mobile-cards="false"
                    :data="mapData[map._id]"
                    :striped="true"
                    :hoverable="true"
                  >
                    <template slot-scope="props">
                      <b-table-column sortable label="#" field="rankNum">{{props.row.rankNum}}</b-table-column>
                      <b-table-column
                        searchable
                        label="Name"
                        field="player.name"
                        style="width:200px"
                      >
                        <div style="text-align:left" v-if="props.row.player">
                          <country-flag
                            v-if="props.row.player.flag !== undefined"
                            v-bind:country="props.row.player.flag"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <country-flag
                            v-if="props.row.player.flag === undefined"
                            country="un"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <nuxt-link
                            :to="`/players/${props.row.player._id}/${props.row.player.name}`"
                            style="padding:0px;color:white"
                          >{{props.row.player.name}}</nuxt-link>
                        </div>
                      </b-table-column>
                      <b-table-column label="Rounds" field="rounds">
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                        >{{props.row.mapHistory.stats[map._id].roundsWon + props.row.mapHistory.stats[map._id].roundsLost}}</div>
                      </b-table-column>
                      <b-table-column label="Agents" field="agents">
                        <div v-if="props.row.mapHistory.stats[map._id]">
                          <span
                            v-for="(agent,agentId, index) in props.row.mapHistory.stats[map._id].agents"
                            :key="agentId"
                          >
                            <span v-if="index<=2">
                              <b-tooltip
                                :label="`${agent} maps played`"
                                position="is-top"
                                type="is-dark"
                              >
                                <img
                                  :src="getAgent(agents[agentId].img)"
                                  style="border-radius: 50%;width:25px"
                                />
                              </b-tooltip>
                            </span>
                          </span>
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Rating"
                        :field="`mapHistory.stats[${map._id}].rating`"
                      >
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                          :style="props.row.mapHistory.stats[map._id].rating>1?'color:limegreen':'color:orangered'"
                        >{{(props.row.mapHistory.stats[map._id].rating).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column sortable label="ACS" field="matchHistory.avgCombatScore">
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                        >{{(props.row.mapHistory.stats[map._id].avgCombatScore).toFixed(0)}}</div>
                      </b-table-column>
                      <b-table-column label="K/D" field="kd">
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                        >{{(props.row.mapHistory.stats[map._id].kills/props.row.mapHistory.stats[map._id].deaths).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column label="KPR" field="kpr">
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                        >{{(props.row.mapHistory.stats[map._id].kpr).toFixed(2)}}</div>
                      </b-table-column>
                      <b-table-column label="DPR" field="dpr">
                        <div
                          style="text-align:left"
                          v-if="props.row.mapHistory.stats[map._id]"
                        >{{(props.row.mapHistory.stats[map._id].dpr).toFixed(2)}}</div>
                      </b-table-column>
                    </template>
                  </b-table>
                </b-tab-item>
              </b-tabs>
                            <div style="text-align:left;margin-top:10px;margin-left:40px">
                <div class="columns">
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">Rounds:</b> Total Rounds Played
                  </div>
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">Rating:</b> ValRating
                  </div>
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">ACS:</b> Average Combat Score
                  </div>
                </div>
                <div class="columns" style="margin-top:-20px">
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">K/D:</b> Kills/Death Ratio
                  </div>
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">KPR:</b> Kills Per Round
                  </div>
                  <div class="column is-one-third" style="margin-top:-20px">
                    <b style="color:#ff4653;text-align:left">DPR:</b> Deaths Per Round
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Characters",
  props: {
    type: String
  },
  head() {
    return {
      title: "Professional Valorant Rankings",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "valorant ranks, valorant rankings, valorant top players, valorant most kills"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Valorant professional rankings!"
        }
      ]
    };
  },
  data() {
    return {
      data: [],
      gamemaps: [],
      agents: {},
      mapData: {}
    };
  },
  mounted() {
    const loadingComponent = this.$buefy.loading.open({
      container: this.isFullPage ? null : this.$refs.element.$el
    });
    this.$axios(
      `https://valorantify.com/api/playerstatstotal?populateplayer=true&$limit=200&$sort[matchHistory.rating]=-1`,
      {
        method: "get"
      }
    )
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        this.data = response.data;
        this.data = this.data.filter(function(el) {
          return el.matchHistory.numRoundsPlayed > 200;
        });
        this.data = this.data.slice(0, 100);
        for (let i = 0; i < this.data.length; i++) {
          this.data[i] = {
            rankNum: i + 1,
            ...this.data[i]
          };
        }

        for (let i = 0; i < this.gamemaps.length; i++) {
          let obj = this.data.slice();
          obj.sort((a, b) => {
            if (a.mapHistory.stats[this.gamemaps[i]._id] === undefined) {
              a.mapHistory.stats[this.gamemaps[i]._id] = {
                rating: 0,
                numPlayed: 0,
                avgCombatScore: 0,
                kills: 0,
                deaths: 0,
                assists: 0,
                econRating: 0,
                kpr: 0,
                dpr: 0,
                fbpr: 0,
                winRate: 0,
                roundsWon: 0,
                roundsLost: 0
              };
            }
            if (b.mapHistory.stats[this.gamemaps[i]._id] === undefined) {
              b.mapHistory.stats[this.gamemaps[i]._id] = {
                rating: 0,
                numPlayed: 0,
                avgCombatScore: 0,
                kills: 0,
                deaths: 0,
                assists: 0,
                econRating: 0,
                kpr: 0,
                dpr: 0,
                fbpr: 0,
                winRate: 0,
                roundsWon: 0,
                roundsLost: 0
              };
            }
            return a.mapHistory.stats[this.gamemaps[i]._id].rating >
              b.mapHistory.stats[this.gamemaps[i]._id].rating
              ? 1
              : b.mapHistory.stats[this.gamemaps[i]._id].rating >
                a.mapHistory.stats[this.gamemaps[i]._id].rating
              ? -1
              : 0;
          });
          obj.reverse();
          for (let i = 0; i < obj.length; i++) {
            obj[i] = {
              rankNum: i + 1,
              ...obj[i]
            };
          }
          this.mapData[this.gamemaps[i]._id] = obj;
        }
        loadingComponent.close();
      });
    this.$axios(process.env.baseUrl + "api/gamemaps", {
      method: "get"
    })
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        this.gamemaps = response.data;
      });

    this.$axios(process.env.baseUrl + "api/agents", {
      method: "get"
    })
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.agents[response.data[i]._id] = response.data[i];
        }
      });
  },
  methods: {
    getAllAgentsUsed(data) {
      let total = {};
      for (let key in data.mapHistory.stats) {
        for (let agent in data.mapHistory.stats[key].agents) {
          if (total[agent]) {
            total[agent] += data.mapHistory.stats[key].agents[agent];
          } else {
            total[agent] = data.mapHistory.stats[key].agents[agent];
          }
        }
      }
      return total;
    },
    navTwitter() {
      window.open("https://twitter.com/valorantify", "_blank");
    },
    navEventStat(id) {
      this.$router.push({ path: `/stats/events/${id}` });
    },
    getImgUrl(img) {
      return process.env.baseUrl + `api/uploads/events/${img}`;
    },
    getPlayerImg(img) {
      return process.env.baseUrl + `api/uploads/players/${img}`;
    },
    navPlayer(id, slug) {
      this.$router.push({ path: `/players/${id}` });
    },
    getAgent(img) {
      if (img) {
        return process.env.baseUrl + `api/uploads/agents/${img}`;
      } else {
        return process.env.baseUrl + `api/uploads/agents/unknown.png`;
      }
    }
  },
  components: {  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pagination-previous, .pagination-next, .pagination-link {
    color: white !important;
}
</style>
