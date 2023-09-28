# OptimalSignin Project

## Estructura
- modules -> Módulos del aplicativo.
    - interfaces -> Interfaces usadas en el módulo.
    - pages -> Componentes
    - services -> Servicios utilizados en el módulo. Inyectados en la raíz.
    - *-routing.module -> Enrutamiento del módulo.
- layout -> Layout del panel de administración.
- shared -> Utilidades compartidas entre los diferentes módulos
    - classes -> Funcionalidades extra. *(ValidateInput)*
    - constants -> Constantes generales. *(ErrorInputMessages, RegexValidator y ToastMessages)*
    - enums -> Enums generales. *(SeverityMessage y TypeMessage)*
    - interfaces -> Interfaces utilizadas en clases, servicios, constantes o enums de los archivos compartidos. *(MessageInterface)*
    - services -> Servicios compartidos *(ToastService)*

## Construcción del módulo auth
Desde la página SigninPageComponent en la ruta */auth/signin* se accede al login. El guardado del token se hace en el localstorage con el nombre **userLogged**.
### Servicios (métodos)
- login -> Solicitud al servicio otorgado. 
- setUserLogged -> Guardado del usuario logeado en el localStorage.
- logout -> Borrado del usuario del localStorage
- verifyTokenExpiration -> Verifica si aun no ha pasado la fecha de expiración del token.

### Guards
Se tienen dos guards. Uno que protege las rutas del panel y otro que protege la ruta del login:
- isLogged -> Protege las rutas del panel. Extrae el usuario del localStorage y, si este no existe entonces retorna a la ruta del login */auth/signin*. Si el usuario existe entonces verifica que el token no haya expirado. Si el token expiró entonces muestra un mensaje a través del toast y retorna al login */auth.signin*. Si el token aun está vigente entonces permite el acceso al panel.
- isNotLogged -> Protege la ruta del signin. Si el usuario se encuentra logeado muestra un mensaje a través del toast y retorna al panel de clientes por defecto. Sino entonces permite el acceso al login.

## Otros
- En el approuting se está validando una página de error para rutas no mapeadas. Además de la redirección automática al signin en caso intente acceder a la ruta vacía *''*.

## Conclusiones
- He optado por esta forma de desarrollo puesto que considero que una forma bastante segura de resolver el inicio de sesión en un aplicativo.
- Por si solo el utilizar el guardado de los token en el localStorage puede parecer poco seguro pero esto lo resuelvo a través de la verificación de la validez de estos y los guards. 
- Espero haber cumplido con el objetivo propuesto en la presente prueba técnica aplicando los conceptos solicitados y manteniendo un código organizado, limpio y reutilizable.