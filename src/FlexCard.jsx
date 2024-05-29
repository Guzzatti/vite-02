export function CardThumb({ src, alt = '', ...props }) {
  return <img src={src} className="card-img-top" alt={alt} {...props} />;
}

export function CardTitle({ title, ...props }) {
  return (
    <h5 className="card-title" {...props}>
      {title}
    </h5>
  );
}

export function CardText({ text, ...props }) {
  return (
    <p className="card-text" {...props}>
      {text}
    </p>
  );
}

export function CardButton({ label, href = '#go', ...props }) {
  return (
    <a href={href} className="btn btn-primary" {...props}>
      {label}
    </a>
  );
}

export function FlexCard({ children, thumb, ...props }) {
  return (
    <div className="card" {...props}>
      {thumb}
      <div className="card-body">{children}</div>
    </div>
  );
}
