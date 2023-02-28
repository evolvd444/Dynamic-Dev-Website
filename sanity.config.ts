import { visionTool } from "@sanity/vision";
import { useCdn } from './lib/sanity.api';
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {media} from "sanity-plugin-media"

import { schemaTypes } from "./schemas";


const projectId = "iuagzy0t";
const dataset = "production";
const apiVersion = '2021-10-21'

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,
  apiVersion,
  useCdn,
  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  title: "dynamic-dev-website",
  name: "dynamic-dev-website",

  
});


import {muxInput} from 'sanity-plugin-mux-input'
muxInput({mp4_support: 'standard'}), media()