import { NAV_LIST } from "@/constants";

export function defineCurrentPage() {
  const hash = window.location.hash.slice(1);

  if (NAV_LIST.includes(hash)) {
    return hash;
  }

  window.location.hash = NAV_LIST[0];

  return NAV_LIST[0];
}
