import { modal } from './modal';

export const projects = {
    title: 'Projetos',
    technologies: 'Tecnologias Utilizadas:',
    moreTechs: 'tecnologias',
    forDesktop: 'para desktops',
    viewDetailsButton: 'Ver detalhes',
    clickToOpenModal: 'Clique para abrir detalhes do projeto',
    titleProject: {
        lemnos: 'Lemnos',

        lembraMed: 'LembraMed',

        lembraMedServer: 'LembraMed-Server',

        alphaSpeed: 'Alpha Speed',

        landingPsychology: 'Landing Page para Psicólogos',
    },
    cardDescriptions: {
        lemnos: '<span class="spanColor">Lemnos</span> é um e-commerce completo com <span class="spanColor">autenticação</span>, <span class="spanColor">filtros avançados</span>, <span class="spanColor">busca em tempo real</span> e <span class="spanColor">infinite scroll</span>. Desenvolvido com <span class="spanColor">React</span>, <span class="spanColor">Firebase</span> e <span class="spanColor">Redux</span>, simula um ambiente real com <span class="spanColor">painel administrativo</span> e gerenciamento de estado global.',

        lembraMed:
            '<span class="spanColor">LembraMed</span> é uma aplicação desenvolvida para auxiliar no <span class="spanColor">gerenciamento de medicamentos</span>, com <span class="spanColor">notificações no dispositivo</span>, suporte a <span class="spanColor">múltiplas contas</span> e <span class="spanColor">histórico de doses</span>. Construída como <span class="spanColor">PWA</span>, pode ser instalada no aparelho do usuário como um aplicativo nativo. O projeto foi criado para resolver um problema real, com foco em <span class="spanColor">usabilidade</span> e acessibilidade.',

        lembraMedServer:
            '<span class="spanColor">LembraMed-Server</span> é a <span class="spanColor">API backend</span> que dá suporte ao aplicativo LembraMed, responsável pela <span class="spanColor">autenticação de usuários</span>, <span class="spanColor">persistência de dados</span> e gerenciamento de <span class="spanColor">múltiplas contas</span>. Desenvolvido com <span class="spanColor">Node.js</span> e <span class="spanColor">PostgreSQL</span>, e containerizado com <span class="spanColor">Docker</span>, expõe uma <span class="spanColor">API REST</span> segura e escalável para o consumo do front-end.',

        alphaSpeed:
            '<span class="spanColor">Alpha Speed</span> é uma aplicação web para concessionária com <span class="spanColor">catálogo dinâmico</span> e <span class="spanColor">filtros em tempo real</span>, permitindo uma navegação rápida e intuitiva. Desenvolvida com <span class="spanColor">JavaScript puro</span>, demonstra foco em <span class="spanColor">performance</span>, <span class="spanColor">responsividade</span> e experiência do usuário.',

        landingPsychology:
            '<span class="spanColor">Landing Page Psicologia</span> é uma aplicação web focada em <span class="spanColor">conversão de clientes</span>, com integração de <span class="spanColor">WhatsApp</span> para agendamento automático e <span class="spanColor">envio de e-mails</span> via formulário. Desenvolvida com <span class="spanColor">Next.js</span>, prioriza <span class="spanColor">performance</span>, <span class="spanColor">SEO</span> e experiência do usuário.',
    },
    modal,
};
