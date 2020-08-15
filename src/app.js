const Apple = Object.freeze({
  name: "SmartInvest",
  version: "0.0.1",
  helpers: {
    // Esto es una versión reverseText
    reverseText: function(text) {
      return text
        .split("")
        .reverse()
        .join("");
    }
  },
  //init: () => console.log(this.name + " : " + this.version)
  init: function() {
    console.log(this.name + " : " + this.version);
  }
});
Apple.init();
