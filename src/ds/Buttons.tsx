import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PrimaryButton({
  onClick,
  text,
  icon,
}: {
  onClick: () => void;
  text: string;
  icon?: IconDefinition;
}) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}

      {icon && (
        <>
          {" "}
          <FontAwesomeIcon icon={icon} />
        </>
      )}
    </button>
  );
}

export function SecondaryButton({
  onClick,
  text,
  icon,
}: {
  onClick: () => void;
  text: string;
  icon?: IconDefinition;
}) {
  return (
    <button className="btn btn-outline-primary" onClick={onClick}>
      {text}
      {icon && (
        <>
          {" "}
          <FontAwesomeIcon icon={icon} />
        </>
      )}
    </button>
  );
}
