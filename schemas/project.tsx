
import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Title of the project",
      type: 'string',
    }),
    defineField({
      title: 'Video Title',
      name: 'videoTitle', 
      description: 'Title of MuxVideo',
      type: 'string'
    }),

      defineField({
      title: 'Video',
      name: 'video',
      type: 'mux.video',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
     of: [{type: "reference", to: {type: "skill"}}]
    }),

    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
     
    }),
   
  ],

 
})