import { useFetcher, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditReview = () => {
  // TODO: if can make a default value on text area
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const handleEditReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.elements.reviewText.value;
    axiosSecure.put(`/reviews/${id}`, { details: reviewText }).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "updated",
          ShowConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <form onSubmit={handleEditReview}>
      <label className="form-control">
        <div className="label">
          <span className="label-text font-bold">Write a review</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder=""
          name="reviewText"
          required
        ></textarea>
      </label>
      <button className="py-2 px-5 mt-4 rounded-xl bg-[#871900] text-white">
        Post review
      </button>
    </form>
  );
};

export default EditReview;
