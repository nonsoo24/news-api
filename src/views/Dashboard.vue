<template>
    <div class="container">
        <div class="text-right toggle-wrapper">
            <img src="../assets/icons/card-icon.png" alt="card-icon" v-if="isCard == false" @click="toggleCard('list')" width="40" height="40">

            <img src="../assets/icons/List-icon.png" alt="list-icon"  v-if="isCard" @click="toggleCard('card')" width="40" height="40">
            <!-- <button class="btn btn-primary" v-if="isCard" @click="toggleCard('card')">Card view</button>
            <button class="btn btn-primary" v-if="isCard == false" @click="toggleCard('list')">List view</button> -->
        </div>

        <!-- <div :class="[ isCard ? 'card-toggle' : 'list-toggle' ]">
            <div class="card m-3" :class="[ isCard ? 'card-width' : '' ]" v-for="(article, articleIndex) in articles"
                :key= articleIndex>
                <img :src=article.urlToImage :class="[ isCard ? 'card-img' : 'list-img' ]" alt="news-img" width="238"
                    height="190">
                <div class="card-body">
                    <h5 class="card-title">{{article.title}}</h5>
                    <p class="card-text">{{article.description}}</p>
                    <a :href=article.url class="btn btn-primary">Read</a>
                </div>
            </div>
        </div> -->


        <div :class="[ isCard ? 'card-toggle' : 'list-toggle' ]">
            <div class="m-3 card" :class="[ isCard ? 'news_card_wrapper' : '' ]" v-for="(article, articleIndex) in articles"
                :key= articleIndex>

                <!-- Image -->
                <div class="news_card_top" >
                     <img :src= article.urlToImage :class="[ isCard ? 'card-img' : 'list-img' ]" alt="news-img" width="238" height="190">
                </div>
                <!-- Image -->

                <!-- Title -->
                <div :class="[ isCard ? 'news_card_caption' : 'news_card_caption-list' ]">
                    <h6>{{article.title}}</h6>
                    <p v-if="isCard == false"> {{convertDate(article.publishedAt)}}</p>
                    <a :href = article.url class="btn btn-primary">Read</a>
                </div>
                <!-- Title -->

                <!-- Date -->
                <div class="news_card_date"  v-if="isCard">
                    {{convertDate(article.publishedAt)}}
                </div>
                <!-- Date -->

            </div>
        </div>
    </div>
</template>

<script>
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
    methods: {
        toggleCard(value) {
            if (value == 'card') {
                this.isCard = false

            } else {
                this.isCard = true
            }
        },

        convertDate(articleDate) {
            let newArticleDate = moment(articleDate).format("MMM Do YY");
            let dateSplit = newArticleDate.split(' ')
            return `${dateSplit[0]} ${dateSplit[1]}`
        },

        async getNews() {
            try {
                const response = await axios.get(`/v2/everything?q=bitcoin&apiKey=9ea7329bd4964071a04d0f095746f02b&sortBy=publishedAt&pageSize=${Number(50)}`)
                const data = await response.data.articles
                this.articles = data;
            } catch (error) {
                console.error('error', error)
            }
        },
        fetchMoreNews() {
            window.onscroll = async () => {
                try {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                    if (bottomOfWindow) {
                        const response = await axios.get(`/v2/everything?q=bitcoin&apiKey=9ea7329bd4964071a04d0f095746f02b&sortBy=publishedAt&pageSize=${Number(50)}&totalResults=${Number(2)}`);
                        const data = await response.data.articles
                        this.articles.push(data);
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

.card-img {
    display: block;
}

.list-img {
    display: none;
}

.card-width {
    width: 15rem;
}

/* .news_card {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    border: 1px solid #ddd;
} */

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
    /* border: 1px solid #000; */
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
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    padding: 1rem;
    color: #000;
}

.toggle-wrapper > img {
    cursor: pointer;
}

</style>