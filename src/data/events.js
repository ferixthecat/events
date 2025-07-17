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
    title: "Ninja Creami Swirl",
    category: "pop-up",
    date: "2025-07-19 2025-07-20",
    time: "11:00 AM - 5:00 PM",
    location: "The Welcome Market",
    address: "938 Queen St W, Toronto",
    price: "Free",
    description:
      "Ninja Kitchen hosting a pop-up promoting the Ninja Swirl Creami, come get Free Ice Cream!",
  },
  {
    id: 2,
    title: "BIG on Bloor",
    category: "festival",
    date: "2025-07-19 2025-07-20",
    time: "12:00 PM - 12:00 AM",
    location: "Bloor St W",
    address: "Bloor St W, between Dufferin to Lansdowne",
    price: "Free",
    description:
      "Bloordale's Festival of Art & Culture features a weekend street closure and site-based activations for a week after",
  },
  {
    id: 3,
    title: "Ontario Honda Dealers Indy Toronto",
    category: "sports-outdoor",
    date: "2025-07-18 2025-07-19 2025-07-20",
    time: "8:00 AM - 4:00 PM",
    location: "Exhibition Place",
    address: "100 Prince's Blvd, Toronto",
    price: "$50+",
    description:
      "A world-class motorsports festival which takes place annually on a 2874-kilometre, 11-turn temporary circuit using the streets surrounding Exhibition Place.",
  },
  {
    id: 4,
    title: "13th Panamerican Food and Music Festival",
    category: "food-drink",
    date: "2025-07-18 2025-07-19 2025-07-20",
    time: "10:00 AM - 10:00 PM",
    location: "Nathan Phillips Square",
    address: "100 Queen St W, Toronto",
    price: "Free",
    description:
      "Canada's largest festival celebrating the best in food and culture of the Western Hemisphere.",
  },
  {
    id: 5,
    title: "The Cookout",
    category: "food-drink",
    date: "2025-07-19",
    time: "12:00 PM - 10:00 PM",
    location: "Stackt Market",
    address: "28 Bathurst St, Toronto",
    price: "Free",
    description:
      "Where food, Black culture, and community come together for an unforgettable experience.",
  },
  {
    id: 6,
    title: "Suprema Opera",
    category: "theatre-comedy",
    date: "2025-07-18 2025-07-19",
    time: "12:15 PM - 7:15 PM",
    location: "TD Music Hall",
    address: "178 Victoria St, Toronto",
    price: "Free",
    description:
      "Check out this one-act, 15-minute pop-up opera about frozen pizza. Guests will also get to sample the pizza.",
  },
  {
    id: 7,
    title: "Unity Fest",
    category: "festival",
    date: "2025-07-19",
    time: "12:00 PM - 9:00 PM",
    location: "Harbourfront Centre",
    address: "235 Queens Quay W, Toronto",
    price: "Free",
    description:
      "Canada's national hip hop festival is back for its 17th year! Join us for dance battles, live hip-hop performances, a local food vendor marketplace and networking events and vibes for all ages",
  },
  {
    id: 8,
    title: "Feastie Sip & Snack Festival",
    category: "food-drink",
    date: "2025-07-19",
    time: "1:00 PM - 9:00 PM",
    location: "Henderson's Brewery",
    address: "128A Sterling Rd, Toronto",
    price: "$17",
    description:
      "A food festival created to highlight diverse foods from local, BIPOC, and female-owned businesses.",
  },
  {
    id: 9,
    title: "Brazil Fest",
    category: "festival",
    date: "2025-07-19 2025-07-20",
    time: "12:00 PM - 11:00 PM",
    location: "Earlscourt Park",
    address: "Caledonia Rd & St. Clair Ave W, Toronto",
    price: "Free",
    description:
      "Experience the heart and soul of Brazil right here in Toronto! Immerse yourself in a world of rhythmic beats, vibrant colors and rich culture at Toronto Internationl Brazilfest",
  },
  {
    id: 10,
    title: "23rd Festival of South Asia",
    category: "festival",
    date: "2025-07-19 2025-07-20",
    time: "12:00 PM - 11:00 PM",
    location: "Gerrard India Bazaar",
    address: "1426 Gerrard St E, Toronto",
    price: "Free",
    description:
      "Get ready for the 23rd TD Festival of South Asia 2025 - a vibrant celebration of food, music, dance, and culture from the region!",
  },
  {
    id: 11,
    title: "Prime Video's Once Upon a Stream Toronto Pop-Up",
    category: "pop-up",
    date: "2025-07-19",
    time: "1:00 PM - 5:00 PM",
    location: "Mandy's at The Well",
    address: "437 Wellington St W, Toronto",
    price: "Free",
    description:
      "Prime Video is bringing book-to-screen magic to life at this one day event. You'll get to decorate your Kindle case with exclusive stickers and accessories from fan-favourite adaptations.",
  },
  {
    id: 12,
    title: "Shack Truck Tour",
    category: "food-drink",
    date: "2025-07-19 2025-07-20",
    time: "11:00 AM - 9:00 PM",
    location: "Green P Lot CP167",
    address: "18 Ossington Ave, Toronto",
    price: "$",
    description:
      "Fast-food chain hitting the road in a shiny new food truck that will make appearances around the city. The truck will be rolling up with picnic tables and lawn games, blasting music at each stop to bring the block-party barbecue vibes.",
  },
  {
    id: 13,
    title: "Toronto Outdoor Picture Show",
    category: "outdoor-activities",
    date: "2025-07-20",
    time: "9:00 PM - 11:00 PM",
    location: "Christie Pits Park",
    address: "128A Sterling Rd, Toronto",
    price: "Free",
    description:
      "Before I Change My Mind, directed by Trevor Anderson. With short films Death to teh Bikini!, I Like Girls, Goblin High",
  },
];

export function getEventsByCategory(category) {
  return todaysEvents.filter((event) => event.category === category);
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function parseEventDates(eventDate) {
  if (typeof eventDate === "string" && eventDate.includes(" ")) {
    const dates = eventDate.split(" ").filter((d) => d.trim());
    return {
      start: dates[0],
      end: dates[dates.length - 1],
    };
  }
  return {
    start: eventDate,
    end: eventDate,
  };
}

export function getEventsByDateRange(startDate, endDate) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  return events.filter((event) => {
    const eventDate = parseEventDates(event.date);
    return eventDate.start <= end && eventDate.end >= start;
  });
}

export function formatEventDate(dateValue) {
  if (!dateValue) return "";

  // Helper function to create date without timezone issues
  function createLocalDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  // Handle date range (e.g., "2025-07-19 2025-07-20" or "2025-07-19 2025-07-20 2025-07-21")
  if (typeof dateValue === "string" && dateValue.includes(" ")) {
    const dates = dateValue.split(" ").filter((d) => d.trim());
    if (dates.length >= 2) {
      const startDate = createLocalDate(dates[0]);
      const endDate = createLocalDate(dates[dates.length - 1]); // Use last date as end date

      // Format both dates
      const startFormatted = startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });
      const endFormatted = endDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });

      // If same month, show "July 19-21"
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDate.toLocaleDateString("en-US", {
          month: "long",
        })} ${startDate.getDate()}-${endDate.getDate()}`;
      }
      // If different months, show "July 19 - August 21"
      return `${startFormatted} - ${endFormatted}`;
    }
  }

  // Handle single date
  const singleDate = createLocalDate(dateValue);
  return singleDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
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
