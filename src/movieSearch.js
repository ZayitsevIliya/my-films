import { API_KEY, API_URL_SERACH } from "@/constants";
import { useMovieStore } from "@/store/movieStore";

// Оформить модуль в movieSearchStore и добавить в него методы для поиска фильмов,
// пагинацию и сортировку. При поиске фильмов должен меняться хэш в адресной строке.
// При этом должен быть реализован механизм, который позволит возвращаться на предыдущую страницу поиска.

export async function movieSearch(movieName) {
  const movieStore = useMovieStore();

  movieStore.loaderState = true;

  let url = `${API_URL_SERACH}${movieName}`;

  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });

  const movies = await resp.json();

  movieStore.findedMovies = movies["docs"].filter((movie) => {
    return movie["name"] !== "";
  });

  movieStore.loaderState = false;

  window.location.hash = "#serachMovies";
  movieStore.changeCurrentMovieListCategory("findedMovies");
}
