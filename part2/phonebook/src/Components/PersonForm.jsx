const PersonForm = ({ addPerson, newPerson, handleChange}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          type="text"
          value={newPerson.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div>
        phone:
        <input
          type="text"
          value={newPerson.phone}
          onChange={handleChange}
          name="phone"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
