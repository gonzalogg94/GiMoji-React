

const Serch = ({onchangeBySerch}) => {
  
    return (
        <div className="col-sm-6 ">
        <div>
          <input 
          type="serch" 
          placeholder="serch"
onChange={(e)=>onchangeBySerch(e)}
          />
          <span class="bottom"></span>
          <span class="right"></span>
          <span class="top"></span>
          <span class="left"></span>
        </div>
      </div>
    );
};

export default Serch;