const {Schema} = require ('mongoose')

const airportSchema = new Schema (
    {
        name: {type: String, require: true},
        location: {type: String, require: true},
        code: {type: String, require: true}
    },
    {timestamps:true}

)

module.exports = airportSchema