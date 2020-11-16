<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">News & Articles</h1>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div :style="{width:!$device.isMobile?'800px':'' }">
          <div style="text-align:left" class="subtitle">Latest Articles</div>
          <div v-for="(article,index) in news" :key="article._id">
            <nuxt-link :to="`/news/${article._id}/${article.slug}`" style="padding:0px">
              <div
                class="card"
                style="margin-bottom:10px;cursor:pointer"
                v-bind:class="getBkg(index%2===0)"
                v-on:click="navNews(article._id, article.slug)"
              >
                <div class="card-content" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">
                  <div class="columns is-centered is-vcentered is-mobile">
                    <div class="column is-1">
                      <div v-if="$device.isMobile">
                        <CountryFlag
                          v-bind:country="article.flag"
                          size="small"
                          style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                          :key="article.flag"
                        />
                      </div>
                      <div v-if="!$device.isMobile">
                        <CountryFlag
                          v-bind:country="article.flag"
                          size="normal"
                          style="vertical-align:-13.5px; margin-left:-20px; margin-right:-15px"
                        />
                      </div>
                    </div>
                    <div
                      class="column is-8"
                      style="text-align:left;vertical-align:middle"
                    >{{article.title}}</div>
                    <div class="column is-3" style="text-align:right">
                      <p style="display:inline-block; color:#ff4653">{{article.numComments}}</p>
                      <p style="display:inline-block; opacity:0.6">comments</p>
                      <p style="opacity:0.6">{{formatDate(article.date)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag';
const moment = require("moment");
export default {
  name: "Characters",
  props: {
    type: String
  },
  asyncData({ $axios }) {
    return $axios
      .get(process.env.baseUrl + "api/news?$sort[date]=-1")
      .then(function(response) {
        return response.data;
      })
      .then(response => {
        if (response.code !== undefined) {
          this.$buefy.snackbar.open(response.message);
        } else {
          return { news: response.data };
        }
      });
  },
  methods: {
    navNews(id, slug) {
      this.$router.push({ path: `/news/${id}/${slug}` });
    },
    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      if (this.$device.isMobile) {
        return moment(localDate).format("MMMM DD");
      } else {
        return moment(localDate).format("MMMM DD, YYYY");
      }
    },
    getBkg(type) {
      if (type) {
        return "light-bkg";
      } else {
        return "dark-bkg";
      }
    }
  },
  components: { CountryFlag }
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
.light-bkg {
}
.dark-bkg {
  background-color: #1a212e;
}
</style>
