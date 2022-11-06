import { useState } from "react";
import { buildBoard } from "../business/board";

export const useBoard = ({ rows, columns}) => {
  const [board, useBoard] = useState(buildBoard({rows, columns }));

  return [board];
}