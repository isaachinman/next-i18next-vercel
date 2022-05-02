import { version } from 'next-i18next/package.json'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <footer>
      <p>
        {t('description')}
      </p>
      <p>
        next-i18next v
        {version}
      </p>
    </footer>
  );
};

export default Footer
