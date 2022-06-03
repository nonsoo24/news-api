<template>
  <!-- card item-->
  <div class="list-toggle">
    <div class="m-3 card">
      <div class="news_card_caption-list">
        <!-- Title -->
        <h5 class="text-left font-weight-bold">
          {{ title }}
        </h5>
        <!-- Title -->

        <p class="mt-3">{{ body }}</p>
        <p class="text-left">
          <small>{{ author }}</small>
        </p>
      </div>
    </div>
  </div>
  <!-- card item -->
</template>

<script>
export default {
  data() {
    return {
      switchCard: "card-toggle",
      isCard: true
    };
  },
  props: {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.card-toggle {
  display: flex;
  flex-wrap: wrap;
}

.list-toggle {
  display: block;
}
.list-date {
  color: #999;
}

.card-img {
  display: block;
}

.list-img {
  display: none;
}

.card-width {
  width: 15rem;
}

.news_card_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15rem;
  overflow: hidden;
}

.news_card_caption-list {
  padding: 1rem;
  color: #000;
  text-align: left;
}

.news_card_date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
  color: #ffffff;
  background: #006ba6;
}

.news_card_date .date-display-single {
  color: #ffffff !important;
}

.news_card_date .date-display-single:before {
  content: "" !important;
  margin-right: 0 !important;
}

.news_card_caption {
  justify-content: left;
  padding: 0.75rem 1rem;
  padding: 1rem;
  color: #000;
}

.toggle-wrapper > img {
  cursor: pointer;
}
</style>
