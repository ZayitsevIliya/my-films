import { defineStore } from "pinia";
import { defineCurrentPage } from "@/functions";
import {
  WISH_LIST,
  EXPECTED_LIST,
  WATCHED_LIST,
  FAVORITE_LIST,
} from "@/constants";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    currentMovieListCategory: defineCurrentPage(),
    findedMovies: [],
    loaderState: false,
    isMovieSelected: false,
    selectedMovie: null,
    movieList: [],
  }),

  getters: {
    [WISH_LIST]: (state) => state.filterMovieListByCategory(WISH_LIST),
    [EXPECTED_LIST]: (state) => state.filterMovieListByCategory(EXPECTED_LIST),
    [WATCHED_LIST]: (state) => state.filterMovieListByCategory(WATCHED_LIST),
    [FAVORITE_LIST]: (state) => state.filterMovieListByCategory(FAVORITE_LIST),
  },

  actions: {
    changeCurrentMovieListCategory(category) {
      this.currentMovieListCategory = category;
    },

    filterMovieListByCategory(category) {
      return this.movieList.filter((movie) =>
        movie.category.includes(category)
      );
    },

    findMovieById(id) {
      return this.movieList.find((movie) => movie.id == id);
    },

    formatMovieForMovieStore(movie, categoryName) {
      return {
        id: movie.id,
        name: movie.name,
        description: movie.description,
        poster: {
          url: movie.poster.url,
        },
        rating: {
          kp: movie.rating.kp,
        },
        category: [categoryName],
        year: movie.year,
      };
    },

    addMovieToMovieStore(movie) {
      this.movieList.push(movie);
    },

    deleteMovieFromMovieStore(movie) {
      this.movieList = this.movieList.filter((item) => item.id !== movie.id);
    },

    toggleMovieCard() {
      if (this.selectedMovie) {
        this.selectedMovie = null;
      }

      this.isMovieSelected = !this.isMovieSelected;
    },

    isMovieStoreIncludesThisMovie(movie) {
      return this.movieList.some((item) => item.id == movie.id);
    },
  },
});
