const Index = Vue.createApp({
    data() {
        return {            
        }
    },
    methods: {
        EntryLoading: function () {
            var $this = this;
            setTimeout(() => {
                $("#Index").addClass('d-none');
                $("#main").removeClass('d-none');
                $("#main").addClass('d-block');
              }, "7000");
        },
    },
    watch: {

    },
    mounted: function () {
        var $this = this;
        window.onload = function () {
            $this.EntryLoading();
        }
    },
});