export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62445f771f796700bc0e2422',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rca84bjh',
                  apiId: '14e61e93-c7c6-4513-8018-871168b6d00b'
                },
                {
                  buildHookId: '62445f77e074050a71c6adbe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xifsc6h6',
                  apiId: '18f113d1-4f1a-43df-ab2b-1443a2bda084'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xuanhau1995/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xifsc6h6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
