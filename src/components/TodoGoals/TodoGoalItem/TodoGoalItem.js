import React from 'react';

import './TodoGoalItem.css';

const TodoGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TodoGoalItem;
