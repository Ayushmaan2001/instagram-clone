const sanityClient = require("@sanity/cli");
const dotenv = require("dotenv");
dotenv.config();

function sanityClient() {
  projectId: "i8p6yqux";
  dataset: "production";
  useCdn: false;
  apiVersion: "03-03-2022";
  token: process.env.SANITY_API_TOKEN;
}

export default sanityClient;
