let events = [
  {
    id: 10,
    name: "Grand Opening"
  },
  {
    id: 14,
    name: "Job Fair"
  },
  {
    id: 22,
    name: "Hunter Luker's B-Day"
  },
]
let people = [
  {
    name: "Shonda"
  },
  {
    name: "Eric"
  },
  {
    name: "Kevin"
  },
]

module.exports = {
  getEvents: (req, res) => {
    console.log('hit')
    res.status(200).send({events:events, people:people})
  },
  swapEventPosition: (req, res) => {

    let sId = req.body.startElementId
    let nId = req.body.nextElementId

    let sIx = events.findIndex((event)=>{return event.id == sId})
    let nIx = events.findIndex((event)=>{return event.id == nId})

    let sEl = events[sIx]
    let nEl = events[nIx]

    events[sIx] = nEl
    events[nIx] = sEl

    res.status(200).send({events:events, people:people})
  },
  searchForEvent: (req, res) => {
    console.log(req.query)
    let eventSearched = req.query.search

    let filteredEvents = events.filter((event) => {
      return event.name.includes(eventSearched)
    })

    res.status(200).send(filteredEvents)
  }
}