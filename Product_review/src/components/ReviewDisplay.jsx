const ReviewDisplay = ({ feedback }) => {
  if (!feedback) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Thank You, {feedback.name}!</h2>
      <p>Product: {feedback.product}</p>
      <p>Rating: {feedback.rating}</p>
      <p>Review: {feedback.review}</p>
    </div>
  );
};

export default ReviewDisplay;