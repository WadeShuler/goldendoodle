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
            address: null,
            address2: null,
            city: null,
            state: '',
            zip: null,
            referral: null,
            gender: null,
            temperament: null,
            home: null,
            fencedYard: null,
            firstDog: null,
            otherPets: null,
            otherPetsDetails: null,
            dogAllergies: null,
            investTime: null,
            vetCare: null,
            qualityFood: null,
            groomingNeeds: null,
            obedienceClasses: null,
            leftAlone: null,
            noShelter: null,
            signature: null,
            agreeTerms: null,
        },

        unitedStatesOptions: [
            { text: 'AK - Alaska', value: 'AK' },
            { text: 'AL - Alabama', value: 'AL' },
            { text: 'AR - Arkansas', value: 'AR' },
            { text: 'AZ - Arizona', value: 'AZ' },
            { text: 'CA - California', value: 'CA' },
            { text: 'CO - Colorado', value: 'CO' },
            { text: 'CT - Connecticut', value: 'CT' },
            { text: 'DC - District of Columbia', value: 'DC' },
            { text: 'DE - Delaware', value: 'DE' },
            { text: 'FL - Florida', value: 'FL' },
            { text: 'GA - Georgia', value: 'GA' },
            { text: 'HI - Hawaii', value: 'HI' },
            { text: 'IA - Iowa', value: 'IA' },
            { text: 'ID - Idaho', value: 'ID' },
            { text: 'IL - Illinois', value: 'IL' },
            { text: 'IN - Indiana', value: 'IN' },
            { text: 'KS - Kansas', value: 'KS' },
            { text: 'KY - Kentucky', value: 'KY' },
            { text: 'LA - Louisiana', value: 'LA' },
            { text: 'MA - Massachusetts', value: 'MA' },
            { text: 'MD - Maryland', value: 'MD' },
            { text: 'ME - Maine', value: 'ME' },
            { text: 'MI - Michigan', value: 'MI' },
            { text: 'MN - Minnesota', value: 'MN' },
            { text: 'MO - Missouri', value: 'MO' },
            { text: 'MS - Mississippi', value: 'MS' },
            { text: 'MT - Montana', value: 'MT' },
            { text: 'NC - North Carolina', value: 'NC' },
            { text: 'ND - North Dakota', value: 'ND' },
            { text: 'NE - Nebraska', value: 'NE' },
            { text: 'NH - New Hampshire', value: 'NH' },
            { text: 'NJ - New Jersey', value: 'NJ' },
            { text: 'NM - New Mexico', value: 'NM' },
            { text: 'NV - Nevada', value: 'NV' },
            { text: 'NY - New York', value: 'NY' },
            { text: 'OH - Ohio', value: 'OH' },
            { text: 'OK - Oklahoma', value: 'OK' },
            { text: 'OR - Oregon', value: 'OR' },
            { text: 'PA - Pennsylvania', value: 'PA' },
            { text: 'PR - Puerto Rico', value: 'PR' },
            { text: 'RI - Rhode Island', value: 'RI' },
            { text: 'SC - South Carolina', value: 'SC' },
            { text: 'SD - South Dakota', value: 'SD' },
            { text: 'TN - Tennessee', value: 'TN' },
            { text: 'TX - Texas', value: 'TX' },
            { text: 'UT - Utah', value: 'UT' },
            { text: 'VA - Virginia', value: 'VA' },
            { text: 'VT - Vermont', value: 'VT' },
            { text: 'VI - Virgin Islands', value: 'VI' },
            { text: 'WA - Washington', value: 'WA' },
            { text: 'WI - Wisconsin', value: 'WI' },
            { text: 'WV - West Virginia', value: 'WV' },
            { text: 'WY - Wyoming', value: 'WY' }
        ],

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
