/**
 * * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 */
interface Class {
  classes?: string
}

/**
 * This is an interface for headers html's tag.
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 * @prop `path`: `string` It's a path-name from URL.
 * @prop `context?`: string`  It sets the link title `<html><a>Your title</a></html>`. Also is possible without him
 * @returns exemple `<img src="./" className="img-fluid" alt="К весне готовы!" />`
 */
export interface A extends Class {
  path: string
  context?: string
}

/**
 * This is an interface for headers html's tag.
 * @prop `number`:`string`. It sets the leve `<html><h< number >>....</h2></html>`
 * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 * @prop `title?` : `string`. It sets the titles `<html><h2>Your title</h2></html>`. Also is possible without him
 *
 */
export interface Head extends Class {
  number: number
  title?: string
}
