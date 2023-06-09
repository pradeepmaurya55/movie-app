const { Router } = require("express");

const {
  getLongestMovies,
  getMoviesGenre,
  getTopRatedMovies,
  createNewMovie,
  updateRuntimeMinutes,
} = require("../controllers/MovieController");

const router = Router();

router.route("/longest-duration-movies").get(getLongestMovies);
router.route("/new-movie").post(createNewMovie);
router.route("/top-rated-movies").get(getTopRatedMovies);
router.route("/genre-movies-with-subtotals").get(getMoviesGenre);
router.route("/update-runtime-minutes").post(updateRuntimeMinutes);

module.exports = router;
