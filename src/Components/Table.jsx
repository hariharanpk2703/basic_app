import React, {useState, Fragment} from 'react';
import data from './testdata.json';
import ReadOnlyRow from './Readonly';
import EditableRow from './Editonly';

const Table = () => {

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      fullName: "",
      city: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      fullName: "",
      city: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        fullName: addFormData.fullName,
        city: addFormData.city,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        city: editFormData.city,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        fullName: contact.fullName,
        city: contact.city,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };

  return (
    <div className="app-container">
    <div className="py-4">
      <form onSubmit={handleEditFormSubmit}>
        
        <table className="table table-dark table-striped-columns table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col" >Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        
      </form></div>

      <h2 style={{marginLeft:25}} >Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input style={{marginLeft:10}}
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input style={{marginLeft:10}}
          type="text"
          name="city"
          required="required"
          placeholder="Enter a City..."
          onChange={handleAddFormChange}
        />
        <input style={{marginLeft:10}}
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input style={{marginLeft:10}}
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit" class="btn btn-secondary" style={{marginLeft:10}} > Add </button>
      </form>
    </div>
  )
}

export default Table;