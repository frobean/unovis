import { addInitFunction, css, injectGlobal } from '../../emotion/css'

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`)

export const root = (): string => css`
  label: crosshair-component;
`

export const line = (): string => css`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`

export const circle = (): string => css`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`
