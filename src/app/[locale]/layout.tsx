'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { use } from 'react';
import '../../i18n'; // Initialize i18n

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = use(params); // Await params in Next.js 15
  const { i18n } = useTranslation();

  useEffect(() => {
    // Change language based on locale parameter
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
    // Update the html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale, i18n]);

  return <>{children}</>;
}