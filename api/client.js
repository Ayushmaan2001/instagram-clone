import sanityClient from '@sanity/client'
import dotenv from "dotenv";
dotenv.config();

export default sanityClient({
  projectId: "i8p6yqux",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-02-22",
  token:process.env.SANITY_API_TOKEN,
});