const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const airport1 = await new Airport ({
        name: "Los Angeles Internation Airport",
        location: "Los Angeles, CA",
        code: "LAX"
    })
    airport1.save()

    const airport2 = await new Airport ({
        name: "Long Beach Airport",
        location: "Long Beach, CA",
        code: "LGB"
    })
    airport2.save()

    const airport3 = await new Airport ({
        name: "Harry Reid Internation Airport",
        location: "Paradise, NV",
        code: "LAS"
    })
    airport3.save()

    const airport4 = await new Airport ({
        name: "San Francisco International Airport",
        location: "San Francisco, CA",
        code:  "SFO"
    })
    airport4.save()


const flights = [
    {
        airline: "Jetblue",
        flightNumber: 12,
        price: 120,
        numberOfSeats: 186,
        departingAirport: airport1._code,
        arrivalAirport: airport3._code,
        departureDateTime: 1300
    },
    {
        airline: "Frontier",
        flightNumber: 4,
        price: 60,
        numberOfSeats: 186,
        departingAirport: airport3._code,
        arrivalAirport: airport4._code,
        departureDateTime: 600
    }, 
    {
        airline: "American Airlines",
        flightNumber: 17,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._code,
        arrivalAirport: airport1._code,
        departureDateTime: 1200

    },
    {
        airline: "United Airlines",
        flightNumber: 12,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._code,
        arrivalAirport: airport1._code,
        departureDateTime: 1600

    },
    {
        airline: "Southwest Airlines",
        flightNumber: 92,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport1._code,
        arrivalAirport: airport3._code,
        departureDateTime: 2000

    },
    {
        airline: "Alaska Airlines",
        flightNumber: 28,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport2._code,
        arrivalAirport: airport1._code,
        departureDateTime: 800

    },
    {
        airline: "Jetblue Airlines",
        flightNumber: 9,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport3._code,
        arrivalAirport: airport4._code,
        departureDateTime: 930

    },
    {
        airline: "Spirit Airlines",
        flightNumber: 8,
        price: 110,
        numberOfSeats: 160,
        departingAirport: airport4._code,
        arrivalAirport: airport3._code,
        departureDateTime: 1030

    },
]

await Airport.insertMany(airports)
console.log ('created airport list')
await Flight.insertMany(flights)
console.log('created flights list')
}

const run = async () => {
    await main ()
    db.close ()
}

run ()