import { Envelope, Github, LinkedinSquare } from '@boxicons/react';
import { Contact } from '../interfaces';

export const contacts: Contact[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lucasadrianodev',
        icon: <LinkedinSquare className="iconContact" />,
    },
    {
        name: 'E-mail',
        url: 'mailto:lucasatdiano@gmail.com?body=Olá%20Lucas,',
        icon: <Envelope className="iconContact" />,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/lucasatdriano',
        icon: <Github className="iconContact" />,
    },
];
