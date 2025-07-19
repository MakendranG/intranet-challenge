// Sample dynamic content
const events = [
  { title: "Quarterly Town Hall", date: "July 21" },
  { title: "Yoga Wellness", date: "July 24" },
  { title: "Team Lunch", date: "July 29" }
];
const announcements = [
  "Congrats! Team Alpha won the hackathon!",
  "Submit your July compliance training.",
  "New parking regulations start next month."
];
const spotlightPerson = {
  name: "Makendran G.",
  role: "Dev Team",
  description: "Led the new onboarding platform project!"
};

// Render upcoming events
document.getElementById("event-list").innerHTML = events
  .map((event) => `<li><strong>${event.title}</strong> – ${event.date}</li>`)
  .join("");

// Render announcements
document.getElementById("announcements").innerHTML =
  "<ul>" + announcements.map((a) => `<li>${a}</li>`).join("") + "</ul>";

// Render team spotlight (with avatar as colored initials)
document.getElementById("spotlight").innerHTML = `
  <div><strong>${spotlightPerson.name}</strong> – ${spotlightPerson.role}</div>
  <div>${spotlightPerson.description}</div>
  <div class="avatar-placeholder">${spotlightPerson.name
    .split(" ")
    .map((n) => n[0])
    .join("")}</div>
`;

// Render office status
document.getElementById("weather").textContent =
  "Chennai: Sunny, 32°C (Office open)";
