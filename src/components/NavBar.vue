<template>
    <div>
        <header class="header">
            <div class="header__avatar d-flex">
                <img class="header__avatar-notification" src="../assets/icons/bell-ring.svg" alt="notification-icon">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <img src="../assets/icons/rahul.svg" alt="profile-icon">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" @click="logOut()">Logout</a>
                    </div>
                </li>

            </div>
        </header>
    </div>
</template>

<script>
export default {
    methods: {
        logOut() {
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>

<style scoped>
   .header {
   display: flex;
   justify-content: flex-end;
   padding: 1.25rem;
   background-color: #F6F6F6;
   }

   .header__avatar-notification {
   margin-right: 3rem;
   }

   .header__avatar > img {
       cursor: pointer;
   }

   li {
       list-style: none;
   }

   a {
       cursor: pointer;
   }
</style>