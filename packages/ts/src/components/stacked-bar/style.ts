import { addInitFunction, css, injectGlobal } from '../../emotion/css'

export const root = (): string => css`
  label: stacked-bar-component;
`

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-stacked-bar-cursor: default;
    --vis-stacked-bar-fill-color: var(--vis-color-main);
    --vis-stacked-bar-stroke-color: none;
    --vis-stacked-bar-stroke-width: 0px;
    --vis-stacked-bar-hover-stroke-width: none;
    --vis-stacked-bar-hover-stroke-color: none;

    /* Dark Theme */
    --vis-dark-stacked-bar-stroke-color: none;
  }

  body.theme-dark ${`.${root()}`} {
    --vis-stacked-bar-stroke-color: var(--vis-dark-stacked-bar-stroke-color);
  }
`)

export const bar = (): string => css`
  label: bar;
  fill: var(--vis-stacked-bar-fill-color);
  stroke: var(--vis-stacked-bar-stroke-color);
  stroke-width: var(--vis-stacked-bar-stroke-width);
  cursor: var(--vis-stacked-bar-cursor);

  &:hover {
    stroke-width: var(--vis-stacked-bar-hover-stroke-width);
    stroke: var(--vis-stacked-bar-hover-stroke-color);
  }
`

export const barGroup = (): string => css`
  label: barGroup;
`

export const barGroupExit = (): string => css`
  label: barGroupExit;
`
