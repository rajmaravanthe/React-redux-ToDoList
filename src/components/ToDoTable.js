import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ToDoTable = ({ list, editItem, deleteItem }) => {
  return (
    <div>
      <ListGroup>
        {list &&
          list.map(({ key, value }) => (
            <ListGroup.Item key={key}>
              <div className='content'>{value}</div>
              <div className='icons'>
                <span
                  onClick={() => editItem(key, value)}
                  className='icon-list'
                >
                  <i className='fa fa-edit'></i>
                </span>
                <span onClick={() => deleteItem(key)} className='icon-list'>
                  <i className='fa fa-trash'></i>
                </span>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};

PropTypes.ToDoTable = {
  addItem: PropTypes.func.getItems,
};

export default ToDoTable;
