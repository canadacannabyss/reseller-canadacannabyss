import { keyframes } from 'styled-components';

const SidebarBackgroundFadeIn = keyframes`
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const SidebarBackgroundFadeOut = keyframes`
  0% {
    background: rgba(0, 0, 0, 0.2);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
`;

export {
  SidebarBackgroundFadeIn, SidebarBackgroundFadeOut,
};
