import { addInitFunction, css, injectGlobal } from '../../emotion/css'

export const root = (): string => css`
  label: grouped-bar-component;
`

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-grouped-bar-cursor: default;
    --vis-grouped-bar-fill-color: var(--vis-color-main);
    --vis-grouped-bar-stroke-color: none;
    --vis-grouped-bar-stroke-width: 0px;
    --vis-grouped-bar-hover-stroke-width: 1px;
    --vis-grouped-bar-hover-stroke-color: none;


    /* Dark Theme */
    --vis-dark-grouped-bar-stroke-color: none;
  }

  body.theme-dark ${`.${root()}`} {
    --vis-grouped-bar-stroke-color: var(--vis-dark-grouped-bar-stroke-color);
  }
`)

export const bar = (): string => css`
  label: bar;
  fill: var(--vis-grouped-bar-fill-color);
  stroke: var(--vis-grouped-bar-stroke-color);
  stroke-width: var(--vis-grouped-bar-stroke-width);
  cursor: var(--vis-grouped-bar-cursor);

  &:hover {
    stroke-width: var(--vis-grouped-bar-hover-stroke-width);
    stroke: var(--vis-grouped-bar-hover-stroke-color);
  }
`

export const barGroup = (): string => css`
  label: barGroup;
`

export const barGroupExit = (): string => css`
  label: barGroupExit;
`
