<template>
    <Upcomming :projectList="projectList" :isViewMore="true" />
    <Previous :projectList="projectList" :dark="true" />
    <ApplyToLanuch class="padding-top" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Upcomming from '@/components/partials/home2/Upcomming.vue'
import Previous from '@/components/partials/project/Previous.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Upcomming, Previous, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Project Style 2', subtitle: "project 2" })
        return {}
    },
    head() {
        return {
            title: "project",
        }
    },
    data() {
        return {
            projectList: [],
            completedProjectList: [],
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')
            this.projectList = project.data.projectList

            const others = await axios.get('/api/others.json')
        },
    }
}
</script>

<style>

</style>