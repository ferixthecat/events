export const categories = [
  { id: "pop-up", name: "Pop-ups", icon: "🎪" },
  { id: "festival", name: "Festivals", icon: "🎉" },
  { id: "live-music", name: "Live Music", icon: "🎶" },
  { id: "theatre-comedy", name: "Theatre & Comedy", icon: "🎭" },
  { id: "food-drink", name: "Food & Drink", icon: "🍽️" },
  { id: "art-exhibitions", name: "Art & Exhibitions", icon: "🖼️" },
  { id: "sports-outdoor", name: "Sports & Outdoor", icon: "⚽" },
  { id: "workshops-classes", name: "Workshops & Classes", icon: "🛠️" },
  { id: "outdoor-activities", name: "Outdoor Activities", icon: "🏞️" },
];

export const todaysEvents = [
  {
    id: 1,
    title: "Distillery District Winter Market",
    category: "pop-up",
    time: "10:00 AM - 6:00 PM",
    location: "Distillery District",
    address: "55 Mill St, Toronto",
    price: "Free",
  },
  {
    id: 2,
    title: "Royal Winter Fair",
    category: "festival",
    time: "9:00 AM - 9:00 PM",
    location: "Exhibition Place",
    address: "263 Princes Blvd, Toronto",
    price: "$25",
  },
  {
    id: 3,
    title: "Jazz Night at The Rex Hotel",
    category: "live-music",
    time: "8:00 PM - 12:00 AM",
    location: "The Rex Hotel",
    address: "194 Queen St W, Toronto",
    price: "$15",
  },
  {
    id: 4,
    title: "Second City Toronto",
    category: "theatre-comedy",
    time: "7:30 PM - 9:30 PM",
    location: "Second City Toronto",
    address: "51 Mercer St, Toronto",
    price: "$30",
  },
  {
    id: 5,
    title: "St. Lawrence Market Food Tour",
    category: "food",
    time: "11:00 AM - 2:00 PM",
    location: "St. Lawrence Market",
    address: "93 Front St E, Toronto",
    price: "$45",
  },
  {
    id: 6,
    title: "Morning Yoga in High Park",
    category: "wellness",
    time: "8:00 AM - 9:00 AM",
    location: "High Park",
    address: "1873 Bloor St W, Toronto",
    price: "$20",
  },
  {
    id: 7,
    title: "Harbourfront Christmas Market",
    category: "pop-up",
    time: "12:00 PM - 8:00 PM",
    location: "Harbourfront Centre",
    address: "235 Queens Quay W, Toronto",
    price: "Free",
  },
  {
    id: 8,
    title: "Trinity Bellwoods Farmers Market",
    category: "food",
    time: "9:00 AM - 1:00 PM",
    location: "Trinity Bellwoods Park",
    address: "790 Queen St W, Toronto",
    price: "Free",
  },
];

export function getEventsByCategory(category) {
  return todaysEvents.filter((event) => event.category === category);
}

export function getEventsByDate(dateStr) {
  return todaysEvents.filter((event) => event.date === dateStr);
}
