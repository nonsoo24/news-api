<template>
  <div>
    <div class="card mx-auto">
      <form @submit.prevent="submitForm">
        <fieldset>
          <p>{{message}}</p>
          <!-- user email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control" placeholder="e.g michealolawale@gmail.com"
              v-model="user.email">
          </div>
          <!-- user email -->

          <!-- user name -->
          <div class="form-group">
            <label for="user-name">Username</label>
            <input id="user-name" type="text" class="form-control" placeholder="" v-model="user.username">
          </div>
          <!-- user name -->


          <!-- user password -->
          <div class="form-group">
            <label for="password">Password</label>
            <div class="form-group">
              <input id="password" type="password" class="form-control" placeholder="At least 8 characters"
                v-model="user.password">
            </div>

          </div>
          <!-- user password -->

          <!-- action button -->
          <button type="submit" class="btn-submit" @click.prevent="createAccount()">
            Create Account
          </button>

           <button type="submit" class="btn-submit" @click.prevent="login()">
            Login
          </button>
          <!-- action button -->
        </fieldset>
      </form>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      message: '',
      buttonText: 'Create My Free Account',
      loginText: 'Login',
      title: 'Already have an account?',
      header: `Gain financial freedom by simply investing`,
      activeMode: true,
      username: 'Username',
      user: {
        id: '',
        username: '',
        email: '',
        password: ''
      },
      account: []

    }
  },
  methods: {
    //navigates to user dashboard
    userDashboard() {
      this.$router.push({
        path: 'dashboard'
      })
    },

    //create account for user
    createAccount() {
      let id = localStorage.getItem('nextId');
      id = id ? parseInt(id) : 0;
      let newId = id + 1; //generates unique user id
      this.user.id = id
      this.account.push(this.user)
      localStorage.setItem('nextId', newId);
      let item = JSON.parse(localStorage.getItem('user'))

      if (item == null) {
        localStorage.setItem('user', JSON.stringify(this.account));
        this.message = 'Account created successfully!'
      } else {
        let newUser = item.find((val) => val !== null && val.email == this.user.email)
        if(!newUser) {
          item.push(this.user)
          localStorage.setItem('user', JSON.stringify(item));
          this.message = 'Account created successfully!'
        }else {
          this.message = 'Account already exist!'
        }
      }
    },

//user login
    login() {
      let userData = JSON.parse(localStorage.getItem('user'))
      if (userData !== null) {
        let user = userData.find((val) => val !== null && val.email === this.user.email)
        if (!user) {
          this.message = `Account doesn't exist!`
        } else if (this.user.password !== user.password) {
          this.message = 'Incorrect password!'
        } else {
          this.userDashboard()
        }
      }
    }
  },
};
</script>

<style scoped>
.card {
        margin: 0 auto;
        float: none;
        margin-bottom: 10px;
        width: 20rem;
}

  label {
    text-align: left;
    color: #0e0e0e;
    display: block !important;
}


</style>