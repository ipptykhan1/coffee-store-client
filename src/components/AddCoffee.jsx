

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee);
}


  return (

    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl text-purple-500 font-extrabold"> AddCoffee </h1>

      <form onClick={handleAddCoffee}>

        {/* form name & quantity row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2 mb-4 ">
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
      
        {/* form supplier and taste row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2 mb-4 ">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Supplier Name</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="supplier Name" name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Taste </span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Taste" name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div> 
             
             {/* form category and details row  */}

        <div className="md:flex ">
          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Category</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Category" name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Detaiils </span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Detaiils" name="detaiils"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>

        {/* form Photo URL row */}

        <div className="">
          <div className="form-control md:w-full mb-4 ">
            <label className="label">
              <span className="text-xl text-purple-800 text-bold">Photo URL</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                placeholder="Photo URL" name="photo "
                className="input input-bordered w-full"
              />
            </label>
          </div>
         </div>

        
        <button className="bg-black text-white btn btn-block"> Add Coffee </button>
        <button className="rounded-full">Add Coffee</button>
       
      </form>
    </div>
  );
};

export default AddCoffee;
