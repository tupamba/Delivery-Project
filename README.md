# DeliveryPro root
Aplicacion cliente.
Pasos para ejecutar:
    npm install
    ng serve
Config (.\app\global\global-config.ts)
    urlDelivery - url del server;
    httpServiceMoq - habilitar mock de datos.
Mocks (.\app\service\http\httpmoq.service.ts)
    Se implementa HttpInterceptor para agregar mock al aplicativo cliente, de esta forma se puede probar sin server.

# angular-node-express-api
Aplicacoin servidor.
Pasos para ejecutar:
    cd  .\angular-node-express-api\
    npm install
    node .\app.js


# Notas
El aplicativo servidor (angular-node-express-api) se implemento a modo rebotero nada mas.

# Autor
Pablo Silva


