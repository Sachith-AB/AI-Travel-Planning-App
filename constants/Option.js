export const selectTravelesList = [
    {   
        id:1,
        title: "Just Me",
        desc: "A sole traveler in exploration",
        icon: '🏖', // Add appropriate icon if needed
        people: '1'
    },
    {
        id:2,
        title: "Couple",
        desc: "A romantic getaway for two",
        icon: '🗽', // Add appropriate icon if needed
        people: '2'
    },
    {
        id:3,
        title: "Family",
        desc: "A fun family trip for all ages",
        icon: '✈', // Add appropriate icon if needed
        people: '4'
    },
    {
        id:4,
        title: "Friends",
        desc: "Adventure with a group of friends",
        icon: '🗺', // Add appropriate icon if needed
        people: '5'
    },
    {
        id:5,
        title: "Team",
        desc: "A team-building trip or corporate getaway",
        icon: '🏕', // Add appropriate icon if needed
        people: '10'
    }
];

export const selectBudgetList = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of cost',
        icon:'💵'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balanced cost with quality',
        icon:'💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'High-end and premium options',
        icon:'💸'
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDate} days and {totalNight} nights for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDate} days and {totalNight} night with each day plan with best time to visit in JSON'