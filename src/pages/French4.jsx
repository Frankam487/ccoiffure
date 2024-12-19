import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const French4 = () => {
  return (
    <CoiffureDetail
      image="../../public/homme.jpg"
      title="Twists Classique"
      description="Les Twists Courtes sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default French4;
