'use client';

import { contacts } from '@/src/data';
import { useLanguage } from '@/src/hooks/useLanguage';
import Link from 'next/link';

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className="contact" id="contactsContainer">
            <h2 className="title">{t('contact.title')}</h2>
            <ul className="contactContainer">
                {contacts.map((contact) => (
                    <li key={contact.name} className="contactItem">
                        <Link
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${t('profile.visit')} ${contact.name}`}
                            className="linkContact"
                        >
                            {contact.icon}
                            <span className="textContact">{contact.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
