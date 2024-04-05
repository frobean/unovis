import { UNOVIS_ICON_FONT_FAMILY_DEFAULT } from 'styles/index'
import { addInitFunction, css, injectGlobal } from '../../emotion/css'

export const root = (): string => css`
  label: vis-controls-component;
`

addInitFunction((): void => injectGlobal`
  :root,:host {
    --vis-controls-buttons-border-color: rgba(108, 119, 140, 0.15);
    --vis-controls-buttons-background-color: rgba(255, 255, 255, 1);
    --vis-controls-button-color: #6c778c;
    --vis-controls-button-icon-font: ${UNOVIS_ICON_FONT_FAMILY_DEFAULT};

    --vis-dark-controls-buttons-border-color:  #6c778c;
    --vis-dark-controls-buttons-background-color: var(--vis-color-grey);
    --vis-dark-controls-button-color: #fff;
  }

  body.theme-dark ${`.${root()}`} {
    --vis-controls-buttons-border-color: var(--vis-dark-controls.buttons-border-color);
    --vis-controls-buttons-background-color: var(--vis-dark-controls-buttons-background-color);
    --vis-controls-button-color: var(--vis-dark-controls-button-color);
  }
`)

export const items = (): string => css`
  label: items;
  background-color: var(--vis-controls-buttons-background-color);
  border: 1px solid var(--vis-controls-buttons-border-color);
  border-radius: 4px;
  opacity: 1;
  transition: all 300ms;
`

export const horizontalItems = (): string => css`
  label: horizontal;
  display: inline-flex;
`

export const item = (): string => css`
  label: item;
`

export const itemButton = (): string => css`
  label: item-button;
  font-family: var(--vis-controls-button-icon-font);
  display: block;
  cursor: pointer;
  user-select: none;
  outline: none;
  width: 30px;
  height: 30px;
  line-height: 28px;
  border: none;
  border-radius: inherit;
  box-sizing: border-box;
  color: var(--vis-controls-button-color);
  background-color: inherit;
`

export const borderLeft = (): string => css`
  border-left: 1px solid var(--vis-controls-buttons-border-color);
`

export const borderTop = (): string => css`
  border-top: 1px solid var(--vis-controls-buttons-border-color);
`

export const borderRight = (): string => css`
  border-right: 1px solid var(--vis-controls-buttons-border-color);
`

export const borderBottom = (): string => css`
  border-bottom: 1px solid var(--vis-controls-buttons-border-color);
`

export const disabled = (): string => css`
  label: disabled;
  opacity: 0.4;
  pointer-events: none;
`
