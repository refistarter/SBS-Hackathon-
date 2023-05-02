<template>
    <div>
        <!-- preloader start here -->

        <!-- preloader ending here -->
        <!-- ==========Header Section Starts Here========== -->
        <div class="header-section" :class="scrollPosition > 100 ? 'header-fixed fadeInUp' : ''">
            <div class="container">
                <div class="header-holder">
                    <div class="header-primary d-flex flex-wrap justify-content-between align-items-center">
                        <div class="brand-logo d-none d-lg-inline-block">
                            <div class="logo">
                                <nuxt-link to="/" @click="removeActive">
                                    <!-- <img src="/images/logo/refi-starter-logo.jpg" alt="logo" /> -->
                                    <h2>RefiStarter</h2>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="header-wrapper justify-content-lg-end">
                            <div class="mobile-logo d-lg-none">
                                <nuxt-link to="/" @click="removeActive">
                                    <h2>RefiStarter</h2>
                                    <!-- <img src="/images/logo/logo.png" alt="logo" /> -->
                                </nuxt-link>
                            </div>
                            <div class="menu-area">
                                <ul id="menu" class="menu">
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Home</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/" @click="removeActive">Home 1</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/home2" @click="removeActive">Home 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/home3" @click="removeActive">
                                                    Home 3
                                                    <span class="badge bg--secondary-color">New</span>
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Project</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/project" @click="removeActive">Project 1</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/project-two" @click="removeActive">Project 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/project/project-details" @click="removeActive">Project
                                                    Details</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/apply-project" @click="removeActive">Apply for
                                                    Project</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/token" @click="removeActive">Tokenomics</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Stacking</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/stacking" @click="removeActive">Stacking</nuxt-link>
                                            </li>
                                            <li>
                                                <a href="/farming" @click="removeActive">Farming</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Pages</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/roadmap" @click="removeActive">Roadmap</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/roadmap-two" @click="removeActive">Roadmap 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/kyc" @click="removeActive">KYC</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/tier" @click="removeActive">Tier</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/faq" @click="removeActive">FAQ</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/leaderboard"
                                                    @click="removeActive">Leaderboard</nuxt-link>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Team</a>
                                                <ul class="submenu">
                                                    <li>
                                                        <nuxt-link to="/team" @click="removeActive">Team</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/team/team-member" @click="removeActive">Team
                                                            member</nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="menu-item-has-children">
                                                <nuxt-link to="javascript:void(0);">Account</nuxt-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <nuxt-link to="/account/signup" @click="removeActive">Sign
                                                            Up</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/account/login" @click="removeActive">Log
                                                            In</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/account/reset-password"
                                                            @click="removeActive">Reset Pass</nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <nuxt-link to="/error" @click="removeActive">404</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/coming-soon" @click="removeActive">Coming
                                                    Soon</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Blog</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/blog" @click="removeActive">Blog</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/blog-two" @click="removeActive">Blog 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/blog-single" @click="removeActive">Blog
                                                    Single</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/contact-us" @click="removeActive">Contact</nuxt-link>
                                    </li>
                                </ul>
                                <client-only>
                                    <a class="wallet-btn" href="" data-bs-toggle="modal"
                                        data-bs-target="#wallet-option">
                                        <span>Connect</span>
                                        <i class="fa-solid fa-wallet px-1" style=" font-size: 1.2em"></i>
                                    </a>
                                </client-only>

                                <div id="icon" class="header-bar d-lg-none" @click="close">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WaletModal />
    </div>
</template>

<script>
import WaletModal from "@/components/partials/header/WaletModal.vue"
export default {
    name: 'HeaderComponent',
    components: { WaletModal },
    data() {
        return {
            scrollPosition: 0
        }
    },
    created() {
        if (process.client) {
            window.addEventListener("scroll", this.handleScroll);
        }
    },
    mounted() {
        this.eventList();
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    },

    methods: {
        handleScroll() {
            if (process.client) {
                this.scrollPosition = window.scrollY
            }
        },
        close() {
            const element = document.getElementById("menu");
            element.classList.toggle("active");
            const icon = document.getElementById("icon");
            icon.classList.toggle("active");

            document.querySelectorAll(".menu li").forEach(function (item) {
                item.classList.remove("open")
            });
        },

        removeActive() {
            const element = document.getElementById("menu");
            element.classList.toggle("active");
            const icon = document.getElementById("icon");
            icon.classList.toggle("active");

        },
        eventList() {
            const elementList = Array.from(document.querySelectorAll(".menu li"))
            if (window.innerWidth)
                for (let i = 0; i < elementList.length; i++) {
                    (function (index) {
                        elementList[index].addEventListener("click", function () {
                            document.querySelectorAll(".menu li").forEach(function (item, j) {

                                if (j != index) {
                                    item.classList.remove("open")
                                }
                            });
                            elementList[index].classList.toggle("open");
                        })
                    })(i);
                }
        }
    },
}
</script>

<style lang="scss">
// .menu li ul {
//     display: none;
// }
</style>