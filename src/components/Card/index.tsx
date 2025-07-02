import "./style.css";

interface CardProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
}

export const Card = ({ name, email, address, phone, website }: CardProps) => {
  return (
    <div className="card" data-cy="card-user">
      <div className="title">
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <div className="other-infos">
        <small>
          <strong>Telefone:</strong> {phone}
        </small>
        <small>
          <strong>Endereço:</strong> {address}
        </small>
        <small>
          <strong>Website:</strong> {website}
        </small>
      </div>
    </div>
  );
};
