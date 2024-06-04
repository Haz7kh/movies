const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  const { movieId, rating, comment } = req.body;
  try {
    const newReview = new Review({
      movieId,
      userId: req.user._id,
      rating,
      comment,
    });
    await newReview.save();
    res.send(newReview);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("movieId", "title")
      .populate("userId", "username");
    res.send(reviews);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("movieId", "title")
      .populate("userId", "username");
    if (!review) return res.status(404).send("Review not found");
    res.send(review);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) return res.status(404).send("Review not found");
    res.send(review);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).send("Review not found");
    res.send("Review deleted");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
