const pool = require("../database/dbconfig");

const getLongestMovies = async (req, res) => {
  try {
    const sql =
      "SELECT tconst,primaryTitle,runtimeMinutes,genres FROM movies ORDER BY runtimeMinutes DESC LIMIT 10";
    const [rowws, fields] = await pool.query(sql);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const createNewMovie = async (req, res) => {
  try {
    const { tconst, titleType, primaryTitle, runTimeMinutes, genres } =
      req?.body;
    const sql =
      "insert into movies (tconst, titleType,primaryTitle,runTimeMinutes,genres) values(?,?,?,?,?)";
    const [rows, fields] = await pool.query(sql, [
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
    const sql =
      "SELECT m.tconst,m.primaryTitle,m.genres,r.averageRating  FROM movies m, reviews r WHERE m.tconst=r.tconst AND r.averageRating > 6.0";
    const [rows, fields] = await pool.query(sql);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const getMoviesGenre = async (req, res) => {
  try {
    const sql =
      "WITH genre AS (" +
      "SELECT m.genres as GENRE , m.primaryTitle, sum(r.numVotes) AS numVotes " +
      "FROM movies m, reviews r " +
      "Where m.tconst=r.tconst" +
      "GROUP BY m.genres,m.primaryTitle WITH ROLLUP )" +
      'SELECT coalesce(GENRE,"Total"),coalesce(primaryTitle,"Total"),numVotes FROM genre;';

    const [rows, fields] = await pool.query(sql);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
};

const updateRuntimeMinutes = async (req, res) => {
  try {
    const sql =
      "UPDATE movies SET runtimeMinutes CASE " +
      "WHEN GENRE = 'Documentary' THEN runtimeMinutes + 15" +
      "WHEN GENRE = 'Animation' THEN runtimeMinutes + 30" +
      "ELSE runtimeMinutes + 45";

    const [rows, fields] = await pool.query(sql);
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
