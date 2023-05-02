<template>
    <div>
        <TeamMember />
        <NewLetter class="padding-top" />
    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import TeamMember from '@/components/partials/team/TeamMember.vue'
import NewLetter from '@/components/common/NewLetter.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { TeamMember, NewLetter },
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Tokenomics', subtitle: "Tokenomics" })
        return {
            activeID
        }
    },
    head() {
        return {
            title: "Tokenomics",
        }
    },
    data() {
        return {
            projectList: [],
            completedProjectList: [],
            tokenList: []
        }
    },
}
</script>

<style>

</style>