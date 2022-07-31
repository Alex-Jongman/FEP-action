[![ESLINT](https://github.com/Alex-Jongman/FEP-action/actions/workflows/eslint.yml/badge.svg)](https://github.com/Alex-Jongman/FEP-action/actions/workflows/eslint.yml)
[![AXE](https://github.com/Alex-Jongman/FEP-action/actions/workflows/axe-test.yml/badge.svg)](https://github.com/Alex-Jongman/FEP-action/actions/workflows/axe-test.yml)
[![Unit-Test](https://github.com/Alex-Jongman/FEP-action/actions/workflows/unittest.yml/badge.svg)](https://github.com/Alex-Jongman/FEP-action/actions/workflows/unittest.yml)

# Git Action tryout
Playing around with GIT actions 

# Things I learned...

## LF / LFCR Linting error
To solve the LFCR linting errors add a `.gitattributes` file to the root with the content:
```
*.js    eol=lf
*.json  eol=lf
```
See [eslint linebreak-style rule](https://eslint.org/docs/latest/rules/linebreak-style) and https://git-scm.com/docs/gitattributes for more info.

## require imports instead of imports
By adding
```
"type": "module",
```
to the `package.json` we indicate that this project uses modules and therefore the IDE will use the import statement instead of the require statement.

## prevent npm publishing 
small fix... by adding `"private": "true",` to the `package.json` we prevent accidental publishing of the project on npm


