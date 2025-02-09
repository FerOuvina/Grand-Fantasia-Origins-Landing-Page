import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const FloatingBanner = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 800); // Blink every 500ms

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();

  return (
    <div
      className={`fixed left-0 bottom-1 p-4 text-white text-lg font-bold rounded-r-2xl shadow-lg transition-all duration-300 cursor-pointer ${
        blink ? 'bg-red-500' : 'bg-yellow-500'
      }`}
      onClick={() =>
        (window.location.href =
          'https://drive.google.com/file/d/1tZTsIEmNDF_mSFWr3g4f-hMh0DWPF1GK/view?usp=sharing')
      }>
      {t('FloatingBanner1')} <br />
      {t('FloatingBanner2')} <br /> {t('FloatingBanner3')}
    </div>
  );
};

export default FloatingBanner;
