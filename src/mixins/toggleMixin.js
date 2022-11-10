export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideDialogue() {
            this.$emit('update:show', false);
        },
    },
    mounted() {

    },
}
