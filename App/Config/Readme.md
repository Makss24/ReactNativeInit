### Config Folder
All application specific configuration falls in this folder.

`AppConfig.js` - production values.
`DebugConfig.js` - development-wide globals.
`ReactotronConfig.js` - Reactotron client settings.
`ReduxPersist.js` - rehydrate Redux state.

TODO : veille ReduxPersist

N.B.: ReduxPersist semble être indispensable pour éviter l'arrivée d'erreur lors de la mise à jour de l'app sur le store.
      Plus d'infos : https://shift.infinite.red/shipping-persistant-reducers-7341691232b1

N.B.2 : Reactotron pourra aussi apporter un gain de productivité quant au débug de l'app.