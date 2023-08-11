const Select = ({ categoriesdata }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue={true}>Selecciona una Categoria</option>

            {categoriesdata.map((cate) => (
              <option value={cate.gif.id}>{cate.name}</option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <input
            type="search"
            className=" form-control form-control-dark text-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Select;
