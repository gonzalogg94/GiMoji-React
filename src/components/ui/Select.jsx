import SelectCategories from "./SelectCategories";
import Serch from "./Serch";

const Select = ({ categoriesdata,onchangebycategory,onchangeBySerch }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
       <SelectCategories categoriesdata={categoriesdata} onchangebycategory={onchangebycategory}></SelectCategories>
       <Serch onchangeBySerch={(e)=>onchangeBySerch(e)}></Serch>
      </div>
    </div>
  );
};

export default Select;
