import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexPersistence = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsFeeds: [
      {
        id: 1,
        author: "Ben Strack",
        title:
          "Sphere 3D Corp. Provides Bitcoin Production and Mining Updates for May 2022",
        body:
          'TORONTO--(BUSINESS WIRE)--Sphere 3D Corp. ("Sphere 3D" or the "Company") (Nasdaq: ANY), dedicated to becoming the leading carbon-neutral Bitcoin mining company operating at an industrial scale, provides results of its Bitcoin mining operation as of May 31, 20…'
      },
      {
        id: 2,
        author: "Ben Strack",
        title: "Bitstamp Launches Staking Offering for US Customers",
        body:
          "Customers can earn staking rewards of up to 5% with ether and algorand\nThe post Bitstamp Launches Staking Offering for US Customers appeared first on Blockworks."
      },
      {
        id: 3,
        author: "Karee Venema",
        title: "Stock Market Today: Stocks Stumble to Start But End With a Win",
        body:
          "Stocks endured another roller-coaster session on Thursday as investors weighed a weak forecast from one tech giant, the latest comments on the Federal Reserve's rate-hike timeline and mixed jobs data.\nMicrosoft (MSFT, +0.8%) was the main catalyst for the broa…"
      },
      {
        id: 4,
        author: "Tony Spilotro",
        title:
          "Daily Pump & Dump | June 2, 2022 Crypto Market Report: BTC, ETH, ICP",
        body:
          "The daily pump & dump is a weekday update on the crypto market providing you with an abbreviated breakdown of price action related to Bitcoin, Ethereum, and other trending altcoins.  Today’s summary: Bitcoin retests $30,000 after a rejection. Why is Ethereum …"
      },
      {
        id: 5,
        author: "Jesse Colzani",
        title: "Is Bitcoin Immune To Government Regulation?",
        body:
          "Law, markets, architecture and social norms are forces that constrain individuals’ behavior. Can governments take advantage of these to regulate Bitcoin?"
      },
      {
        id: 6,
        author: "Due",
        title:
          "So, You Want To Jump On The NFT Bandwagon. What You Need to Know",
        body:
          "There’s been a lot of buzz, good and bad, regarding ‌non-fungible‌ ‌tokens‌ ‌(NFTs). ‌Case in point, over $40 billion was reported as the market value of the NFT market in 2021. ‌You’ve also probably come across the headlines “Meet the 12-year-old coder set t…"
      },
      {
        id: 7,
        author: "William Suberg",
        title:
          "Esta métrica clásica de Bitcoin está mostrando una señal de compra por primera vez desde marzo de 2020",
        body:
          '"Investor Tool" dice ahora al mercado que se esperan "rendimientos descomunales" para quien compre Bitcoin ahora.\n \nEs posible que los alcistas de Bitcoin (BTC) solo necesiten un par de medias móviles simples (SMA) para determinar si ya alcanzamos un fondo en…'
      },
      {
        id: 8,
        author: "U.Today",
        title:
          "New York AG Issues Warning About Cryptocurrencies as Bitcoin Struggles to Recover",
        body:
          "New York Attorney General Letitia James has warned about some risks associated with cryptocurrency investing"
      },
      {
        id: 9,
        author: "insider@insider.com (Carla Mozée)",
        title:
          "Nasdaq jumps nearly 3% in volatile session as investors sidestep Microsoft warning and rate hike outlook",
        body:
          '"Right now, it\'s very hard to see the case for a pause," Fed Vice Chair Brainard told CNBC about the current course of hiking interest rates.'
      },
      {
        id: 10,
        author: "Aoyon Ashraf",
        title:
          "Kevin O’Leary Backed Bitcoin Miner to Locate HQ in North Dakota",
        body:
          "Bitzero plans to invest about $400 million to $500 million to build 200 megawatts of data centers in the state."
      },
      {
        id: 11,
        author: "Juliana Abrusio",
        title: "Opinião: Ataques em blockchain e responsabilidade civil",
        body:
          "Casos de fraudes envolvendo desvio e subtração de criptoativos acumulam-se no mercado impulsionado pelo uso da blockchain. Os criminosos aproveitam-se de vulnerabilidades por vezes existentes em exchanges e em smart contracts, para drenar criptoativos para di…"
      },
      {
        id: 12,
        author: "Damanick Dantes",
        title:
          "Bitcoin se estabiliza en un rango estrecho de trading con resistencia en $33K",
        body:
          "BTC continúa cotizando alrededor de un punto medio de $30.000, mientras los indicadores se mantienen neutrales."
      },
      {
        id: 13,
        author: "Shawn Amick",
        title:
          "Winklevoss-Owned Bitcoin Exchange Gemini Being Sued By Regulators",
        body:
          "Gemini, a cryptocurrency exchange, is being sued by the CFTC on allegations of false statements made to obtain certification for bitcoin futures contracts."
      },
      {
        id: 14,
        author: "Saeed Hassan",
        title:
          "Crypto Community At CoinMarketCap Predicts $1 Cardano By June 30",
        body:
          "Cardano’s price has been growing in recent weeks while the rest of the cryptocurrency market has been falling. This trend has encouraged some in the crypto community to be optimistic about its future price and make it a bright light among digital coins and to…"
      },
      {
        id: 15,
        author: "Cointelegraph By Jon Morgan",
        title:
          "Ethereum’s Merge FOMO isn’t priced in, making a spike to $2.6K a possibility",
        body:
          "Ethereum's price action hangs around major swing lows despite the all-important Merge network upgrade. Analysis suggests ETH is discounted below $2,000."
      },
      {
        id: 16,
        author: "Bessie Liu",
        title: "Are People Leaving Their Tech Jobs for Web3?",
        description:
          "Big tech is losing some top talent to blockchain companies\nThe post Are People Leaving Their Tech Jobs for Web3? appeared first on Blockworks."
      },
      {
        id: 17,
        author: "Octavio Mares",
        title:
          "Warning: New cyber criminal group Karakurt is extorting millions of companies around the world",
        body:
          "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued a security alert about Karakurt, a cybercriminal extortion group that extracts data from affected organizations and threatens to sell or leak it on the dark web if victims don't pay a…"
      },
      {
        id: 18,
        author: "Aleksandar Svetski",
        title: "Bitcoin And The Great Filter",
        body:
          'Bitcoin doesn\'t just "break all your models." Bitcoin breaks all cycles.'
      },
      {
        id: 19,
        author: "Valdrin Tahiri",
        title:
          "Green Satoshi Token (GST) cae a nuevos mínimos tras desplomarse un 88% desde su ATH",
        body:
          "Green Satoshi Token (GST) se cotiza dentro de un patrón alcista a corto plazo, cuya ruptura también podría conducir a una ruptura de una línea de resistencia descendente a largo plazo. GST es el token en el juego de STEPN, el primer juego NFT Move-to-Earn en …"
      },
      {
        id: 20,
        author: "Anunciante",
        title:
          "Análisis detrás de la fuerte recuperación y declive de LUNA 2.0: qué sigue?",
        body:
          "La falta de una actualización significativa en el algorítmico de Terra 2.0 y la pérdida de fe en el proyecto hace prudente no invertir en LUNA.\nLeer más"
      }
    ]
  },
  getters: {
    getNewsFeed: state => state.newsFeeds
  },
  mutations: {
    ADD_NEWS_FEED(state, data) {
      state.newsFeeds.push(data);
    },
    EDIT_NEWS_FEED(state, data) {
      let currentIndex = state.newsFeeds.findIndex(item => item.id === data.id);
      if (currentIndex !== -1) {
        state.newsFeeds[currentIndex] = data;
      }
    }
  },
  actions: {
    addNewsFeedAction: ({ commit }, formData) => {
      try {
        commit("ADD_NEWS_FEED", formData);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    editNewsFeedAction: ({ commit }, formData) => {
      try {
        commit("EDIT_NEWS_FEED", formData);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },

  plugins: [vuexPersistence.plugin],
  strict: process.env.DEV
});
