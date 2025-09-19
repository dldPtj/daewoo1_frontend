import { createRouter, createWebHistory } from 'vue-router';

// 뷰 컴포넌트 import
import PageMove from '../components/PageMove.vue';
import HomePage from "../components/HomePage.vue";
import HotelSearch from  '../components/HotelSearch.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from "../components/FooterComponent.vue";
import HotelDetail from '../components/HotelDetail.vue';
import ProfileComponent from "@/components/ProfileComponent.vue";
// import PaymentPage from '../components/PaymentPage.vue';
// import Favorites from '../components/Favorites.vue';
import AccountPage from '../components/AccountPage.vue';
import ReservationPage from '../components/ReservationPage.vue';
// import PaymentAdd from '../components/PaymentAdd.vue';
import LoginPage from '../components/LoginPage.vue';
// import SignUp from '../components/SignUp.vue';
// import FirstPaymentAdd from '../components/FirstPaymentAdd.vue';
// import Findpw from '../components/Findpw.vue';
// import Identification from '../components/Identification.vue';
// import Resetpw from '../components/Resetpw.vue';
import TestAxios from "@/components/TestAxios.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', name: 'pagemove', component: PageMove },
        { path: '/homepage', name: 'homepage', component: HomePage },
        { path: '/hotelsearch', name: 'hotelsearch', component: HotelSearch },
        { path: '/headercomponent', name: 'headercomponent', component: HeaderComponent },
        { path: '/FooterComponent', name: 'FooterComponent', component: FooterComponent },
        { path: '/hoteldetail', name: 'hoteldetail', component: HotelDetail },
        { path: '/ProfileComponent', name: 'ProfileComponent', component: ProfileComponent },
        // { path: '/paymentpage', name: 'paymentpage', component: PaymentPage },
        // { path: '/favorites', name: 'favorites', component: Favorites },
        { path: '/account', name: 'account', component: AccountPage },
        { path: '/reservation', name: 'reservation', component: ReservationPage },
        // { path: '/paymentadd', name: 'paymentadd', component: PaymentAdd },
        { path: '/loginpage', name: 'loginpage', component: LoginPage },
        // { path: '/signup', name: 'signup', component: SignUp },
        // { path: '/firstpaymentadd', name: 'firstpaymentadd', component: FirstPaymentAdd },
        // { path: '/findpw', name: 'findpw', component: Findpw },
        // { path: '/identification', name: 'identification', component: Identification },
        // { path: '/resetpw', name: 'resetpw', component: Resetpw },
        { path: '/test', name: 'TestAxois', component: TestAxios },
    ],
});

export default router;
