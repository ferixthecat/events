import { events } from "./cuurrentE";

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
