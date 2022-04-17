var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBitsNRZ: [],
		encodedBitsNRZS: [],
        //encodedBitsAMI: [],
        encodedBitsRTZ: [],
		encodedBitsNRZM:[],
		encodedBitsBL:[],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            //this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBitsNRZ = getNRZEncoding(this.bits);
			this.encodedBitsNRZM  = getNRZMEncoding(this.bits);
			this.encodedBitsNRZS  = getNRZSEncoding(this.bits);
			this.encodedBitsRTZ = getReturnToZeroEncoding(this.bits);
			this.encodedBitsRTZ = getBLEncoding(this.bits);
        }
    }
})