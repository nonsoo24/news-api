<template>
    <div>
        <!-- navbar -->
        <NavBar />

        <!-- news articles -->
        <div class="container mt-3">
            <h4 class="font-weight-bold text-center">News Portal</h4>

            <div class="text-right toggle-wrapper">
                <img src="../assets/icons/card-icon.png" alt="card-icon" v-if="isCard == false"
                    @click="toggleCard('list')" width="40" height="40"  data-toggle="tooltip" data-placement="bottom" title="Card view">

                <img src="../assets/icons/List-icon.png" alt="list-icon" v-if="isCard" @click="toggleCard('card')"
                    width="40" height="40" data-placement="bottom" title="List view">
            </div>

            <!-- article card -->
            <div :class="[ isCard ? 'card-toggle' : 'list-toggle' ]">
                <div class="m-3 card" :class="[ isCard ? 'news_card_wrapper' : '' ]"
                    v-for="(article, articleIndex) in articles" :key=articleIndex>

                    <!-- Image -->
                    <div class="news_card_top">
                        <img :src=article.urlToImage :class="[ isCard ? 'card-img' : 'list-img' ]" alt="news-img"
                            width="238" height="190">
                    </div>
                    <!-- Image -->

                    <!-- Title -->
                    <div :class="[ isCard ? 'news_card_caption' : 'news_card_caption-list' ]">
                        <h6 class="text-left" v-if="isCard">{{article.title}}</h6>
                        <h5 class="text-left font-weight-bold" v-if="isCard == false">{{article.title}}</h5>
                        <p class="mt-3" v-if="isCard == false">{{article.description}}</p>
                        <p class="text-left"> <small>{{article.author}}</small></p>
                        <p v-if="isCard == false" class="list-date text-left"> <small>{{convertDate(article.publishedAt)}} </small> </p>

                        <div class="text-left">
                            <a :href=article.url class="btn btn-primary" target="_blank">Read</a>
                        </div>
                    </div>
                    <!-- Title -->

                    <!-- Date -->
                    <div class="news_card_date" v-if="isCard">
                        {{convertDate(article.publishedAt)}}
                    </div>
                    <!-- Date -->

                </div>
            </div>
            <!-- article card -->
        </div>
        <!-- news articles -->
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import moment from 'moment'
export default {
    data() {
        return {
            switchCard: 'card-toggle',
            isCard: true,
            articles: []
        }
    },
    components: {
    NavBar
  },

    methods: {
        //switch article view - card or list view
        toggleCard(value) {
            if (value == 'card') {
                this.isCard = false

            } else {
                this.isCard = true
            }
        },

        //converts article date to maonth and day
        convertDate(articleDate) {
            let newArticleDate = moment(articleDate).format("MMM Do YY");
            let dateSplit = newArticleDate.split(' ')
            return `${dateSplit[0]} ${dateSplit[1]}`
        },

        //fetches latest news from news API
        async getNews() {
            try {
                const response = await axios.get(`sortBy=publishedAt&pageSize=${Number(50)}`)
                const data = await response.data.articles
                this.articles = data;
            } catch (error) {
                console.error('error', error)
            }
        },

        //fetches more news from news API when user scrolls to the bottom
        fetchMoreNews() {
            window.onscroll = async () => {
                try {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                    if (bottomOfWindow) {
                       let page = 2;
                        const response = await axios.get(`/sortBy=publishedAt&pageSize=${Number(50)}&page=${page}`);
                        const data = await response.data.articles
                        this.articles.push(data);
                        page++
                    }
                } catch (error) {
                    console.error('error', error)
                }
            };
        },
    },
    async beforeMount() {
        await this.getNews();
    },
    async mounted() {
        await this.fetchMoreNews();
    },
}
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
    background: #006BA6;
}

.news_card_date .date-display-single {
    color: #ffffff !important;
}

.news_card_date .date-display-single:before {
    content: '' !important;
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