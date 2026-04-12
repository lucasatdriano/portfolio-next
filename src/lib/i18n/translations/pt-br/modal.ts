export const modal = {
    featuresTitle: 'Principais funcionalidades',
    challengesTitle: 'Desafios',
    learningsTitle: 'Aprendizados',
    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> é um e-commerce de tecnologia desenvolvido como projeto de conclusão de curso, com foco na construção de uma aplicação completa e escalável.',

            development:
                'A plataforma permite navegação por catálogo de produtos com <span class="spanColor">filtros avançados</span>, <span class="spanColor">busca em tempo real</span> e carregamento otimizado utilizando <span class="spanColor">infinite scroll</span>, proporcionando uma experiência fluida ao usuário.',

            architecture:
                'O sistema conta com <span class="spanColor">autenticação via Firebase</span> e um <span class="spanColor">painel administrativo</span> para gerenciamento de produtos e usuários, simulando um ambiente real de e-commerce.',

            conclusion:
                'O projeto foi desenvolvido com foco em organização de estado global, componentização e boas práticas de front-end, simulando um ambiente real de produção.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> é um site institucional para concessionária de veículos, desenvolvido com foco em <span class="spanColor">performance</span> e <span class="spanColor">experiência do usuário</span>.',

            development:
                'O projeto demonstra domínio de <span class="spanColor">JavaScript puro</span>, <span class="spanColor">CSS avançado</span> e técnicas de <span class="spanColor">otimização de performance</span> sem depender de frameworks.',

            architecture:
                'Com design responsivo e animações suaves, o site proporciona uma experiência fluida em qualquer dispositivo, utilizando técnicas modernas de CSS e JavaScript.',

            conclusion:
                'O projeto foi otimizado para alcançar pontuação máxima no Lighthouse, demonstrando domínio de boas práticas de performance e acessibilidade.',
        },
    },

    features: {
        lemnos: [
            'Autenticação de usuários com Firebase',
            'Catálogo dinâmico com filtros avançados e busca',
            'Infinite scroll para carregamento eficiente de produtos',
            'Página de detalhes com informações completas dos produtos',
            'Painel administrativo para gestão de produtos e usuários',
            'Interface responsiva com suporte a modo escuro',
        ],
        alphaSpeed: [
            'Mostruário dinâmico de veículos',
            'Filtros de busca interativos com atualização em tempo real',
            'Login persistente com Local Storage',
            'Design responsivo e animações suaves',
            'Otimizado para performance e SEO',
            'Sem dependência de frameworks ou bibliotecas externas',
        ],
    },

    challenges: {
        lemnos: `O principal desafio foi implementar o sistema de <span class="spanColor">filtros avançados</span> e <span class="spanColor">infinite scroll</span> sem comprometer a performance. A solução envolveu o uso de <span class="spanColor">React Query</span> para cache das requisições e <span class="spanColor">debounce</span> na busca em tempo real, reduzindo drasticamente o número de chamadas à API.`,

        alphaSpeed: `O maior desafio foi garantir que todas as <span class="spanColor">animações rodassem a 60fps</span> mesmo em dispositivos mobile. A solução foi usar <span class="spanColor">transform: translate()</span> e <span class="spanColor">opacity</span> em vez de propriedades que causam reflow, além de implementar <span class="spanColor">will-change</span> nos elementos animados.`,
    },

    learnings: {
        lemnos: `Este projeto me ensinou sobre <span class="spanColor">arquitetura de estado</span> em aplicações complexas, <span class="spanColor">otimização de performance</span> com infinite scroll e como estruturar um <span class="spanColor">painel administrativo seguro</span>. Aprendi também a importância de uma boa estratégia de cache.`,

        alphaSpeed: `Aprendi <span class="spanColor">técnicas avançadas de animação CSS</span>, como otimizar reflows e repaints, além de como estruturar um projeto para alcançar as métricas do <span class="spanColor">Core Web Vitals</span>.`,
    },
};
