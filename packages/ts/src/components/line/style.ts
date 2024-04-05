import { addInitFunction, css, injectGlobal } from '../../emotion/css'

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;
  }
`)

export const root = (): string => css`
  label: line-component;
`

export const line = (): string => css`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`

export const linePath = (): string => css`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`

export const lineSelectionHelper = (): string => css`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`

export const dim = (): string => css`
  opacity: 0.2;
`
