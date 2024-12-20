import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Nkotless4 = () => {
  return (
    <CoiffureDetail
      image="../../public/homme.jpg"
      title="Nkotless Braids Pré-étirés"
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

export default Nkotless4;
