import { Card, CardBody } from "reactstrap";
import { CountUp } from 'use-count-up'

const TopCards = (props) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold"><CountUp isCounting end={props.earning} duration={3.2} /></h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
