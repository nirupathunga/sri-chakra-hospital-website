import React from 'react';
import { Footer as BaseFooter } from './LanguageLayout';

interface FooterProps {
  lang?: 'en' | 'ta';
}

export default function Footer(props: FooterProps) {
  return <BaseFooter />;
}
