import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
import {media} from 'sanity-plugin-media'
  
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!

const apiVersion =  process.env.NEXT_PUBLIC_SANITY_API_VERSION


export default defineConfig({
  name: 'DYNAMIC_Dev_Website',
  title: 'Dynamic-Dev_Website',
  basePath:'/studio',
  apiVersion,
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), muxInput({mp4_support: 'standard'}), media()],

  schema: {
    types: schemaTypes,
  },
})
