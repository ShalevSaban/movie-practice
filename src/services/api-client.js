import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjc0MDQwMTMyMmUzZjYxNWViZDM3Y2Y2NmZhMjZkZiIsInN1YiI6IjY2MGE4NGVmYTBiZTI4MDE2MzcxYjc4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mFfTUyFD9IQG-5Gt5co49bzZjtl-F6cfS3YhLR2tDMI",
  },
  params: {
    key: "a2740401322e3f615ebd37cf66fa26df",
  },
});
