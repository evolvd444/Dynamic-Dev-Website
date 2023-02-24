
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {media} from "sanity-plugin-media"

import { schemaTypes } from "./schemas";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,
  apiVersion,
  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  title: "DynamicDev Content Studio",
  name: "DynamicDev_Content_Studio",

  
});


import {muxInput} from 'sanity-plugin-mux-input'
muxInput({mp4_support: 'standard'}), media()