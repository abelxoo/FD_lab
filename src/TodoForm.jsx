import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <Form.Group controlId="formBasicTask">
        <Form.Control
          type="text"
          placeholder="Wpisz zadanie"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj
      </Button>
    </Form>
  );
};

export default TodoForm;