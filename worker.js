// Progressive Web App Feature Detection
if (navigator.serviceWorker) {

  // Register Service Wroker
  navigator.serviceWorker.register("sw.js")
    .then((registeration) => {
      console.log("Service worker activated")
    })

}