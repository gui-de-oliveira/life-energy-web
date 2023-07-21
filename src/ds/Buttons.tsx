import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PrimaryButton({
  onClick,
  text,
  icon,
  disabled,
}: {
  onClick: () => void;
  text: string;
  icon?: IconDefinition;
  disabled?: boolean;
}) {
  return (
    <button className="btn btn-primary" onClick={onClick} disabled={disabled}>
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
  disabled,
}: {
  onClick: () => void;
  text: string;
  icon?: IconDefinition;
  disabled?: boolean;
}) {
  return (
    <button
      className="btn btn-outline-primary"
      onClick={onClick}
      disabled={disabled}
    >
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
