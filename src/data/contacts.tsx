import { Contact } from '../interfaces';
import { BiEnvelope, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';

export const contacts: Contact[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lucasadrianodev',
        icon: <BiLogoLinkedinSquare className="iconContact" />,
    },
    {
        name: 'E-mail',
        url: 'mailto:lucasatdiano@gmail.com?body=Olá%20Lucas,',
        icon: <BiEnvelope className="iconContact" />,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/lucasatdriano',
        icon: <BiLogoGithub className="iconContact" />,
    },
];
