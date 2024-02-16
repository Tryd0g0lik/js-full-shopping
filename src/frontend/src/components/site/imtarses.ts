export interface Str {
  name: string
}

export interface A extends Str {
  path: string
  context: string
}
/**
 * @type `Dash`
 * dashbord: {
    path: string,
    context: string
  }
 */
interface Dash {
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
export interface DArr extends Str {
  dashbordArr: Dash[]
}
