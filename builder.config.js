/**
 * Este archivo de script se ejecutará (o al menos debería) antes de que se ejecute el archivo de script principal.
 * Este archivo debe contener cosas como opciones, variables globales (etc.) para ser usadas por el script principal.
 */

// Opciones

// Las opciones de URL pueden anular las siguientes opciones.
// Las opciones establecidas a través del menú pueden anular tanto.
options = {
    username: 'TazzDev',
    avatar: 'https://media.discordapp.net/attachments/1112756242243399722/1154585015582203945/Tazz.png',
    verified: true,
    noUser: false,
    dataSpecified: false,
    guiTabs: ['author', 'description'],
    useJsonEditor: false,
    reverseColumns: false,
    allowPlaceholders: false,
    autoUpdateURL: false,
    autoParams: false,
    hideEditor: false,
    hidePreview: false,
    hideMenu: false,
    multiEmbeds: true,
    noMultiEmbedsOption: false,
    sourceOption: false, // Mostrar enlace al código fuente en el menú.
}

// Objeto JSON por defecto

// json = {
//     content: "Hello world",
//     embed: {
//         title: "A title",
//         description: "A description",
//     }
// }


// Escriba cualquier código bajo el 'DOMContentLoaded' para que se ejecute una vez cargada la página.
addEventListener('DOMContentLoaded', () => {
    // console.log('Hello 👋');

    // Eliminar el selector de color
    // document.querySelector('.colors').remove()
})