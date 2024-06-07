# LimitronicImpresoras

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.3. standalone = true.

La interfaz está mayormente hecha con Bootstrap v5.3.x.

## Development server

Ejecuta `ng serve --open` para que la web se abra en la siguiente dirección `http://localhost:4200/`. La aplicación se actualiza automáticamente por cada cambio que se realice y se guarde.

El código está dividido en "Components", "Intefaces" , "Interceptos" y "Services".

### Components:

 **botones:** componente que contiene los botones para ir al modo general, fifo, list, fifo/list.

 **header:** lo encontramos en toda la web, es el banner donde pone 'Limitronic', si lo pinchamos nos dirige al inicio automáticamente. Tenemos también dentro otro componente llamado "settings".

 **settings:** este compoente se representa con un engranaje, el cual nos lleva a /settings, donde podremos cambiar la ip predefinida (localhost) y así poder conectarse a diferentes impresoras.

 **inicio:** Página de inicio que contiene el componente 'botones'.

 **app.component:** está fuera de la carpeta 'Components', contiene el 'header', por ello, nunca dejaremos de ver el header, aunque naveguemos en diferentes páginas.

 **spinner:** Simplemente es para la animación de cargar, sólo se usa en la llamada a la API que te dice si el sistema está activo o no.

**general-mode, fifo-mode, list-fifo-mode, list-mode:** Son los componentes que contienen las órdenes de qué hacer con cada llamada a la API. En general solo tenemos llamadas que se hacen en modo general (tener en cuenta que varias cosas de este modo también pueden ejecutarse en cualquier otro, por ej: conocer el estado de la impresora, entre otros.). Destacar que lo que hay en fifo, list y fifo-list, probablemente no pueda ejecutarse en otro modo que no sea ESE específico.

**page-not-found:** solo tiene un h2 que pone 'Page Not Found', y solo se ve cuando se escribe una ruta, aunque la web debería redirigirte a 'inicio'.

### Interfaces: 

Todos los archivos .ts de interfaces son JSON que representa lo que devuelve o lo que pide cada llamada de API. Se usan en los componentes.

### Interceptos:

Solo hay 1, es del spinner, sirve para esconderlo cuando ya se haya cargado lo que se esté ejecutando.

### Services: 

**ConfigService:** Contiene una url private predefinida con localhost, y los metodos set y get para poder modificar este por diferentes Ips de las impresoras.

**TODOS LOS SERVICE REQUEST SE COMPLEMENTAN CON CONFIGSERVICE.**

**FifoRequest:** Contiene las llamadas específicas para el modo fifo (API).

**ListFifoRequest:** Contiene las llamadas espcíficas para el modo list-fifo (API).

**ListRequest:** Contiene las llamadas específicas para el modo list (API).

**Request:** Contiene las llamadas para el modo general, de las cuales algunas pueden usarse en los diferentes modos (API).

**Spinner:** Sirve para mostrar o esconder el spinner.