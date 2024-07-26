const Total = ({ parts }) => {
  const total = Object.values(parts).reduce((acummulator, { exercises }) => acummulator + exercises, 0);
  return <h3>Number of exercises {total}</h3>;
};

export default Total;
