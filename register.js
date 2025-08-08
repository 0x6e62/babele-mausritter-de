Hooks.once('babele.init', (babele) => {
    babele.register({
      module: 'babele-mausritter-de',
      lang: 'de',
      dir: 'translations'
    });
    console.log("babele-mausritter-de registered for translation.");
});
