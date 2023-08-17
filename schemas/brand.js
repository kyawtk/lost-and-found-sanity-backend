export default {
  type: 'document',
  name: 'brand',
  title: 'Brand',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Brand Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Barnd Image',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Brand URL',
    },
    {
      name: 'juices',
      type: 'array',
      title: 'Juices of Brand',
      of: [{type: 'reference', to: {type: 'vapeJuice'}}],
    },
  ],
}
