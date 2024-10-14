const {Schema} = require ('mongoose')

const flightSchema = new Schema (
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'airport_id'},
        arrivalAirport: {type: Schema.Types.ObjectId, ref:'airport_id'},
        departureDataTime: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = flightSchema