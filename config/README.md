# How to maintain this monorepo

## Adding a new package
Create a new folder with the packagename as the folder name under the 'packages' directory.
The newly created folder must have the following folder structure:
```

  dist
  src
  package.json
```

That's it.
Now you can require the package from any other package or in the playground!

## Publishing a package

First, build the package:

```
  npm run start:prod -- <package-name>
```

Now, in the dist folder of the package there are two files:

```

  <package-name>.js
  <package-name>.min.js
```

Before you publish it to npm, one important step must be fullfilled:
All local dependencies (so all packages in the monorepo on which the actual package depends) must be added to the package.json as a dependeny. This requires those packages, on which the actual one is dependent, to be already hosted on npm. This is required because if someone installs this package, the required dependencies must be installed.
