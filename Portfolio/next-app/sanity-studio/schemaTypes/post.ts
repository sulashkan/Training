import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',

  fields: [
    // TITLE
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // SLUG
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // FEATURED IMAGE
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // EXCERPT (short summary)
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    // CONTENT (Rich text)
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),

    // AUTHOR
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Jayraj Rathod',
    }),

    // TAGS
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    // PUBLISHED DATE
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // FEATURED POST
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),

    // DRAFT / PUBLISHED STATUS
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      status: 'status',
      publishedAt: 'publishedAt',
    },
    prepare({title, media, status, publishedAt}) {
      return {
        title,
        subtitle:
          status === 'published' ? `Published • ${new Date(publishedAt).toDateString()}` : 'Draft',
        media,
      }
    },
  },
})
