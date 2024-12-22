
import CoiffureDetail from '../components/CoiffureDetail';

const TwistCourt = () => {
  return (
    <CoiffureDetail
      image="../../public/tsmall.jpg"
      title="Twists Small" // Titre
      description="Les Twists Small sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
      features={[
        'Idéales pour un entretien facile',
        'Style moderne et élégant',
        'Adaptées à tous types de cheveux',
        "Durabilité de plusieurs semaines avec peu d'entretien",
      ]}
      route="/reserver"
    />
  );
};

export default TwistCourt;
