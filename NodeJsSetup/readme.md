npm list
# NodeJS

* Official & Download: https://nodejs.org
* Documents: https://nodejs.org/api

### Check versions:
```sh
    $ node -v
    $ npm -v
```

### NPM
```sh

    $ npm -h # $ npm help # $ npm yardım
    $ npm list -h # $ npm help list # $ npm yardım listesi

    $ npm init -y # create package.json
    $ npm list
    
    $ npm install express # dependencies # package.json/scripts -> "start": "node index.js"
    $ npm i express --save
    npm listesi
# NodeJS

* Resmi ve İndirme: https://nodejs.org
* Belgeler: https://nodejs.org/api

### Sürümleri kontrol edin:
''şşş''
    $ düğüm -v
    $ npm -v
''''

### NPM
''şşş''



    $ npm init -y # package.json oluştur
    $ npm listesi
    
    $ npm install express # bağımlılıklar # package.json/scripts -> "start": "node index.js"
    $ npm i express --save
    
    $ npm i nodemon --save-dev # devDependeency # package.json/scripts -> "devStart": "nodemon index.js"
    # $ npm run devStart # iplik devStart
    # $ npm i nodemon --save-isteğe bağlı # isteğe bağlıBağımlılıklar # package.json/scripts -> "isteğe bağlıBaşlat": "nodemon index.js"
    
    $ npm install # tüm paketleri kur (package.json'dan)
    $ npm i --omit=dev # $ npm i --omit dev # devDependencing listesi olmadan paketleri kurun.

    # KÜRESEL
    $ npm --genel liste
    $ npm -g listesi
    $ npm i -g düğümü
    $ düğüm -v

    #NPX
    $ npx create-react-app yeni klasörü # Ctrl+C
''''

### NodeShell
''şşş''
    $ düğüm
    > console.log('Merhaba Dünya')
    > let moduleName = require("module")
    > moduleName.builtinModules // Dahil edilen modülleri göster.
    > .çıkış

''''

## yeni dosya: index.js
''''
let düğüm = 'NodeJS'

console.log('----------*------
    ${düğüm}
-----------------');
''''

''şşş''
    $ düğüm indeksi.js
    $ düğüm dizini
    $ düğümü. # varsayılan: index.js
''''
''şşş''
    $ nodemon index.js
    $ Ctrl + C
    $ düğüm # varsayılan: index.js veya package.json.default
    $ Ctrl + C
''''
    $ npm i nodemon --save-dev # devDependencies # package.json/scripts -> "devStart": "nodemon index.js"
    # $ npm run devStart # yarn devStart
    # $ npm i nodemon --save-optional # optionalDependencies # package.json/scripts -> "optionalStart": "nodemon index.js"
    
    $ npm install # install all packages (from package.json)
    $ npm i --omit=dev # $ npm i --omit dev # install packages without devDependencies list.

    # GLOBAL
    $ npm --global list 
    $ npm -g list
    $ npm i -g nodemon
    $ nodemon -v

    # NPX
    $ npx create-react-app newfolder # Ctrl+C
```

### NodeShell
```sh
    $ node
    > console.log('Hello World')
    > let moduleName = require("module")
    > moduleName.builtinModules // Show included modules.
    > .exit

```

## new file: index.js
```
let node = 'NodeJS'

console.log(`------*------
    ${node}
------*------`);
```

```sh
    $ node index.js
    $ node index
    $ node . # default: index.js
```
```sh
    $ nodemon index.js
    $ Ctrl + C 
    $ nodemon # default: index.js or package.json.default
    $ Ctrl + C 
```