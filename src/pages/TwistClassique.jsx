import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const TwistClassique = () => {
  return (
    <CoiffureDetail
      image="../../public/tmedium.jpg"
      title="Twists Medium"
      description="Les Twists Medium sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default TwistClassique;
