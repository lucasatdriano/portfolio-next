export const modal = {
    featuresTitle: 'Key Features',
    challengesTitle: 'Challenges',
    learningsTitle: 'Learnings',

    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> is a technology e-commerce platform designed to simulate a real production environment, covering both user interaction and administrative management.',

            development:
                'The application was built with <span class="spanColor">React</span>, using <span class="spanColor">Redux</span> for global state management and <span class="spanColor">Firebase</span> for authentication and data persistence. Features include <span class="spanColor">real-time search</span>, <span class="spanColor">advanced filters</span>, and <span class="spanColor">infinite scroll</span>, ensuring a smooth user experience.',

            architecture:
                'The architecture follows <span class="spanColor">component-based principles</span> with modular organization and separation of concerns. Global state management ensures efficient synchronization across the application.',

            conclusion:
                'This project demonstrates the development of a complete application, covering authentication, state management, performance, and user experience in a real-world scenario.',
        },

        lembraMed: {
            introduction:
                '<span class="spanColor">LembraMed</span> is an application designed to help with medication management, making it easier for users to track schedules and doses in a simple and efficient way.',

            development:
                'The application was built using <span class="spanColor">Next.js</span>, <span class="spanColor">TypeScript</span>, and <span class="spanColor">Tailwind CSS</span>, ensuring scalability, code organization, and efficient styling. It was built as a <span class="spanColor">PWA (Progressive Web App)</span>, allowing users to install it directly on their device with a native app-like experience. It allows users to register medications with scheduled times and triggers <span class="spanColor">device notifications</span> at the correct moment. It also supports <span class="spanColor">multiple accounts</span>, enabling management of different profiles on the same device.',

            architecture:
                'The system is structured around a complete <span class="spanColor">user flow</span>, including medication registration, dose tracking, and history management. Implementing it as a <span class="spanColor">PWA</span> required configuring a service worker, manifest, and caching strategy to ensure reliable installation and offline-friendly behavior on the device. Its component-based structure and static typing improve maintainability and scalability.',

            conclusion:
                'The project solves a real-world problem, demonstrating the ability to build applications with <span class="spanColor">business logic</span>, usability focus, real impact on users, and an installable app-like experience.',
        },

        lembraMedServer: {
            introduction:
                '<span class="spanColor">LembraMed-Server</span> is the backend API responsible for powering the LembraMed app, handling authentication, data persistence, and the business logic behind medication management.',

            development:
                'The server was built with <span class="spanColor">Node.js</span> and <span class="spanColor">JavaScript</span>, using <span class="spanColor">PostgreSQL</span> as the relational database to store users, medications, and dose history. The application was <span class="spanColor">containerized with Docker</span>, simplifying environment consistency and the deployment process.',

            architecture:
                'The architecture follows a <span class="spanColor">REST API</span> pattern, with a clear separation between routes, controllers, and the database access layer. Using <span class="spanColor">Docker</span> isolates dependencies and ensures the application behaves consistently across different environments.',

            conclusion:
                'The project reinforces the development of a robust and scalable API, capable of supporting multiple accounts and securely syncing data with the LembraMed app.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> is an institutional website for a car dealership, designed to present a modern catalog and improve user navigation when searching for vehicles.',

            development:
                'The project was built using <span class="spanColor">vanilla JavaScript</span>, <span class="spanColor">HTML</span>, and <span class="spanColor">CSS</span>, without frameworks, focusing on full control and performance. It includes <span class="spanColor">dynamic filters</span>, catalog rendering with <span class="spanColor">mock data</span>, and a <span class="spanColor">persistent login</span> system using <span class="spanColor">LocalStorage</span>.',

            architecture:
                'The architecture follows a simple and efficient approach, with direct DOM manipulation and modular script organization. It prioritizes <span class="spanColor">low complexity</span>, fast loading, and cross-device compatibility.',

            conclusion:
                'The result is a lightweight and functional application that demonstrates strong frontend fundamentals, focusing on performance, interactivity, and user experience.',
        },

        landingPsychology: {
            introduction:
                'This <span class="spanColor">Landing Page</span> was developed to present psychological services in a professional, modern, and accessible way, focusing on <span class="spanColor">lead generation</span> and client acquisition.',

            development:
                'The application was built using <span class="spanColor">Next.js</span>, leveraging optimized rendering and best frontend practices. Real integrations were implemented, such as <span class="spanColor">email form submission</span> and redirection to <span class="spanColor">WhatsApp</span> with a pre-filled message, simulating a real client acquisition flow.',

            architecture:
                'The project follows a <span class="spanColor">component-based architecture</span>, ensuring modularity and scalability. It also uses Next.js features for <span class="spanColor">image optimization</span>, performance, and improved SEO.',

            conclusion:
                'The result is a lightweight, responsive, and functional application that solves a real business problem by simplifying the contact between client and professional.',
        },
    },

    features: {
        lemnos: [
            'User authentication with <span class="spanColor">Firebase</span>',
            'Global state management with <span class="spanColor">Redux</span>',
            'Dynamic product catalog with advanced filters',
            'Real-time search',
            'Infinite scroll for efficient loading',
            'Product detail pages',
            'Admin panel for management',
            'Responsive and modern interface',
        ],

        lembraMed: [
            'Medication registration with custom schedules',
            '<span class="spanColor">Device notifications</span> for reminders',
            '<span class="spanColor">Multi-account support</span> on the same device',
            'Dose history tracking',
            'Missed dose tracking',
            '<span class="spanColor">Emergency call system</span> with quick access',
            'Installable on device as a <span class="spanColor">PWA</span>',
            'Simple and accessible interface',
        ],

        lembraMedServer: [
            'REST API built with <span class="spanColor">Node.js</span>',
            'Relational database with <span class="spanColor">PostgreSQL</span>',
            'User authentication and account management',
            '<span class="spanColor">Multi-account support</span>',
            'Persistence of dose history and medication data',
            'Containerized environment with <span class="spanColor">Docker</span>',
            'Organized structure with routes and controllers',
        ],

        alphaSpeed: [
            'Dynamic vehicle catalog',
            'Real-time interactive filters',
            'Persistent login using <span class="spanColor">LocalStorage</span>',
            'Dynamic rendering with mock data',
            'Direct DOM manipulation with <span class="spanColor">vanilla JavaScript</span>',
            'Responsive design for multiple devices',
            'Fast and optimized loading',
        ],

        landingPsychology: [
            'Responsive layout for multiple devices',
            'Integration with <span class="spanColor">WhatsApp</span> for automatic scheduling',
            'Message sending via <span class="spanColor">email form</span>',
            'Optimized structure for <span class="spanColor">SEO</span>',
            'Fast loading with <span class="spanColor">Next.js</span>',
            'Interface focused on <span class="spanColor">user conversion</span>',
            'Modular structure with <span class="spanColor">componentization</span>',
        ],
    },

    challenges: {
        lemnos: `The main challenge was structuring global state management using <span class="spanColor">Redux</span> in an application with multiple interconnected features. Additionally, implementing <span class="spanColor">advanced filters</span> and <span class="spanColor">real-time search</span> without impacting performance required careful logic organization and optimization.`,

        lembraMed: `The main challenge was building an application focused on <span class="spanColor">usability</span> and accessibility, ensuring that features like notifications, dose tracking, and emergency calls were simple and fast to use. It was also necessary to structure <span class="spanColor">multi-account support</span> while maintaining data organization.`,

        lembraMedServer: `The main challenge was structuring an organized and secure <span class="spanColor">REST API</span> to support multiple accounts and dose history for the LembraMed app.`,

        alphaSpeed: `The main challenge was going beyond the initial scope by implementing features such as <span class="spanColor">dynamic filters</span>, <span class="spanColor">catalog rendering with mock data</span>, and a <span class="spanColor">persistent login system using LocalStorage</span>. This required continuous learning and applying new concepts independently, strengthening problem-solving and JavaScript logic skills.`,

        landingPsychology: `The main challenge was designing the interface with a strong focus on <span class="spanColor">conversion</span>, ensuring users are intuitively guided to key actions such as contacting via WhatsApp or form submission. Another challenge was balancing <span class="spanColor">design and performance</span> across different devices.`,
    },

    learnings: {
        lemnos: `This project strengthened my knowledge of <span class="spanColor">React</span> and <span class="spanColor">Redux</span>, especially in managing global state in complex applications. I also improved my skills in <span class="spanColor">frontend architecture</span>, code organization, and building scalable interfaces, along with hands-on experience using <span class="spanColor">Firebase</span>.`,

        lembraMed: `This project strengthened concepts of <span class="spanColor">business logic</span> and user flow organization, as well as implementing <span class="spanColor">device notifications</span> and managing state for multiple user profiles. It also contributed to a stronger focus on <span class="spanColor">usability</span> and building solutions for real-world problems.`,

        lembraMedServer: `This project deepened my knowledge of <span class="spanColor">Node.js</span> for building APIs, while reinforcing data modeling concepts with <span class="spanColor">PostgreSQL</span>. I also gained hands-on experience with <span class="spanColor">Docker</span>, understanding the importance of containerization for consistency between development and production environments.`,

        alphaSpeed: `This project strengthened my knowledge of <span class="spanColor">vanilla JavaScript</span>, especially in <span class="spanColor">DOM manipulation</span>, dynamic rendering with <span class="spanColor">mock data</span>, and filter logic implementation. I also improved my use of <span class="spanColor">LocalStorage</span> for frontend state persistence. Additionally, I developed stronger <span class="spanColor">self-learning</span> and problem-solving skills by going beyond the original project scope.`,

        landingPsychology: `This project reinforced concepts of <span class="spanColor">component-based architecture</span> and project organization in <span class="spanColor">Next.js</span>, as well as <span class="spanColor">UX/UI best practices</span>. It also provided experience with real-world integrations such as <span class="spanColor">email sending</span> and <span class="spanColor">WhatsApp automation</span>.`,
    },
};
