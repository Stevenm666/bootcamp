import { useState } from "react";
import Filter from './Components/Filter'
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });
  const [filterData, setFilterData] = useState("");
  const [filter, setFilter] = useState(false);

  const addPerson = (e) => {
    e.preventDefault();
    const newPersonData = {
      name: newPerson.name,
      phone: newPerson.phone,
      id: String(persons.length + 1),
    };
    const found = persons.find((person) => person.name == newPerson.name);

    if (found) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPersonData));
    }
    setNewPerson({ name: "", phone: "" });
  };

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleChangeFilter = (e) => {
    setFilterData(e.target.value);
    setFilter(true);
  };

  const toShow = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filterData.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterData={filterData} handleChangeFilter={handleChangeFilter} />
      <h2>Add a new</h2>
      <PersonForm newPerson={newPerson} addPerson={addPerson} handleChange={handleChange} />
      <h2>Numbers</h2>
      <Persons toShow={toShow} />
    </div>
  );
};

export default App;
