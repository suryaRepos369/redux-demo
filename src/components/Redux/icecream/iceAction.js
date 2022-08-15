import { BUY_ICE } from "./icecreamType";

export function buyice(number = 1) {
  return {
    type: BUY_ICE,
    info: "icecream",
    payload: number,
  };
}
