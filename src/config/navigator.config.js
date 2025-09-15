import TheWatchedIcon from "@/assets/icons/TheWatchedIcon.vue";
import TheWishItemIcon from "@/assets/icons/TheWishItemIcon.vue";
import TheExpectedIcon from "@/assets/icons/TheExpectedIcon.vue";
import TheFavoriteIcon from "@/assets/icons/TheFavoriteIcon.vue";

import {
  WISH_LIST,
  EXPECTED_LIST,
  WATCHED_LIST,
  FAVORITE_LIST,
} from "@/constants";

export let navList = [
  {
    label: WISH_LIST,
    icon: TheWishItemIcon,
  },
  {
    label: EXPECTED_LIST,
    icon: TheExpectedIcon,
  },
  {
    label: WATCHED_LIST,
    icon: TheWatchedIcon,
  },
  {
    label: FAVORITE_LIST,
    icon: TheFavoriteIcon,
  },
];
