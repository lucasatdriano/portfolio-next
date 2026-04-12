import { modal } from './modal';

export const projects = {
    title: 'Projetos',
    technologies: 'Tecnologias Utilizadas:',
    moreTechs: 'tecnologias',
    forDesktop: 'para desktops',
    cardDescriptions: {
        lemnos: '<span class="spanColor">Lemnos</span> é um e-commerce de tecnologia desenvolvido com <span class="spanColor">React</span> e <span class="spanColor">Vite</span>, com <span class="spanColor">autenticação via Firebase</span>. O projeto inclui funcionalidades como <span class="spanColor">login</span>, <span class="spanColor">filtros avançados</span> de produtos, <span class="spanColor">pesquisa</span>, <span class="spanColor">infinite scroll</span> e <span class="spanColor">exibição detalhada</span> de produtos. Possui também um <span class="spanColor">modo escuro</span> e uma <span class="spanColor">página de administração</span> para <span class="spanColor">gerenciar produtos e usuários</span>. Toda a estilização é feita com <span class="spanColor">SCSS</span>, e o estado da aplicação é gerenciado com <span class="spanColor">Redux</span>.',
        alphaSpeed:
            '<span class="spanColor">Alpha Speed</span> é um site para uma concessionária de veículos, que conta com um <span class="spanColor">mostruário dinâmico</span>, <span class="spanColor">filtros de busca</span> interativos e <span class="spanColor">login por local storage</span>. O filtro oferece uma <span class="spanColor">atualização em tempo real</span>, exibindo instantaneamente os veículos de acordo com as preferências do usuário, e o login reconhece o usuário em visitas futuras <span class="spanColor">sem necessidade de um banco de dados</span>.',
    },
    modal,
};
