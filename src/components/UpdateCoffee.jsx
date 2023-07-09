

const UpdateCoffee = () => {

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(updateCoffee);
    }

    return (
        < div className="p-24"> 
            <h1 className="text-4xl text-purple-700"> UpdateCoffee </h1>
            <form onClick={handleUpdateCoffee}> 

                {/* form  name chef row */}
                 <div className="md:flex">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Name</span>
                     </label>
                    <label className="input-group ">
                
                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                    </div>

                    <div className="form-control md:w-1/2 pl-4">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Chef</span>
                     </label>
                    <label className="input-group">
                
                    <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                    </label>
                    </div>
            
                 </div>

                 {/* form  supplier taste row */}

                 <div className="md:flex">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Supplier</span>
                     </label>
                    <label className="input-group ">
                
                    <input type="text" name="Supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                    </label>
                    </div>

                    <div className="form-control md:w-1/2 pl-4">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Taste</span>
                     </label>
                    <label className="input-group">
                
                    <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                    </label>
                    </div>
            
                 </div>

                 {/* form category detail row */}

                 <div className="md:flex">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Category</span>
                     </label>
                    <label className="input-group ">
                
                    <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                    </label>
                    </div>

                    <div className="form-control md:w-1/2 pl-4">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Details</span>
                     </label>
                    <label className="input-group">
                
                    <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                    </label>
                    </div>
            
                 </div>

                 {/* form photo row */}

                 <div className="md:flex">
                 <div className="form-control md:w-full">
                    <label className="label">
                     <span className="label-text font-bold text-purple-300">Photo</span>
                     </label>
                    <label className="input-group ">
                
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                    </div>
            
                 </div>

                
                <button className="text-white bg-purple-900  mt-4 pl-60 pr-60 p-5"> Add coffee </button>


            </form>
        </div>
    );
};

export default UpdateCoffee;