import { type IPresenceAnimation, type TNameAnimation } from "./types";

const animations = {
  opacity: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
    }
    100%{ 
      opacity: 1; 
    }
  }
`,
  scale: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
      transform: scale(0);
    }
    100%{ 
      opacity: 1; 
      transform: scale(1);
    }
  }
  `,
  translateRight: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
      transform: translate(100%);
    }
    100%{ 
      opacity: 1; 
      transform: translate(0);
    }
  }
`,
  translateLeft: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
      transform: translate(-100%);
    }
    100%{ 
      opacity: 1; 
      transform: translate(0);
    }
  }
`,
  translateDown: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
      transform: translateY(100%);
    }
    100%{ 
      opacity: 1; 
      transform: translateY(0);
    }
  }
`,
  translateUp: (name: TNameAnimation) => `
  @keyframes ${name}{
    0%{ 
      opacity: 0; 
      transform: translateY(-100%);
    }
    100%{ 
      opacity: 1; 
      transform: translateY(0);
    }
  }
`,
};

export const presenceAnimation = ({
  animation,
  duration,
  delay = 0,
  direction = "normal",
  fillMode = "none",
  iterationCount = 1,
  playState = 0,
  timingFunction = "ease",
}: IPresenceAnimation): string => {
  const templateAnimation = `
    ${animations[animation](animation)}
    animation-name: ${animation};
    animation-duration: ${duration}s;
    animation-timing-function: ${timingFunction};
    animation-delay: ${delay}s;
    animation-iteraction-count: ${iterationCount};
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    animation-play-state: ${playState};
  `;
  return templateAnimation;
};
