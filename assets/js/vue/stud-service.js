Vue.use(VueMask.VueMaskPlugin);

var app = new Vue({
    el: '#app',
    data: {
        debugMode: true,
        isSubmitting: false,
        isSubmitted: false,
        isError: false,

        axiosConfig: {
            timeout: 30000,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        },

        phoneMask: '(###) ###-####',
        zipMask: '#####',

        form: {
            firstName: null,
            lastName: null,
            phone: null,
            email: null,
            message: null,
        },

    },
    created: function() {
        this._log('app initialized!');
        //this.setTestData();
    },
    methods: {

        // Helper functions

        setSubmitted: function(bool) {
            this.isSubmitted = bool;
        },

        setSubmitting: function(bool) {
            this.isSubmitting = bool;
        },

        setError: function(bool) {
            this.isError = bool;
        },

        _log: function(string) {
            if ( this.debugMode === true ) {
                console.log(string);
            }
        },

        _dir: function(data) {
            if ( this.debugMode === true ) {
                console.dir(data);
            }
        },

    },

    computed: {

    },

    watch: {

    },

    filters: {

    }
})
