const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const auth = require("../middleware/authMiddleware");

router.post("/reviews", auth, reviewController.addReview);
router.get("/reviews", reviewController.getReviews);
router.get("/reviews/:id", reviewController.getReviewById);
router.put("/reviews/:id", auth, reviewController.updateReview);
router.delete("/reviews/:id", auth, reviewController.deleteReview);

module.exports = router;
