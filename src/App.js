import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import Table from "./components/ToDoTable";
import "font-awesome/css/font-awesome.min.css";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  getItems,
  addItem,
  editItem,
  removeItem,
} from "./action-creators/actionItems";

function App() {
  const dispatch = useDispatch();
  const [toDoItem, setToDoItem] = useState("");
  const [key, setKey] = useState("");
  const list = useSelector((state) => state.actionItems.list);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const editRowItem = (key, value) => {
    setToDoItem(value);
    setKey(key);
  };

  const deleteRowItem = (key) => {
    dispatch(removeItem(key));
  };

  return (
    <div className='App'>
      <header>
        <p>TO DO LIST</p>
      </header>
      <section>
        <div>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='text'
                onChange={(event) => setToDoItem(event.target.value)}
                placeholder='Enter a TODO Item'
                value={toDoItem}
              />
              <Button
                variant='primary'
                onClick={() =>
                  key
                    ? dispatch(editItem(toDoItem, key))
                    : dispatch(addItem(toDoItem))
                }
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
          <Table
            list={list}
            editItem={editRowItem}
            deleteItem={deleteRowItem}
          />
        </div>
      </section>
    </div>
  );
}

PropTypes.ToDoTable = {
  addItem: PropTypes.func.getItems,
  getItems: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default App;
