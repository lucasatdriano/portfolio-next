export const modal = {
    featuresTitle: 'Principais funcionalidades',
    challengesTitle: 'Desafios',
    learningsTitle: 'Aprendizados',
    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> é um e-commerce de tecnologia desenvolvido com foco em simular um ambiente real de produção, contemplando desde a navegação do usuário até a gestão administrativa.',

            development:
                'A aplicação foi construída com <span class="spanColor">React</span>, utilizando <span class="spanColor">Redux</span> para gerenciamento de estado global e <span class="spanColor">Firebase</span> para autenticação e persistência de dados. Foram implementadas funcionalidades como <span class="spanColor">busca em tempo real</span>, <span class="spanColor">filtros avançados</span> e <span class="spanColor">infinite scroll</span>, garantindo uma experiência fluida.',

            architecture:
                'A arquitetura segue princípios de <span class="spanColor">componentização</span> e separação de responsabilidades, com organização modular e foco em escalabilidade. O uso de estado global permite sincronização eficiente entre diferentes partes da aplicação.',

            conclusion:
                'O projeto demonstra a construção de uma aplicação completa, abordando autenticação, gerenciamento de estado, performance e experiência do usuário, aproximando-se de cenários reais de mercado.',
        },

        lembraMed: {
            introduction:
                '<span class="spanColor">LembraMed</span> é uma aplicação desenvolvida para auxiliar no controle de medicamentos, com foco em facilitar a rotina de usuários que precisam gerenciar horários e doses de forma simples e eficiente.',

            development:
                'A aplicação foi desenvolvida utilizando <span class="spanColor">Next.js</span>, <span class="spanColor">TypeScript</span> e <span class="spanColor">Tailwind CSS</span>, garantindo organização, escalabilidade e estilização eficiente. Foi construída como <span class="spanColor">PWA (Progressive Web App)</span>, permitindo que o usuário instale a aplicação diretamente no dispositivo, com experiência semelhante a um app nativo. Permite cadastrar medicamentos com horários definidos, disparando <span class="spanColor">notificações no dispositivo</span> no momento correto. Também conta com suporte a <span class="spanColor">múltiplas contas</span>, possibilitando o gerenciamento de diferentes perfis no mesmo aparelho.',

            architecture:
                'O sistema foi estruturado com foco em <span class="spanColor">experiência do usuário</span> e fluxo completo, incluindo cadastro de medicamentos, acompanhamento de doses e registro de histórico. A implementação como <span class="spanColor">PWA</span> exigiu configuração de service worker, manifest e cache para garantir instalação e funcionamento consistente no dispositivo. A organização baseada em componentes e tipagem estática contribui para manutenção e evolução do projeto.',

            conclusion:
                'O projeto resolve um problema real do dia a dia, demonstrando a capacidade de desenvolver aplicações com <span class="spanColor">lógica de negócio</span>, foco em usabilidade e impacto prático na vida do usuário, incluindo a experiência de instalação como aplicativo.',
        },

        lembraMedServer: {
            introduction:
                '<span class="spanColor">LembraMed-Server</span> é a API backend responsável por sustentar o aplicativo LembraMed, cuidando da autenticação, persistência de dados e da lógica de negócio por trás do gerenciamento de medicamentos.',

            development:
                'O servidor foi desenvolvido com <span class="spanColor">Node.js</span> e <span class="spanColor">JavaScript</span>, utilizando <span class="spanColor">PostgreSQL</span> como banco de dados relacional para armazenar usuários, medicamentos e histórico de doses. A aplicação foi <span class="spanColor">containerizada com Docker</span>, facilitando a padronização do ambiente e o processo de deploy.',

            architecture:
                'A arquitetura segue o padrão de <span class="spanColor">API REST</span>, com separação clara entre rotas, controllers e camada de acesso ao banco de dados. O uso de <span class="spanColor">Docker</span> permite isolar dependências e garantir que a aplicação se comporte da mesma forma em diferentes ambientes.',

            conclusion:
                'O projeto reforça a construção de uma API robusta e escalável, capaz de dar suporte a múltiplas contas e sincronizar dados de forma segura com o aplicativo LembraMed.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> é um site institucional para concessionária de veículos, desenvolvido com foco em apresentar um catálogo moderno e facilitar a navegação do usuário na busca por automóveis.',

            development:
                'O projeto foi construído utilizando <span class="spanColor">JavaScript puro</span>, <span class="spanColor">HTML</span> e <span class="spanColor">CSS</span>, sem uso de frameworks, priorizando controle total da aplicação e performance. Foram implementados <span class="spanColor">filtros dinâmicos</span>, renderização de catálogo com <span class="spanColor">dados mockados</span> e um sistema de <span class="spanColor">login persistente</span> utilizando <span class="spanColor">LocalStorage</span>.',

            architecture:
                'A arquitetura segue uma abordagem simples e eficiente, com manipulação direta do DOM e organização modular dos scripts. O projeto prioriza <span class="spanColor">baixa complexidade</span>, carregamento rápido e compatibilidade entre dispositivos.',

            conclusion:
                'O resultado é uma aplicação leve e funcional que demonstra domínio de fundamentos do front-end, com foco em performance, interatividade e experiência do usuário.',
        },

        landingPsychology: {
            introduction:
                'Essa <span class="spanColor">Landing Page</span> é um projeto desenvolvido com o objetivo de apresentar serviços psicológicos de forma profissional, moderna e acessível, com foco em <span class="spanColor">captação de clientes</span> e geração de leads.',

            development:
                'A aplicação foi construída com <span class="spanColor">Next.js</span>, explorando renderização otimizada e boas práticas de front-end. Foram implementadas integrações reais, como <span class="spanColor">envio de formulário por e-mail</span> e redirecionamento para o <span class="spanColor">WhatsApp</span> com mensagem automática, simulando um fluxo real de atendimento.',

            architecture:
                'O projeto segue uma arquitetura baseada em <span class="spanColor">componentização</span>, com separação de responsabilidades e organização modular. Também utiliza recursos do Next.js para <span class="spanColor">otimização de imagens</span>, performance e melhor indexação em mecanismos de busca.',

            conclusion:
                'O resultado é uma aplicação leve, responsiva e funcional, que resolve um problema real de negócio ao facilitar o contato entre cliente e profissional, demonstrando domínio de boas práticas e foco em experiência do usuário.',
        },

        keyvault: {
            introduction:
                '<span class="spanColor">KeyVault</span> é um gerenciador de senhas com criptografia <span class="spanColor">zero-knowledge</span>, desenvolvido para garantir que nem mesmo o servidor tenha acesso à senha mestra ou aos dados do usuário em texto claro.',

            development:
                'A aplicação foi construída com <span class="spanColor">Next.js</span> e <span class="spanColor">TypeScript</span>, utilizando <span class="spanColor">Prisma</span> e <span class="spanColor">PostgreSQL</span> para persistência. Toda a criptografia acontece no navegador: a chave do cofre é derivada da senha mestra com <span class="spanColor">Argon2id</span>, e cada credencial é cifrada individualmente com <span class="spanColor">AES-256-GCM</span> antes de ser enviada ao servidor. Também foram implementados <span class="spanColor">múltiplos métodos de recuperação de conta</span> (e-mail, perguntas de segurança, senha e chave de recuperação) e um <span class="spanColor">log de auditoria</span> completo por usuário.',

            architecture:
                'O projeto segue uma separação clara entre client, server e código compartilhado, já que a lógica de criptografia precisa rodar no navegador enquanto tipos e validações são reaproveitados no back-end. A autenticação utiliza <span class="spanColor">sessões via JWT</span>, e a aplicação foi construída como <span class="spanColor">PWA</span>, podendo ser instalada como um app nativo.',

            conclusion:
                'O projeto aprofunda conceitos de <span class="spanColor">segurança e criptografia aplicada</span>, indo além de um CRUD comum ao lidar com derivação de chaves, cifragem ponta a ponta e fluxos de recuperação de conta sem comprometer o modelo zero-knowledge.',
        },
    },

    features: {
        lemnos: [
            'Autenticação de usuários com <span class="spanColor">Firebase</span>',
            'Gerenciamento de estado global com <span class="spanColor">Redux</span>',
            'Catálogo dinâmico com filtros avançados',
            'Busca em tempo real',
            'Infinite scroll para carregamento eficiente',
            'Página de detalhes de produtos',
            'Painel administrativo para gerenciamento',
            'Interface responsiva e moderna',
        ],

        lembraMed: [
            'Cadastro de medicamentos com horários personalizados',
            'Disparo de <span class="spanColor">notificações no dispositivo</span>',
            'Suporte a <span class="spanColor">múltiplas contas</span> no mesmo aparelho',
            'Histórico de doses para controle de medicação',
            'Registro de doses perdidas',
            'Sistema de <span class="spanColor">chamada de emergência</span> com acesso rápido',
            'Instalação no dispositivo via <span class="spanColor">PWA</span>',
            'Interface simples e acessível',
        ],

        lembraMedServer: [
            'API REST desenvolvida com <span class="spanColor">Node.js</span>',
            'Banco de dados relacional com <span class="spanColor">PostgreSQL</span>',
            'Autenticação e gerenciamento de usuários',
            'Suporte a <span class="spanColor">múltiplas contas</span>',
            'Persistência de histórico de doses e medicamentos',
            'Ambiente containerizado com <span class="spanColor">Docker</span>',
            'Estrutura organizada em rotas e controllers',
        ],

        alphaSpeed: [
            'Catálogo dinâmico de veículos',
            'Filtros interativos com atualização em tempo real',
            'Login persistente utilizando <span class="spanColor">LocalStorage</span>',
            'Renderização dinâmica com dados mockados',
            'Manipulação direta do DOM com <span class="spanColor">JavaScript puro</span>',
            'Design responsivo para diferentes dispositivos',
            'Carregamento rápido e otimizado',
        ],

        landingPsychology: [
            'Layout responsivo adaptado para diferentes dispositivos',
            'Integração com <span class="spanColor">WhatsApp</span> para agendamento automático',
            'Envio de mensagens via <span class="spanColor">formulário com e-mail</span>',
            'Estrutura otimizada para <span class="spanColor">SEO</span>',
            'Carregamento rápido com <span class="spanColor">Next.js</span>',
            'Interface focada em <span class="spanColor">conversão de usuários</span>',
            'Organização modular com <span class="spanColor">componentização</span>',
        ],

        keyvault: [
            'Criptografia <span class="spanColor">zero-knowledge</span> de ponta a ponta',
            'Derivação de chave com <span class="spanColor">Argon2id</span>',
            'Cifragem individual de credenciais com <span class="spanColor">AES-256-GCM</span>',
            'Recuperação de conta por <span class="spanColor">múltiplos métodos</span> (perguntas, senha e chave de recuperação)',
            'Log de <span class="spanColor">auditoria</span> por usuário',
            'Favoritos e lixeira com soft delete',
            'Importação e exportação de credenciais',
            'Instalação no dispositivo via <span class="spanColor">PWA</span>',
        ],
    },

    challenges: {
        lemnos: `O principal desafio foi estruturar o gerenciamento de estado global utilizando <span class="spanColor">Redux</span> em uma aplicação com múltiplas funcionalidades interligadas. Também houve complexidade na implementação de <span class="spanColor">filtros avançados</span> e <span class="spanColor">busca em tempo real</span> sem comprometer a performance, exigindo organização eficiente da lógica e otimização das interações.`,

        lembraMed: `O principal desafio foi desenvolver uma aplicação com foco em <span class="spanColor">usabilidade</span> e acessibilidade, garantindo que funcionalidades como notificações, histórico de doses e chamadas de emergência fossem simples e rápidas de utilizar. Também foi necessário estruturar o suporte a <span class="spanColor">múltiplas contas</span> mantendo a organização dos dados.`,

        lembraMedServer: `O principal desafio foi estruturar uma <span class="spanColor">API REST</span> organizada e segura para sustentar múltiplas contas e o histórico de doses do aplicativo LembraMed.`,

        alphaSpeed: `O principal desafio foi ir além do escopo inicial do projeto, implementando funcionalidades como <span class="spanColor">filtros dinâmicos</span>, <span class="spanColor">renderização de catálogo com dados mockados</span> e um sistema de <span class="spanColor">login persistente com LocalStorage</span>. Isso exigiu aprendizado contínuo e aplicação prática de novos conceitos de forma autônoma, fortalecendo minha capacidade de resolver problemas e estruturar lógica em <span class="spanColor">JavaScript</span>.`,

        landingPsychology: `O principal desafio foi estruturar a interface com foco em <span class="spanColor">conversão</span>, garantindo que o usuário fosse direcionado de forma intuitiva até as ações principais, como o contato via WhatsApp ou formulário. Também foi necessário equilibrar <span class="spanColor">design e performance</span>, mantendo uma experiência fluida em diferentes dispositivos.`,

        keyvault: `O principal desafio foi projetar um modelo de <span class="spanColor">criptografia zero-knowledge</span> real, em que o servidor nunca tem acesso à senha mestra nem aos dados em claro. Isso exigiu estruturar cuidadosamente a derivação de chaves com <span class="spanColor">Argon2id</span>, a cifragem com <span class="spanColor">AES-256-GCM</span> e, principalmente, um fluxo de <span class="spanColor">recuperação de conta</span> que funcionasse sem depender da senha mestra original, sem comprometer a segurança do cofre.`,
    },

    learnings: {
        lemnos: `Este projeto consolidou meu conhecimento em <span class="spanColor">React</span> e <span class="spanColor">Redux</span>, especialmente no gerenciamento de estado global em aplicações complexas. Também aprimorei habilidades em <span class="spanColor">arquitetura de front-end</span>, organização de código e construção de interfaces escaláveis. Além disso, tive experiência prática com <span class="spanColor">Firebase</span> para autenticação e persistência de dados.`,

        lembraMed: `Este projeto reforçou conceitos de <span class="spanColor">lógica de negócio</span> e organização de fluxo de usuário, além da implementação de <span class="spanColor">notificações no dispositivo</span> e gerenciamento de estado para múltiplos perfis. Também contribuiu para o desenvolvimento de uma visão mais voltada a <span class="spanColor">usabilidade</span> e soluções práticas para problemas reais.`,

        lembraMedServer: `Este projeto aprofundou meu conhecimento em <span class="spanColor">Node.js</span> para construção de APIs, além de reforçar conceitos de modelagem de dados com <span class="spanColor">PostgreSQL</span>. Também ganhei experiência prática com <span class="spanColor">Docker</span>, entendendo a importância da containerização para consistência entre ambientes de desenvolvimento e produção.`,

        alphaSpeed: `Este projeto reforçou meu domínio de <span class="spanColor">JavaScript puro</span>, especialmente na <span class="spanColor">manipulação de DOM</span>, renderização dinâmica com <span class="spanColor">dados mockados</span> e implementação de <span class="spanColor">lógica de filtros</span>. Também aprimorei o uso de <span class="spanColor">LocalStorage</span> para persistência de estado no front-end. Além disso, desenvolvi a capacidade de aprender de forma <span class="spanColor">autônoma</span>, buscando soluções e aplicando novos conceitos além do escopo inicial do projeto.`,

        landingPsychology: `Este projeto reforçou conceitos de <span class="spanColor">componentização</span> e organização em <span class="spanColor">Next.js</span>, além de boas práticas de <span class="spanColor">UX/UI</span>. Também trouxe aprendizado na implementação de funcionalidades reais, como <span class="spanColor">envio de e-mails</span> e automação de contato via <span class="spanColor">WhatsApp</span>, aproximando o projeto de um cenário de produção.`,

        keyvault: `Este projeto aprofundou meu conhecimento em <span class="spanColor">criptografia aplicada</span>, especialmente em derivação de chaves, cifragem simétrica e no desenho de sistemas seguindo o modelo <span class="spanColor">zero-knowledge</span>. Também reforcei conceitos de arquitetura em camadas com <span class="spanColor">Next.js</span> e <span class="spanColor">Prisma</span>, além de práticas de autenticação, sessão e auditoria em aplicações que lidam com dados sensíveis.`,
    },
};
