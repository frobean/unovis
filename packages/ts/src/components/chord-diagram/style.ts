import { addInitFunction, css, injectGlobal } from '../../emotion/css'

export const root = (): string => css`
  label: chord-diagram-component;
`

addInitFunction((): void => injectGlobal`
  :root {
    --vis-chord-diagram-link-fill-color: #cad5f6;
    --vis-chord-diagram-link-stroke-color: #777777;
    --vis-chord-diagram-link-opacity: 0.5;
    --vis-chord-diagram-link-stroke-opacity: 0.15;
    --vis-chord-diagram-link-highlighted-opacity: 0.9;
    --vis-chord-diagram-link-dimmed-opacity: 0.25;

    --vis-chord-diagram-node-highlighted-opacity: 0.9;
    --vis-chord-diagram-node-dimmed-opacity: 0.25;

    --vis-chord-diagram-label-text-fill-color-bright: #ffffff;
    --vis-chord-diagram-label-text-fill-color-dark: #a5abb2;
    --vis-chord-diagram-label-text-font-size: 1em;

    --vis-dark-chord-diagram-link-fill-color: #575c65;
  }

  body.theme-dark ${`.${root()}`} {
    --vis-chord-diagram-link-fill-color: var(--vis-dark-chord-diagram-link-fill-color);
  }
`)

export const background = (): string => css`
  label: background;
`

export const nodes = (): string => css`
  label: nodes;
`

export const links = (): string => css`
  label: links;
`

export const labels = (): string => css`
  label: labels;
`

export const node = (): string => css`
  label: node;
  stroke-width: 0;
  fill: var(--vis-color-main);
  stroke: var(--vis-color-main);
  transition: .1s fill-opacity;
`

export const highlightedNode = (): string => css`
  label: highlighted;
  fill-opacity: var(--vis-chord-diagram-node-highlighted-opacity);
  stroke-width: 1.5;
`

export const label = (): string => css`
  label: label;
`

export const labelText = (): string => css`
  label: label-text;

  dominant-baseline: middle;
  user-select: none;
  font-size: var(--vis-chord-diagram-label-text-font-size);
  
  > textPath {
    dominant-baseline: central;
  }
`

export const labelExit = (): string => css`
  label: label-exit;
`

export const link = (): string => css`
  label: link;

  fill: var(--vis-chord-diagram-link-fill-color);
  fill-opacity: var(--vis-chord-diagram-link-opacity);
  stroke: var(--vis-chord-diagram-link-stroke-color);
  stroke-opacity:  var(--vis-chord-diagram-link-stroke-opacity);
  transition: .1s fill-opacity;
`
export const highlightedLink = (): string => css`
  label: highlighted;
  fill-opacity: var(--vis-chord-diagram-link-highlighted-opacity);
`

export const transparent = (): string => css`
  label: transparent;

  ${`.${link()}`}:not(${`.${highlightedLink()}`}) {
    fill-opacity: var(--vis-chord-diagram-link-dimmed-opacity);
  }

  ${`.${node()}`}:not(${`.${highlightedNode()}`}) {
    fill-opacity: var(--vis-chord-diagram-node-dimmed-opacity);
  }
`
