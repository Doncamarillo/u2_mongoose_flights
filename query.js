const db = require('./db')
const {Airport,Flight} = require('./models')

const findFlight = async () => {
    const flights = await Flight.findOne()
    console.log(flights)
}

const createFlight = async () => {
    const airport = await Airport.findOne()

    let flight = await Flight.create ({
        airline: 'Spirit',
        flightNumber: 28,
        price: 120,
        numberOfSeats: 150,
        departingAirport: airport._code,
        arrivalAirport: airport._code,
        departureDateTime: 1200
    })
    console.log(flight)
}

const updateFlight = async() => {
    const updated = await Flight.updateOne(
        {
            price: 120
        },
        {
            price: 150
        })
        console.log (updated)
}

const deleteFlight = async() => {
    let deleted = await Flight.deleteOne ({flightNumber:28 })
    console.log(deleted)
}
  
async function main () {
    try {
        await findFlight()
        await createFlight() 
        await updateFlight()
        await deleteFlight()
    } catch (error){
        console.log(error)
    } finally {
        await db.close ()
    }
}
    
