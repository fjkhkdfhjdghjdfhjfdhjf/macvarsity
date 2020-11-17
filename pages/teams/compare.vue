<template>
  <div class="card">
      <div class="card-content" style="margin-top:20px">
          <div class="columns is-mobile">
              <div class="column">
                    <div v-if="teamStats[0]">
                        <img :src="getTeamImg(teamStats[0].team_img)" style="border-radius: 50%; max-width: 100px; max-height: 100px" >
                        <div><p class="title is-3">{{ teamStats ? teamStats[0].Team : 'Invalid team' }}</p><p style="font-weight:bold;margin-top:-30px;color:#ff4653;font-size:14px;cursor:pointer" @click="removeTeamOne">X</p></div>
                    </div>
                    <TeamSearch @selected="fetchTeam(0, $event)" v-else/>
              </div>
              <div class="column is-flex" style="align-items: center; justify-content: center">
                  <p class="title is-1">VS</p>
                
              </div>

              <div class="column">
                    <div v-if="teamStats[1]">
                        <img :src="getTeamImg(teamStats[1].team_img)" style="border-radius: 50%; max-width: 100px; max-height: 100px" >
                        <div><p class="title is-3">{{ teamStats ? teamStats[1].Team : 'Invalid team' }}</p><p style="font-weight:bold;margin-top:-30px;color:#ff4653;font-size:14px;cursor:pointer" @click="removeTeamTwo">X</p></div>
                    </div>
                    <TeamSearch @selected="fetchTeam(1, $event)" v-else/>
              </div>
          </div>
          <div class="columns is-mobile">
              <div style="background-color: #273142;" class="column" v-for="team in teamStats" :key="team._id">
                  <div> 
                    <small>ValRating</small>
                    <div>
                        <p class="title is-4">{{ team["ValRating"].toFixed(2) }}</p>
                    </div>
                    <small>K/D</small>
                    <div>
                        <p class="title is-4">{{ team["K/D"].toFixed(2) }}</p>
                    </div>
                  </div>
              </div>
          </div>
          <div class="columns is-mobile">
                <div style="background-color: #273142;" class="column has-text-left" v-if="favoriteComp1 !== undefined">
                    <p>Favorite Comp</p>
                    <img v-for="agent in favoriteComp1.Composition" :key="agent.agent_oid" :src="getAgent(agent.agent_img)" alt="Agent Img" style="width: 30px; height: 30px; border-radius: 50%;">
                    <p>Pickrate</p>
                    <p class="title is-3">{{ (favoriteComp1.Pickrate * 100).toFixed(2)}}%</p>
                </div>
                <div class="column is-flex" v-if="favoriteComp1 !== undefined" style="background-color: #273142;align-items: center; justify-content: center; flex-direction: column">
                    <p>Winrate</p>
                    <p class="title is-3">{{ (favoriteComp1['Win %'] * 100).toFixed(1)}}%</p>
                </div>
                <div class="column is-flex" v-if="favoriteComp2 !== undefined" style="background-color: #273142;align-items: center; justify-content: center; flex-direction: column">
                    <p>Winrate</p>
                    <p class="title is-3">{{ (favoriteComp2['Win %'] * 100).toFixed(1) }}%</p>
                </div>
                <div style="background-color: #273142;" class="column has-text-right" v-if="favoriteComp2 !== undefined">
                    <p>Favorite Comp</p>
                    <img v-for="agent in favoriteComp2.Composition" :key="agent.agent_oid" :src="getAgent(agent.agent_img)" style="width: 30px; height: 30px; border-radius: 50%;">
                    <p>Pickrate</p>
                    <p class="title is-3">{{ (favoriteComp2.Pickrate * 100).toFixed(2)}}%</p>
                </div>
            </div>
          <div v-for="map in mapStats" :key="map.name" style="min-height: 150px; width: 100%; padding-left: 0.5em; padding-right: 0.5em" :style="{ 'background': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${getMapImg(map.image)}) no-repeat center center`, 'background-size': 'cover' }">
             <div class="columns is-mobile" style="max-height: 100%; margin-top: 0.25em; margin-bottom: 0.25em">
                 <div class="column has-text-left">
                     <div v-if="map.team1">
                            <div class="columns">
                                <div class="column">
                                    <p>ValRating</p>
                                    <p class="title is-5">{{ map.team1['ValRating'].toFixed(2) }}</p>
                                    <p>Pickrate</p>
                                    <p class="title is-5" style="margin: 0">{{ (map.team1['Pickrate'] * 100).toFixed(2) }}%</p>
                                    <small>{{ map.team1['Maps Played'] }} times played</small>
                                </div>
                                <div class="column is-flex" style="align-items: center; justify-content: center; flex-direction: column">
                                    <p>Winrate</p>
                                    <p class="title is-3">{{ (map.team1['Win %'] * 100).toFixed(1) }}%</p>
                                </div>
                            </div>
                     </div>
                     <div v-else>
                         <p class="title is-5">No data</p>
                     </div>
                 </div>
                 <div class="column is-flex" style="align-items: center; justify-content: center; flex-direction: column"><p class="title is-4">{{ map.name }}</p></div>
                 <div class="column has-text-right">
                     <div v-if="map.team2">
                            <div class="columns">
                                <div class="column is-flex" style="align-items: center; justify-content: center; flex-direction: column">
                                    <p>Winrate</p>
                                    <p class="title is-3">{{ (map.team2['Win %'] * 100).toFixed(1) }}%</p>
                                </div>
                                <div class="column">
                                    <p>ValRating</p>
                                    <p class="title is-5">{{ map.team2['ValRating'].toFixed(2) }}</p>
                                    <p>Pickrate</p>
                                    <p class="title is-5" style="margin: 0">{{ (map.team2['Pickrate'] * 100).toFixed(2) }}%</p>
                                    <small style="font-size: 10pt">{{ map.team2['Maps Played'] }} times played</small>
                                </div>
                            </div>
                     </div>
                     <div v-else>
                         <p class="title is-5">No data</p>
                     </div>
                 </div>
             </div>
             <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'" style="vertical-align: bottom"></b-icon>
                    {{ !props.open ? 'View Details' : 'Hide Details' }}
                </a>
                <div class="columns">
                    <div class="column" v-if="map.team1 !== undefined">
                        <p>Best Player</p>
                        <nuxt-link :to="`/players/${map.team1.bestPlayer.player_oid}`">
                            <img :src="getPlayerImgUrl(map.team1.bestPlayer.player_img)" style="height: 100px; width: 100px; border-radius: 50%" />
                            <p class="title is-4">{{map.team1.bestPlayer.Player}}</p>
                        </nuxt-link>
                    </div>
                    <div class="column is-flex" style="align-items: center; justify-content: center; flex-direction: column" v-if="map.team1 !== undefined">
                        <p>ValRating</p>
                        <p class="title is-4">{{map.team1.bestPlayer.ValRating.toFixed(2)}}</p>
                    </div>
                    <div class="column is-flex" style="align-items: center; justify-content: center; flex-direction: column" v-if="map.team2 !== undefined">
                        <p>ValRating</p>
                        <p class="title is-4">{{map.team2.bestPlayer.ValRating.toFixed(2)}}</p>
                    </div>
                    <div class="column" v-if="map.team2 !== undefined">
                        <p>Best Player</p>
                        <nuxt-link :to="`/players/${map.team2.bestPlayer.player_oid}`">
                            <img :src="getPlayerImgUrl(map.team2.bestPlayer.player_img)" style="height: 100px; width: 100px; border-radius: 50%" />
                            <p class="title is-4">{{map.team2.bestPlayer.Player}}</p>
                        </nuxt-link>
                    </div>
                </div>
                <!-- <HeadToHeadCard :headToHeadData="headToHeadData"/> -->
            </b-collapse>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import TeamSearch from '@/components/Teams/Compare/TeamSearch'
import HeadToHeadCard from '@/components/HeadToHeadCard'

export default {
    watchQuery: true,
    // asyncData( route ) {
    //     return axios.all([
    //         axios.post(process.env.baseUrl + `api/db/teamstats`,  { filters: `team_oids=>'{${route.query.team1},${route.query.team2}}'` }),
    //         axios.post(process.env.baseUrl + `api/db/mapstats`,  { filters: `team_oids=>'{${route.query.team1}}'` }),
    //         axios.post(process.env.baseUrl + `api/db/mapstats`,  { filters: `team_oids=>'{${route.query.team2}}'` }),
    //         axios.get(process.env.baseUrl + `api/gamemaps`),
    //         axios.get(
    //           // only matches of team1 vs team2 (or team2 vs team1) - head to head - with dateTime < match.dateTime
    //           process.env.baseUrl +
    //             `api/matches?active=false&$or[0][$and][0][teamOneId]=${route.query.team1}&$or[0][$and][1][teamTwoId]=${route.query.team2}&$or[0][$and][2][dateTime][$lt]=${new Date().toString()}&$or[1][$and][0][teamOneId]=${route.query.team2}&$or[1][$and][1][teamTwoId]=${route.query.team1}&$or[1][$and][2][dateTime][$lt]=${new Date().toString()}&populatemapsonly=true`
    //         ),
    //         axios.post(process.env.baseUrl + `api/db/compostats`,  { filters: `team_oids=>'{${route.query.team1}}'` }),
    //         axios.post(process.env.baseUrl + `api/db/compostats`,  { filters: `team_oids=>'{${route.query.team2}}'` }),
    //     ]).then(axios.spread(async (teamStatsRaw, mapStats1Raw, mapStats2Raw, gamemapsRaw, headToHeadRaw, compStats1Raw, compStats2Raw) => {
    //         let gamemaps = gamemapsRaw.data.data
    //         let mapStats = []
    //         let mapStats1 = mapStats1Raw.data
    //         let mapStats2 = mapStats2Raw.data
    //         let favoriteComp1 = undefined;
    //         let favoriteComp2 = undefined;

    //         compStats1Raw.data.forEach(comp => {
    //             if(favoriteComp1 === undefined) {
    //                 favoriteComp1 = comp;
    //             } else {
    //                 if (comp.Pickrate > favoriteComp1.Pickrate) {
    //                     favoriteComp1 = comp;
    //                 }
    //             }
    //         });

    //         compStats2Raw.data.forEach(comp => {
    //             if(favoriteComp2 === undefined) {
    //                 favoriteComp2 = comp;
    //             } else {
    //                 if (comp.Pickrate > favoriteComp2.Pickrate) {
    //                     favoriteComp2 = comp;
    //                 }
    //             }
    //         });
    //         let mapIds = gamemaps.map(map => {
    //             return map._id
    //         })

    //         let mapRequests = [];

    //         for (let i = 0; i < mapIds.length; i++) {
    //             let newRequest1 = axios({method: 'post', url: process.env.baseUrl + `api/db/playerstats`, data: { filters: `team_oids=>'{${route.query.team1}}',gamemap_oids=>'{${mapIds[i]}}'` } })
    //             mapRequests.push(newRequest1);
    //             let newRequest2 = axios({method: 'post', url: process.env.baseUrl + `api/db/playerstats`, data: { filters: `team_oids=>'{${route.query.team2}}',gamemap_oids=>'{${mapIds[i]}}'` } })
    //             mapRequests.push(newRequest2);
    //         }

    //         let data = await axios.all([...mapRequests]).then(axios.spread((...mapResponses) => {
    //             let mapsData = []
    //             for(let i = 0; i < mapResponses.length - 1; i += 2) {
    //                 mapsData.push({team1: mapResponses[i].data, team2: mapResponses[i + 1].data})
    //             }

    //             return mapsData;
    //         }))
    //         gamemaps.forEach((map, index) => {
    //             let team1BestPlayer = undefined;
    //             let team2BestPlayer = undefined;
    //             mapStats.push({
    //                 name: map.name,
    //                 image: map.img,
    //                 team1: mapStats1.findIndex(element => element.Map == map.name) != -1 ? mapStats1[mapStats1.findIndex(element => element.Map == map.name)] : undefined,
    //                 team2: mapStats2.findIndex(element => element.Map == map.name) != -1 ? mapStats2[mapStats2.findIndex(element => element.Map == map.name)] : undefined
    //             })
    //             if(mapStats[index].team1 !== undefined) {
    //                 data[index].team1.forEach(player => {
    //                     if(team1BestPlayer === undefined) {
    //                         team1BestPlayer = player;
    //                     } else {
    //                         if (player.ValRating > team1BestPlayer.ValRating) {
    //                             team1BestPlayer = player;
    //                         }
    //                     }
    //                 })
    //                 mapStats[index].team1.bestPlayer = team1BestPlayer;
    //             }
    //             if(mapStats[index].team2 !== undefined) {
    //                 data[index].team2.forEach(player => {
    //                     if(team2BestPlayer === undefined) {
    //                         team2BestPlayer = player;
    //                     } else {
    //                         if (player.ValRating > team2BestPlayer.ValRating) {
    //                             team2BestPlayer = player;
    //                         }
    //                     }
    //                 })
    //                 mapStats[index].team2.bestPlayer = team2BestPlayer;
    //             }
    //         })
            
    //         return { teamStats: teamStatsRaw.data.reverse(), mapStats, headToHeadData: headToHeadRaw.data.data, compStats1: compStats1Raw.data, compStats2: compStats2Raw.data, favoriteComp1, favoriteComp2 }
    //     }))
    //},
    created() {
    },
    methods: {
        getTeamImg(img) {
            return process.env.baseUrl + `api/uploads/teams/${img}`;
        },
        removeTeamOne(){
            if(this.teamStats.length>1){
                this.$router.push({query: { ...this.$route.query, team1: this.teamStats[1].team_oid, team2: undefined }})
                this.teamStats[0] = [this.teamStats[1]]
            }
            else{
                this.$router.push({query: { ...this.$route.query, team1: undefined }})
                this.teamStats = []
            }   
        },
        removeTeamTwo(){
                this.$router.push({query: { ...this.$route.query, team2: undefined }})
                this.teamStats = [this.teamStats[0]]
        },
        fetchTeam(index, option) {
            if (index === 0) {
                this.$router.push({query: { ...this.$route.query, team1: option }})
            } else {
                this.$router.push({query: { ...this.$route.query, team2: option }})
            }
        },
        getMapImg(name) {
            return process.env.baseUrl + `api/uploads/maps/${name}`;
        },
        getAgent(img) {
            return process.env.baseUrl + `api/uploads/agents/${img}`;
        },
        getPlayerImgUrl(playerId) {
            return process.env.baseUrl + `api/uploads/players/${playerId}`;
        },
    },
    components: { TeamSearch, HeadToHeadCard }
}
</script>

<style>

</style>