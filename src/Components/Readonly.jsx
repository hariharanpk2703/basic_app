import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.city}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button className="btn btn-primary"
          type="button" style={{marginLeft:10}}
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger" type="button" style={{marginLeft:10}} onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
