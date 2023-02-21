import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./pages/HomePage.vue";
import TransactionPage from "./pages/TransactionPage.vue";
import TransactionDetailsPage from "./pages/TransactionDetailsPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
    {
        path: "/", 
        

        component: HomePage
    },
    {
        path: "/transactions",  
        name: "transaction-route", 
        component: TransactionPage,
    },
    {
        path: "/transactions/:id",  
        name: "transaction-details-route", 
        component: TransactionDetailsPage,
    },

    {
        path: "/ts",  
        redirect:"/transactions",  
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: NotFoundPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;
