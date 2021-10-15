export default {
    methods: {
        formatDecimal(inputString) {
            return inputString.substr(2).slice(0, -2)
        },
        formatArray(inputString) {
            return inputString.substr(4).slice(0, -4)
        }
    }
}