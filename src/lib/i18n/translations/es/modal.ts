export const modal = {
    featuresTitle: 'Características Principales',
    challengesTitle: 'Desafíos',
    learningsTitle: 'Aprendizajes',

    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> es un e-commerce de tecnología desarrollado como proyecto de fin de curso, enfocado en la construcción de una aplicación completa y escalable.',

            development:
                'La plataforma permite navegar por un catálogo de productos con <span class="spanColor">filtros avanzados</span>, <span class="spanColor">búsqueda en tiempo real</span> y carga optimizada usando <span class="spanColor">infinite scroll</span>, proporcionando una experiencia fluida al usuario.',

            architecture:
                'El sistema cuenta con <span class="spanColor">autenticación vía Firebase</span> y un <span class="spanColor">panel administrativo</span> para gestionar productos y usuarios, simulando un entorno real de e-commerce.',

            conclusion:
                'El proyecto fue desarrollado con enfoque en organización de estado global, componentización y buenas prácticas de front-end, simulando un entorno real de producción.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> es un sitio web institucional para una concesionaria de vehículos, desarrollado con enfoque en <span class="spanColor">rendimiento</span> y <span class="spanColor">experiencia de usuario</span>.',

            development:
                'El proyecto demuestra dominio de <span class="spanColor">JavaScript puro</span>, <span class="spanColor">CSS avanzado</span> y técnicas de <span class="spanColor">optimización de rendimiento</span> sin depender de frameworks.',

            architecture:
                'Con diseño responsivo y animaciones suaves, el sitio web proporciona una experiencia fluida en cualquier dispositivo utilizando técnicas modernas de CSS y JavaScript.',

            conclusion:
                'El proyecto fue optimizado para alcanzar puntuaciones máximas en Lighthouse, demostrando dominio de buenas prácticas de rendimiento y accesibilidad.',
        },
    },

    features: {
        lemnos: [
            'Autenticación de usuarios con Firebase',
            'Catálogo dinámico con filtros avanzados y búsqueda',
            'Infinite scroll para carga eficiente de productos',
            'Página de detalles con información completa de productos',
            'Panel administrativo para gestión de productos y usuarios',
            'Interfaz responsiva con soporte para modo oscuro',
        ],
        alphaSpeed: [
            'Escaparate dinámico de vehículos',
            'Filtros de búsqueda interactivos con actualización en tiempo real',
            'Login persistente con Local Storage',
            'Diseño responsivo y animaciones suaves',
            'Optimizado para rendimiento y SEO',
            'Sin dependencia de frameworks o bibliotecas externas',
        ],
    },

    challenges: {
        lemnos: `El principal desafío fue implementar el sistema de <span class="spanColor">filtros avanzados</span> e <span class="spanColor">infinite scroll</span> sin comprometer el rendimiento. La solución implicó usar <span class="spanColor">React Query</span> para cache de solicitudes y <span class="spanColor">debounce</span> para búsqueda en tiempo real, reduciendo drásticamente las llamadas a la API.`,

        alphaSpeed: `El mayor desafío fue garantizar que todas las <span class="spanColor">animaciones funcionaran a 60fps</span> incluso en dispositivos móviles. La solución fue usar <span class="spanColor">transform: translate()</span> y <span class="spanColor">opacity</span> en lugar de propiedades que causan reflow, además de implementar <span class="spanColor">will-change</span> en los elementos animados.`,
    },

    learnings: {
        lemnos: `Este proyecto me enseñó sobre <span class="spanColor">arquitectura de estado</span> en aplicaciones complejas, <span class="spanColor">optimización de rendimiento</span> con infinite scroll y cómo estructurar un <span class="spanColor">panel administrativo seguro</span>. También aprendí la importancia de una buena estrategia de caché.`,

        alphaSpeed: `Aprendí <span class="spanColor">técnicas avanzadas de animación CSS</span>, cómo optimizar reflows y repaints, y cómo estructurar un proyecto para alcanzar las métricas de <span class="spanColor">Core Web Vitals</span>.`,
    },
};
