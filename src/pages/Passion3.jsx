import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Passion3 = () => {
  return (
    <CoiffureDetail
      image="../../public/fl.jpg"
      title="Fulani Large"
      description="Les 'Fulani Large' sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default Passion3;
