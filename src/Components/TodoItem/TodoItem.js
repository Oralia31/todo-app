import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDeleteItem }) {
  const [checked, setChecked] = useState(completed);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onComplete();
  };

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  return (
    <div className="container-li">
      <li className="li-item">
        <span className="button-check">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </span>

        <p
          className="text"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {text}
        </p>
      </li>
      <div className="container-button">
        <button className="button-delete" onClick={onDeleteItem}>
          X
        </button>
      </div>
    </div>
  );
}

export { TodoItem };
