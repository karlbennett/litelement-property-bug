LitElement @property bug
========================

### Run
```
npm start
```

This application will simply display a page with some text on it. When the property is working the page should display:
```
This text should be displayed.
```

The logs should also contain an entry produced by the `LitElement.updated` method.
```
Updated: This text should be displayed.
```

Unfortunately the `@property` decoration doesn't seem to be working correctly so the page will display:
```
This text should not be displayed.
```

To get the property working uncomment line 9 in [index.ts](src/index.tsx).