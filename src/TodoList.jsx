import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
          {task.name}
          <Button variant="danger" onClick={() => removeTask(task.id)}>
            Usuń
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;