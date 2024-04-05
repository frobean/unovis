// Utils
import { getCssVarNames, injectGlobalCssVariables } from 'utils/style'

import { addInitFunction, css, injectGlobal } from '../../emotion/css'

// Inject Leaflet global style
// eslint-disable-next-line
import leafletCSS from './leaflet.css'

const cssVarDefaults = {
  '--vis-map-container-background-color': '#dfe5eb',
  /* Undefined by default to allow proper fallback to var(--vis-font-family) */
  '--vis-map-label-font-family': undefined as undefined,

  '--vis-map-point-default-fill-color': '#B9BEC3',
  '--vis-map-point-ring-fill-color': '#ffffff',
  '--vis-map-point-default-stroke-color': '#959da3',
  '--vis-map-point-default-stroke-width': '0px',
  '--vis-map-point-default-cursor': 'default',

  '--vis-map-cluster-default-fill-color': '#fff',
  '--vis-map-cluster-default-stroke-color': '#B9BEC3',
  '--vis-map-cluster-default-stroke-width': '1.5px',
  '--vis-map-cluster-donut-fill-color': '#959da3',

  '--vis-map-cluster-inner-label-text-color-dark': '#5b5f6d',
  '--vis-map-cluster-inner-label-text-color-light': '#fff',

  '--vis-map-point-inner-label-text-color-dark': '#5b5f6d',
  '--vis-map-point-inner-label-text-color-light': '#fff',

  '--vis-map-point-bottom-label-text-color': '#5b5f6d',
  '--vis-map-point-bottom-label-font-size': '10px',

  '--vis-map-cluster-expanded-background-fill-color': '#fff',

  /* Dark Theme */
  '--vis-dark-map-container-background-color': '#dfe5eb',
  '--vis-dark-map-point-default-fill-color': '#B9BEC3',
  '--vis-dark-map-point-default-stroke-color': '#959da3',
  '--vis-dark-map-point-ring-fill-color': '#5b5f6d',

  '--vis-dark-map-cluster-default-fill-color': '#5b5f6d',
  '--vis-dark-map-cluster-default-stroke-color': '#B9BEC3',
  '--vis-dark-map-cluster-donut-fill-color': '#959da3',

  '--vis-dark-map-cluster-inner-label-text-color-dark': '#5b5f6d',
  '--vis-dark-map-cluster-inner-label-text-color-light': '#fff',

  '--vis-dark-map-point-inner-label-text-color-dark': '#5b5f6d',
  '--vis-dark-map-point-inner-label-text-color-light': '#fff',

  '--vis-dark-map-point-bottom-label-text-color': '#5b5f6d',

  '--vis-dark-map-cluster-expanded-background-fill-color': '#fff',
}

export const root = (): string => css`
  label: leaflet-map-component;

  width: 100%;
  height: 100%;
  position: absolute;
  background-color: var(--vis-map-container-background-color);

  canvas {
    pointer-events: all;
  }
`

export const variables = getCssVarNames(cssVarDefaults)

addInitFunction((): void => {
  injectGlobal(leafletCSS)
  injectGlobalCssVariables(cssVarDefaults, root())
})

export const background = (): string => `${root()} canvas`

export const points = (): string => css`
  label: g-points;
`

export const point = (): string => css`
  label: g-point;
`

export const pointPath = (): string => css`
  label: point-path;

  stroke-opacity: 1;
  fill-opacity: 1.0;
  fill: var(${variables.mapPointDefaultFillColor});
  stroke: var(${variables.mapPointDefaultStrokeColor});
  stroke-width: var(${variables.mapPointDefaultStrokeWidth});
  pointer-events: fill !important;
  transition: .2s stroke-width, .3s transform;
  cursor: var(${variables.mapPointDefaultCursor});

  &:hover {
    stroke-width: 2;
    fill-opacity: 1;
    animation: none;
    transform: scale(1.1);
  }
`

export const pointPathRing = (): string => css`
  label: point-path-ring;
  fill: var(${variables.mapPointRingFillColor});
`

export const pointPathCluster = (): string => css`
  label: point-path-cluster;
  fill-opacity: 0.9;
  stroke: none;
  animation: none;
  fill: var(${variables.mapClusterDefaultFillColor});
  stroke: var(${variables.mapClusterDefaultStrokeColor});
  stroke-width: var(${variables.mapClusterDefaultStrokeWidth});
`

export const pointSelectionRing = (): string => css`
  label: point-selection-ring;
  stroke: var(${variables.mapPointDefaultFillColor});
`

export const pointSelection = (): string => css`
  label: point-selection;

  opacity: 0;
  transform: scale(1);

  &.active {
    transition: all 400ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    opacity: 1;
    transform: scale(1.25);
  }
`

export const innerLabel = (): string => css`
  label: inner-label;

  text-anchor: middle;
  fill: var(${variables.mapPointInnerLabelTextColorDark});
  font-family: var(${variables.mapLabelFontFamily}, var(--vis-font-family));
  pointer-events: none;
  font-weight: 600;
`

export const innerLabelCluster = (): string => css`
  label: inner-label-cluster;
  fill: var(${variables.mapPointInnerLabelTextColorDark});
`

export const bottomLabel = (): string => css`
  label: bottom-label;

  text-anchor: middle;
  fill: var(${variables.mapPointBottomLabelTextColor});
  font-family: var(${variables.mapLabelFontFamily}, var(--vis-font-family));
  pointer-events: none;
  font-weight: 600;
`

export const donutCluster = (): string => css`
  label: donut-cluster;

  transform: scale(1);
  transition: .3s transform;
  path {
    fill: var(${variables.mapClusterDonutFillColor});
    stroke-width: 0.5;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const svgOverlay = (): string => css`
  label: svg-overlay;
  position: absolute;
  pointer-events: none;
`

export const backgroundRect = (): string => css`
  label: background-rect;

  opacity: 0;
`

export const clusterBackground = (): string => css`
  label: cluster-background;

  fill: var(${variables.mapClusterExpandedBackgroundFillColor});
  opacity: 0.6;
  visibility: hidden;

  &.active {
    visibility: visible;
  }
`

export const onFeatureHover = (): string => css`
  label: feature-hovered;
`

export const mapboxglCanvas = (): string => css`
  pointer-events: all;
  cursor: grab;

  &${`.${onFeatureHover()}`} {
    cursor: default;
  }
`

export const map = (): string => css`
  label: map;
`
