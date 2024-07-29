const Persons = ({ toShow }) => {
  return (
    <div>
      {toShow.map((person) => (
        <p key={person.id}>{`${person.name} ${person.phone}`}</p>
      ))}
    </div>
  );
};

export default Persons;
