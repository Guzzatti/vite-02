export function Card({
  title,
  text,
  img,
  buttonColor = 'primary',
  buttonLabel = 'Clique Aqui',
}) {
  return (
    <div className="card">
      {img ? <img src={img} className="card-img-top" alt="🐶" /> : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {buttonLabel ? (
          <a href="#go" className={`btn btn-${buttonColor}`}>
            {buttonLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}
