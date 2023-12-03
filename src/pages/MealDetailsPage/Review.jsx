const Review = ({handleReviewSubmit}) => {
  return (
    <>
      <form onSubmit={handleReviewSubmit}>
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
      <button  className="py-2 px-5 mt-4 rounded-xl bg-[#871900] text-white">
        Post review
      </button>
      </form>
    </>
  );
};

export default Review;
