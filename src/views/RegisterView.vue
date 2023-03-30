<template>
    <div class="register-box">
        <div class="register-logo">
            <a href="/"><b>{{ this.$store.state.app.name }}</b>LTE</a>
        </div>
        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>
                <form action="/register" method="post" @submit.prevent="loginSubmit()">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Full name" v-model="name">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                        <p v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        <p v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <p v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Retype password" v-model="passwordCheck">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <p v-if="this.password != this.passwordCheck">Password mismatch</p>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="agreeTerms" name="terms" value="agree" v-model="agree">
                                <label for="agreeTerms">
                                    I agree to the <a href="#">terms</a>
                                </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>

                    </div>
                </form>
                <div class="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-primary">
                        <i class="fab fa-facebook mr-2"></i>
                        Sign up using Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-danger">
                        <i class="fab fa-google-plus mr-2"></i>
                        Sign up using Google+
                    </a>
                </div>
                <a href="/login" class="text-center">I already have a membership</a>
            </div>

        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
// import {}
export default {
    beforeMount() {
        $('body').removeClass('sidebar-mini').addClass('login-page')
        $('title').html(`Login | ${this.$store.state.app.name}`)
    },
    methods: {
        loginSubmit() {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.$error && this.password === this.passwordCheck) {
                $('body').addClass('sidebar-mini').removeClass('login-page')
                // console.log("submit")
                // this.email = this.password = null
                // this.v$.$reset()
                // window.location.href = '/'
                this.$router.push('/')
                const formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                console.log(formData)
            }
        }
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordCheck: '',
            agree: false,
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            name: { required },
            email: { required, email },
            password: { required },
            agree: { checked: v => v }
        }
    },

}
</script>

<style lang="scss" scoped>
.input-group {
    p {
        font-size: 12px;
        color: #dc3545;
        position: absolute;
        bottom: -33px;
    }
}
</style>