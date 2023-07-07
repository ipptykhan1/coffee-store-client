

const AddCoffee = () => {
  return (

    <div className="bg-[#F4F3F0 p-24">
      <h1 className="text-3xl text-purple-500 font-extrabold"> AddCoffee </h1>

      <form>
        <div className="md:flex ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Coffee Name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Coffee Name" name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Available Quantity </span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Available Quantity" name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
