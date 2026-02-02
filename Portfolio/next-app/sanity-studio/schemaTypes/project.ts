import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    // TITLE
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // SLUG
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // COVER IMAGE
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // SHORT DESCRIPTION (for cards)
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),

    // DETAILED CONTENT
    defineField({
      name: "content",
      title: "Project Details",
      type: "array",
      of: [{ type: "block" }],
    }),

    // TECH STACK
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // LIVE URL
    defineField({
      name: "liveUrl",
      title: "Live Website URL",
      type: "url",
    }),

    // GITHUB URL
    defineField({
      name: "githubUrl",
      title: "GitHub Repository",
      type: "url",
    }),

    // STATUS
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
        ],
        layout: "radio",
      },
      initialValue: "completed",
    }),

    // FEATURED PROJECT
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),

    // CREATED DATE
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
