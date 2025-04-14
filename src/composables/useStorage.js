import { useMovieStore } from "@/store/movieStore";

export function useStorage() {
  const movieStore = useMovieStore();

  function saveMovieList() {
    localStorage.setItem("movieList", JSON.stringify(movieStore.movieList));
  }

  function loadMovieList() {
    movieStore.movieList = JSON.parse(localStorage.getItem("movieList"));
  }

  return {
    saveMovieList,
    loadMovieList,
  };
}
