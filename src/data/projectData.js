import redbusHome from "../data/thumbnail/redbusHome.png";
import flashcardHome from "../data/thumbnail/flashcardHome.png";
import ecomHome from "../data/thumbnail/ecomHome.png";
import bookMyShowHome from "../data/thumbnail/bookMyShow.png";
import todoImg from "../data/thumbnail/todoImg.png";
import movieImg from "../data/thumbnail/movieImg.png";
import weatherImg from "../data/thumbnail/weatherImg.png";
export const majorProjects = [
  {
    title: "Red Bus",
    duration: "23 March - 26 April 2024",
    image: redbusHome,
    liveLink: "https://red-bus-by-ashvary.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/RedBus",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "mongodb",
      "tailwind",
      "node",
      "express",
      "restfulApi",
      "gitHub",
      "netlify",
      "render",
      "postman",
      "mongoDbAtlas,stripe",
    ],

    description: `
        <p>The Red Bus app is a user-friendly platform designed to simplify bus ticketing. Users can easily search, book, and manage tickets. The app was developed using an agile methodology for efficient design and development.</p>
        
        <p>The frontend is built with <strong>ReactJS</strong> and <strong>Tailwind CSS</strong> for a sleek, responsive interface, while <strong>React-Redux</strong> ensures smooth state management.</p>
        
        <p>On the backend, <strong>Node.js</strong> and <strong>MongoDB</strong> provide a scalable infrastructure, with <strong>Stripe</strong> integrated for secure payment processing.</p>
    
        <h3 class="text-xl font-semibold mt-4">Key Features:</h3>
        <ul class="list-disc pl-5">
          <li><strong>Bus Search & Booking:</strong> Easily search for buses and select seats.</li>
          <li><strong>Payment Integration:</strong> Secure payments via <strong>Stripe</strong>.</li>
          <li><strong>Ticket Generation:</strong> Immediate digital tickets after payment.</li>
        </ul>
      `,
  },
  {
    title: "Flashcard Generator",
    duration: "5 Jul - 27 Oct 2023",
    image: flashcardHome,
    liveLink: "https://flashcardgenerator4.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/flashcardgenerator",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "tailwind",
      "gitHub",
      "netlify",
    ],
    description: `
    <p>The project addressed the need for a user-friendly application to simplify the creation and management of flashcards efficiently. It was developed using a combination of technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Redux Toolkit</strong>, <strong>Formik</strong>, <strong>jspdf</strong>, <strong>yup</strong>, and <strong>react-router-dom</strong> to ensure robust functionality.</p>

    <p>The application facilitates intuitive creation and access to flashcards, supporting features such as text and image card creation, sharing options, download capabilities, deletion functionality, and print support for enhanced usability.</p>

    <p>To further enhance project efficiency, <strong>Agile methodology</strong> was employed, with <strong>React</strong>, <strong>React-Redux</strong>, and <strong>localStorage</strong> used for data management, <strong>React Router</strong> for routing, and <strong>Tailwind CSS</strong> for responsive component development. Input validation with <strong>Formik.js</strong> helped streamline user interactions, ensuring a smooth and reliable user experience.</p>
  `,
  },
  {
    title: "E-Com-App",
    duration: "26 Feb - 28 May 2024",
    image: ecomHome,
    liveLink: "https://ecom-app-by-ashvary.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/e-com-app",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "mongodb",
      "tailwind",
      "node",
      "express",
      "restfulApi",
      "gitHub",
      "netlify",
      "render",
      "postman",
      "mongoDbAtlas",
      "razorpay",
    ],
    description: `
    <p>The project addressed the demand for a user-friendly e-commerce application by streamlining the browsing, purchasing, and management of products to enhance the shopping experience. Developed using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Redux Toolkit</strong>, <strong>NodeMailer</strong>, <strong>React-Router</strong>, <strong>Formik</strong>, and <strong>Yup</strong>, the platform offers a comprehensive solution for customers. It features easy navigation, secure transactions, and efficient product management.</p>

    <p>The platform includes advanced functionalities such as product search, cart management, order placement, and a seamless checkout process to ensure user satisfaction. Additionally, a responsive user interface was crafted to ensure optimal performance and visual appeal across various devices, prioritizing accessibility and ease of use for all customers. The application was designed to handle both the customer and admin sides of the platform efficiently.</p>

    <p>On the frontend, the application is powered by <strong>React</strong>, providing a dynamic, responsive interface, while <strong>Tailwind CSS</strong> is used for sleek and responsive styling. For state management, <strong>Redux Toolkit</strong> ensures smooth and efficient navigation across the app. On the backend, secure transactions are facilitated through the integration of <strong>NodeMailer</strong>, while user authentication is handled using <strong>JWT (JSON Web Tokens)</strong>. Additionally, <strong>Razorpay</strong> has been integrated as the payment gateway for secure, seamless transactions.</p>

    <p>The platform also offers essential user management features, including <strong>user registration</strong>, <strong>login</strong>, and <strong>password reset</strong> functionalities. Users can easily register an account, log in securely, and reset their passwords whenever needed, ensuring a smooth user experience throughout the platform.</p>

    <p>In the administrative dashboard, the platform provides admins with the ability to manage products, monitor orders, and moderate user reviews. Admins can easily add new products, update existing listings, and keep track of customer feedback. With this robust feature set, the application aims to deliver a comprehensive, secure, and user-friendly e-commerce experience.</p>
  `,
  },
  {
    title: "BookmyShow",
    duration: "26 Feb - 28 May 2024",
    image: bookMyShowHome,
    liveLink: "https://bookmyshow-3.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/bookmyshow",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "mongodb",
      "bootstrap",
      "node",
      "express",
      "restfulApi",
      "gitHub",
      "netlify",
      "render",
      "postman",
      "mongoDbAtlas",
      "axios",
    ],
    description: `
    <p>BookMyShow is a simple, user-friendly web application that allows users to book movie tickets. It lets users easily select a movie, time slot, and seats from the available options. The main goal of this project was to connect the frontend, backend, and database to create a smooth user experience.</p>

    <p>The frontend provides an intuitive interface for booking, while the backend handles the booking logic and stores data. We use <strong>localStorage</strong> for temporary data storage and <strong>MongoDB</strong> for permanent storage of bookings. This project helped me understand the flow between the frontend, backend, and database in a real-world application.</p>
  `,
  },
];

export const miniProjects = [
  {
    title: "Todo-App",
    image: todoImg,
    liveLink: "https://mytodoapp-v2.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/todo_app",
    techStackUsed: ["html", "css", "js", "react", "gitHub", "netlify", "redux"],
    description: `"Never forget a task again! This web app lets you create and manage your to-dos, and even saves them when you close your browser."`,
  },
  {
    title: "Movie-Finder",
    image: movieImg,
    liveLink: "https://movies-finder-app-v2.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/movie_finder",
    techStackUsed: ["html", "css", "js", "react", "gitHub", "netlify", "axios"],
    description: `"Can't decide what to watch? Search for movies and explore options with this handy web app."`,
  },
  {
    title: "Weather-App",
    image: weatherImg,
    liveLink: "https://weather-app-ashvary.netlify.app/",
    gitHubLink: "https://github.com/Ashvary1996/weather_app",
    techStackUsed: [
      "html",
      "css",
      "js",
      "react",
      "gitHub",
      "netlify",
      "react-spinners",
      "axios",
    ],
    description: `"This weather app lets you search for the current conditions and 3-day forecast for any location. Plan your outfits, pack for your trip, or simply check on friends and family – all with a few clicks."`,
  },
];
