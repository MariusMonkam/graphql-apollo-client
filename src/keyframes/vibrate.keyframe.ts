import { keyframes } from "@mui/material";

export const vibrate = keyframes`

  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-4px, 4px);
  }
  40% {
    -webkit-transform: translate(-4px, -4px);
            transform: translate(-4px, -4px);
  }
  60% {
    -webkit-transform: translate(4px, 4px);
            transform: translate(4px, 4px);
  }
  80% {
    -webkit-transform: translate(4px, -4px);
            transform: translate(4px, -4px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`;
