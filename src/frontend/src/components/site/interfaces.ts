export interface Str {
  name: string
}

export interface A extends Str {
  path: string
  context: string
}
/**
 * @type `Dash` it's
  `{ name: string,
    dashbord: {
      path: string,
      context: string
    }
  }`
 */
export interface Dash extends Str {
  dashbord: {
    path: string
    context: string
  }
}

/**
 * @type `dashbordArr: Dash[]`
 *
 * `Dash[]` it's `[
    {
      dashbord: {
      path: string,
      context: string
      }
    }
   ]`
 */
export interface DArr extends Dash {
  dashbordArr: Dash[]
}
