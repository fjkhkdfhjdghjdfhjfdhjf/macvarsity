<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">News</h1>
    <div class="columns is-centered">
      <div class="column is-full">
        <div class="card" style>
          <div class="card-content" v-if="news">
            <p class="title">{{news.title}}</p>
            <div class="columns is-mobile">
              <div class="column" style="text-align:left">
                By
                <span style="color:#ff726f;cursor:pointer;" @click="navAuthor">{{news.author}}</span>
              </div>
              <div class="column" style="text-align:right">
                <p>{{formatDate(news.date)}}</p>
              </div>
            </div>
            <div style="background-color:#ff726f;height:1px;width:100%;padding:0px"></div>
            <div class="columns" style="margin-top:10px">
              <div class="column">
                <div style="text-align:left">
                  <p>
                    <vue-markdown>{{news.details}}</vue-markdown>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="columns is-centered is-mobile comment-mobile"
          style="margin-top:10px"
          v-if="news"
        >
          <div class="column is-five-fifths">
            <Comments
              style="font-size:16px; text-align:center"
              :id="$route.params.id"
              :pageData="news"
              type="news"
              :commentsArray="news.comments"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Comments from "../../../components/Comments/Comments";
import axios from 'axios'
const moment = require("moment");
export default {
  name: "Characters",
  props: {
    type: String
  },
  async asyncData ({ params }) {
    const { data } = await axios(
      process.env.baseUrl +
        "api/news/" +
        params.id +
        "?&populatecomments=true",
      {
        method: "get"
      }
    )
    return { news: data }
  },
  data() {
    return {
      news: {
        title: "",
        details: "",
        img: ""
      }
    };
  },
  head() {
      return {
        meta: [
          {
            hid: "twittercard",
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twittertitle",
            name: "twitter:title",
            content: this.news.title
          },
          {
            hid: "twitterd",
            name: "twitter:description",
            content: "Valorant news posting!"
          },
          // image must be an absolute path
          {
            hid: "twitterimg",
            name: "twitter:image",
            content: this.news.img
          }
        ]
      };
  },
  mounted() {
  },
  methods: {
    navNews(id) {
      this.$router.push({ path: `/news/${id}` });
    },
    navAuthor() {
      window.open(this.news.authorLink, "_blank");
    },
    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    }
  },
  components: { VueMarkdown, Comments }
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
</style>
