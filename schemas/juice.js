import {unsplashAssetSource} from 'sanity-plugin-asset-source-unsplash'


export default {
  type: 'document',
  title: 'Vape Juice',
  name: 'vapeJuice',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Vape Juice Name',
    },
    {
        name:'details',
        type:'object',
        title:'Juice Details',
        fields:[
            {name:'price',type:'number',title:'Price'},
            {name:"nicContent",type:"number",title:"Nic Content"},
            {name:"ratio", type:'string',title:'Ratio'},

        ]
    },
    { 
        name:'description',
        type: 'array', 
        of: [{type: 'block'}],
        title:'Description',
        description:'Describe the juice'
    },
    {
        name:'image',
        type:'image',
        title:'Image',

        options: {
            sources: [unsplashAssetSource],
          },
    },
    {
      name: 'brand',
      title:"Brand",
      type: 'reference',
        to:[{type: 'brand'}]
    },
  ],
}
