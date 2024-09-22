const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    } = require("@google/generative-ai");
    
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });
    
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    };
    
    
        export const chatSession = model.startChat({
        generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                    "role": "user",
                    "parts": [
                    {"text": "Generate Travel Plan for Location: ddd, wangchan, Chon Buri Province, Thailand, for 5 days and 4 nights for Just Me with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDate} days and 4 night with each day plan with best time to visit in JSON   \nvisit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 5 days and 4 night with each day plan with best time to visit in JSON\n\n\n\n"},
                    ],
                },
                {
                    "role": "model",
                    "parts": [
                    {"text": "I can't provide real-time information like flight prices, hotel availability, or image URLs. Those details are constantly changing. However, I can give you a structured plan and guide you on how to find the information yourself.\n\n**Here's a possible luxury travel plan for a 5-day trip to Wang Chan, Chon Buri, Thailand:**\n\n**Day 1: Arrival and Relaxation**\n\n* **Flight:** (You'll need to find flights yourself using a booking website like Skyscanner, Kayak, or Expedia. Specify your departure city and arrival at U-Tapao International Airport (UTP) near Pattaya.)\n* **Accommodation:** Check-in at a luxury resort in Wang Chan or nearby Pattaya. (Use websites like Booking.com, Expedia, or Hotels.com to find options.)\n* **Afternoon:** Settle into your hotel, relax by the pool, or indulge in a spa treatment.\n* **Evening:** Enjoy a gourmet dinner at the hotel's restaurant or explore a high-end restaurant in Pattaya.\n\n**Day 2: Beach and Luxury Experience**\n\n* **Morning:** Visit a secluded beach in Wang Chan or a nearby beach in Pattaya. (Consider the popular Pattaya Beach, Jomtien Beach, or one of the smaller coves). \n* **Afternoon:** Enjoy a private yacht charter or a luxurious catamaran cruise along the coast. \n* **Evening:** Fine dining experience at a restaurant with a view or a show at a prestigious theater in Pattaya.\n\n**Day 3: Cultural Immersion and Fine Dining**\n\n* **Morning:** Explore Wat Yansangwararam, a beautiful temple in Wang Chan, and learn about its history and significance.\n* **Afternoon:** Visit a local market to experience the vibrant culture and sample regional Thai cuisine. \n* **Evening:** Enjoy a delectable meal at a Michelin-starred restaurant in Pattaya.\n\n**Day 4: Adventure and Nature**\n\n* **Morning:** Visit Khao Kheow Open Zoo, one of the largest open zoos in Thailand, home to diverse wildlife.\n* **Afternoon:** Explore the lush greenery and natural beauty of the Sriracha Tiger Zoo or a nearby national park.\n* **Evening:** Enjoy a relaxing dinner at a rooftop restaurant with views of the city or a traditional Thai dinner at a restaurant in Pattaya.\n\n**Day 5: Departure**\n\n* **Morning:** Enjoy a leisurely breakfast and final moments of relaxation at your resort. \n* **Afternoon:** Check out of your hotel and transfer to U-Tapao International Airport (UTP) for your flight back home.\n\n**Places to Visit Near Wang Chan:**\n\n* **Wat Yansangwararam:** [Place Details], [Image URL], [Geo Coordinates], [Ticket Pricing]\n* **Khao Kheow Open Zoo:** [Place Details], [Image URL], [Geo Coordinates], [Ticket Pricing]\n* **Sriracha Tiger Zoo:** [Place Details], [Image URL], [Geo Coordinates], [Ticket Pricing] \n* **Pattaya Beach:** [Place Details], [Image URL], [Geo Coordinates], [Ticket Pricing] (Free to access)\n* **Jomtien Beach:** [Place Details], [Image URL], [Geo Coordinates], [Ticket Pricing] (Free to access)\n\n**Hotel Options:**\n\n* **[Hotel Name]**: [Hotel Address], [Price], [Image URL], [Geo Coordinates], [Rating], [Description]\n* **[Hotel Name]**: [Hotel Address], [Price], [Image URL], [Geo Coordinates], [Rating], [Description]\n* **[Hotel Name]**: [Hotel Address], [Price], [Image URL], [Geo Coordinates], [Rating], [Description]\n\n**Tips:**\n\n* **Book flights and accommodation in advance, especially if you're traveling during peak season.**\n* **Consider a private car or taxi service for transport around the area, as public transportation may be limited.**\n* **Learn basic Thai phrases to enhance your travel experience.**\n* **Be mindful of cultural norms and dress appropriately, especially when visiting temples.**\n* **Be prepared for hot weather, especially during the summer months.**\n\n**JSON format:**\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Wang Chan, Chon Buri Province, Thailand\",\n    \"duration\": \"5 days and 4 nights\",\n    \"budget\": \"Luxury\"\n  },\n  \"days\": [\n    {\n      \"day\": 1,\n      \"title\": \"Arrival and Relaxation\",\n      \"activities\": [\n        {\n          \"time\": \"Arrival\",\n          \"activity\": \"Flight to U-Tapao International Airport (UTP)\",\n          \"details\": \"Find flights yourself using booking websites.\"\n        },\n        {\n          \"time\": \"Afternoon\",\n          \"activity\": \"Check in at a luxury resort\",\n          \"details\": \"Find options on Booking.com, Expedia, or Hotels.com.\"\n        },\n        {\n          \"time\": \"Evening\",\n          \"activity\": \"Dinner at hotel restaurant or a high-end restaurant in Pattaya\"\n        }\n      ]\n    },\n    // Add other days in similar format \n  ],\n  \"placesToVisit\": [\n    {\n      \"name\": \"Wat Yansangwararam\",\n      \"details\": \"[Place Details]\",\n      \"imageUrl\": \"[Image URL]\",\n      \"geoCoordinates\": \"[Geo Coordinates]\",\n      \"ticketPricing\": \"[Ticket Pricing]\"\n    },\n    // Add other places \n  ],\n  \"hotels\": [\n    {\n      \"name\": \"[Hotel Name]\",\n      \"address\": \"[Hotel Address]\",\n      \"price\": \"[Price]\",\n      \"imageUrl\": \"[Image URL]\",\n      \"geoCoordinates\": \"[Geo Coordinates]\",\n      \"rating\": \"[Rating]\",\n      \"description\": \"[Description]\"\n    },\n    // Add other hotels\n  ]\n}\n```\n\n**Remember:** This is a template. Customize it by filling in specific details based on your preferences and budget. \n"},
                    ],
                },
        ],
        });
    
        
    