<template>
    <div class="login-section padding-top padding-bottom">
        <div class=" container">
            <div class="account-wrapper">
                <div class="account-title">
                    <h2>Login</h2>
                    <p>Enter your email address and password to get access your account</p>
                </div>

                <form class="account-form">
                    <div class="form-group">
                        <input type="text" placeholder="User Name" name="username">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div class="checkgroup">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember Me</label>
                            </div>
                            <nuxt-link to="/account/reset-password">Forget Password?</nuxt-link>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="default-btn"><span>Login Now</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="d-block cate pt-10">Don’t Have any Account? <nuxt-link to="/account/signup"> Sign
                            Up</nuxt-link></span>
                    <div class="or"><span>or</span></div>
                    <h5 class="subtitle">Login With Social Media</h5>
                    <ul class="social justify-content-center">
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-discord"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>