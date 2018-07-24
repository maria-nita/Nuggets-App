import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard},
        { path: '/signin', component: SignIn}
    ]
})

// if user is logged in go to dashboard if not go to sign in
firebaseApp.auth().onAuthStateChanged(user => {
    if  (user) {
        router.push('/dashboard')
    } else {
        router.replace('/signin')
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})