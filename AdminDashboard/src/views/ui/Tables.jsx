/* eslint-disable no-lone-blocks */
import ProjectTables from "../../components/dashboard/ProjectTable.jsx";
import { Row, Col} from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <ProjectTables />
      </Col>
    </Row>
  );
};

export default Tables;
