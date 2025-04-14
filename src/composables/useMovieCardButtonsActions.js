import { useMovieStore } from "@/store/movieStore";

export function useMovieCardButtonsActions() {
  const movieStore = useMovieStore();

  function categoryButtonAction(movie, category) {
    movieStore.isMovieStoreIncludesThisMovie(movie)
      ? setOrDeleteCategory(movie, category)
      : addMovie(movie, category);
  }

  function addMovie(movie, category) {
    movie = movieStore.formatMovieForMovieStore(movie, category);
    movieStore.addMovieToMovieStore(movie);
    movieStore.selectedMovie = movie;
  }

  function setOrDeleteCategory(movie, category) {
    movie.category.includes(category)
      ? deleteCatergory(movie, category)
      : setCategory(movie, category);
  }

  function setCategory(movie, categoryToSet) {
    movie.category.push(categoryToSet);
  }

  function deleteCatergory(movie, categoryToDelete) {
    movie.category = movie.category.filter(
      (category) => category !== categoryToDelete
    );

    if (movie.category.length === 0) {
      movieStore.deleteMovieFromMovieStore(movie);
    }
  }

  return {
    categoryButtonAction,
  };
}
