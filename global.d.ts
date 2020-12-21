declare module '*.svg' {
  import * as React from 'react'

  const content: React.FunctionComponent<React.SVGAttributes<React.SVGElement>>
  export default content
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.yml' {
  const value: any
  export default value
}

declare module '*.css' {
  const value: any
  export default value
}
