import { Card } from './Card';
import {
  FlexCard,
  CardThumb,
  CardTitle,
  CardText,
  CardButton,
} from './FlexCard';

function App() {
  return (
    <div className="App" style={{ padding: 9 }}>
      <div className="d-flex gap-3" style={{ paddingBottom: 12 }}>
        <FlexCard
          thumb={
            <CardThumb
              style={{ border: '1px solid red' }}
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
              alt="🐶"
            />
          }
        >
          <CardTitle title="Adote um Cachorrinho" />
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
          <div className="d-flex gap-2">
            <CardButton label="Quero Adotar!" />
            <CardButton label="Quero Adotar!" />
          </div>
        </FlexCard>
      </div>
      <div className="d-flex gap-3">
        <Card
          img="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
          title="Adote um Cachorrinho!"
          text="Eles são muito fofinhos e destroem todos os seus móveis"
          buttonColor="danger"
          buttonLabel={false}
        />
        <Card
          img="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg"
          title="Dog Fofinho"
          text="Eles são muito fofinhos e destroem todos os seus móveis"
          buttonLabel="Comprar"
          buttonColor="success"
        />
        <Card
          img="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
          title="Dog Fofinho"
          text="Eles são muito fofinhos e destroem todos os seus móveis"
          buttonLabel={false}
          buttonColor="success"
        />
      </div>
    </div>
  );
}

export default App;
