export default {
    type: 'document',
    name: 'foundItem',
    title: 'Found Item',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
      {
        name: 'location',
        type: 'object',
        title: 'Location',
        fields: [
          {
            title: 'Region',
            name: 'region',
            type: 'string',
          },
        ],
      },
      {
        name: 'contact',
        title: 'Contact Information',
        type: 'object',
        fields: [
          {name: 'tel', type: 'string', title: 'Telephone Number'},
          {name: 'email', type: 'string', title: 'Email Address'},
        ],
      },
    ],
  }
  