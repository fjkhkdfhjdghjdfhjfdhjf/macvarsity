<template>
  <div class="hello" v-if="authenticated">
    <h1 style="font-size:50px;margin-bottom:20px">Writers</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <b-field label="News ID">
            <b-input placeholder="ID..." v-model="editNews"></b-input>
          </b-field>
          <b-button @click="addEditNews">EditNews</b-button>
          <br />
          <b-upload v-model="files">
            <a class="button">
              <b-icon icon="upload"></b-icon>
              <span>Upload Image</span>
            </a>
          </b-upload>
          <span v-if="files">{{ files.name}}</span>

          <div @click="uploadImage" style="cursor:pointer">Click to upload Image</div>
          <br />
          <span v-if="imgName!=undefined">https://valorantify.com/api/uploads/news/{{imgName}}</span>
          <div class="card-content">
            Body
            <b-input
              v-model="news.details"
              type="textarea"
              style="resize:none;white-space: pre-wrap;word-wrap: break-word;"
            ></b-input>
            <b-field label="Title">
              <b-input v-model="news.title"></b-input>
            </b-field>
            <b-field label="Image Link (displayed when tweeting)">
              <b-input v-model="news.img"></b-input>
            </b-field>
            <b-field label="Author name">
              <b-input v-model="news.author"></b-input>
            </b-field>
            <b-field label="Flag">
              <b-select v-model="news.flag" expanded placeholder="Select Flag">
                <option
                  v-for="option in flagOptions"
                  :value="option.value"
                  :key="option.value"
                >{{ option.text }}</option>
              </b-select>
            </b-field>
            <b-field label="Author Twitter URL">
              <b-input v-model="news.authorLink"></b-input>
            </b-field>
            <b-field label="Date Displayed">
              <b-input v-model="news.date"></b-input>
            </b-field>Use this to generate date and pick ISO 8601
            https://timestampgenerator.com/
            <b-field label="Preview Image">
              <b-input v-model="news.preview"></b-input>
            </b-field>
          </div>
        </div>
        <div class="card" style="margin-top:20px;">
          <div class="card-content">
            <p class="title">Details Preview</p>
            <div style="text-align:left" :key="news.details">
              <vue-markdown>{{news.details}}</vue-markdown>
            </div>
            <div style="margin-top:100px" :key="news.preview">
              <p class="title">Main Page preview image</p>
              <vue-markdown>{{news.preview}}</vue-markdown>
            </div>
            <b-button style="background-color:#ff726f;" @click="publish" id="test">Publish</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import flagOptions from "../assets/flags/flags.json";
export default {
  layout: "OnlyNav",
  name: "Characters",
  props: {
    type: String
  },
  data() {
    return {
      editNews: undefined,
      authenticated: false,
      files: [],
      imgName: undefined,
      news: {
        details: "",
        title: "",
        preview: "",
        date: "2020-04-04T00:00:00+00:00",
        img: "",
        author: "",
        authorLink: "",
        numComments: 0,
        flag: "",
        preview:
          "<img src='https://media.discordapp.net/attachments/713084662464905216/717078465265926215/101806858_2562935907310909_787153409550581760_n.png' style='display: block;margin-left: auto;margin-right: auto;width: 500px;'>"
      },
      flagOptions: flagOptions
    };
  },
  mounted() {
    if (process.browser) {
      this.$aes.setKey("SECURE_VAL_PW");
      var authEnc = localStorage.getItem("auth");
      if (authEnc) {
        let auth = JSON.parse(this.$aes.decrypt(authEnc));
        if (
          auth.permissions.indexOf("admin") === -1 &&
          auth.permissions.indexOf("moderator") === -1
        ) {
          this.$router.push({ path: `/` });
        } else {
          this.authenticated = true;
        }
      }
    }
    if (this.$device.isMobile) {
      this.$router.push({ path: `/` });
    }
  },
  log() {
    console.log(this.files);
  },

  methods: {
    addEditNews() {
      this.$axios(process.env.baseUrl + `api/news/${this.editNews}`, {
        method: "get"
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.news = response;
        });
    },
    publish() {
      if(this.news._id!=undefined){
         this.$axios(process.env.baseUrl + `api/news/${this.news._id}`, {
        method: "patch",
        data: this.news
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          window.location.reload();
        });
        return
      }
      this.$axios(process.env.baseUrl + `api/news`, {
        method: "post",
        data: this.news
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          window.location.reload();
        });
    },
    uploadImage() {
      var formData = new FormData();
      formData.append("files", this.files);
      this.$axios(process.env.baseUrl + "api/uploads/news", {
        method: "post",
        data: formData
      })
        .then(function(response) {
          return response.data;
        })
        .then(response => {
          this.imgName = response.name;
        });
    }
  },
  components: { VueMarkdown }
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
