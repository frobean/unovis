import createEmotion, { Emotion, Options } from '@emotion/css/create-instance'
import * as defaultInstance from '@emotion/css'

let initFunctions: (() => void)[] = []
let isInitialized = false

const init = (): void => {
  isInitialized = true
  initFunctions.forEach(fn => fn())
  initFunctions = []
}

let customInstance: Emotion | undefined

type ProxiedMethods = 'flush' | 'hydrate' | 'cx' | 'merge' | 'getRegisteredStyles' | 'injectGlobal' | 'keyframes' | 'css'

// create a proxy that will call the custom emotion instance if it's been created
// otherwise call the default.  This allows the library to use a custom configured
// emotion with a minimum of modifications to how css() invoked
const makeProxy = <I>(property: ProxiedMethods): I => {
  return ((...args: any[]) => {
    if (!isInitialized) {
      init()
    }
    return (customInstance ?? defaultInstance as any)[property](...args)
  }) as unknown as I
}

// Create and export proxy functions for all of the Emotion methods
export const flush = makeProxy<Emotion['flush']>('flush')
export const hydrate = makeProxy<Emotion['flush']>('flush')
export const cx = makeProxy<Emotion['cx']>('cx')
export const merge = makeProxy<Emotion['merge']>('merge')
export const getRegisteredStyles = makeProxy<Emotion['getRegisteredStyles']>('getRegisteredStyles')
export const injectGlobal = makeProxy<Emotion['injectGlobal']>('injectGlobal')
export const keyframes = makeProxy<Emotion['keyframes']>('keyframes')
export const css = makeProxy<Emotion['css']>('css')
export const createCustomEmotion = (props: Options): Emotion => {
  customInstance = createEmotion(props)
  init()
  return customInstance
}

// injectGlobal is used all over the place in the style definition files.  It gets called as a side effect
// when importing the modules.  We need to defer these load-time invocations of the Emotion API until after
// any custom emotion instance is created or the bits that were registered to the default instance will
// not apply to any components created after the custom Emotion instance.
// This allows us to replace all of the injectGlobal calls in the style.ts files with a function that does
// that invocation.  We collect those and execute them after the custom instance is created, or whenever
// one of the proxy wrappers makes the first call to the default Emotion API
// If an init function is added after init is called, just directly invoke it
export const addInitFunction = (fn: () => void): void => {
  if (isInitialized) {
    fn()
  } else {
    initFunctions.push(fn)
  }
}
