import "../../styles/style.css"
const Select = ({ categoriesdata }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-4 pb-3">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue={true}>Selecciona una Categoria</option>

            {categoriesdata.map((cate) => (
              <option value={cate.gif.id}>{cate.name}</option>
            ))}
          </select>
        </div>
        <div className="col-sm-6 ">
        <div>
  <input type="serch" placeholder="serch"/>
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
        </div>
      </div>
    </div>
  );
};

export default Select;
