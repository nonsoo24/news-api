<template>
    <div>
        <header class="header">
            <div class="header__avatar">
                <img class="header__avatar-notification" src="../assets/icons/bell-ring.svg" alt="notification-icon">
                <img src="../assets/icons/rahul.svg" alt="profile-icon">
            </div>
        </header>
    </div>
</template>

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

   /* .header__avatar {
       display: flex;
       justify-content: flex-end;
   } */
</style>