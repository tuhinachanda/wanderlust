const sampleListings = [
  {
    title: "Serene Himalayan Wood Cabin",
    description:
      "Nestled amidst pine forests with panoramic views of snow-capped peaks. Features a stone fireplace, private balcony, heated oak floors, and complimentary locally brewed mountain tea.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    price: 3800,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "Mountains"
  },
  {
    title: "Luxury Cliffside Villa with Infinity Pool",
    description:
      "Perched on the caldera cliffs offering world-famous sunset vistas. Includes a private infinity pool, whitewashed cave bedroom suites, and a shaded pergola for Mediterranean breakfasts.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    price: 18500,
    location: "Oia, Santorini",
    country: "Greece",
    category: "Amazing Pools"
  },
  {
    title: "Historic Venetian Canal Loft",
    description:
      "An authentic 17th-century loft with exposed wooden beams, terrazzo floors, and French doors opening right onto a tranquil side canal. Gondola pickup available directly at the door.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    price: 9200,
    location: "Venice",
    country: "Italy",
    category: "Iconic Cities"
  },
  {
    title: "Modern Minimalist Zen Garden Homestay",
    description:
      "Crafted with natural cedar wood, shoji screens, and tatami living spaces. Step directly into your private rock garden with a stone bath tub fed by natural hot springs.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    price: 11000,
    location: "Kyoto",
    country: "Japan",
    category: "Trending"
  },
  {
    title: "Cozy Nordic Aurora Glass Chalet",
    description:
      "Experience the magical Northern Lights straight from your bed. Features glass ceiling domes, an authentic Finnish wood-fired sauna, and snowshoeing trails right outside.",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
    price: 14500,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic"
  },
  {
    title: "Eco-friendly Bamboo Haven Treehouse",
    description:
      "An open-air multi-story bamboo architectural wonder suspended above emerald rice terraces and tropical jungle canopy. Features a plunge pool, hammock net, and organic vegan dining.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    price: 6500,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "Trending"
  },
  {
    title: "Private Beachfront Villa with Palm Grove",
    description:
      "Step directly from your sun patio onto golden sands. Enjoy direct ocean access, outdoor rain showers, hammocks swaying between coconut palms, and private chef services.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
    price: 8900,
    location: "Morjim, Goa",
    country: "India",
    category: "Beach"
  },
  {
    title: "Highland Stone Castle Keep",
    description:
      "Live like Scottish royalty in a restored medieval stone tower. Features a grand banquet hall, spiral stone staircases, antique four-poster beds, and views of Loch Ness.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80",
    price: 22000,
    location: "Inverness, Scottish Highlands",
    country: "United Kingdom",
    category: "Castles"
  },
  {
    title: "Sunny Tuscan Vineyard Farmhouse",
    description:
      "Surrounded by centuries-old olive groves and Sangiovese grape vines. Features stone archways, an authentic wood-fired pizza oven, wine cellar tastings, and sun-drenched courtyards.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    price: 7800,
    location: "Chianti, Tuscany",
    country: "Italy",
    category: "Farms"
  },
  {
    title: "Wilderness Safari Glamping Dome",
    description:
      "Luxury canvas dome situated on a private wildlife corridor. Features panoramic viewing decks, plush king beds, ensuite bathroom with copper tub, and guided sunset bush drives.",
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    price: 12500,
    location: "Maasai Mara",
    country: "Kenya",
    category: "Camping"
  },
  {
    title: "Chic Haussmann Studio with Balcony",
    description:
      "Classic Parisian apartment on the 5th floor with wrought-iron Juliet balconies, herringbone parquet floors, marble fireplace, and views of Parisian zinc rooftops.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    price: 6900,
    location: "Le Marais, Paris",
    country: "France",
    category: "Rooms"
  },
  {
    title: "Heritage Carved Cedar Houseboat",
    description:
      "Handcrafted Kashmiri walnut and cedar wood houseboat floating on tranquil Dal Lake. Includes traditional Shikara boat transfers, Kashmiri Kahwa tea service, and snow mountain views.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    price: 5400,
    location: "Srinagar, Kashmir",
    country: "India",
    category: "Boats"
  }
];

module.exports = { data: sampleListings };
