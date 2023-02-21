import { useContext } from "react";
import { CanvasContext } from "./Context/CanvasContext";

export default function buildPattern(number, setCellValue) {
  // mesmas posições do canvas
  const max = Math.ceil(Math.sqrt(number));
  const odd = max % 2 === 0 ? max + 1 : max;
  const center = Math.floor(odd / 2);

  // inicio da espiral no centro da tela
  let walk = `${center}-${center}`;
  let exec = 1;

  // right = 0 / 1
  // up = -1 / 0
  // left = 0 / -1
  // down = 1 / 0
  const direction = [[0, 1], [-1, 0], [0, -1], [1, 0]];

  let state = 0;

  // deve incrementar quando: 
  // o resto da divisão das execs pelo número de passos for 0,
  // quantidade de mudanças de direção for par
  let numSteps = 1;
  let turnCounter = 0;

  const path = {};
  for (let i = 1; i <= number; i += 1) {
    path[walk] = i;
    const splitWalk = walk.split('-').map((e) => +e);
    // mudar o valor para proxima execução
    walk = [splitWalk[0] + direction[state][0], splitWalk[1] + direction[state][1]].join('-');
    // direção deve mudar?
    if (exec % numSteps === 0) {
      state = state === 3 ? 0 : state + 1;
      turnCounter++;
      if (turnCounter % 2 == 0) {
        numSteps++;
      }
    }
    exec++;
  }
  setCellValue(path);
}
