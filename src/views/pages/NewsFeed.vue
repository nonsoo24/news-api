<template>
  <div>
    <!-- navbar -->
    <NavBar />

    <!-- news articles -->
    <div class="container mt-3">
      <h4 class="font-weight-bold text-center">News Feed</h4>

      <div class="search-box">
        <InputField
          v-model="searchQuery"
          type="text"
          id="search"
          placeholder="Search"
          class="search-input"
        />
        <button type="button" class="btn" @click="showModal">
          Add
        </button>

        <Modal
          v-show="isModalVisible"
          @close="closeModal"
          buttonLabel="Save"
          :onClick="onAddNewsFeed"
        >
          <template v-slot:header>
            Add News Feed
          </template>

          <template v-slot:body>
            <InputField
              v-model="newsFeedFordData.title"
              type="text"
              id="title"
              placeholder="Title"
              class="search-input"
            />

            <InputField
              v-model="newsFeedFordData.author"
              type="text"
              id="author"
              placeholder="Author"
              class="search-input"
            />

            <TextAreaField
              v-model="newsFeedFordData.body"
              id="body"
              placeholder="Body"
              rows="5"
              class="search-input"
            />
          </template>
        </Modal>
        <!-- <button @click="onSortAscending('author')">Asc</button>
        <button @click="onSortDescending('author')">Dsc</button> -->
      </div>

      <CardItem
        v-for="news in searchNewsFeed"
        :key="news.id"
        :title="news.title"
        :body="news.body"
        :author="news.author"
      />
    </div>
    <!-- news articles -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardItem from "@/components/CardItem.vue";
import InputField from "@/components/InputField.vue";
import TextAreaField from "@/components/TextAreaField.vue";
import Modal from "@/components/Modal.vue";
import { newsFeeds } from "../../helpers/data";

export default {
  data() {
    return {
      newsFeeds,
      searchQuery: null,
      isModalVisible: false,
      newsFeedFordData: {
        title: "",
        body: "",
        author: ""
      }
    };
  },
  components: {
    NavBar,
    CardItem,
    InputField,
    TextAreaField,
    Modal
  },
  computed: {
    searchNewsFeed() {
      if (this.searchQuery) {
        return this.newsFeeds.filter(item =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.newsFeeds;
    }
  },

  methods: {
    onAddNewsFeed() {
      const currentIndex = this.newsFeeds.findIndex(
        item =>
          item.title.toLowerCase() === this.newsFeedFordData.title.toLowerCase()
      );
      if (currentIndex === -1) {
        this.newsFeeds.push(this.newsFeedFordData);
      } else {
        this.newsFeeds.push(this.newsFeedFordData);
      }

      console.log(this.newsFeedFordData);
    },
    onSortAscending(value) {
      if (value === "title") {
        return this.newsFeeds.sort((a, b) =>
          a.title === b.title ? 0 : a.title < b.title ? -1 : 1
        );
      }
      if (value === "body") {
        return this.newsFeeds.sort((a, b) =>
          a.body === b.body ? 0 : a.body < b.body ? -1 : 1
        );
      }
      return this.newsFeeds.sort((a, b) =>
        a.author === b.author ? 0 : a.author < b.author ? -1 : 1
      );
    },

    onSortDescending(value) {
      if (value === "title") {
        return this.newsFeeds.sort((a, b) =>
          b.title === a.title ? 0 : b.title < a.title ? -1 : 1
        );
      }
      if (value === "body") {
        return this.newsFeeds.sort((a, b) =>
          b.body === a.body ? 0 : b.body < a.body ? -1 : 1
        );
      }
      return this.newsFeeds.sort((a, b) =>
        b.author === a.author ? 0 : b.author < a.author ? -1 : 1
      );
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
.search-box {
  margin: 0 auto;
  display: block;
  padding-top: 2.5rem;
}
.search-input {
  width: 100%;
}
</style>
