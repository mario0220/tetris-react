import { useState } from "react";
import { buildBoard } from "../business/board";

export const useBoard = ({ rows, columns}) => {
  const [board] = useState(buildBoard({rows, columns }));

  return [board];
}