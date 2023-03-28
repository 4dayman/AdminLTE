<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="/"><b>{{this.$store.state.app.name}}</b></a>
        </div>

        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form action="/login" method="post" @submit.prevent="loginSubmit()">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model.trim="email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        <p v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model.trim="password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <p v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</p>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" class="mr-2">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>

                    </div>
                </form>
                <div class="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-primary">
                        <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-danger">
                        <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                    </a>
                </div>

                <!-- <p class="mb-1">
                    <a href="#">I forgot my password</a>
                </p> -->
                <p class="mb-0">
                    <a href="/register" class="text-center">Register a new membership</a>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    beforeMount() { 
        $('body').removeClass('sidebar-mini').addClass('login-page')
        $('title').html(`Login | ${this.$store.state.app.name}`)
    },
    methods: {
        loginSubmit() {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.$error) {
                // console.log("submit")
                // this.email = this.password = null
                // this.v$.$reset()
                // window.location.href = '/'
                this.$router.push('/')
            }
            const formData = {
                email: this.email,
                password: this.password
            }
            console.log(formData)
        }
    },
    data() { 
        return {
            email: '',
            password: '',
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
     validations() {
        return {
            email: { required, email },
            password: { required }
        }
    },
}
</script>

<style lang="scss" scoped>
.input-group{
    p{
        font-size: 12px;
        color: #dc3545;
        position: absolute;
        bottom: -33px;
    }
}

</style>