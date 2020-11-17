<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">
      Professional Valorant Stats
    </h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{ width: !$device.isMobile ? '800px' : '' }">
          <div class="card">
            <div class="card-content" style="padding-bottom:0px">
              <b-collapse
                aria-id="filtersCollapse"
                animation="slide"
                :open="false"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  role="button"
                  aria-controls="contentIdForA11y2"
                >
                  <p class="title" style="display:inline-block">
                    Filters<a>
                      <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                      </b-icon>
                    </a>
                  </p>

                  <br />
                </div>
                <div class="columns">
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    

                    <b-dropdown
                      :expanded="true"
                      v-model="eventRegionFilter"
                      aria-role="list"
                      multiple
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span
                            >Event Region(s):
                            {{ eventRegionFilter.length }}</span
                          >
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in eventRegionList"
                        :key="index"
                        :value="data.id"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.region }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">

                    <b-autocomplete
                      v-model="eventFilterSearch"
                      :data="eventSearch"
                      placeholder="Event"
                      field="name"
                      style=""
                      @select="option => (eventFilter = option)"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-dropdown
                      :expanded="true"
                      v-model="substageFilter"
                      aria-role="list"
                      multiple
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span
                            >Selected Stage(s):
                            {{ substageFilter.length }}</span
                          >
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in substageTypeList"
                        :key="index"
                        :value="data.id"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.substage }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
                <div class="columns">
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-dropdown
                      :expanded="true"
                      v-model="teamRegionFilter"
                      aria-role="list"
                      multiple
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span
                            >Team Region(s): {{ teamRegionFilter.length }}</span
                          >
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in teamRegionList"
                        :key="index"
                        :value="data.id"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.region }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-autocomplete
                      v-model="teamFilterSearch"
                      :data="teamSearch"
                      placeholder="Team"
                      field="team"
                      @select="option => (teamFilter = option)"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-autocomplete
                      v-model="opponentFilterSearch"
                      :data="opponentSearch"
                      placeholder="Opponent"
                      field="team"
                      @select="option => (opponentFilter = option)"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </div>
                </div>
                <div class="columns">
                  <div
                    class="column"
                    style="margin-left:1em; margin-right:1em"
                    v-if="this.tabs != 1"
                  >
                    <b-dropdown
                      :expanded="true"
                      v-model="playerRegionFilter"
                      aria-role="list"
                      multiple
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span
                            >Player Region(s):
                            {{ playerRegionFilter.length }}</span
                          >
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in playerRegionList"
                        :key="index"
                        :value="data.id"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.region }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-autocomplete
                      v-model="playerFilterSearch"
                      :data="playerSearch"
                      placeholder="Player"
                      field="player"
                      @select="option => (playerFilter = option)"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-autocomplete
                      v-model="playerCountryFilterSearch"
                      :data="playerCountrySearch"
                      placeholder="Player Country"
                      field="country"
                      @select="option => (playerCountryFilter = option)"
                      v-if="this.tabs != 1"
                    >
                      <template slot-scope="props">
                        <div
                          class="columns"
                          style="text-align:left;margin-top:-7px"
                        >
                          <div class="column is-one-fifth">
                            <country-flag
                              v-if="props.option.country_code !== undefined"
                              v-bind:country="props.option.country_code"
                              size="normal"
                              style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                            />
                            <country-flag
                              v-if="props.option.country_code === undefined"
                              country="un"
                              size="normal"
                              style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                            />
                          </div>
                          <div class="column">
                            <h3>{{ props.option.country }}</h3>
                          </div>
                        </div>
                      </template>
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </div>
                  <div class="column" v-if="this.tabs == 1"></div>
                </div>
                <div class="columns">
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-dropdown
                      :expanded="true"
                      v-model="mapFilter"
                      aria-role="list"
                      multiple
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span>Selected Map(s): {{ mapFilter.length }}</span>
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in mapsList"
                        :key="index"
                        :value="data._id"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <img
                            class="media-left"
                            style="width:4em"
                            :src="getMap(data.img)"
                          />
                          <div class="media-content">
                            <h3>{{ data.name }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <div class="column" style="margin-left:1em; margin-right:1em">
                    <b-dropdown
                      :expanded="true"
                      v-model="agentFilter"
                      aria-role="list"
                      multiple
                      v-if="this.tabs != 2"
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span
                            >Selected Agent(s): {{ agentFilter.length }}</span
                          >
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in agentsList"
                        :key="index"
                        :value="data.oid"
                        aria-role="listitem"
                      >
                        <div class="media">
                          <img
                            class="media-left"
                            style="width:2em;border-radius:50%"
                            :src="getAgent(data.agent)"
                          />
                          <div class="media-content">
                            <h3>{{ data.agent }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <div
                    class="column"
                    style="margin-left:1em; margin-right:1em"
                  ></div>
                </div>

                <b-button @click="getStats">Search</b-button>
              </b-collapse>
            </div>
          </div>
          <div class="card" style="margin-top:20px">
            <div class="card-content">
              <b-tabs
                v-model="tabs"
                type="is-boxed"
                class="tabsMyStats"
                position="is-centered"
                style="margin-top:20px"
                @change="changeTab()"
              >
                <b-tab-item label="Players">
                  <div class="has-text-right">
                    <b-dropdown
                      v-model="selectedColumnsPlayers"
                      aria-role="list"
                      multiple
                      :scrollable="true"
                      max-height="350px"
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span>Select Stats</span>
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in statsListPlayer"
                        :key="index"
                        :value="data"
                        aria-role="listitem"
                        :selected="true"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.name }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                    <b-button style="margin:0"
                      ><download-csv :data="cleanJSON()" name="PlayerStats.csv">
                        Export to CSV
                      </download-csv></b-button
                    >
                  </div>
                  <b-table
                    style="color:white;min-height:650px"
                    :paginated="true"
                    :per-page="10"
                    :mobile-cards="false"
                    :data="playersData"
                    default-sort="ValRating"
                    default-sort-direction="desc"
                    :striped="true"
                    :hoverable="true"
                  >
                    <template slot-scope="props">
                      <b-table-column sortable label="#" field="rankNum">{{
                        props.row.rankNum
                      }}</b-table-column>
                      <b-table-column
                        searchable
                        label="Name"
                        field="Player"
                        :sticky="true"
                        :class="
                          props.index % 2 != 0
                            ? 'is-sticky-header'
                            : 'is-sticky-header-dark'
                        "
                      >
                        <div
                          style="text-align:left;margin-top:-7px;width:130px"
                        >
                          <country-flag
                            v-if="props.row.country_code !== undefined"
                            v-bind:country="props.row.country_code"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <country-flag
                            v-if="props.row.country_code === undefined"
                            country="un"
                            size="normal"
                            style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          />
                          <nuxt-link
                            :to="
                              `/players/${props.row.player_oid}/${props.row.Player}`
                            "
                            style="padding:0px;color:white;margin-top:50px;position:relative;"
                            ><div
                              style="width: 90px;white-space: nowrap;overflow:hidden;text-overflow: ellipsis;display:inline-block;margin-bottom:-5px;margin-left:5px"
                            >
                              {{ props.row["Player"] }}
                            </div></nuxt-link
                          >
                        </div>
                      </b-table-column>
                      <b-table-column
                        label="Agents"
                        field="agents"
                        style="width:100px;"
                        :visible="isVisible('top3Agents', 'players')"
                      >
                        <div style="width:80px;">
                          <span
                            v-for="agent in props.row['Top 3 Agents']"
                            :key="agent"
                            style="width:100"
                          >
                            <span>
                              <b-tooltip
                                :label="`${agent['Maps Played']} Maps Played`"
                                position="is-top"
                                type="is-dark"
                                v-if="agent.Agent"
                              >
                                <img
                                  :src="getAgent(agent.Agent)"
                                  style="border-radius: 50%;width:25px"
                                />
                              </b-tooltip>
                            </span>
                          </span>
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Rounds"
                        field="Rounds Played"
                        :visible="isVisible('roundsPlayed', 'players')"
                      >
                        <div
                          style="text-align:left"
                          v-if="props.row['Rounds Played']"
                        >
                          {{ props.row["Rounds Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column sortable label="Rating" field="ValRating">
                        <div
                          style="text-align:left"
                          :style="
                            props.row.ValRating.toFixed(2) > 1
                              ? 'color:limegreen'
                              : 'color:orangered'
                          "
                        >
                          {{ props.row["ValRating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="ACS"
                        field="ACS"
                        :visible="isVisible('acs', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["ACS"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Econ"
                        field="Econ Rating"
                        :visible="isVisible('econRating', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Econ Rating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        label="Maps"
                        field="Maps Played"
                        :visible="isVisible('mapsPlayed', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Maps Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Win %"
                        field="Win %"
                        :visible="isVisible('win%', 'players')"
                      >
                        <div style="text-align:left; width:70px">
                          {{ (props.row["Win %"] * 100).toFixed(2) }}%
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/R"
                        field="K/R"
                        :visible="isVisible('kpr', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="D/R"
                        field="D/R"
                        :visible="isVisible('dpr', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["D/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="FB/R"
                        field="FB/R"
                        :visible="isVisible('fbpr', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["FB/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Kills"
                        field="Total Kills"
                        :visible="isVisible('totalKills', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Kills"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Deaths"
                        field="Total Deaths"
                        :visible="isVisible('totalDeaths', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Deaths"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total FB"
                        field="Total FB"
                        :visible="isVisible('totalFB', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total FB"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/D"
                        field="K/D"
                        :visible="isVisible('k/d', 'players')"
                      >
                        <div style="text-align:center">
                          {{ props.row["K/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/D"
                        field="KA/D"
                        :visible="isVisible('ka/d', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="A/R"
                        field="A/R"
                        :visible="isVisible('apr', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["A/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/R"
                        field="KA/R"
                        :visible="isVisible('kapr', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K-D"
                        field="K-D"
                        :visible="isVisible('k-d', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA-D"
                        field="KA-D"
                        :visible="isVisible('ka-d', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Plants"
                        field="Total Plants"
                        :visible="isVisible('totalPlants', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Plants"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Defuses"
                        field="Total Defuses"
                        :visible="isVisible('totalDefuses', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Defuses"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Plants/R"
                        field="Plants/R"
                        :visible="isVisible('plants/r', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Plants/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Defuses/R"
                        field="Defuses/R"
                        :visible="isVisible('defuses/r', 'players')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Defuses/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                    </template>
                  </b-table>
                </b-tab-item>

                <b-tab-item label="Teams">
                  <div class="has-text-right">
                    <b-dropdown
                      v-model="selectedColumnsTeams"
                      aria-role="list"
                      multiple
                      :scrollable="true"
                      max-height="350px"
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span>Select Stats</span>
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in statsListTeam"
                        :key="index"
                        :value="data"
                        aria-role="listitem"
                        :selected="true"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.name }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                    <b-button style="margin:0"
                      ><download-csv :data="teamsData" name="TeamStats.csv">
                        Export to CSV
                      </download-csv></b-button
                    >
                  </div>
                  <b-table
                    style="color:white;min-height:650px"
                    :paginated="true"
                    :per-page="10"
                    :mobile-cards="false"
                    :data="teamsData"
                    :striped="true"
                    :hoverable="true"
                  >
                    <template slot-scope="props">
                      <b-table-column sortable label="#" field="rankNum">
                        {{ props.row["rankNum"] }}</b-table-column
                      >
                      <b-table-column
                        searchable
                        label="Team"
                        field="Team"
                        style="width:200px"
                        :sticky="true"
                        :class="
                          props.index % 2 != 0
                            ? 'is-sticky-header'
                            : 'is-sticky-header-dark'
                        "
                      >
                        <div
                          style="text-align:left;margin-top:-7px;width:120px"
                        >
                          <!-- <img
                            :src="getTeamImg(props.row.img)"
                            size="normal"
                            style="width:2.5em; vertical-align:-13.5px;border-radius:50%"
                          /> -->
                          <div style="text-align:left;margin-top:-7px;">
                            <img
                              style="vertical-align:middle;width:20px;height:20px;display:inline-block;margin-bottom:-10px"
                              :src="getTeamImg(props.row.team_img)"
                            />

                            <nuxt-link
                              :to="`/teams/${props.row.team_oid}`"
                              style="padding:0px;color:white;margin-top:50px;position:relative;"
                              ><div
                                style="width: 80px;white-space: nowrap;overflow:hidden;text-overflow: ellipsis;display:inline-block;margin-bottom:-12px;margin-left:5px"
                              >
                                {{ props.row["Team"] }}
                              </div></nuxt-link
                            >
                          </div>
                        </div>
                      </b-table-column>
                      <b-table-column sortable label="Rating" field="ValRating">
                        <div
                          style="text-align:left"
                          :style="
                            props.row['ValRating'] > 1
                              ? 'color:limegreen'
                              : 'color:orangered'
                          "
                        >
                          {{ props.row["ValRating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="ACS"
                        field="ACS"
                        :visible="isVisible('acs', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["ACS"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Econ"
                        field="Econ Rating"
                        :visible="isVisible('econRating', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Econ Rating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Rounds"
                        field="Rounds Played"
                        :visible="isVisible('roundsPlayed', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Rounds Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Maps"
                        field="Maps Played"
                        :visible="isVisible('mapsPlayed', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Maps Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Win %"
                        field="win%"
                        :visible="isVisible('win%', 'teams')"
                      >
                        <div style="text-align:left;width:70px">
                          {{ (props.row["Win %"] * 100).toFixed(2) }}%
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/R"
                        field="K/R"
                        :visible="isVisible('kpr', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="D/R"
                        field="D/R"
                        :visible="isVisible('dpr', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["D/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="FB/R"
                        field="FB/R"
                        :visible="isVisible('fbpr', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["FB/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Kills"
                        field="Total Kills"
                        :visible="isVisible('totalKills', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Kills"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Deaths"
                        field="Total Deaths"
                        :visible="isVisible('totalDeaths', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Deaths"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total FB"
                        field="Total FB"
                        :visible="isVisible('totalFB', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total FB"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/D"
                        field="K/D"
                        :visible="isVisible('k/d', 'teams')"
                      >
                        <div style="text-align:center">
                          {{ props.row["K/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/D"
                        field="KA/D"
                        :visible="isVisible('ka/d', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="A/R"
                        field="A/R"
                        :visible="isVisible('apr', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["A/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/R"
                        field="KA/R"
                        :visible="isVisible('kapr', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K-D"
                        field="K-D"
                        :visible="isVisible('k-d', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA-D"
                        field="ka-d"
                        :visible="isVisible('ka-d', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Plants"
                        field="Total Plants"
                        :visible="isVisible('totalPlants', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Plants"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Defuses"
                        field="Total Defuses"
                        :visible="isVisible('totalDefuses', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Defuses"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Plants/R"
                        field="Plants/R"
                        :visible="isVisible('plants/r', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Plants/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Defuses/R"
                        field="Defuses/R"
                        :visible="isVisible('defuses/r', 'teams')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Defuses/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                    </template>
                  </b-table>
                </b-tab-item>
                <b-tab-item label="Agents">
                  <div class="has-text-right">
                    <b-dropdown
                      v-model="selectedColumnsAgents"
                      aria-role="list"
                      multiple
                      :scrollable="true"
                      max-height="350px"
                    >
                      <button class="input" type="button" slot="trigger">
                        <template>
                          <span>Select Stats</span>
                        </template>
                        <b-icon icon="menu-down"></b-icon>
                      </button>

                      <b-dropdown-item
                        v-for="(data, index) in statsListAgent"
                        :key="index"
                        :value="data"
                        aria-role="listitem"
                        :selected="true"
                      >
                        <div class="media">
                          <div class="media-content">
                            <h3>{{ data.name }}</h3>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                    <b-button style="margin:0"
                      ><download-csv :data="agentsData" name="AgentStats.csv">
                        Export to CSV
                      </download-csv></b-button
                    >
                  </div>
                  <b-table
                    style="color:white;min-height:650px"
                    :mobile-cards="false"
                    :data="agentsData"
                    :striped="true"
                    :hoverable="true"
                  >
                    <template slot-scope="props">
                      <b-table-column
                        searchable
                        label="Name"
                        field="Agent"
                        :sticky="true"
                        :class="
                          props.index % 2 != 0
                            ? 'is-sticky-header'
                            : 'is-sticky-header-dark'
                        "
                      >
                        <div
                          style="text-align:left;margin-top:-7px;width:120px"
                        >
                          <span>
                            <img
                              :src="getAgent(props.row['Agent'])"
                              size="normal"
                              style="width:2em; vertical-align:-13.5px;border-radius:50%"
                            />
                            <span
                              :to="`/teams/${props.row._id}`"
                              style="padding:0px;color:white"
                            >
                              {{ props.row["Agent"] }}
                            </span>
                          </span>
                        </div>
                      </b-table-column>
                      <b-table-column sortable label="Rating" field="ValRating">
                        <div
                          style="text-align:left"
                          :style="
                            props.row['ValRating'] > 1
                              ? 'color:limegreen'
                              : 'color:orangered'
                          "
                        >
                          {{ props.row["ValRating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="ACS"
                        field="ACS"
                        :visible="isVisible('acs', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["ACS"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Econ"
                        field="Econ Rating"
                        :visible="isVisible('econRating', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Econ Rating"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Rounds"
                        field="Rounds Played"
                        :visible="isVisible('roundsPlayed', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Rounds Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Maps"
                        field="Maps Played"
                        :visible="isVisible('mapsPlayed', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Maps Played"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Win %"
                        field="Win %"
                        :visible="isVisible('win%', 'agents')"
                      >
                        <div style="text-align:left; width:70px">
                          {{ (props.row["Win %"] * 100).toFixed(2) }}%
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/R"
                        field="K/R"
                        :visible="isVisible('kpr', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="D/R"
                        field="D/R"
                        :visible="isVisible('dpr', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["D/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="FB/R"
                        field="FB/R"
                        :visible="isVisible('fbpr', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["FB/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Kills"
                        field="Total Kills"
                        :visible="isVisible('totalKills', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Kills"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Deaths"
                        field="Total Deaths"
                        :visible="isVisible('totalDeaths', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Deaths"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total FB"
                        field="Total FB"
                        :visible="isVisible('totalFB', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total FB"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K/D"
                        field="K/D"
                        :visible="isVisible('k/d', 'agents')"
                      >
                        <div style="text-align:center">
                          {{ props.row["K/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/D"
                        field="KA/D"
                        :visible="isVisible('ka/d', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/D"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="A/R"
                        field="A/R"
                        :visible="isVisible('apr', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["A/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA/R"
                        field="KA/R"
                        :visible="isVisible('kapr', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="K-D"
                        field="K-D"
                        :visible="isVisible('k-d', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["K-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="KA-D"
                        field="ka-d"
                        :visible="isVisible('ka-d', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["KA-D"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Plants"
                        field="Total Plants"
                        :visible="isVisible('totalPlants', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Plants"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Total Defuses"
                        field="Total Defuses"
                        :visible="isVisible('totalDefuses', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Total Defuses"] }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Plants/R"
                        field="Plants/R"
                        :visible="isVisible('plants/r', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Plants/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                      <b-table-column
                        sortable
                        label="Defuses/R"
                        field="Defuses/R"
                        :visible="isVisible('defuses/r', 'agents')"
                      >
                        <div style="text-align:left">
                          {{ props.row["Defuses/R"].toFixed(2) }}
                        </div>
                      </b-table-column>
                    </template>
                  </b-table>
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
import axios from "axios";
import * as _ from "lodash";

export default {
  name: "Stats",
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
  data() {
    return {
      selectedColumnsPlayers: [],
      selectedColumnsTeams: [],
      selectedColumnsAgents: [],

      playersData: [],
      teamsData: [],
      agentsData: [],

      agentsList: [],
      mapsList: [],
      playerList: [],
      teamList: [],
      eventList: [],
      eventRegionList: [],
      teamRegionList: [],
      substageTypeList: [],
      playerCountryList: [],
      playerRegionList: [],

      eventFilterSearch: "",
      eventFilter: null,
      mapFilter: [],
      agentFilter: [],
      playerFilterSearch: "",
      playerFilter: null,
      teamFilterSearch: "",
      teamFilter: null,
      opponentFilterSearch: "",
      opponentFilter: null,
      eventRegionFilter: [],
      teamRegionFilter: [],
      fromDateFilter: "",
      toDateFilter: "",
      substageFilter: [],
      playerCountryFilterSearch: "",
      playerCountryFilter: null,
      playerRegionFilter: [],

      tabs: 0,
      agents: {},
      mapData: {},
      allMaps: [],
      statsListPlayer: [
        { name: "ACS", id: "acs", default: true },
        { name: "Econ Rating", id: "econRating", default: true },
        { name: "Top 3 Agents", id: "top3Agents", default: true },
        { name: "Rounds Played", id: "roundsPlayed", default: true },
        { name: "Maps Played", id: "mapsPlayed", default: false },
        { name: "Win %", id: "win%", default: false },
        { name: "K/R", id: "kpr", default: true },
        { name: "D/R", id: "dpr", default: true },
        { name: "FB/R", id: "fbpr" },
        { name: "Total Kills", id: "totalKills", default: true },
        { name: "Total Deaths", id: "totalDeaths", default: true },
        { name: "Total FB", id: "totalFB", default: true },
        { name: "K/D", id: "k/d", default: true },
        { name: "KA/D", id: "ka/d", default: false },
        { name: "A/R", id: "apr", default: false },
        { name: "KA/R", id: "kapr", default: false },
        { name: "K-D", id: "k-d", default: false },
        { name: "KA-D", id: "ka-d", default: false },
        { name: "Total Plants", id: "totalPlants", default: false },
        { name: "Total Defuses", id: "totalDefuses", default: false },
        { name: "Plants/R", id: "plants/r", default: false },
        { name: "Defuses/R", id: "defuses/r", default: false }
      ],
      statsListTeam: [
        { name: "ACS", id: "acs", default: true },
        { name: "Econ Rating", id: "econRating", default: true },
        { name: "Rounds Played", id: "roundsPlayed", default: false },
        { name: "Maps Played", id: "mapsPlayed", default: true },
        { name: "Win %", id: "win%", default: true },
        { name: "K/R", id: "kpr", default: true },
        { name: "D/R", id: "dpr", default: true },
        { name: "FB/R", id: "fbpr" },
        { name: "Total Kills", id: "totalKills", default: true },
        { name: "Total Deaths", id: "totalDeaths", default: true },
        { name: "Total FB", id: "totalFB", default: true },
        { name: "K/D", id: "k/d", default: true },
        { name: "KA/D", id: "ka/d", default: false },
        { name: "A/R", id: "apr", default: false },
        { name: "KA/R", id: "kapr", default: false },
        { name: "K-D", id: "k-d", default: false },
        { name: "KA-D", id: "ka-d", default: false },
        { name: "Total Plants", id: "totalPlants", default: false },
        { name: "Total Defuses", id: "totalDefuses", default: false },
        { name: "Plants/R", id: "plants/r", default: false },
        { name: "Defuses/R", id: "defuses/r", default: false }
      ],
      statsListAgent: [
        { name: "ACS", id: "acs", default: true },
        { name: "Econ Rating", id: "econRating", default: true },
        { name: "Rounds Played", id: "roundsPlayed", default: false },
        { name: "Maps Played", id: "mapsPlayed", default: true },
        { name: "Win %", id: "win%", default: true },
        { name: "K/R", id: "kpr", default: true },
        { name: "D/R", id: "dpr", default: true },
        { name: "FB/R", id: "fbpr" },
        { name: "Total Kills", id: "totalKills", default: true },
        { name: "Total Deaths", id: "totalDeaths", default: true },
        { name: "Total FB", id: "totalFB", default: true },
        { name: "K/D", id: "k/d", default: true },
        { name: "KA/D", id: "ka/d", default: false },
        { name: "A/R", id: "apr", default: false },
        { name: "KA/R", id: "kapr", default: false },
        { name: "K-D", id: "k-d", default: false },
        { name: "KA-D", id: "ka-d", default: false },
        { name: "Total Plants", id: "totalPlants", default: false },
        { name: "Total Defuses", id: "totalDefuses", default: false },
        { name: "Plants/R", id: "plants/r", default: false },
        { name: "Defuses/R", id: "defuses/r", default: false }
      ],
      isloading: false
    };
  },
  mounted() {
    // if (window.location.hash === "") {
    //   window.location.hash = "#players";
    // } else if (window.location.hash == "#teams") {
    //   this.tabs = 1;
    // } else if (window.location.hash == "#agents") {
    //   this.tabs = 2;
    // } else {
    //   window.location.hash = "#players"
    // }
    // this.isLoading = true;
    // this.$axios(process.env.baseUrl + "api/db/playerstats", { method: "post" })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playersData = response;
    //     for (let i = 1; i <= this.playersData.length; i++) {
    //       this.playersData[i - 1].rankNum = i;
    //       this.playersData[i - 1]['Rounds Played'] = parseInt(this.playersData[i - 1]['Rounds Played'])
    //       this.playersData[i - 1]['Maps Played'] = parseInt(this.playersData[i - 1]['Maps Played'])
    //       this.playersData[i - 1]['Total Kills'] = parseInt(this.playersData[i - 1]['Total Kills'])
    //       this.playersData[i - 1]['Total Deaths'] = parseInt(this.playersData[i - 1]['Total Deaths'])
    //       this.playersData[i - 1]['Total FB'] = parseInt(this.playersData[i - 1]['Total FB'])
    //       this.playersData[i - 1]['Total Assists'] = parseInt(this.playersData[i - 1]['Total Assists'])
    //       this.playersData[i - 1]['K-D'] = parseInt(this.playersData[i - 1]['K-D'])
    //       this.playersData[i - 1]['KA-D'] = parseInt(this.playersData[i - 1]['KA-D'])
    //       this.playersData[i - 1]['Total Plants'] = parseInt(this.playersData[i - 1]['Total Plants'])
    //       this.playersData[i - 1]['Total Defuses'] = parseInt(this.playersData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamstats", {
    //   method: "post"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamsData = response;
    //     for (let i = 1; i <= this.teamsData.length; i++) {
    //       this.teamsData[i - 1].rankNum = i;
    //       this.teamsData[i - 1]['Rounds Played'] = parseInt(this.teamsData[i - 1]['Rounds Played'])
    //       this.teamsData[i - 1]['Maps Played'] = parseInt(this.teamsData[i - 1]['Maps Played'])
    //       this.teamsData[i - 1]['Total Kills'] = parseInt(this.teamsData[i - 1]['Total Kills'])
    //       this.teamsData[i - 1]['Total Deaths'] = parseInt(this.teamsData[i - 1]['Total Deaths'])
    //       this.teamsData[i - 1]['Total FB'] = parseInt(this.teamsData[i - 1]['Total FB'])
    //       this.teamsData[i - 1]['Total Assists'] = parseInt(this.teamsData[i - 1]['Total Assists'])
    //       this.teamsData[i - 1]['K-D'] = parseInt(this.teamsData[i - 1]['K-D'])
    //       this.teamsData[i - 1]['KA-D'] = parseInt(this.teamsData[i - 1]['KA-D'])
    //       this.teamsData[i - 1]['Total Plants'] = parseInt(this.teamsData[i - 1]['Total Plants'])
    //       this.teamsData[i - 1]['Total Defuses'] = parseInt(this.teamsData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/db/agentstats", {
    //   method: "post"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.agentsData = response;
    //     for (let i = 1; i <= this.agentsData.length; i++) {
    //       this.agentsData[i - 1]['Rounds Played'] = parseInt(this.agentsData[i - 1]['Rounds Played'])
    //       this.agentsData[i - 1]['Maps Played'] = parseInt(this.agentsData[i - 1]['Maps Played'])
    //       this.agentsData[i - 1]['Total Kills'] = parseInt(this.agentsData[i - 1]['Total Kills'])
    //       this.agentsData[i - 1]['Total Deaths'] = parseInt(this.agentsData[i - 1]['Total Deaths'])
    //       this.agentsData[i - 1]['Total FB'] = parseInt(this.agentsData[i - 1]['Total FB'])
    //       this.agentsData[i - 1]['Total Assists'] = parseInt(this.agentsData[i - 1]['Total Assists'])
    //       this.agentsData[i - 1]['K-D'] = parseInt(this.agentsData[i - 1]['K-D'])
    //       this.agentsData[i - 1]['KA-D'] = parseInt(this.agentsData[i - 1]['KA-D'])
    //       this.agentsData[i - 1]['Total Plants'] = parseInt(this.agentsData[i - 1]['Total Plants'])
    //       this.agentsData[i - 1]['Total Defuses'] = parseInt(this.agentsData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/gameMaps", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.mapsList = response.data;
    //   });
    // this.$axios(process.env.baseUrl + "api/events", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.eventList = response.data;
    //   });

    // this.$axios(process.env.baseUrl + "api/db/agentlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.agentsList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playerlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/eventregionlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.eventRegionList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamregionlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamRegionList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/substagelist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.substageTypeList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playercountrylist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerCountryList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playerregion", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerRegionList = response;
    //   });
    // this.isLoading = false;
  },
  methods: {
    changeTab(){
      if(this.tabs === 0){
        window.location.hash = "#players";
      } else if(this.tabs === 1){
        window.location.hash = "#teams";
      } else if(this.tabs === 2){
        window.location.hash = "#agents";
      }
    },
    isVisible(id, table) {
      switch (table) {
        case "players":
          if (this.selectedColumnsPlayers.length != 0) {
            for (let i = 0; i < this.selectedColumnsPlayers.length; i++) {
              if (this.selectedColumnsPlayers[i].id === id) {
                return true;
              }
            }
            return false;
          } else {
            for (let i = 0; i < this.statsListPlayer.length; i++) {
              if (this.statsListPlayer[i].id === id) {
                return this.statsListPlayer[i].default;
              }
            }
            return false;
          }
          return false;
          break;
        case "teams":
          if (this.selectedColumnsTeams.length != 0) {
            for (let i = 0; i < this.selectedColumnsTeams.length; i++) {
              if (this.selectedColumnsTeams[i].id === id) {
                return true;
              }
            }
            return false;
          } else {
            for (let i = 0; i < this.statsListTeam.length; i++) {
              if (this.statsListTeam[i].id === id) {
                return this.statsListTeam[i].default;
              }
            }
            return false;
          }
          return false;
          break;
        case "agents":
          if (this.selectedColumnsAgents.length != 0) {
            for (let i = 0; i < this.selectedColumnsAgents.length; i++) {
              if (this.selectedColumnsAgents[i].id === id) {
                return true;
              }
            }
            return false;
          } else {
            for (let i = 0; i < this.statsListAgent.length; i++) {
              if (this.statsListAgent[i].id === id) {
                return this.statsListAgent[i].default;
              }
            }
            return false;
          }
          return false;
          break;
        default:
          break;
      }
    },
    getStats() {
      switch (this.tabs) {
        case 0:
          this.getPlayerStats();
          break;
        case 1:
          this.getTeamStats();
          break;
        case 2:
          this.getAgentStats();
          break;
        default:
          break;
      }
    },
    cleanJSON() {
      var clean = _.cloneDeep(this.playersData);
      for (let i = 0; i < this.playersData.length; i++) {
        for (let j = 0; j < this.playersData[i]["Top 3 Agents"].length; j++) {
          clean[i]["Top 3 Agents"][
            j
          ] = `${this.playersData[i]["Top 3 Agents"][j]["Agent"]}`;
        }
      }
      return clean;
    },
    getPlayerStats() {
      var filters = [];
      if (this.eventFilter != null)
        filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0)
        filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.agentFilter.length != 0)
        filters.push(`agent_oids=>'{${this.agentFilter.join()}}'`);
      if (this.playerFilter != null)
        filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null)
        filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null)
        filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0)
        filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0)
        filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0)
        filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);
      if (this.playerCountryFilter != null)
        filters.push(`player_country_ids=>'{${this.playerCountryFilter.id}}'`);
      if (this.playerRegionFilter.length != 0)
        filters.push(`player_region_ids=>'{${this.playerRegionFilter}}'`);

      this.$axios(process.env.baseUrl + "api/db/playerstats", {
        method: "post",
        data: { filters: filters.join() }
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.playersData = response;
          for (let i = 1; i <= this.playersData.length; i++) {
            this.playersData[i - 1].rankNum = i;
          }
        });
    },
    getTeamStats() {
      var filters = [];
      if (this.eventFilter != null)
        filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0)
        filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.agentFilter.length != 0)
        filters.push(`agent_oids=>'{${this.agentFilter.join()}}'`);
      if (this.playerFilter != null)
        filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null)
        filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null)
        filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0)
        filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0)
        filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0)
        filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);

      this.$axios(process.env.baseUrl + "api/db/teamstats", {
        method: "post",
        data: { filters: filters.join() }
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.teamsData = response;
          for (let i = 1; i <= this.teamsData.length; i++) {
            this.teamsData[i - 1].rankNum = i;
          }
        });
    },
    getAgentStats() {
      var filters = [];
      if (this.eventFilter != null)
        filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0)
        filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.playerFilter != null)
        filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null)
        filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null)
        filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0)
        filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0)
        filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0)
        filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);
      if (this.playerCountryFilter != null)
        filters.push(`player_country_ids=>'{${this.playerCountryFilter.id}}'`);
      if (this.playerRegionFilter.length != 0)
        filters.push(`player_region_ids=>'{${this.playerRegionFilter}}'`);

      this.$axios(process.env.baseUrl + "api/db/agentstats", {
        method: "post",
        data: { filters: filters.join() }
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.agentsData = response;
          for (let i = 1; i <= this.agentsData.length; i++) {
            this.agentsData[i - 1].rankNum = i;
          }
        });
    },
    getTeamImg(img) {
      if (img) {
        return process.env.baseUrl + `api/uploads/teams/${img}`;
      } else {
        return process.env.baseUrl + `api/uploads/teams/unknown.png`;
      }
    },
    getMap(img) {
      return process.env.baseUrl + `api/uploads/maps/${img}`;
    },
    getAgent(img) {
      img = img.toLowerCase();
      if (img) {
        return process.env.baseUrl + `api/uploads/agents/${img}.png`;
      } else {
        return process.env.baseUrl + `api/uploads/agents/unknown.png`;
      }
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
    }
  },
  computed: {
    eventSearch() {
      return this.eventList.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(this.eventFilterSearch.toLowerCase()) >= 0
        );
      });
    },
    playerSearch() {
      return this.playerList.filter(option => {
        return (
          option.player
            .toString()
            .toLowerCase()
            .indexOf(this.playerFilterSearch.toLowerCase()) >= 0
        );
      });
    },
    teamSearch() {
      return this.teamList.filter(option => {
        return (
          option.team
            .toString()
            .toLowerCase()
            .indexOf(this.teamFilterSearch.toLowerCase()) >= 0
        );
      });
    },
    opponentSearch() {
      return this.teamList.filter(option => {
        return (
          option.team
            .toString()
            .toLowerCase()
            .indexOf(this.opponentFilterSearch.toLowerCase()) >= 0
        );
      });
    },
    playerCountrySearch() {
      return this.playerCountryList.filter(option => {
        return (
          option.country
            .toString()
            .toLowerCase()
            .indexOf(this.playerCountryFilterSearch.toLowerCase()) >= 0
        );
      });
    },
    playerRegionSearch() {
      return this.playerRegionList.filter(option => {
        return (
          option.region
            .toString()
            .toLowerCase()
            .indexOf(this.playerRegionFilterSearch.toLowerCase()) >= 0
        );
      });
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
.table thead {
  display: none;
}
.is-sticky-header {
  background-color: lighten(#222c3c, 5%) !important;
}

.is-sticky-header-dark {
  background-color: #222c3c !important;
}
</style>
