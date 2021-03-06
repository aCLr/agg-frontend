<template>
  <v-container>
    <v-row>
      <v-col v-for="record in records" :key="record.id" :cols="colsAmount">
        <v-dialog max-width="770">
          <template v-slot:activator="{ on, attrs }">
            <v-card min-height="250" v-on="on" v-bind="attrs">
              <template v-if="record.image">
                <v-img height="150px" :src="record.image"></v-img>
                <v-card-title
                  class="text-wrap"
                  v-text="record.title"
                ></v-card-title>
              </template>
              <template v-else>
                <v-card-title>{{ record.title }}</v-card-title>
                <v-card-text v-line-clamp="4">
                  {{ getPreview(record.content) }}
                </v-card-text>
              </template>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="toggleStarred(record)">
                  <v-icon v-if="record.starred">mdi-star</v-icon>
                  <v-icon v-else>mdi-star-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <v-card>
            <v-card-title v-if="record.title" class="text-wrap">{{
              record.title
            }}</v-card-title>
            <v-card-text>
              <p v-html="getSanitizedContent(record.content)"></p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click.stop="toggleStarred(record)">
                <v-icon v-if="record.starred">mdi-star</v-icon>
                <v-icon v-else>mdi-star-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-btn
      v-show="showFab"
      v-scroll="onScroll"
      fab
      fixed
      bottom
      right
      @click="goToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <div
      v-intersect="{
        handler: onBottomVisible
      }"
    ></div>
  </v-container>
</template>

<script>
import DOMPurify from "dompurify";
import { mapState } from "vuex";

const limit = 12;

export default {
  name: "Content",
  data: () => ({
    showFab: false
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("records/setQuery", to.params.query);
      vm.$store.dispatch("records/loadRecords", { replace: true, ...to.params })
    }
    );
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("records/setQuery", to.params.query);
    this.$store
      .dispatch("records/loadRecords", { replace: true, ...to.params })
      .then(next);
  },
  computed: {
    ...mapState({
      records: state => state.records.records,
      enableInfiniteScroll: state => state.records.enableInfiniteScroll
    }),
    colsAmount() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          return 4;
        case "md":
          return 6;
        case "sm":
          return 6;
        case "xl":
          return 4;
        default:
          return 12;
      }
    },
    contendWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          return 770;
        case "xl":
          return 770;
        default:
          return this.$vuetify.breakpoint.width - 50;
      }
    }
  },
  methods: {
    onScroll(e) {
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.showFab = top > 20;
    },
    goToTop() {
      this.$vuetify.goTo(0);
    },
    getPreview(content) {
      let span = document.createElement("span");
      span.innerHTML = content;
      return span.textContent || span.innerText;
    },
    getSanitizedContent(content) {
      return DOMPurify.sanitize(this.markLinksAsBlank(content), {
        ADD_ATTR: ["target"]
      });
    },
    markLinksAsBlank(content) {
      let div = document.createElement("div");
      div.innerHTML = content;
      div.getElementsByTagName("a").forEach(e => {
        e.setAttribute("target", "_blank");
      });
      return div.innerHTML;
    },
    onBottomVisible() {
      if (!this.enableInfiniteScroll) {
        return;
      }
      this.offset += limit;
      this.$store.dispatch("records/loadRecords", {});
    },
    toggleStarred(record) {
      this.$store.dispatch("records/toggleStarred", {
        recordId: record.id,
        starred: !record.starred
      });
    }
  }
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal;
}

.v-card__text >>> img {
  max-width: 100%;
}
</style>
