<template>
  <div class="hello">
    <h1 style="font-size:50px;margin-bottom:20px">Valorant Events & Tournaments</h1>
    <!-- <div class="vm-placement" data-id="5ed90370b519801b8a4d528b"></div> -->
    <div v-for="event in events" :key="event.id" style="display:inline-block;padding:20px">
      <EventCard :event="event" style="display:inline-block; a" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import EventCard from "../../components/EventCard";
const moment = require("moment");
export default {
  name: "Characters",
  props: {
    type: String
  },
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "valorant events, valorant event, valorant tournament, valorant tournaments, valorant event stats, valorant event statistics"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Valorant professional event and tournament coverage, match stats, match scores and more!"
        }
      ]
    };
  },
  asyncData({ $axios }) {
    return $axios
      .get(process.env.baseUrl + "api/events?$sort[date.to]=-1")
      .then(response => {
        return { events: response.data.data };
      });
  },
  methods: {
    getStatus(event) {
      if (
        moment(new Date()).isBetween(
          moment(event.date.from),
          moment(event.date.to)
        )
      ) {
        return "live";
      } else if (moment(new Date()).diff(moment(event.date.to)) <= 0) {
        return "coming";
      } else {
        return "prev";
      }
    },
    navEventDetails(id, slug) {
      this.$router.push({ path: `/events/${id}/${slug}` });
    },
    formatDateEvent(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    },
    getImgUrl(event) {
      return process.env.baseUrl + `api/uploads/events/${event.img}`;
    }
  },
  components: { VueMarkdown, EventCard }
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
