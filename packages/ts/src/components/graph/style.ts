import { UNOVIS_ICON_FONT_FAMILY_DEFAULT } from 'styles/index'
import { addInitFunction, css, injectGlobal } from '../../emotion/css'

// Nodes
import * as nodeSelectors from './modules/node/style'

// Links
import * as linkSelectors from './modules/link/style'

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-graph-icon-font-family: ${UNOVIS_ICON_FONT_FAMILY_DEFAULT};
  }
`)

// General
export const root = (): string => css`
  label: graph-component;
`

export const background = (): string => css`
  label: background;
`

export const graphGroup = (): string => css`
  label: graph-group;
`

export const zoomOutLevel1 = (): string => css`
  label: zoom-out-level-1;

  ${`.${nodeSelectors.label()}`} {
    rect {
      stroke: none;
    }
  }
`

export const zoomOutLevel2 = (): string => css`
  label: zoom-out-level-2;

  ${`.${nodeSelectors.label()}`} {
    visibility: visible;
  }

  ${`.${nodeSelectors.nodeGauge()}`} {
    visibility: visible;
  }

  ${`.${nodeSelectors.node()}`} {
    stroke-width: 4px;
  }

  rect${`.${nodeSelectors.node()}`} {
    stroke-width: 2px;
  }

  ${`.${linkSelectors.gLink()}`} {
    animation: none;
    stroke-dasharray: none;
  }

  ${`.${linkSelectors.flowCircle()}`} {
    display: none;
  }

  ${`.${nodeSelectors.nodeSelection()}`} {
    &${`.${nodeSelectors.nodeSelectionActive()}`} {
      transform: scale(1.15);
    }
  }
`
