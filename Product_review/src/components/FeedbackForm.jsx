
import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!name || !product || !rating) {
      alert("All fields are required!");
      return;
    }

    const reviewMap = {
      1: "Poor experience 😞",
      2: "Needs improvement 😐",
      3: "Average product 🙂",
      4: "Good product 👍",
      5: "Excellent product 🎉",
    };

    const feedback = {
      name,
      product,
      rating,
      review: reviewMap[rating],
    };

    onSubmit(feedback);

    // reset
    setName("");
    setProduct("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Product Feedback Form</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Product: </label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>

      <div>
        <label>Rating: </label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;