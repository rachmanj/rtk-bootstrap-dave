import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Form, Button } from "react-bootstrap";

import { bucAdded } from "./bucsSlice";
import { selectAllProjects } from "../projects/projectsSlice";

const AddBucForm = () => {
  const dispatch = useDispatch();

  const [rabNo, setRabNo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [budget, setBudget] = useState("");

  const projects = useSelector(selectAllProjects);

  const onRabNoChange = (e) => setRabNo(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onProjectIdChange = (e) => setProjectId(e.target.value);
  const onBudgetChange = (e) => setBudget(e.target.value);

  const projectsOptions = projects.map((project) => (
    <option key={project.id} value={project.id}>{`${project.code} ${project.location}`}</option>
  ))

  const canSave = Boolean(rabNo && date && description && projectId && budget);

  const onSaveBucClick = () => {
    if (rabNo && date && description && projectId && budget) {
      dispatch(bucAdded(rabNo, date, description, projectId, budget));
    }
    setRabNo("");
    setDate("");
    setDescription("");
    setProjectId("");
    setBudget("");
  };

  return (
    <section>
      <Card>
        <Card.Header>
          <h4>Add New BUC</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>RAB No</Form.Label>
              <Form.Control
                type="text"
                placeholder="RAB No"
                value={rabNo}
                onChange={onRabNoChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                value={date}
                onChange={onDateChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={onDescriptionChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Project Code</Form.Label>
              <Form.Select
                value={projectId}
                onChange={onProjectIdChange}
              >
                <option>-- Select Project --</option>
                {projectsOptions}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Budget</Form.Label>
              <Form.Control
                type="text"
                placeholder="Budget"
                value={budget}
                onChange={onBudgetChange}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={onSaveBucClick} disabled={!canSave}>
            Save
          </Button>
        </Card.Footer>
      </Card>
    </section>
  );
};

export default AddBucForm;
