import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import Button from "react-bootstrap/Button";

const BtnWithTooltip = ({ placement, btn, variant, tooltip }) => {
  const renderTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {tooltip}
      </Tooltip>
    );
  };

  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant={variant}>{btn}</Button>
    </OverlayTrigger>
  );
};

export default BtnWithTooltip;
