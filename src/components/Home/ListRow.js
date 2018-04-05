import React from "react";
import { Link } from "react-router-dom";

const ListRow = props => {
  return (
    <tr>
      <td>{props.data.firstName}</td>
      <td>{props.data.lastName}</td>
      <td>{props.data.title}</td>
      <td>{props.data.gender}</td>
      <td>{props.data.age}</td>
      <td>
        <Link to={{ pathname: `/edit/${props.data.id}` }}>
          <button type="button" class="btn btn-outline-success" id="my-btn">
            <i className="fas fa-pencil-alt" />Edit
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-outline-danger"
          id="my-btn"
          onClick={() => props.delete(props.data.id)}
        >
          <i className="fas fa-trash-alt" />Delete
        </button>
      </td>
    </tr>
  );
};

export default ListRow;
