import React, {useState, Fragment} from 'react';
import data from './testdata';
import ReadOnlyRow from './Readonly';
import EditableRow from './Editonly';

const Table = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      name: "",
      city: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      name: "",
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
        name: addFormData.name,
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
        name: editFormData.name,
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
        name: contact.name,
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
      <>
     <div className="container">
      <form onSubmit={handleEditFormSubmit}>
      <div className="py-4">
        <table class="table table-dark table-striped-columns table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th>Action</th>
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
      </div>
      </form>
      <br></br>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input style={{marginLeft:10}}
          type="text"
          name="name"
          required="required"
          placeholder="Enter a Name..."
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
          placeholder="Enter a Phone Number..."
          onChange={handleAddFormChange}
        />
        <input style={{marginLeft:10}}
          type="email"
          name="email"
          required="required"
          placeholder="Enter an Email..."
          onChange={handleAddFormChange}
        />
        <button class="btn btn-secondary" style={{marginLeft:10}} type="submit">Add</button>
      </form>
    </div>
    </>
  )
}

export default Table;