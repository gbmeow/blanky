# Webpack Duplicates Action

Github Action - for commenting/posting Webpack Duplicates on your Pull Requests

## Roadmap
- [] Add Angular CLI capability

## Example usage


### Required
### Your package.json should have the following: 
```
  "dependencies": {
    ...
    "webpack-stats-duplicates": "https://github.com/georgebatalinski/webpack-stats-duplicates"
  },
  "scripts": {
    ...
    "build": "npx webpack --profile --json > stats.json & npx webpack-stats-duplicates stats.json --json"
  },
```

### Add the following YML file to your local {YOUR_REPO}.github/workflows/blanky.yml

```
name: blanky 

on:
  pull_request:
    branches: [ main ] #your branch goes here

jobs:
  duplicates:
    runs-on: ubuntu-latest
    name: Webpack duplicates
    steps:
      - uses: actions/checkout@v2 #we need to checkout the repo - sice we need ./blanky.json available 
      - name: check webpack bundle for duplicates
        uses: georgebatalinski/blanky@v1.1
        with:
          myToken: ${{ secrets.PRIVATE_REPO_GITHUB_TOKEN }} #you will need a token - if its a private repo 
```
