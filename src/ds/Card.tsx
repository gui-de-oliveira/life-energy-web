import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Card({
  icon,
  title,
  description,
  onClick,
}: {
  icon: IconProp;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <div className="card mb-2" style={{ cursor: "pointer" }} onClick={onClick}>
      <div className="card-body">
        <FontAwesomeIcon icon={icon} style={{ float: "right" }} size="2x" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
