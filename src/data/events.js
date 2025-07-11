export const categories = [
  { id: "pop-up", name: "Pop-ups" },
  { id: "festival", name: "Festivals" },
  { id: "live-music", name: "Live Music" },
  { id: "theatre-comedy", name: "Theatre & Comedy" },
  { id: "food-drink", name: "Food & Drink" },
  { id: "art-exhibitions", name: "Art & Exhibitions" },
  { id: "sports-outdoor", name: "Sports & Outdoor" },
  { id: "workshops-classes", name: "Workshops & Classes" },
  { id: "outdoor-activities", name: "Outdoor Activities" },
];

export const events = [
  {
    id: 1,
    title: "Distillery District Winter Market",
    category: "pop-up",
    date: "2025-07-12",
    time: "10:00 AM - 6:00 PM",
    location: "Distillery District",
    address: "55 Mill St, Toronto",
    price: "Free",
  },
  {
    id: 2,
    title: "Royal Winter Fair",
    category: "festival",
    date: "2025-07-12",
    time: "9:00 AM - 9:00 PM",
    location: "Exhibition Place",
    address: "263 Princes Blvd, Toronto",
    price: "$25",
  },
  {
    id: 3,
    title: "Jazz Night at The Rex Hotel",
    category: "live-music",
    date: "2025-07-12",
    time: "8:00 PM - 12:00 AM",
    location: "The Rex Hotel",
    address: "194 Queen St W, Toronto",
    price: "$15",
  },
  {
    id: 4,
    title: "Second City Toronto",
    category: "theatre-comedy",
    date: "2025-07-12",
    time: "7:30 PM - 9:30 PM",
    location: "Second City Toronto",
    address: "51 Mercer St, Toronto",
    price: "$30",
  },
  {
    id: 5,
    title: "St. Lawrence Market Food Tour",
    category: "food",
    date: "2025-07-12",
    time: "11:00 AM - 2:00 PM",
    location: "St. Lawrence Market",
    address: "93 Front St E, Toronto",
    price: "$45",
  },
  {
    id: 6,
    title: "Morning Yoga in High Park",
    category: "wellness",
    date: "2025-07-12",
    time: "8:00 AM - 9:00 AM",
    location: "High Park",
    address: "1873 Bloor St W, Toronto",
    price: "$20",
  },
  {
    id: 7,
    title: "Harbourfront Christmas Market",
    category: "pop-up",
    date: "2025-07-12",
    time: "12:00 PM - 8:00 PM",
    location: "Harbourfront Centre",
    address: "235 Queens Quay W, Toronto",
    price: "Free",
  },
  {
    id: 8,
    title: "Trinity Bellwoods Farmers Market",
    category: "food",
    date: "2025-07-12",
    time: "9:00 AM - 1:00 PM",
    location: "Trinity Bellwoods Park",
    address: "790 Queen St W, Toronto",
    price: "Free",
  },
];

export function getEventsByCategory(category) {
  return todaysEvents.filter((event) => event.category === category);
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function getEventsByDateRange(startDate, endDate) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  return events.filter((event) => {
    const eventDate = event.date;
    return eventDate >= start && eventDate <= end;
  });
}

function getNextFriday() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  const targetDays = daysUntilFriday === 0 ? 0 : daysUntilFriday;
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + targetDays);
  return nextFriday;
}

function getNextSunday() {
  const nextFriday = getNextFriday();
  const nextSunday = new Date(nextFriday);
  nextSunday.setDate(nextFriday.getDate() + 2);
  return nextSunday;
}

function getCurrentWeekendStart() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceFriday = (dayOfWeek + 2) % 7;
  const friday = new Date(today);
  friday.setDate(today.getDate() - daysSinceFriday);
  return friday;
}

function getCurrentWeekendEnd() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  if (dayOfWeek === 0) {
    return today;
  } else {
    const daysUntilSunday = 7 - dayOfWeek;
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + daysUntilSunday);
    return sunday;
  }
}

export function getWeekendEvents() {
  const now = new Date();
  const dayOfWeek = now.getDay();

  if (dayOfWeek >= 1 && dayOfWeek <= 4) {
    return getEventsByDateRange(getNextFriday(), getNextSunday());
  } else {
    return getEventsByDateRange(
      getCurrentWeekendStart(),
      getCurrentWeekendEnd()
    );
  }
}

export function getWeekendDateRange() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  let startDate, endDate;

  if (dayOfWeek >= 1 && dayOfWeek <= 4) {
    startDate = getNextFriday();
    endDate = getNextSunday();
  } else {
    startDate = getCurrentWeekendStart();
    endDate = getCurrentWeekendEnd();
  }

  const options = { month: "short", day: "numeric" };
  const start = startDate.toLocaleDateString("en-US", options);
  const end = endDate.toLocaleDateString("en-US", options);

  return `${start} - ${end}`;
}
