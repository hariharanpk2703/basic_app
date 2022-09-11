import React from 'react'

const Forms = () => {
  return (
    <>
     <div className="app-container">
      {/* <form onSubmit={handleEditFormSubmit}> */}
        <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {contacts.map((contact) => (
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
                    // handleEditClick={handleEditClick}
                    // handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))} */}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      {/* <form onSubmit={handleAddFormSubmit}> */}
        <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
        //   onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
        //   onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
        //   onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
        //   onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
    </>
  )
}

export default Forms;