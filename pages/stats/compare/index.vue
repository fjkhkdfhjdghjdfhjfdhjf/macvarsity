<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">Professional Valorant Stats</h1>
    <div class="columns is-centered is-mobile">
      <div class="column is-narrow" :key="this.selectedPlayerDataOne">
        <div :style="{width:!$device.isMobile?'800px':'' }">
           <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
        <div class="card" style="margin-top:20px">
          <div class="card-content">
            <p class="title">Compare Players</p>
            <div class="columns is-mobile">
              <div class="column is-half">
                <b-field label="Player One" style="text-align:center">
                  <b-autocomplete
                    icon="magnify"
                    :data="playerSearchData"
                    placeholder="Player One..."
                    field="name"
                    :loading="fetchingPlayer"
                    @typing="getPlayerSearchResults"
                    @select="option => {selectedPlayer = option}"
                  >
                    <template slot-scope="props">
                      <div>
                        <span>
                          <country-flag
                            v-if="props.option.flag !== undefined"
                            v-bind:country="props.option.flag"
                            size="small"
                            style="vertical-align:-15px; margin-left:-20px; margin-right:-15px"
                          />
                          <country-flag
                            v-if="props.option.flag === undefined"
                            country="un"
                            size="small"
                            style="vertical-align:-15px; margin-left:-20px; margin-right:-15px"
                          />
                          <div
                            v-if="props.option.realName.first !== ''"
                            style="display:inline-block"
                          >
                            {{props.option.realName.first}}
                            <span
                              style="color:#ff726f;margin-left:4px;"
                            >"{{ props.option.name }}"</span>
                            <span style="margin-left:4px">{{props.option.realName.last}}</span>
                          </div>
                          <div
                            v-if="props.option.realName.first == ''"
                            style="display:inline-block"
                          >
                            {{props.option.realName.first}}
                            <span
                              style="color:#ff726f;margin-left:4px;"
                            >{{ props.option.name }}</span>
                            <span style="margin-left:4px">{{props.option.realName.last}}</span>
                          </div>
                        </span>
                      </div>
                    </template>
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
              </div>
              <div class="column is-half">
                <b-field label="Player Two" style="text-align:center">
                  <b-autocomplete
                    icon="magnify"
                    :data="playerSearchData"
                    placeholder="Player Two..."
                    field="name"
                    :loading="fetchingPlayer"
                    @typing="getPlayerSearchResults"
                    @select="option => {selectedPlayerTwo = option}"
                  >
                    <template slot-scope="props">
                      <div>
                        <span>
                          <country-flag
                            v-if="props.option.flag !== undefined"
                            v-bind:country="props.option.flag"
                            size="small"
                            style="vertical-align:-15px; margin-left:-20px; margin-right:-15px"
                          />
                          <country-flag
                            v-if="props.option.flag === undefined"
                            country="un"
                            size="small"
                            style="vertical-align:-15px; margin-left:-20px; margin-right:-15px"
                          />
                          <div
                            v-if="props.option.realName.first !== ''"
                            style="display:inline-block"
                          >
                            {{props.option.realName.first}}
                            <span
                              style="color:#ff726f;margin-left:4px;"
                            >"{{ props.option.name }}"</span>
                            <span style="margin-left:4px">{{props.option.realName.last}}</span>
                          </div>
                          <div
                            v-if="props.option.realName.first == ''"
                            style="display:inline-block"
                          >
                            {{props.option.realName.first}}
                            <span
                              style="color:#ff726f;margin-left:4px;"
                            >{{ props.option.name }}</span>
                            <span style="margin-left:4px">{{props.option.realName.last}}</span>
                          </div>
                        </span>
                      </div>
                    </template>
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
              </div>
            </div>

            <div style="text-align:center">
              <b-field label="Maps">
                <b-select expanded placeholder="All" v-model="selectedMap">
                  <option
                    expanded
                    style="color:white"
                    v-for="option in gameMaps"
                    :value="option._id"
                    :key="option._id"
                  >{{ option.name }}</option>
                </b-select>
              </b-field>
              <b-button
                :disabled="selectedPlayerTwo == null"
                style="background-color:#ff726f;"
                @click="fetchPlayer(selectedPlayer, 0);fetchPlayer(selectedPlayerTwo, 1)"
                id="test"
              >Compare</b-button>
            </div>
            <div class="columns is-mobile">
              <div class="column" v-if="selectedPlayerDataOne && !$device.isMobile">
                <div
                  @click="navPlayer(selectedPlayerDataOne.player._id, selectedPlayerDataOne.player.slug)"
                  class="card team-card dark-bkg"
                  style="width:180px; margin-right:auto;margin-left:auto;padding:0px;background-color:#242d3d;display:inline-block"
                >
                  <div
                    class="card-content"
                    style="padding:0px;cursor:pointer;background-color:#171e29"
                  >
                    <div
                      style="width:100%;height:150px;overflow: hidden;display:inline-block;text-align:left;padding:0px"
                    >
                      <img :src="getPlayerImg(selectedPlayerDataOne.player.img)" />
                    </div>
                    {{selectedPlayerDataOne.player.name}}
                    <div style="margin-top:15px">
                      <span style="font-size:22px">
                        <country-flag
                          v-if="selectedPlayerDataOne.player.flag !== undefined"
                          v-bind:country="selectedPlayerDataOne.player.flag"
                          size="normal"
                          style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                        />
                        <country-flag
                          v-if="selectedPlayerDataOne.player.flag === undefined"
                          country="un"
                          size="normal"
                          style="vertical-align:-15px; margin-left:-20px; margin-right:-5px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div v-if=" selectedPlayerDataOne && selectedPlayerDataTwo && (getData(selectedPlayerDataOne).numPlayed==0 && getData(selectedPlayerDataTwo).numPlayed == 0)">
                No Data Available
                </div>
                <b-menu-list label v-if="selectedPlayerDataOne && selectedPlayerDataTwo && (getData(selectedPlayerDataOne).numPlayed!=0 || getData(selectedPlayerDataTwo).numPlayed)">
                  <b-menu-item
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>Num. Maps</div>
                      <div class="columns is-mobile">
                        <div class="column is-half" style="text-align:left">
                          <span
                            v-if="getData(selectedPlayerDataOne).numMapsPlayed!=undefined"
                          >{{getData(selectedPlayerDataOne).numMapsPlayed}}</span>
                          <span v-else>{{getData(selectedPlayerDataOne).numPlayed}}</span>
                        </div>
                        <div class="column is-half" style="text-align:right">
                          <span
                            v-if="getData(selectedPlayerDataTwo).numMapsPlayed!=undefined"
                          >{{getData(selectedPlayerDataTwo).numMapsPlayed}}</span>
                          <span v-else>{{getData(selectedPlayerDataTwo).numPlayed}}</span>
                        </div>
                      </div>
                    </template>
                  </b-menu-item>
                  <b-menu-item
                    class="dark-bkg"
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>ACS</div>
                      <div class="columns is-mobile">
                        <div
                          class="column is-half"
                          style="text-align:left"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataOne).avgCombatScore,getData(selectedPlayerDataTwo).avgCombatScore)"
                        >{{getData(selectedPlayerDataOne).avgCombatScore.toFixed(2)}}</div>
                        <div
                          class="column is-half"
                          style="text-align:right"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataTwo).avgCombatScore,getData(selectedPlayerDataOne).avgCombatScore)"
                        >{{getData(selectedPlayerDataTwo).avgCombatScore.toFixed(2)}}</div>
                      </div>
                    </template>
                  </b-menu-item>
                  <b-menu-item
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>KPR</div>
                      <div class="columns is-mobile">
                        <div
                          v-if="selectedMap !='all'"
                          class="column is-half"
                          style="text-align:left"
                          v-bind:class="getOutcomeClass((getData(selectedPlayerDataOne).kills*getData(selectedPlayerDataOne).numPlayed/(getData(selectedPlayerDataOne).roundsWon + getData(selectedPlayerDataOne).roundsLost)), (getData(selectedPlayerDataTwo).kills*getData(selectedPlayerDataTwo).numPlayed/(getData(selectedPlayerDataTwo).roundsWon + getData(selectedPlayerDataTwo).roundsLost)))"
                        >{{(getData(selectedPlayerDataOne).kills*getData(selectedPlayerDataOne).numPlayed/(getData(selectedPlayerDataOne).roundsWon + getData(selectedPlayerDataOne).roundsLost)).toFixed(2)}}</div>
                        <div class="column is-half" style="text-align:left" v-else>N/A</div>
                        <div
                          v-if="selectedMap !='all'"
                          class="column is-half"
                          style="text-align:right"
                          v-bind:class="getOutcomeClass((getData(selectedPlayerDataTwo).kills*getData(selectedPlayerDataTwo).numPlayed/(getData(selectedPlayerDataTwo).roundsWon + getData(selectedPlayerDataTwo).roundsLost)),(getData(selectedPlayerDataOne).kills*getData(selectedPlayerDataOne).numPlayed/(getData(selectedPlayerDataOne).roundsWon + getData(selectedPlayerDataOne).roundsLost)))"
                        >{{(getData(selectedPlayerDataTwo).kills*getData(selectedPlayerDataTwo).numPlayed/(getData(selectedPlayerDataTwo).roundsWon + getData(selectedPlayerDataTwo).roundsLost)).toFixed(2)}}</div>
                        <div class="column is-half" style="text-align:right" v-else>N/A</div>
                      </div>
                    </template>
                  </b-menu-item>
                  <b-menu-item
                    class="dark-bkg"
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>Kills</div>
                      <div class="columns is-mobile">
                        <div
                          class="column is-half"
                          style="text-align:left"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataOne).kills,getData(selectedPlayerDataTwo).kills)"
                        >{{getData(selectedPlayerDataOne).kills.toFixed(2)}}</div>
                        <div
                          class="column is-half"
                          style="text-align:right"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataTwo).kills,getData(selectedPlayerDataOne).kills)"
                        >{{getData(selectedPlayerDataTwo).kills.toFixed(2)}}</div>
                      </div>
                    </template>
                  </b-menu-item>
                  <b-menu-item
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>Deaths</div>
                      <div class="columns is-mobile">
                        <div
                          class="column is-half"
                          style="text-align:left"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataTwo).deaths,getData(selectedPlayerDataOne).deaths)"
                        >{{getData(selectedPlayerDataOne).deaths.toFixed(2)}}</div>
                        <div
                          class="column is-half"
                          style="text-align:right"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataOne).deaths,getData(selectedPlayerDataTwo).deaths)"
                        >{{getData(selectedPlayerDataTwo).deaths.toFixed(2)}}</div>
                      </div>
                    </template>
                  </b-menu-item>

                  <b-menu-item
                    class="dark-bkg"
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div>Assists</div>
                      <div class="columns is-mobile">
                        <div
                          class="column is-half"
                          style="text-align:left"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataOne).assists, getData(selectedPlayerDataTwo).assists)"
                        >{{getData(selectedPlayerDataOne).assists.toFixed(2)}}</div>
                        <div
                          class="column is-half"
                          style="text-align:right"
                          v-bind:class="getOutcomeClass(getData(selectedPlayerDataTwo).assists,getData(selectedPlayerDataOne).assists)"
                        >{{getData(selectedPlayerDataTwo).assists.toFixed(2)}}</div>
                      </div>
                    </template>
                  </b-menu-item>
                </b-menu-list>
                <br />
                <div
                  v-if="selectedPlayerDataOne && selectedPlayerDataTwo && selectedMap !='all' && (getData(selectedPlayerDataOne).numPlayed!=0 || getData(selectedPlayerDataTwo).numPlayed)"
                >Agents Times Used</div>
                
                <!-- <div
                  v-if="selectedPlayerDataOne && selectedPlayerDataTwo && selectedMap !='all'"
                >Agents Times Used</div>
                <div
                  class="columns"
                  style="margin-top:10px;"
                  v-if="selectedPlayerDataOne && selectedPlayerDataTwo && selectedMap !='all'"
                >
                  <div class="column is-full" style="border-width:0px">
                    <div
                      class="card"
                      v-for="(agent, index) in agents"
                      v-bind:class="index%2!=0?'dark-bkg':''"
                      :key="agent._id"
                    >
                      <div
                        class="columns is-mobile"
                        v-if="getData(selectedPlayerDataOne).agents[agent._id]!=undefined || getData(selectedPlayerDataTwo).agents[agent._id]!=undefined"
                      >
                        <div
                          class="column"
                          style="text-align:left"
                          v-if="getData(selectedPlayerDataOne).agents[agent._id]"
                        >{{getData(selectedPlayerDataOne).agents[agent._id]}}</div>
                        <div class="column" style="text-align:left" v-else>0</div>
                        <div class="column is-narrow">
                          <div
                            style="width:25px;height:25px;overflow: hidden;display:inline-block;text-align:left"
                          >
                            <img :src="getAgent(agent.img)" style="border-radius: 50%;" />
                          </div>
                        </div>
                        <div
                          v-if="getData(selectedPlayerDataTwo).agents[agent._id]"
                          class="column"
                          style="text-align:right"
                        >{{getData(selectedPlayerDataTwo).agents[agent._id]}}</div>
                        <div class="column" style="text-align:right" v-else>0</div>
                      </div>
                    </div>
                  </div>
                </div>-->
              </div>
              <div class="column" v-if="selectedPlayerDataTwo && !$device.isMobile">
                <div
                  @click="navPlayer(selectedPlayerDataTwo.player._id, selectedPlayerDataTwo.player.slug)"
                  class="card team-card dark-bkg"
                  style="width:180px; margin-right:auto;margin-left:auto;padding:0px;background-color:#242d3d;display:inline-block"
                >
                  <div
                    class="card-content"
                    style="padding:0px;cursor:pointer;background-color:#171e29"
                  >
                    <div
                      style="width:100%;height:150px;overflow: hidden;display:inline-block;text-align:left;padding:0px"
                    >
                      <img :src="getPlayerImg(selectedPlayerDataTwo.player.img)" />
                    </div>
                    {{selectedPlayerDataTwo.player.name}}
                    <div style="margin-top:15px">
                      <span style="font-size:22px">
                        <country-flag
                          v-if="selectedPlayerDataTwo.player.flag !== undefined"
                          v-bind:country="selectedPlayerDataTwo.player.flag"
                          size="normal"
                          style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                        />
                        <country-flag
                          v-if="selectedPlayerDataTwo.player.flag === undefined"
                          country="un"
                          size="normal"
                          style="vertical-align:-15px; margin-left:-20px; margin-right:-15px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="columns is-centered is-vcentered is-mobile"
              v-if="selectedPlayerDataOne"
              style
            >
              <div class="column is-half has-text-centered">
                <b-menu-list
                  style="margin-top:100px;color:white"
                  v-if="selectedPlayerDataOne && selectedPlayerDataTwo && selectedMap !='all'"
                >
                  <b-menu-item
                    v-for="(agent, index) in processAgents(agents)"
                    v-bind:class="index%2!=0?'dark-bkg':''"
                    :key="agent._id"
                    expanded
                    style="border-bottom-color:#171e29;border-bottom-height:1px;border-bottom-style:solid"
                  >
                    <template slot="label">
                      <div class="columns is-mobile">
                        <div
                          class="column"
                          style="text-align:left;="
                          v-if="getData(selectedPlayerDataOne).agents[agent._id]"
                        >{{getData(selectedPlayerDataOne).agents[agent._id]}}</div>
                        <div class="column" style="text-align:left" v-else>0</div>
                        <div class="column is-narrow">
                          <div
                            style="width:25px;height:25px;overflow: hidden;display:inline-block;text-align:left"
                          >
                            <img :src="getAgent(agent.img)" style="border-radius: 50%;" />
                          </div>
                        </div>
                        <div
                          v-if="getData(selectedPlayerDataTwo).agents[agent._id]"
                          class="column"
                          style="text-align:right;"
                        >{{getData(selectedPlayerDataTwo).agents[agent._id]}}</div>
                        <div class="column" style="text-align:right" v-else>0</div>
                      </div>
                    </template>
                  </b-menu-item>
                </b-menu-list>
                <!-- <div v-for="(val, agent) in getData(selectedPlayerDataOne).agents" :key="agent._id">
                  <div v-for="agentActual in agents" :key="agentActual._id">
                    <div v-if="agentActual._id === agent">
                      <div
                        style="width:25px;height:25px;overflow: hidden;display:inline-block;text-align:left"
                      >
                        <img :src="getAgent(agentActual.img)" style="border-radius: 50%;" />
                      </div>
                    </div>
                  </div>
                </div>-->
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
import debounce from "lodash/debounce";
import axios from "axios";
export default {
  name: "Characters",
  props: {
    type: String
  },
  head() {
    return {
      title: "Professional Valorant Stats",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "valorant stats, valorant statistics, valorant player stats, valorant kda, top valorant players"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Valorant professional stats and statistics including top players and teams!"
        }
      ]
    };
  },
  asyncData() {
    return {
      playerSearchData: [],
      selectedPlayers: [],
      gameMaps: [],
      agents: [],
      selectedMap: undefined,
      selectedPlayer: null,
      selectedPlayerTwo: null,
      selectedPlayerDataOne: undefined,
      selectedPlayerDataTwo: undefined,
      fetchingPlayer: false
    };
    // return axios
    //   .all([
    //     axios.get(process.env.baseUrl + "api/events?$sort[createdAt]=-1"),
    //     axios.get(
    //       process.env.baseUrl +
    //         "api/playerstatstotal?$sort[matchHistory.avgCombatScore]=-1&$limit=3&populateplayer=true"
    //     )
    //   ])
    //   .then(
    //     axios.spread((eventsRaw, playerStatsTotalRaw) => {
    //       return {
    //         events: eventsRaw.data.data,
    //         playerHighlights: playerStatsTotalRaw.data.data
    //       };
    //     })
    //   )
    //   .catch(err => console.log(err));
  },
  mounted() {
    axios
      .get(process.env.baseUrl + `api/gamemaps`)
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        this.gameMaps = response.data;
        this.gameMaps.push({ _id: "all", name: "All" });
      });

    axios
      .get(process.env.baseUrl + `api/agents`)
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        this.agents = response.data;
        for (let i = 0; i < this.agents.length; i++) {
          if (this.agents[i].name == "Unknown") {
            this.agents.splice(i, 1);
            break;
          }
        }
      });
  },
  methods: {
    getAgent(img) {
      if (img) {
        return process.env.baseUrl + `api/uploads/agents/${img}`;
      } else {
        return process.env.baseUrl + `api/uploads/agents/unknown.png`;
      }
    },
    getOutcomeClass(statOne, statTwo) {
      if (statOne > statTwo) {
        return "winner";
      } else if (statOne < statTwo) {
        return "loser";
      } else {
        return "tie";
      }
    },
    fetchPlayer(player, index) {
      axios
        .get(
          process.env.baseUrl +
            "api/playerstatstotal?populateplayer=true&playerId=" +
            player._id
        )
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          if (index == 0) {
            this.selectedPlayerDataOne = response.data[0];
          } else {
            this.selectedPlayerDataTwo = response.data[0];
          }
        });
    },
    getData(data) {
      console.log(this.selectedMap);
      if (this.selectedMap == "all") {
        return data.matchHistory;
      } else {
        if (!data.mapHistory.stats[this.selectedMap]) {
          return {
            numPlayed: 0,
            avgCombatScore: 0,
            kills: 0,
            deaths: 0,
            assists: 0,
            winRate: 0,
            roundsWon: 0,
            roundsLost: 0,
            agents: {}
          };
        }
        return data.mapHistory.stats[this.selectedMap];
      }
    },
    getPlayerSearchResults: debounce(function(name) {
      if (!name.length) {
        this.playerSearchData = [];
        // this.playerPage = 1
        // this.totalPlayerPages = 1
        return;
      }
      this.fetchingPlayer = true;
      this.$axios(process.env.baseUrl + `api/players?name[$search]=${name}`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.playerSearchData = [];
          response.data.forEach(item => this.playerSearchData.push(item));
        })
        .catch(error => {
          this.playerSearchData = [];
          throw error;
        })
        .finally(() => {
          this.fetchingPlayer = false;
        });
    }, 500),
    getPlayerImg(img) {
      return process.env.baseUrl + `api/uploads/players/${img}`;
    },
    navPlayer(id, slug) {
      this.$router.push({ path: `/players/${id}` });
    },
    processAgents(agents) {
      let final = [];
      for (let i = 0; i < agents.length; i++) {
        if (
          this.getData(this.selectedPlayerDataOne).agents[agents[i]._id] !=
            undefined ||
          this.getData(this.selectedPlayerDataTwo).agents[agents[i]._id] !=
            undefined
        ) {
          final.push(agents[i]);
        }
      }
      return final;
    }
  },
  components: { }
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
.table thead {
  display: none;
}

.winner {
  color: lightgreen;
}
.loser {
  color: orangered;
}
.dark-bkg {
  background-color: #202836;
}
</style>
