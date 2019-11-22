const axios = require("axios");
const BUTTONDOWN_URL = "https://api.buttondown.email/v1";

class ButtondownSource {
  static defaultOptions() {
    return {
      apiKey: undefined,
      typeName: "Email"
    };
  }

  constructor(api, options) {
    this.api = api;
    this.options = options;

    if(typeof this.options.apiKey === "undefined") {
        return console.log("[Buttondown] No apiKey provided.");
    }

    api.loadSource(async ({ addCollection }) => {
      const { data } = await axios.get(
        `${BUTTONDOWN_URL}/emails`,
        { headers: { Authorization: `Token ${this.options.apiKey}` } }
      );

      const collection = addCollection(this.options.typeName);
      console.log(`[Buttondown] Added collection ${this.options.typeName}.`);

      data.results.forEach(item => {
        collection.addNode({
          ...item
        });
      });

      console.log(
        `[Buttondown] Added ${data.results.length} nodes to ${this.options.typeName}.`
      );
    });
  }
}

module.exports = ButtondownSource;
