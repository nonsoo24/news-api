<template>
  <div>
    <div class="card m-auto">
      <div class="card-content">
        <form @submit.prevent="submitForm">
          <fieldset>
            <!-- <h4 class="mb-3 card-title">{{title}}</h4> -->
            <h4 class="mb-3 card-title">News Portal</h4>
            <p>{{message}}</p>
            <!-- user email -->
            <div class="form-group mx-2">
              <label for="email">Email</label>
              <input id="email" type="text" class="form-control" placeholder="e.g michealolawale@gmail.com"
                v-model="user.email">
            </div>
            <!-- user email -->

            <!-- user name -->
            <div class="form-group mx-2" v-if="activeMode">
              <label for="user-name">Username</label>
              <input id="user-name" type="text" class="form-control" placeholder="" v-model="user.username">
            </div>
            <!-- user name -->


            <!-- user password -->
            <div class="form-group mx-2">
              <label for="password">Password</label>
              <div class="form-group">
                <input id="password" type="password" class="form-control" placeholder="At least 8 characters"
                  v-model="user.password">
              </div>

            </div>
            <!-- user password -->

            <!-- action button -->
            <button type="submit" class="btn btn-primary btn-submit" @click.prevent="submitForm()">
              {{loginText}}
            </button>
            <!-- action button -->

            <div class="d-flex mt-4">
              <p v-if="activeMode">{{text}}</p> <a class="ml-2" v-if="activeMode"
                @click="toggleLogin()">{{buttonText}}</a>
              <p v-if="activeMode == false">{{text}}</p> <a class="ml-2" v-if="activeMode == false"
                @click="toggleSignUp()">{{buttonText}}</a>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      message: '',
      buttonText: 'Login',
      loginText: 'Create Account',
      title: 'Sign Up',
      text: 'Already have an account?',
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
    //navigates to news portal (dashboard)
    userDashboard() {
      this.$router.push({
        path: 'dashboard'
      })
    },

    toggleLogin() {
      this.text = 'Don’t have an account yet?';
      this.buttonText = 'Create Account';
      this.loginText = 'Login'
      this.title = 'Login';
      this.activeMode = false;
    },

    toggleSignUp() {
      this.text = 'Already have an account?';
      this.buttonText = 'Login';
      this.loginText = 'Create Account'
      this.title = 'Sign Up';
      this.activeMode = true
    },


    //create account for user
    createAccount() {
      let id = localStorage.getItem('nextId');
      id = id ? parseInt(id) : 0;
      let newId = id + 1;
      this.user.id = id //generates unique user id
      this.account.push(this.user)
      localStorage.setItem('nextId', newId);
      let item = JSON.parse(localStorage.getItem('user'))

      if (item == null) {
        localStorage.setItem('user', JSON.stringify(this.account));
        this.message = 'Account created successfully!'
      } else {
        //finds user account from local storage
        let newUser = item.find((val) => val !== null && val.email == this.user.email)
        //checks user account exist in local storage
        if (!newUser) {
          item.push(this.user)
          localStorage.setItem('user', JSON.stringify(item));
          this.message = 'Account created successfully!'
        } else {
          this.message = 'Account already exist!'
        }
      }
    },

    //login user into application
    login() {
      let userData = JSON.parse(localStorage.getItem('user'))
      if (userData !== null) {
        //finds user account from local storage
        let user = userData.find((val) => val !== null && val.email === this.user.email)
        //checks user account exist in local storage
        if (!user) {
          this.message = `Account doesn't exist!`
        } else if (this.user.password !== user.password) {
          this.message = 'Incorrect password!'
        } else {
          this.userDashboard()
        }
      }
    },

    //submits user data based on activeMode truthy value
    submitForm() {
      if (this.activeMode) {
        this.createAccount()
      } else {
        this.login()
      }
    },
  },
};
</script>

<style scoped>
fieldset {
  border: 0;
}

input:focus {
  border: 0.0625rem solid #1F1F1F;
  outline: none;
  box-shadow: none;
}

.card {
  background: #fbfbfb;
  border-radius: 0.5rem;
  box-shadow: 0.0625rem 0.125rem 0.5rem rgba(0, 0, 0, 0.65);
  height: 31.25rem;
  width: 23.75rem;
  margin: 6rem auto 8.1rem auto  !important;
}

.card-content {
  padding: 0.75rem 1.875rem;
}

label {
  text-align: left;
  color: #0e0e0e;
  display: block !important;
}

.card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 0.25rem;
  padding-bottom: 1.4375rem;
  padding-top: 0.8125rem;
  text-align: center;
}

a {
  cursor: pointer;
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
  height: calc(1.5em + .75rem + 0.125rem);
  border-radius: .125rem;
  border: none;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  text-align: center;
  letter-spacing: 0;
}

</style>