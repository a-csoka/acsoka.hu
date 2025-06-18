import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'hu'];
    const redirectToLang = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';

    navigate(`/${redirectToLang}`, { replace: true });
  }, [navigate]);

  return ;
}
export default Redirect;