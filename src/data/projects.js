export const projects = [
  {
    id: 1,

    slug: "excloth",

    featured: true,

    title: "ExCloth",

    category: "React Native E-Commerce Mobile Application",

    role: "React Native Frontend Developer",

    status: "Completed",

    year: "2026",

    shortDescription:
      "A modern fashion e-commerce mobile application where I focused on React Native frontend development, responsive UI, navigation, API integration and complete customer shopping flows.",

    coverImage: "/projects/excloth/cover.png",

    images: [
      {
        name: "Home Screen",
        src: "/projects/excloth/home.png",
        alt: "ExCloth Home Screen",
      },
      {
        name: "Product Details",
        src: "/projects/excloth/ProductDetails.png",
        alt: "ExCloth Product Details Screen",
      },
      {
        name: "Wishlist",
        src: "/projects/excloth/wishlist.png",
        alt: "ExCloth Wishlist Screen",
      },
      {
        name: "Shopping Cart",
        src: "/projects/excloth/MyCart.png",
        alt: "ExCloth Shopping Cart Screen",
      },
      {
        name: "Checkout",
        src: "/projects/excloth/checkout.png",
        alt: "ExCloth Checkout Screen",
      },
      {
        name: "Payment",
        src: "/projects/excloth/payment.png",
        alt: "ExCloth Payment Screen",
      },
      {
        name: "Orders",
        src: "/projects/excloth/MyOrders.png",
        alt: "ExCloth Orders Screen",
      },
      {
        name: "Profile",
        src: "/projects/excloth/profile.png",
        alt: "ExCloth Profile Screen",
      },
      {
        name: "Splash Screen",
        src: "/projects/excloth/Splash.png",
        alt: "ExCloth Splash Screen",
      },
      {
        name: "Order Placed",
        src: "/projects/excloth/OrderPlaced.png",
        alt: "ExCloth Order Placed Screen",
      },
      {
        name: "Sign Up",
        src: "/projects/excloth/Register.png",
        alt: "ExCloth Sign Up Screen",
      },
      {
        name: "Sign In",
        src: "/projects/excloth/Login.png",
        alt: "ExCloth Sign In Screen",
      },
      {
        name: "Reset Password",
        src: "/projects/excloth/ResetPassword.png",
        alt: "ExCloth Reset Password Screen",
      },
      {
        name: "Forgot Password",
        src: "/projects/excloth/ForgetPassword.png",
        alt: "ExCloth Forgot Password Screen",
      },
      {
        name: "Categories",
        src: "/projects/excloth/Categories.png",
        alt: "ExCloth Categories Screen",
      },
    ],

    overview:
      "ExCloth is a modern fashion e-commerce mobile application built with React Native CLI. My primary focus was frontend mobile development, including responsive interfaces, navigation flows, reusable components, product interactions, authentication screens, checkout experiences and integration with backend services.",

    problem:
      "A complete e-commerce mobile experience requires many frontend flows to work together smoothly. Authentication, product browsing, variants, wishlist, cart state, shipping addresses, checkout, payments and order management all need clear navigation, consistent UI and reliable data handling.",

    solution:
      "I built the ExCloth mobile frontend using React Native CLI and JavaScript, creating reusable interfaces and connected user flows across the application. React Navigation handles screen navigation, NativeWind is used for styling, and Axios and Supabase integrations connect the frontend with authentication, product, inventory and order data. Supabase and PostgreSQL provide the backend and database layer.",

    features: [
      "User Authentication",
      "Password Recovery & OTP Flow",
      "Product Categories",
      "Product Search",
      "Size & Color Variants",
      "SKU Management",
      "Stock Validation",
      "Wishlist",
      "Shopping Cart",
      "Quantity Management",
      "Shipping Address Management",
      "Checkout Flow",
      "Cash on Delivery",
      "Card Payment Demo Flow",
      "Easypaisa Demo Flow",
      "JazzCash Demo Flow",
      "Bank Transfer Demo Flow",
      "Order Creation",
      "Order History",
      "Order Details",
      "Notifications",
      "Profile Management",
    ],

    techStack: [
      "React Native CLI",
      "JavaScript",
      "NativeWind",
      "React Navigation",
      "AsyncStorage",
      "Axios",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
    ],

    details: [
      {
        label: "My Role",
        value: "React Native Frontend Developer",
      },

      {
        label: "Platform",
        value: "Android & iOS",
      },

      {
        label: "Frontend",
        value: "React Native CLI",
      },

      {
        label: "Language",
        value: "JavaScript",
      },

      {
        label: "Styling",
        value: "NativeWind",
      },

      {
        label: "Navigation",
        value: "React Navigation",
      },

      {
        label: "API Integration",
        value: "Axios & REST APIs",
      },

      {
        label: "Backend Service",
        value: "Supabase",
      },

      {
        label: "Database",
        value: "PostgreSQL",
      },

      {
        label: "Project Type",
        value: "E-Commerce Mobile Application",
      },

      {
        label: "Year",
        value: "2026",
      },
    ],

    learnings: [
      "Building reusable React Native components",
      "Structuring scalable mobile frontend projects",
      "Creating responsive mobile interfaces",
      "Designing complex navigation flows",
      "Managing application state and local storage",
      "Integrating REST APIs with mobile interfaces",
      "Building authentication and password recovery flows",
      "Handling product size, color and stock variants",
      "Designing cart and checkout experiences",
      "Integrating Supabase services with React Native",
      "Building order and payment user flows",
      "Debugging Android and iOS frontend issues",
    ],

    links: {
      github: "https://github.com/DevSaifullah0/ExCloth.git",
      demo: "",
      apk: "https://github.com/DevSaifullah0/ExCloth/releases/download/v1.0.0/ExCloth-V1.0.0.apk",
    },
  },

  /*
  {
    id: 2,

    slug: "ptcs",

    featured: true,

    title: "PTCS",

    category: "React Native Mobile Application",

    role: "React Native Frontend Developer",

    status: "In Development",

    year: "2026",

    shortDescription:
      "Short description here.",

    coverImage: "/projects/ptcs/cover.png",

    images: [
      {
        name: "Home Screen",
        src: "/projects/ptcs/home.png",
        alt: "PTCS Home Screen",
      },
    ],

    overview: "Overview here.",

    problem: "Problem here.",

    solution: "Solution here.",

    features: [
      "Feature One",
      "Feature Two",
    ],

    techStack: [
      "React Native CLI",
      "JavaScript",
      "React Navigation",
    ],

    details: [
      {
        label: "My Role",
        value: "React Native Frontend Developer",
      },
      {
        label: "Platform",
        value: "Android & iOS",
      },
    ],

    learnings: [
      "Learning One",
      "Learning Two",
    ],

    links: {
      github: "",
      demo: "",
      apk: "",
    },
  },
  */
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}