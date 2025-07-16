import MedicationIcon from '@mui/icons-material/Medication';
import MailIcon from '@mui/icons-material/Mail';

const useHeader = () => {
  const headers = [
    // {
    //   segment: '/',
    //   title: 'Inicio',
    //   // icon: <MailIcon />
    // },
    {
      segment: 'teach',
      title: 'Áreas de enseñanza',
      // icon: <MedicationIcon />
    },
    {
      segment: 'about',
      title: 'Sobre Nosotros',
      // icon: <MedicationIcon />
    },
    {
      segment: 'contact',
      title: 'Contacto',
      // icon: <MedicationIcon />
    },
  ];

  return {
    headers
  };
};

export default useHeader;
