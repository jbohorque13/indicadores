# Prueba técnica

Es una prueba Frontend React Native. Usar el gestor de paquete npm, es necesario tener node instalado en local version v14.18.0 y version de npm 9.6.3 use yo.

## Instalación
Instalar las dependencias desde la raiz del proyecto

```bash
  npm i
```

## Instalar las dependencias nativas IOS:

```
  cd ios/ && pod install
```
## Configuración Enviroment
Crear un .env en la raiz del proyecto

```
  touch .env && nano .env
```

Copiar y pegar en .env y usar su API_TOKEN=

```
  API_URL='https://api.cmfchile.cl/api-sbifv3/recursos_api'
  API_TOKEN=''
```

## Ejecución de la aplicación:

Android:

```
  npm run android-env
```

IOS:

```
  npm run ios-env
```
