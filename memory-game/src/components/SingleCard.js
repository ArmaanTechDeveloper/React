import "./SingleCard.css";
export default function SingleCard({key , card}) {
  return (
    <div className="card" key={key}>
      <div>
        <img className="front" src={card.src} alt="Card front" />
        <img className="back" src="/img/cover.png" alt="Card Back" />
      </div>
    </div>
  );
}
