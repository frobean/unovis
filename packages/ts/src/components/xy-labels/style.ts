import { addInitFunction, css, injectGlobal } from '../../emotion/css'

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-xy-label-cursor: default;
    // Undefined by default to allow proper fallback to var(--vis-color-main)
    /* --vis-xy-label-fill-color */
    --vis-xy-label-stroke-color: none;
    --vis-xy-label-stroke-width: 0px;
    --vis-xy-label-fill-opacity: 1;
    --vis-xy-label-stroke-opacity: 1;
    --vis-xy-label-hover-stroke-width: 1px;
    --vis-xy-label-font-size: 12px;
    --vis-xy-label-cluster-font-size: 14px;

    --vis-xy-label-text-color-dark: #5b5f6d;
    --vis-xy-label-text-color-light: #fff;
    --vis-xy-label-text-font-weight: 500;
  }
`)

export const root = (): string => css`
  label: xy-labels-component;
`

export const labelGroup = (): string => css`
  label: label-g;

  > rect, text {
    cursor: var(--vis-xy-label-cursor);
    fill: var(--vis-xy-label-fill-color, var(--vis-color-main));
    fill-opacity: var(--vis-xy-label-fill-opacity);
    stroke-opacity: var(--vis-xy-label-stroke-opacity);
  }

  > text {
    font-weight: var(--vis-xy-label-text-font-weight);
    user-select: none;
  }

  > rect {
    stroke-width: var(--vis-xy-label-stroke-width);
    stroke: var(--vis-xy-label-stroke-color);

    &:hover {
        stroke-width: var(--vis-xy-label-hover-stroke-width);
    }
  }
`

export const cluster = (): string => css`
  label: cluster;
`

export const label = (): string => css`
  label: label;
`
