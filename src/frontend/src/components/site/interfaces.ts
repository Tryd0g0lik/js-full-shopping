import { ChangeEventHandler } from 'react';
/**
 * file: `src\frontend\src\components\site\interfaces.ts`
 *
 * * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 */
interface Classes {
  classes?: string
}

/**
 * file: `src\frontend\src\components\site\interfaces.ts`
 *
 * `import { A } from './interfaces.ts';`
 *
 * This is an interface for headers html's tag.
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 * @prop `path`: `string` It's a path-name from URL.
 * @prop `context?`: string`  It sets the link title `<html><a>Your title</a></html>`. Also is possible without him
 * @returns exemple `<img src="./" className="img-fluid" alt="К весне готовы!" />`
 */
export interface A extends Classes {
  path: string
  context?: string
}

/**
 * file: `src\frontend\src\components\site\interfaces.ts`
 *
 * `import { Head } from './interfaces.ts';`
 *
 * This is an interface for headers html's tag.
 * @prop `number`:`number`. It sets the leve `<html><h< number >>....</h2></html>`
 * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 * @prop `title?` : `string`. It sets the titles `<html><h2>Your title</h2></html>`. Also is possible without him
 *
 */
export interface Head extends Classes {
  number: number
  title?: string
}

/**
 * file: `src\frontend\src\components\site\interfaces.ts`
 *
 * `import { Form } from './interfaces.ts';`
 *
 * @prop `classes?`: `string`. It inheritance from `interface Classes`.
 *  Is single a class name or multiple. Also is possible and without him.
 * @prop `placeholder?`: `string`. It is single a string value. Also is possible and without him. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
 * @prop `type?`: `string`
 * @prop `size?`: `number`
 * @prop `name?`: `string`
 * @prop `value?`: `string`
 * @prop `onChange?`: `ChangeEventHandler<HTMLInputElement>`
 */
export interface Forms extends Classes {
  placeholder?: string
  type?: string
  size?: number
  name?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
