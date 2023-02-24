import {DocumentIcon, ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Title of the project",
      type: 'string',
    }),
    defineField({
      name: 'promoVideo',
      title: 'PromoVideo',
      type: 'url',
     
    }),

    defineField({
      name: 'image',
      icon: ImageIcon,
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