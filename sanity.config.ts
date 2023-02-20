import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import schemaTypes from './schemas/schema'
import {muxInput} from 'sanity-plugin-mux-input'
import {media} from 'sanity-plugin-media'



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!


export default defineConfig({
  name: 'DYNAMIC_Dev_Website',
  title: 'Dynamic-Dev_Website',
  basePath:'/studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), muxInput({mp4_support: 'standard'}), media() ],
//   tools: (prev) => {
//     // 👇 Uses environment variables set by Vite in development mode
//     if (import.meta.env.DEV) {
//       return prev
//     }
//     return prev.filter((tool) => tool.name !== 'vision')
//   },
  
  schema: {
    types: schemaTypes,
  },
})
