const pool = require("../database/dbconfig");
const queries = require("../database/queries.json");

const getLongestMovies = async (req, res) => {
  try {
    const [rowws, fields] = await pool.query(queries.getLongestMovies);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const createNewMovie = async (req, res) => {
  try {
    const { tconst, titleType, primaryTitle, runTimeMinutes, genres } =
      req?.body;
    const [rows, fields] = await pool.query(queries.createNewMovie, [
      tconst,
      titleType,
      primaryTitle,
      runTimeMinutes,
      genres,
    ]);
    res.status(200).send("success");
  } catch (err) {
    res.status(400).send("failed");
  }
};

const getTopRatedMovies = async (req, res) => {
  try {
    const [rows, fields] = await pool.query(queries.getTopRatedMovies);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const getMoviesGenre = async (req, res) => {
  try {
    const [rows, fields] = await pool.query(queries.getMoviesGenre);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const updateRuntimeMinutes = async (req, res) => {
  try {
    const [rows, fields] = await pool.query(queries.updateRuntimeMinutes);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

module.exports = {
  getLongestMovies,
  createNewMovie,
  getTopRatedMovies,
  getMoviesGenre,
  updateRuntimeMinutes,
};
