import MyIndex from "@/components/MyIndex.vue";
import MyUser from "@/components/MyUser.vue";
import MyCourse from "@/components/MyCourse.vue";
export default [
    {
        path:'/index',
        component:MyIndex
    },
    {
        path:'/course',
        component:MyCourse
    },
    {
        path:'/user',
        component:MyUser
    },
]