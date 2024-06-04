const Movie = require("../models/Movie");
const Review = require("../models/Review");

exports.addMovie = async (req, res) => {
  const { title, director, releaseYear, genre } = req.body;
  try {
    const newMovie = new Movie({ title, director, releaseYear, genre });
    await newMovie.save();
    res.send(newMovie);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.send(movie);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!movie) return res.status(404).send("Movie not found");
    res.send(movie);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.send("Movie deleted");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getMovieReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.id }).populate(
      "userId",
      "username"
    );
    res.send(reviews);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
