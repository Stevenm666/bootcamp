const Filter = ({ filterData, handleChangeFilter }) => {
  return (
    <div>
        filter shown with:
        <input
          type="text"
          value={filterData}
          onChange={handleChangeFilter}
          name="name"
        />
      </div>
  )
}

export default Filter