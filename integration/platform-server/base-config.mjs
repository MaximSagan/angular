import {dirname} from 'path';
import {fileURLToPath} from 'url';
import linkerPlugin from '@angular/compiler-cli/linker/babel';

export const baseDir = dirname(fileURLToPath(import.meta.url));
export const moduleRules = [
  {
    test: /\.txt$/i,
    use: 'raw-loader',
  },
  {
    test: /\.m?js$/,
    // Exclude Domino from being processed by Babel as Babel reports an error
    // for invalid use of `with` in strict mode.
    // https://github.com/fgnass/domino/issues/153.
    exclude: /domino/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [linkerPlugin],
      }
    }
  }
];
