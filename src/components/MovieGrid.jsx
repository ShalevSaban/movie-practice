import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

// Interface for an individual movie

export const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await apiClient.get("discover/movie");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <SimpleGrid columns={5} spacing={10}>
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          poster_path={movie.poster_path}
        ></MovieCard>
      ))}
    </SimpleGrid>
  );
};
