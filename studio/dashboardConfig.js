export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617fe2eed8361f441f4fce5f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9eczfbkg',
                  apiId: 'f4ddb98f-587e-49e5-a1fe-a53f4b9b2d21'
                },
                {
                  buildHookId: '617fe2ee6c02f56f1ebc1c81',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yopv982j',
                  apiId: 'c8cf0dcb-399f-4d3e-aa45-a9b2738da061'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mejustdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yopv982j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
