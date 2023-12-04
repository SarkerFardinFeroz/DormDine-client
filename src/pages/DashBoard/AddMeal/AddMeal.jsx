// import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMeal = () => {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log("clicked");
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        title: data.title,
        category: data.category.toLowerCase(),
        image: res.data.data.display_url,
        ingredients: data.ingredients,
        description: data.description,
        price: parseFloat(data.price),
        rating: parseInt(data.rating),
        post_time: data.date,
        likes: 0,
        reviews: 0,
        mdistributor_name: data.distributorName,
        mdistributor_email: data.distributorEmail,
        upcoming: isUpcoming,
      };

      console.log(menuItem);
      const menuRes = await axiosSecure.post("/meals", menuItem);

      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }; 
  const [isUpcoming, setIsUpcoming] = useState(false);
  return (
   <>
    <Helmet>
  <title>DormDine | Add Product</title>
</Helmet>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="font-bold">
        <div className="">
          <label className="label">
            <span className="label-text">Meal Title*</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Meal Title"
            className="input input-bordered w-full "
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select
            defaultValue="null"
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="null">
              Select a Category
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Rating*</span>
          </label>
          <select
            defaultValue="null"
            {...register("rating", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="null">
              Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <input
            {...register("ingredients")}
            type="text"
            placeholder="Ingredients"
            className="textarea textarea-bordered textarea-lg w-full h-24"
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg w-full h-24"
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full "
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Admin/Distributor Name*</span>
          </label>
          <input
            {...register("distributorName", { required: true })}
            type="text"
            placeholder="Admin/Distributor Name"
            className="input input-bordered w-full "
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Admin/Distributor Email*</span>
          </label>
          <input
            {...register("distributorEmail", { required: true })}
            type="email"
            placeholder="Admin/Distributor Email"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Meal Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Date*</span>
          </label>
          <input {...register("date", { required: true })} type="date" />
        </div>
      </div>

      <div className="my-8 flex gap-8">
        <button
          type="submit"
          className="bg-bg-primary py-4  px-5 rounded-lg text-white"
        >
          Add Meal
        </button>

        <button
          type="button"
          onClick={() => setIsUpcoming(!isUpcoming)}
          className={`bg-bg-primary py-4  px-5 rounded-lg text-whit ${
            isUpcoming ? "text-bg-primary  bg-[#3b060d] " : "text-white"
          }`}
        >
          {isUpcoming ? "Added to Upcoming" : "Add to Upcoming"}
        </button>
      </div>
    </form>
   </>
  );
};

export default AddMeal;
