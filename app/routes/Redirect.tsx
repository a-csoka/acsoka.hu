import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const language = navigator.language;
    const langPrefix = language.startsWith('hu') ? '/hu' : '/en';
    navigate(langPrefix);
  }, [navigate]);

  return null;
};

export default Redirect;
