## @ripio/abi-wrappers

Low-level RCN diaspore smart contract wrappers generated using @ripio/marmojs-sdk with custom diaspore template. 

## Installation

```bash
yarn add @ripio/abi-wrappers
```

**Import**

```typescript
import * as wrappers from '@ripio/marmo-abi-wrappers';
```

or

```javascript
var wrappers = require('@ripio/marmo-abi-wrappers');
```

## Contributing

We welcome improvements and fixes from the wider community! To report bugs within this package, please create an issue in this repository.

### Install dependencies

If you don't have yarn workspaces enabled (Yarn < v1.0) - enable them:

```bash
yarn config set workspaces-experimental true
```

Then install dependencies

```bash
yarn install
```

### Build

To build this package run the following from root directory:

```bash
yarn pre_build && yarn build 
```