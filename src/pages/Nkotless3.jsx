import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Nkotless1 = () => {
  return (
    <CoiffureDetail
      image="../../public/klarge.jpg"
      title="Nkotless Braids Large"
      description="Les Nkotless Braids large sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default Nkotless1;
