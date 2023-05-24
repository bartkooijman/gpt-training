const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "",
});
const openai = new OpenAIApi(configuration);

async function run() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      'Once upon a time there was a young software engineer at a company called Capgemini that',
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  console.log(response.data);
}

run();
