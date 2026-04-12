export const modal = {
    featuresTitle: 'Key Features',
    challengesTitle: 'Challenges',
    learningsTitle: 'Learnings',

    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> is a tech e-commerce developed as a course completion project, focusing on building a complete and scalable application.',

            development:
                'The platform allows browsing through a product catalog with <span class="spanColor">advanced filters</span>, <span class="spanColor">real-time search</span>, and optimized loading using <span class="spanColor">infinite scroll</span>, providing a smooth user experience.',

            architecture:
                'The system features <span class="spanColor">Firebase authentication</span> and an <span class="spanColor">admin panel</span> for managing products and users, simulating a real e-commerce environment.',

            conclusion:
                'The project was developed with a focus on global state organization, componentization, and front-end best practices, simulating a real production environment.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> is an institutional website for a car dealership, developed with a focus on <span class="spanColor">performance</span> and <span class="spanColor">user experience</span>.',

            development:
                'The project demonstrates mastery of <span class="spanColor">pure JavaScript</span>, <span class="spanColor">advanced CSS</span>, and <span class="spanColor">performance optimization</span> techniques without relying on frameworks.',

            architecture:
                'With responsive design and smooth animations, the website provides a fluid experience on any device using modern CSS and JavaScript techniques.',

            conclusion:
                'The project was optimized to achieve top Lighthouse scores, demonstrating mastery of performance best practices and accessibility.',
        },
    },

    features: {
        lemnos: [
            'User authentication with Firebase',
            'Dynamic catalog with advanced filters and search',
            'Infinite scroll for efficient product loading',
            'Detailed product page with complete information',
            'Admin panel for product and user management',
            'Responsive interface with dark mode support',
        ],
        alphaSpeed: [
            'Dynamic vehicle showcase',
            'Interactive search filters with real-time updates',
            'Persistent login with Local Storage',
            'Responsive design and smooth animations',
            'Optimized for performance and SEO',
            'No framework or external library dependencies',
        ],
    },

    challenges: {
        lemnos: `The main challenge was implementing the <span class="spanColor">advanced filters</span> and <span class="spanColor">infinite scroll</span> without compromising performance. The solution involved using <span class="spanColor">React Query</span> for request caching and <span class="spanColor">debounce</span> for real-time search, drastically reducing API calls.`,

        alphaSpeed: `The biggest challenge was ensuring all <span class="spanColor">animations ran at 60fps</span> even on mobile devices. The solution was to use <span class="spanColor">transform: translate()</span> and <span class="spanColor">opacity</span> instead of properties that cause reflow, and implement <span class="spanColor">will-change</span> on animated elements.`,
    },

    learnings: {
        lemnos: `This project taught me about <span class="spanColor">state architecture</span> in complex applications, <span class="spanColor">performance optimization</span> with infinite scroll, and how to structure a <span class="spanColor">secure admin panel</span>. I also learned the importance of a good caching strategy.`,

        alphaSpeed: `I learned <span class="spanColor">advanced CSS animation techniques</span>, how to optimize reflows and repaints, and how to structure a project to achieve <span class="spanColor">Core Web Vitals</span> metrics.`,
    },
};
