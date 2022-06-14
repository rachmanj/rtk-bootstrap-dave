import { useSelector } from "react-redux";
import { selectAllBucs } from "./bucsSlice";

import { Table, Card } from "react-bootstrap";

import BucProject from "./BucProject";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const BucsList = () => {
  let bucs = useSelector(selectAllBucs);

  const orderedBucs = bucs
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const renderedBucs = orderedBucs.map((buc, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{buc.rab_no}</td>
      <td>{buc.date}</td>
      <td>
        <BucProject projectId={buc.project_id} />
      </td>
      <td style={{ textAlign: "right" }}>{buc.budget.toLocaleString()}</td>
      <td>
        <TimeAgo timestamp={buc.created_at} />
      </td>
      <td>
        <ReactionButtons buc={buc} />
      </td>
    </tr>
  ));

  return (
    <div>
      <h3>BUCS List</h3>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>#</td>
                <td>RAB No</td>
                <td>Date</td>
                <td>Project</td>
                <td style={{ textAlign: "center" }}>Budget</td>
                <td>Created At</td>
                <td>Reactions</td>
              </tr>
            </thead>
            <tbody>{renderedBucs}</tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BucsList;
