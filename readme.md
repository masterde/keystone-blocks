# Keystone Blocks
Modulo de configuração de sites para Keystone

In models/Config.js
```javascript
  require('keystone-blocks').model();
```

In routes/index.js
```javascript
  app.use(require('keystone-blocks').middleware)
```
