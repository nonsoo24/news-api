<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/logo copy.png" class="card-img-top" alt="news-img">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: []
        }
    },
    methods: {
        getNews() {
            axios.get('/v2/everything?q=bitcoin&apiKey=9ea7329bd4964071a04d0f095746f02b').then(response => {
                console.log(response.data.articles);
                //this.news = response.data.data;

            }).catch(error => {
                console.error(error);
            });


        },
    },
    mounted() {
       // this.getNews()
    },
}
</script>