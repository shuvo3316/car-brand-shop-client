
const AddProduct = () => {
    const handleAdd=e=>{
        e.preventDefault()
        const form=e.target;
        const name =form.name.value;
        let brand1 =form.brand.value;
        const brand=brand1.toLowerCase();
        const type =form.type.value;
        const price =form.price.value;
        const photo =form.photo.value;
        const description =form.description.value;
        const rating =form.rating.value;
        console.log(name,brand,type,price,description,rating);

        const newProduct={ name:name,photo:photo,brand:brand,type:type,price:price,description:description,rating:rating }

        fetch('http://localhost:5000/allproducts',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })



    }
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-center">Add Product</h2>

         <form  onSubmit={handleAdd}>

         <div className="md:flex gap-4 md:p-10">
            <div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Product name</span>
  </label>
  <label className="input-group">
    <span>Name</span>
    <input type="text" name="name" placeholder="product name" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
    <span>Brand </span>
    <input type="text" name="brand" placeholder="brand name" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className="md:flex gap-4 md:p-10">
            <div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Type(SUB,SEDAN,SPORTS,ETC)</span>
  </label>
  <label className="input-group">
    <span>Type</span>
    <input type="text" name="type" placeholder="product Type" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Price </span>
  </label>
  <label className="input-group">
    <span>Price </span>
    <input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className="md:flex gap-4 md:p-10">
            <div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Short description</span>
  </label>
  <label className="input-group">
    <span>description</span>
    <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control  md:w-1/2">
  <label className="label">
    <span className="label-text">Rating </span>
  </label>
  <label className="input-group">
    <span>Rating </span>
    <input type="text" name="rating" placeholder="Rating " className="input input-bordered w-full" />
  </label>
</div>

            </div>
            <div className="md:flex gap-4 md:p-10">
            <div className="form-control  w-full">
  <label className="label">
    <span className="label-text">Photo Url</span>
  </label>
  <label className="input-group">
    <span>Photo</span>
    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
  </label>
</div>


            </div>
            <button className="btn w-full mt-4 ">Add Product</button>
         </form>

            
        </div>
    );
};

export default AddProduct;