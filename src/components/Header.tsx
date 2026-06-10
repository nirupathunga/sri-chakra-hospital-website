import React from 'react';
import { Header as BaseHeader, useLanguage } from './LanguageLayout';

interface HeaderProps {
  lang?: 'en' | 'ta';
  setLang?: (l: 'en' | 'ta') => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (o: boolean) => void;
}

export default function Header(props: HeaderProps) {
  // If inside LanguageProvider, we can use context; otherwise we use props
  try {
    const { lang } = useLanguage();
    return <BaseHeader />;
  } catch {
    // Fail-safe fallback in case context is missing from tree
    return <BaseHeader />;
  }
}
