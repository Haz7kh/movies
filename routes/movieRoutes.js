const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/movies", auth, role("admin"), movieController.addMovie);
router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovieById);
router.put("/movies/:id", auth, role("admin"), movieController.updateMovie);
router.delete("/movies/:id", auth, role("admin"), movieController.deleteMovie);
router.get("/movies/:id/reviews", movieController.getMovieReviews);

module.exports = router;
