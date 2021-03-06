import { useParams } from 'react-router-dom';

export const useLocalePrefix = (path: string): string => {
  const { locale } = useParams();
  const prefix = locale === undefined ? '' : `/${locale}`;
  return `${prefix}${path}`;
};
