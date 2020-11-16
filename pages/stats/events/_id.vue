<template>
  <div class="hello" style="padding:0px">
    <div class="columns is-centered" style="padding:0px">
      <div class="column is-narrow" v-if="event" style="padding:0px">
        <div :style="{width:!$device.isMobile?'800px':'' }">
           <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
        <div class="card">
          <div class="card-content">
            <b-tabs style="padding:0px" position="is-center" type="is-toggle">
              <b-tab-item style="padding:0px" label="Players">
                <div class="is-flex" style="justify-content: space-between; align-items: center">
                  <!-- <p class="title is-4 has-text-left" style="margin-top:20px">Player Stats</p> -->
                  <b-dropdown v-model="playerStatsMapFilter" aria-role="list"> 
                    <button class="button" type="button" slot="trigger">
                      <template>
                        <span>{{ playerStatsMapIndex[playerStatsMapFilter].map }}</span>
                      </template>
                      <b-icon icon="menu-down"></b-icon>
                    </button>
                    <b-dropdown-item v-for="mapInd in playerStatsMapIndex" :key="mapInd.id" :value="mapInd.id" aria-role="listitem">
                      <div>{{ mapInd.map }}</div>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
                  <p v-if="playerStats === undefined || playerStats[0].length==0">No stats available</p>
                    <b-table
                        v-if="playerStats !== undefined && playerStats[0].length>0"
                        ref="element"
                        style="color:white"
                        :mobile-cards="false"
                        :data="playerStats[playerStatsMapFilter]"
                        default-sort="ValRating"
                        default-sort-direction="desc"
                        :striped="true"
                        :hoverable="true"
                        :paginated="true"
                      >
                        <template slot-scope="props">
                          <b-table-column
                            searchable
                            label="Name"
                            field="Player"
                            style="width:150px"
                          >
                            <div style="width:100px">
                              <country-flag v-bind:country="props.row.country_code" size="normal" style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px" />
                              <nuxt-link
                                :to="`/players/${props.row.player_oid}/${props.row.Player}`"
                                style="padding:0px;color:white"
                              >
                              {{props.row.Player}}
                              </nuxt-link>
                            </div>
                          </b-table-column>
                          <b-table-column label="Top Agents" field="agents">
                            <img v-for="agent in props.row['Top 3 Agents']" :key="agent" :src="getAgentImgUrl(agent.Agent.toLowerCase())" alt="Agent Name" style="border-radius:50%; height: 25px; width: 25px">
                          </b-table-column>
                          <b-table-column sortable label="Rating" field="ValRating">
                            <div
                              :style="props.row.ValRating>1?'color:limegreen':'color:orangered'"
                            >{{props.row.ValRating.toFixed(2)}}</div>
                          </b-table-column>
                          <b-table-column label="ACS" field="ACS">
                            <div
                              style="text-align:left"
                              v-if="props.row.ACS"
                            >{{(props.row.ACS).toFixed(2)}}</div>
                          </b-table-column>
                          <b-table-column label="K/D" field="kd">
                            <div
                              v-if="props.row['K/D']"
                            >{{(props.row['K/D']).toFixed(2)}}</div>
                          </b-table-column>
                          <b-table-column label="Kills" field="Total Kills">
                            <div>{{(props.row['Total Kills'])}}</div>
                          </b-table-column>
                          <b-table-column label="Deaths" field="Total Deaths">
                            <div
                            >{{(props.row['Total Deaths'])}}</div>
                          </b-table-column>
                          <b-table-column label="Assists" field="Total Assists">
                            <div
                            >{{(props.row['Total Assists'])}}</div>
                          </b-table-column>
                        </template>
                    </b-table>
              </b-tab-item>
              <b-tab-item v-if="allAgentStats" style="padding:0px" label="Agents">
                <div class="is-flex" style="justify-content: space-between; align-items: center">
                  <!-- <p class="title is-4 has-text-left" style="margin-top:20px">Stats Per Agent</p> -->
                  <b-dropdown v-model="agentStatsFilter" aria-role="list"> 
                    <button class="button" type="button" slot="trigger">
                      <template>
                        <span>{{ agentStatsMapIndex[agentStatsFilter].map }}</span>
                      </template>
                      <b-icon icon="menu-down"></b-icon>
                    </button>
                    <b-dropdown-item v-for="mapInd in agentStatsMapIndex" :key="mapInd.id" :value="mapInd.id" aria-role="listitem">
                      <div>{{ mapInd.map }}</div>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
                <client-only>
                <p v-if="allAgentStats === undefined || allAgentStats[0].length==0">No stats available</p>
                <b-table
                  style="color:white"
                  :mobile-cards="false"
                  :data="allAgentStats[agentStatsFilter]"
                  default-sort="ValRating"
                  default-sort-direction="desc"
                  :striped="true"
                  :hoverable="true"
                  v-if="allAgentStats !== undefined"
                >
                  <template slot-scope="props">
                    <b-table-column label="Agent" field="Agent" >
                      <div style="width:100px">
                      <img :src="getAgentImgUrl(props.row.Agent.toLowerCase())" alt="Agent Name" style="border-radius:50%; height: 25px; width: 25px">
                      <span style="vertical-align: top">{{ props.row.Agent }}</span>
                      </div>
                    </b-table-column>
                     <b-table-column label="Pickrate" field="Pickrate" sortable>
                      {{ (props.row['Pickrate'] * 100).toFixed(2) }}%
                    </b-table-column>
                    <b-table-column label="Win %" field="Win %">
                      {{ (props.row['Win %'] * 100).toFixed(2) }}
                    </b-table-column>
                    <b-table-column label="Rating" field="ValRating" sortable >
                      <div :style="props.row['ValRating']>1?'color:limegreen':'color:orangered'">{{ props.row['ValRating'].toFixed(2) }}</div>
                    </b-table-column>
                    <b-table-column label="ACS" field="ACS" >
                      {{ props.row['ACS'].toFixed(2) }}
                    </b-table-column>
                    <b-table-column label="Econ" field="Econ Rating" >
                      {{ props.row['Econ Rating'].toFixed(2) }}
                    </b-table-column>
                    <b-table-column label="Kills" field="Total Kills" >
                      {{ props.row['Total Kills'] }}
                    </b-table-column>
                    <b-table-column label="Deaths" field="Total Deaths" >
                      {{ props.row['Total Deaths'] }}
                    </b-table-column>
                    <b-table-column label="K/D" field="K/D" >
                      {{ props.row['K/D'].toFixed(2) }}
                    </b-table-column>
                  </template>
                </b-table>
              </client-only>
              </b-tab-item>
              <b-tab-item v-if="mapStats" label="Maps">
                <!-- <p class="title is-4 has-text-left" style="margin-top:20px;margin-bottom:-20px">Stats per Map</p> -->
                <br>
                <div v-if="mapStats === undefined || mapStats.length === 0">
                  <p>No stats available</p>
                </div>
                <div v-else v-for="map in mapStats" :key="map.Map" style="display:inline-block;padding:00px;width:100%">
                  <div
                    class="card"
                    style="display:inline-block;width:100%;background-color:#202836"
                    >
                    <div class="card-content is-flex" 
                    :style="{'height':$device.isMobile ? '200px': '100px', 'padding': 0, 'align-items': 'flex-end', 'background':  `url(${mapToImgMap[map.Map]}) center center`, 'background-size': 'cover'}">
                      <div style="width: 100%">
                        <div style="padding-bottom: 30px">
                          <div class="myDiv">
                            <div class="bg"></div>
                              <div class="columns  is-center">
                                <div v-if="!$device.isMobile" class="column is-half" style="text-align:left;margin-left:20px">
                                  {{map.Map}} 
                                </div>
                                <div v-else class="column is-half" style="font-size:20px">
                                  {{map.Map}}
                                </div>
                                <div v-if="!$device.isMobile" class="column is-half" style="text-align:right; margin-left:-40px">
                                   Pickrate: {{ (map['Pickrate'] * 100).toFixed(2) }}%
                                </div>
                                <div v-else class="column is-half" style="font-size:20px">
                                   Pickrate: {{ (map['Pickrate'] * 100).toFixed(2) }}%
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="title is-6 has-text-center" style="margin-top:10px">Top teams</p>
                      <b-table
                        style="color:white;background-color:#141921;margin-bottom:40px;margin-top:-10px"
                        class="myTable has-background-color-dark"
                        :mobile-cards="false"
                        :data="topTeamsPerMap[map.gamemap_oid]"
                        default-sort="ValRating"
                        default-sort-direction="desc"
                        :striped="true"
                        :hoverable="true"
                      >
                        <template slot-scope="props">
                           <b-table-column label="Team" field="Team">
                            <div style="text-align:left;margin-top:-7px;width:120px">
                          <div style="text-align:left;margin-top:-7px;">
                          <img
                                        style="vertical-align:middle;width:20px;height:20px;display:inline-block;margin-bottom:-10px"
                                         :src="getTeamImg(props.row.team_img)"
                                      />
                                    
                          <nuxt-link
                            :to="`/teams/${props.row.team_oid}`"
                            style="padding:0px;color:white;margin-top:50px;position:relative;"
                            ><div style="width: 80px;white-space: nowrap;overflow:hidden;text-overflow: ellipsis;display:inline-block;margin-bottom:-12px;margin-left:5px">{{ props.row["Team"] }}</div></nuxt-link
                          >
                        </div>
                        </div>
                          </b-table-column>
                          <b-table-column label="Rating" field="ValRating">
                            <div
                              :style="props.row.ValRating>1?'color:limegreen':'color:orangered'"
                            >{{props.row.ValRating.toFixed(2)}}</div>
                          </b-table-column>
                          <b-table-column label="Win %" field="Win %" >
                            {{ (props.row['Win %']*100).toFixed(2) }}
                          </b-table-column>
                          <b-table-column label="Econ" field="Econ Rating" >
                            {{ props.row['Econ Rating'].toFixed(2) }}
                          </b-table-column>
                          <b-table-column label="Kills" field="Total Kills" >
                            {{ props.row['Total Kills'] }}
                          </b-table-column>
                          <b-table-column label="Deaths" field="Total Deaths" >
                            {{ props.row['Total Deaths'] }}
                          </b-table-column>
                          <b-table-column label="K/D" field="K/D" >
                            {{ props.row['K/D'].toFixed(2) }}
                          </b-table-column>
                          <b-table-column label="K/R" field="K/R" >
                            {{ props.row['K/R'].toFixed(2) }}
                          </b-table-column>
                          <b-table-column label="D/R" field="D/R" >
                            {{ props.row['D/R'].toFixed(2) }}
                          </b-table-column>
                          <b-table-column label="FB/R" field="FB/R" >
                            {{ props.row['FB/R'].toFixed(2) }}
                          </b-table-column>
                        </template>
                      </b-table>
                    </div>
                  </div>
                </div>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require("moment");
import axios from "axios";
export default {
  name: "eventStats",
  props: {
    type: String,
    eventId: String
  },
  head() {
    return {
      title: this.event.name + " Stats"
    };
  },
  data() {
    return {
      agentStatsFilter: 0,
      agentStatsMapIndex: [
        { id: 0, map: 'All' },
        { id: 1, map: 'Haven' },
        { id: 2, map: 'Bind' },
        { id: 3, map: 'Split' },
        { id: 4, map: 'Ascent' }
      ],
      playerStatsMapFilter: 0,
      playerStatsMapIndex: [
        { id: 0, map: 'All' },
        { id: 1, map: 'Haven' },
        { id: 2, map: 'Bind' },
        { id: 3, map: 'Split' },
        { id: 4, map: 'Ascent' }
      ],
      allAgentStats: undefined,
      playerStatsPerMap: undefined,
      mapToImgMap: {
        Haven: process.env.baseUrl + 'api/uploads/maps/haven-map.png',
        Bind: process.env.baseUrl + 'api/uploads/maps/bind-map.png',
        Split: process.env.baseUrl + 'api/uploads/maps/split-map.png',
        Ascent: process.env.baseUrl + 'api/uploads/maps/1591356011062-rsz_ascent_map.png'
      },
      event: undefined,
      playerStats: undefined,
      mapHistory: undefined,
      mapStats: undefined,
      topTeamsPerMap: undefined
    };
  },
  created() {
    return axios.all([
        axios.get(process.env.baseUrl + "api/events/" + this.eventId),
        axios.post(process.env.baseUrl + `api/db/playerstats`, { filters: `event_oids=>'{${this.eventId}}'` }),
        axios.get(process.env.baseUrl + `api/gamemaps`)
      ])
      .then(
        axios.spread(async (event, eventPlayerStats, gamemapsRaw) => {
          let playerStats = eventPlayerStats.data;
          this.mapHistory = gamemapsRaw.data.data;
          let mapIds = this.mapHistory.map(map => {
            return map._id
          })

          let mapTeamRequests = [];
          for (let i = 0; i < mapIds.length; i++) {
            let newRequest = axios({method: 'post', url: process.env.baseUrl + `api/db/teamStats`, data: { filters: `event_oids=>'{${this.eventId}}',gamemap_oids=>'{${mapIds[i]}}'` } })
            mapTeamRequests.push(newRequest);
          }

          let mapStats = []

          let data = await axios.all([
            axios.post(process.env.baseUrl + `api/db/mapstats`, { filters: `event_oids=>'{${this.eventId}}'`}),
             ...mapTeamRequests])
             .then(axios.spread(async (res, ...mapTeamResponses) => {
            for(let i = 0; i < res.data.length; i++) {
              mapStats[i] = res.data[i];
            }
            let topTeamsPerMap = {}
            for (let i = 0; i < mapIds.length; i++){
              topTeamsPerMap[mapIds[i]] = mapTeamResponses[i].data.sort((a, b) => {
                return b.ValRating - a.ValRating
              }).splice(0,3)
              
            }
            return { playerStats: playerStats, event: event.data, mapStats: mapStats, topTeamsPerMap }
          }))
          this.event = data.event
          this.playerStats = [data.playerStats]
          this.mapStats = data.mapStats
          this.topTeamsPerMap = data.topTeamsPerMap
          this.continue()
          // return { event: data.event, playerStats: [data.playerStats], mapHistory, mapStats: data.mapStats, topTeamsPerMap: data.topTeamsPerMap };
        })
      )
  },
  methods: {
    getTeamImg(img) {
      if (img) {
        return process.env.baseUrl + `api/uploads/teams/${img}`;
      } else {
        return process.env.baseUrl + `api/uploads/teams/unknown.png`;
      }
    },
    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    },
    getAgentImgUrl(img) {
      if (img) {
        return process.env.baseUrl + `api/uploads/agents/${img}.png`;
      } else {
        return process.env.baseUrl + `api/uploads/agents/unknown.png`;
      }
    },
    continue() {
    let agentRequests = [];
    let mapIds = this.mapHistory.map(map => {
      return map._id
    })
    agentRequests.push(axios({method: 'post', url: process.env.baseUrl + `api/db/agentstats`, data: { filters: `event_oids=>'{${this.event._id}}'` } }))
    for (let i = 0; i < mapIds.length; i++) {
      let newRequest = axios({method: 'post', url: process.env.baseUrl + `api/db/agentstats`, data: { filters: `event_oids=>'{${this.event._id}}',gamemap_oids=>'{${mapIds[i]}}'` } })
      agentRequests.push(newRequest);
    }
    axios.all(agentRequests).then(axios.spread((...agentStatsResponses) => {

      this.allAgentStats = agentStatsResponses.map(res => res.data);
    }))
    let playerStatsPerMapRequests = []
    for (let i = 0; i < mapIds.length; i++) {
      let newRequest = axios({method: 'post', url: process.env.baseUrl + `api/db/playerstats`, data: { filters: `event_oids=>'{${this.event._id}}',gamemap_oids=>'{${mapIds[i]}}'` } })
      playerStatsPerMapRequests.push(newRequest)
    }
    axios.all(playerStatsPerMapRequests).then(axios.spread((...playerStatsPerMapResponses) => {
      playerStatsPerMapResponses.map(res =>  this.playerStats.push(res.data))
    }))
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
.myDiv {
    position: relative;
    z-index: 1;
    font-size: 25px;
    color:#ff4653;
    font-weight: bold;
}
.myDiv .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:black;
    opacity: .8;
    width: 100%;
    height: 100%;
}
.myTable {
  /deep/ table {
    background-color: #161b24;
  }
}
</style>
