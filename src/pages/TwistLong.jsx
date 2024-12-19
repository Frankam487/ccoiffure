import CoiffureDetail from '../components/CoiffureDetail';

const TwistLong = () => {
  return (
    <CoiffureDetail
      image="../../public/pic3.jpg"
      title="Twists Court" // Titre
      description="Les Twists Classiquesd sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default TwistLong;
