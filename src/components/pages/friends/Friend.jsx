import React, { useState } from 'react';
import '../friends/friends.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: '',
    surname: '',
    age: '',
    city: ''
  });
  const [searchValue, setSearchValue] = useState('');

  const addItem = () => {
    setShowInput(true);
  };   

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...inputValues };
    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name && item.surname === newItem.surname
    );
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = newItem;
      setItems(updatedItems);
    } else {
      setItems([...items, newItem]);
    }
    setInputValues({ name: '', surname: '', age: '', city: '' });
    setShowInput(false);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    const selectedItem = items[index];
    setInputValues(selectedItem);
    setShowInput(true);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    `${item.name} ${item.surname}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='placeholder'>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search"
      />
      <button onClick={addItem} className="add-item-button">Add Item</button>
      {showInput && (
        <div className="modal">
          <div className="modal-content">
            <div>
            <span className="close" onClick={() => setShowInput(false)}>&times;</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="name"
                  value={inputValues.name}
                  onChange={handleInputChange}
                  required
                  className="user-input"
                  placeholder="Name"
                />
                <label className="user-label">Name</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="surname"
                  value={inputValues.surname}
                  onChange={handleInputChange}
                  required
                  className="user-input"
                  placeholder="Surname"
                />
                <label className="user-label">Surname</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="age"
                  value={inputValues.age}
                  onChange={handleInputChange}
                  required
                  className="user-input"
                  placeholder="Age"
                />
                <label className="user-label">Age</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="city"
                  value={inputValues.city}
                  onChange={handleInputChange}
                  required
                  className="user-input"
                  placeholder="City"
                />
                <label className="user-label">City</label>
              </div>
              <button type="submit" className="user-button">Add</button>
            </form>
          </div>
        </div>
      )}
      <ul className="user-list">
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name} {item.surname} - {item.age} - {item.city}
            <button onClick={() => handleEdit(index)} className="user-button">Edit</button>
            <button onClick={() => handleDelete(index)} className="user-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
