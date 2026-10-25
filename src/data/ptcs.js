export const ptcsProject = {
  id: 3,
  slug: "ptcs",
  featured: true,
  title: "PTCS",
  category: "Bilingual Transit Companion",
  role: "React Native Developer",
  status: "Case study",
  shortDescription:
    "A bilingual English and Urdu passenger app for exploring published routes across Karachi’s electric bus network.",
  coverImage: "/projects/ptcs/cover.svg",
  techStack: [
    "React Native",
    "TypeScript",
    "React Navigation",
    "Django REST Framework",
    "PostgreSQL",
    "SQLite",
  ],
  links: {
    github: "",
    demo: "",
    email: "",
  },
};

export const ptcsPassengerFeatures = [
  {
    title: "Route discovery",
    text: "Browse published services across Karachi’s electric public-bus network.",
    icon: "↗",
  },
  {
    title: "Route details",
    text: "Review endpoints, ordered stops, and source-backed route information.",
    icon: "⌁",
  },
  {
    title: "Stops & boarding points",
    text: "Find stop details and neighborhood context before setting out.",
    icon: "⌖",
  },
  {
    title: "Trip planning",
    text: "Compare a journey across the published network information available in the app.",
    icon: "⇢",
  },
  {
    title: "Saved routes, available offline",
    text: "Keep useful routes close at hand with a local SQLite cache.",
    icon: "☆",
  },
  {
    title: "Arrival alerts",
    text: "Create alerts for a selected route and boarding point, then receive verified arrival updates.",
    icon: "◷",
  },
  {
    title: "Account & security",
    text: "Use secure bearer-token sessions to manage a passenger account and app preferences.",
    icon: "◌",
  },
  {
    title: "Bilingual experience",
    text: "Switch between English and Urdu across the passenger experience.",
    icon: "ا",
  },
];

export const ptcsAdminFeatures = [
  {
    title: "Admin dashboard",
    text: "A protected in-app workspace for staff transit operations.",
  },
  {
    title: "Passenger access",
    text: "Review passenger accounts and block or restore access when needed.",
  },
  {
    title: "Fleet records",
    text: "Register buses and maintain their operating status.",
  },
  {
    title: "Route records",
    text: "Create route records that enter the sourced review and publishing process.",
  },
  {
    title: "Stop records",
    text: "Add boarding points and associate them with the relevant route records.",
  },
];

export const ptcsScreens = [
  { group: "01 · First launch", name: "Splash screen", caption: "PTCS identity and Karachi transit introduction.", src: "/projects/ptcs/screenshots/01-splash.jpeg", alt: "PTCS splash screen with the Public Transport Connect System name." },
  { group: "01 · First launch", name: "Onboarding 1 of 3", caption: "Meet Karachi and the PTCS route experience.", src: "/projects/ptcs/screenshots/02-onboarding-karachi.jpeg", alt: "First PTCS onboarding screen introducing Karachi routes." },
  { group: "01 · First launch", name: "Onboarding 2 of 3", caption: "Review stops and keep published route information available offline.", src: "/projects/ptcs/screenshots/03-onboarding-stops.jpeg", alt: "Second PTCS onboarding screen about stops and offline routes." },
  { group: "01 · First launch", name: "Onboarding 3 of 3", caption: "Save regular routes and choose a stop for arrival notifications.", src: "/projects/ptcs/screenshots/04-onboarding-alerts.jpeg", alt: "Third PTCS onboarding screen introducing saved routes and arrival alerts." },
  { group: "01 · First launch", name: "Notification permission", caption: "The system prompt for PTCS notifications.", src: "/projects/ptcs/screenshots/05-notification-permission.jpeg", alt: "Mobile operating system notification permission prompt over the PTCS onboarding screen." },
  { group: "02 · Account access", name: "Create account", caption: "Register a passenger account with secure credentials.", src: "/projects/ptcs/screenshots/06-create-account.jpeg", alt: "PTCS account creation screen with name, email, and password fields." },
  { group: "02 · Account access", name: "Sign in", caption: "Return to saved routes and selected alerts.", src: "/projects/ptcs/screenshots/07-sign-in.jpeg", alt: "PTCS sign-in screen with email, password, and Google sign-in option." },
  { group: "02 · Account access", name: "Forgot password", caption: "Request a secure verification code by email.", src: "/projects/ptcs/screenshots/08-forgot-password.jpeg", alt: "PTCS forgotten-password screen requesting the registered email address." },
  { group: "02 · Account access", name: "Email verification", caption: "Confirm the registered email before setting a password.", src: "/projects/ptcs/screenshots/09-email-verification.jpeg", alt: "PTCS email verification screen with a six-digit code flow." },
  { group: "02 · Account access", name: "Verification code", caption: "Enter the six-digit code sent to the passenger email.", src: "/projects/ptcs/screenshots/10-verification-code.jpeg", alt: "PTCS verification flow with six code fields and a resend countdown." },
  { group: "03 · Passenger journey", name: "Home · route overview", caption: "Search the published network and open trip planning.", src: "/projects/ptcs/screenshots/11-home.jpeg", alt: "PTCS home screen with route search, Karachi coverage, and trip planning." },
  { group: "03 · Passenger journey", name: "Route directory", caption: "Search and browse published bus routes.", src: "/projects/ptcs/screenshots/12-routes.jpeg", alt: "PTCS routes screen with search, filters, and published route cards." },
  { group: "03 · Passenger journey", name: "Bus stops", caption: "Find boarding points and neighborhood context.", src: "/projects/ptcs/screenshots/13-stops.jpeg", alt: "PTCS bus stops list with stop names and nearby areas." },
  { group: "03 · Passenger journey", name: "Saved routes", caption: "Keep frequently used routes close at hand.", src: "/projects/ptcs/screenshots/14-saved-routes.jpeg", alt: "PTCS saved routes screen with two bookmarked route cards." },
  { group: "03 · Passenger journey", name: "Arrival notifications", caption: "Choose a route and boarding point for verified arrival updates.", src: "/projects/ptcs/screenshots/15-notifications.jpeg", alt: "PTCS notifications screen for selected stop alerts and recent activity." },
  { group: "04 · Profile & settings", name: "Profile", caption: "Review passenger details, saved routes, and account options.", src: "/projects/ptcs/screenshots/16-profile.jpeg", alt: "PTCS passenger profile with commute, account, and saved-route settings." },
  { group: "04 · Profile & settings", name: "Settings · English", caption: "Choose language and manage notification preferences.", src: "/projects/ptcs/screenshots/17-settings.jpeg", alt: "PTCS settings screen in English with language, notification, and help options." },
  { group: "04 · Profile & settings", name: "Delete account confirmation", caption: "A confirmation step before permanently removing a passenger account.", src: "/projects/ptcs/screenshots/18-delete-account-confirmation.jpeg", alt: "PTCS account deletion confirmation dialog." },
  { group: "04 · Profile & settings", name: "Report route or stop information", caption: "Send a correction for the PTCS data team to review.", src: "/projects/ptcs/screenshots/19-report-information.jpeg", alt: "PTCS report-information form for route, stop, access, or other issues." },
  { group: "04 · Profile & settings", name: "About PTCS", caption: "View Karachi coverage, offline information, and privacy notes.", src: "/projects/ptcs/screenshots/20-about-ptcs.jpeg", alt: "About PTCS screen with Karachi coverage, offline information, and privacy details." },
  { group: "05 · App states & Urdu", name: "Home · signed in", caption: "Passenger home view with profile and notification shortcuts.", src: "/projects/ptcs/screenshots/21-home-profile.jpeg", alt: "PTCS home screen showing the passenger profile shortcut and route search." },
  { group: "05 · App states & Urdu", name: "Home · offline", caption: "Saved transport information remains visible without a connection.", src: "/projects/ptcs/screenshots/22-home-offline.jpeg", alt: "PTCS home screen with an offline notice and cached route information." },
  { group: "05 · App states & Urdu", name: "Home · Urdu, offline", caption: "Urdu home experience with an offline status message.", src: "/projects/ptcs/screenshots/23-home-urdu-offline.jpeg", alt: "PTCS home screen in Urdu with an offline connection notice." },
  { group: "05 · App states & Urdu", name: "Home · Urdu", caption: "Explore route search and passenger tools in Urdu.", src: "/projects/ptcs/screenshots/24-home-urdu.jpeg", alt: "PTCS home screen translated into Urdu." },
  { group: "05 · App states & Urdu", name: "Settings · Urdu", caption: "Language and app preferences in Urdu.", src: "/projects/ptcs/screenshots/25-settings-urdu.jpeg", alt: "PTCS settings screen translated into Urdu." },
];

export const ptcsAdminScreens = [
  { name: "Admin dashboard", caption: "Staff tools for transit operations." },
  { name: "Passenger access", caption: "Block or restore passenger access." },
  { name: "Fleet", caption: "Register buses and update operating status." },
  { name: "Route records", caption: "Add records to the reviewed publishing workflow." },
  { name: "Stops management", caption: "Add boarding points to the network." },
];

export const ptcsEngineeringHighlights = [
  {
    title: "Offline-first essentials",
    text: "Route search and favorites use locally saved route information so riders can return to useful details without relying on a fresh network request.",
    number: "01",
  },
  {
    title: "Secure passenger sessions",
    text: "Bearer-token sessions connect the passenger app to account features through the Django REST API.",
    number: "02",
  },
  {
    title: "Governed route information",
    text: "Route records move through a sourced editor, reviewer, and publisher workflow before they appear in the passenger app.",
    number: "03",
  },
  {
    title: "English and Urdu",
    text: "The interface is designed for two languages, with clear labels and layouts that remain readable across both.",
    number: "04",
  },
];
