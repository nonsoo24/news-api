<template>
  <div>
    <!-- navbar -->
    <Navbar />

    <!-- news feeds -->
    <div class="container mt-3">
      <h4 class="font-weight-bold text-center">News Feed</h4>

      <div class="d-flex justify-content-between">
        <div>
          <h5 class="text-left mb-3">Sort</h5>

          <div class="d-flex justify-content-between">
            <h6 class="">Author</h6>
            <div class="d-flex justify-content-between mb-4">
              <button
                class="btn btn-dark mr-2"
                @click="onSortAscending('author')"
              >
                Asc
              </button>
              <button class="btn btn-dark" @click="onSortDescending('author')">
                Dsc
              </button>
            </div>
          </div>

          <div class="d-flex justify-content-between mb-4">
            <h6>Title</h6>
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-dark mr-2"
                @click="onSortAscending('title')"
              >
                Asc
              </button>
              <button class="btn btn-dark" @click="onSortDescending('title')">
                Dsc
              </button>
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <h6>Body</h6>
            <div class="d-flex justify-content-between  mb-4">
              <button
                class="btn btn-dark mr-2"
                @click="onSortAscending('body')"
              >
                Asc
              </button>
              <button class="btn btn-dark" @click="onSortDescending('body')">
                Dsc
              </button>
            </div>
          </div>
        </div>

        <div class="news-wrapper">
          <div class="search-box d-flex align-items-center">
            <InputField
              v-model="searchQuery"
              type="text"
              id="search"
              placeholder="Search"
              class="search-input"
            />
            <button
              type="button"
              class="btn btn-primary ml-2 mb-3"
              @click="showModal"
            >
              Add
            </button>
          </div>
          <CardItem
            v-for="news in searchNewsFeed"
            :key="news.id"
            :title="news.title"
            :id="news.id"
            :body="news.body"
            :author="news.author"
            :handler="onEditNewsFeed"
          />
        </div>
      </div>

      <Modal
        v-show="isModalVisible"
        @close="closeModal"
        :buttonLabel="buttonLabel"
        :onClick="handleSubmit"
      >
        <template v-slot:header> {{ actionType }} News Feed </template>

        <template v-slot:body>
          <InputField
            v-model="newsFeedFormData.title"
            type="text"
            id="title"
            placeholder="Title"
            class="search-input"
          />

          <InputField
            v-model="newsFeedFormData.author"
            type="text"
            id="author"
            placeholder="Author"
            class="search-input"
          />

          <TextAreaField
            v-model="newsFeedFormData.body"
            id="body"
            placeholder="Body"
            rows="5"
            class="search-input"
          />
        </template>
      </Modal>
    </div>
    <!-- news feeds -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import CardItem from "@/components/CardItem.vue";
import InputField from "@/components/InputField.vue";
import TextAreaField from "@/components/TextAreaField.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchQuery: null,
      actionType: "Add",
      buttonLabel: "Save",
      isModalVisible: false,
      newsFeedFormData: {
        title: "",
        body: "",
        author: ""
      }
    };
  },
  components: {
    Navbar,
    CardItem,
    InputField,
    TextAreaField,
    Modal
  },
  computed: {
    ...mapGetters({
      newsFeeds: "getNewsFeed"
    }),
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
    handleSubmit() {
      if (this.actionType === "Add") {
        this.onAddNewsFeed();
      }
      if (this.actionType === "Edit") {
        this.onUpdateNewsFeed();
      }
    },
    onAddNewsFeed() {
      const currentIndex = this.newsFeeds.findIndex(
        item =>
          item.title.toLowerCase() === this.newsFeedFormData.title.toLowerCase()
      );
      if (currentIndex === -1) {
        const ids = this.newsFeeds.map(item => item.id);

        const max = Math.max(...ids);

        this.$store.dispatch("addNewsFeedAction", {
          ...this.newsFeedFormData,
          id: max + 1
        });
        this.onSortDescending("title");
        this.closeModal();
        this.newsFeedFormData = { ...null };
      } else {
        alert("News already exist");
      }
    },
    onUpdateNewsFeed() {
      this.$store.dispatch("editNewsFeedAction", this.newsFeedFormData);
      this.closeModal();
    },
    onEditNewsFeed(item) {
      this.actionType = "Edit";
      this.buttonLabel = "Update";
      this.newsFeedFormData = {
        title: item.title,
        body: item.body,
        author: item.author,
        id: item.id
      };
      this.showModal();
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
      this.newsFeedFormData = { ...null };
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
  width: 80%;
}

.news-wrapper {
  width: 85%;
}
</style>
