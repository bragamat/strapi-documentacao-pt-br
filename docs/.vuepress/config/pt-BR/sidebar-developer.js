const developerPtBR = [
  {
    title: '🚀 Iniciando',
    collapsable: false,
    children: [
      ['/pt-BR/developer-docs/latest/getting-started/introduction.html', 'Introduction'],
      ['/pt-BR/developer-docs/latest/getting-started/quick-start.html', 'Quick Start Guide'],
      ['/pt-BR/developer-docs/latest/getting-started/troubleshooting.html', 'Frequently Asked Questions'],
      ['/pt-BR/developer-docs/latest/getting-started/usage-information.html', 'Usage Information'],
    ],
  },
  {
    title: '⚙️  Configuracoes & Deployment',
    collapsable: false,
    sidebarDepth: 0,
    initialOpenGroupIndex: -1, // make sure that no subgroup is expanded by default
    children: [
      {
        title: 'Instalacao',
        path: '/pt-BR/developer-docs/latest/setup-deployment-guides/installation.html',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/pt-BR/developer-docs/latest/setup-deployment-guides/installation/cli.html', 'CLI'],
          ['/pt-BR/developer-docs/latest/setup-deployment-guides/installation/docker.html', 'Docker'],
        ],
      },
      ['/pt-BR/developer-docs/latest/setup-deployment-guides/file-structure.html', 'Project structure'],
      {
        title: 'Configuracoes',
        path: '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations.html',
        collapsable: true,
        children: [
          {
            title: 'Configuracoes obrigatorias',
            collapsable: true,
            children: [
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html',
                'Database',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/required/server.html',
                'Server',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/required/admin-panel.html',
                'Admin panel',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/required/middlewares.html',
                'Middlewares',
              ],
            ],
          },
          {
            title: 'Optional configurations',
            collapsable: true,
            children: [
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html',
                'API tokens',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/functions.html',
                'Functions',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/cronjobs.html',
                'Cron jobs',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/api.html',
                'API',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/plugins.html',
                'Plugins',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/environment.html',
                'Environment',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/public-assets.html',
                'Public Assets',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/sso.html',
                'Single Sign On (SSO)',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/rbac.html',
                'Role-Based Access Control (RBAC)',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/configurations/optional/typescript.html',
                'TypeScript',
            ],
          ],
          },
        ],
      },
      {
        title: 'Deployment',
        path: '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment.html',
        collapsable: true,
        initialOpenGroupIndex: -1, // make sure that no subgroup is open by default — if set to 0, 'Hosting Provider Guides' is expanded
        children: [
          {
            title: "Strapi Cloud",
            path: '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/strapi-cloud.html',
            collapsable: true,
          },
          {
            title: 'Hosting Provider Guides',
            path:
              '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides',
            collapsable: true,
            children: [
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/amazon-aws.html',
                'Amazon AWS',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/azure.html',
                'Azure',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/digitalocean-app-platform.html',
                'DigitalOcean App Platform',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/digitalocean.html',
                'DigitalOcean Droplets',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/google-app-engine.html',
                'Google App Engine',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html',
                'Heroku',
              ],
            ],
            sidebarDepth: 2,
          },
          {
            title: 'Optional Software Guides',
            path:
              '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment.html#optional-software-guides',
            collapsable: true,
            children: [
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/optional-software/caddy-proxy.html',
                'Caddy',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/optional-software/haproxy-proxy.html',
                'HAProxy',
              ],
              [
                '/pt-BR/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html',
                'Nginx',
              ],
            ],
            sidebarDepth: 2,
          },
        ],
        sidebarDepth: 0,
      },
    ],
  },
  {
    title: '🔧 Development',
    collapsable: false,
    initialOpenGroupIndex: -1, // make sure that no subgroup is expanded by default
    children: [
      {
        title: 'Back-end customization',
        collapsable: true,
        path: '/pt-BR/developer-docs/latest/development/backend-customization.html',
        children: [
          ['/pt-BR/developer-docs/latest/development/backend-customization/routes.html', 'Routes'],
          ['/pt-BR/developer-docs/latest/development/backend-customization/policies.html', 'Policies'],
          [
            '/pt-BR/developer-docs/latest/development/backend-customization/middlewares.html',
            'Middlewares',
          ],
          [
            '/pt-BR/developer-docs/latest/development/backend-customization/controllers.html',
            'Controllers',
          ],
          [
            '/pt-BR/developer-docs/latest/development/backend-customization/requests-responses.html',
            'Requests & Responses',
          ],
          ['/pt-BR/developer-docs/latest/development/backend-customization/services.html', 'Services'],
          ['/pt-BR/developer-docs/latest/development/backend-customization/models.html', 'Models'],
          ['/pt-BR/developer-docs/latest/development/backend-customization/webhooks.html', 'Webhooks'],
        ],
      },
      ['/pt-BR/developer-docs/latest/development/admin-customization', 'Admin panel customization'],
      ['/pt-BR/developer-docs/latest/development/plugins-extension.html', 'Plugins extension'],
      ['/pt-BR/developer-docs/latest/development/plugins-development.html', 'Plugins development'],
      ['/pt-BR/developer-docs/latest/development/custom-fields.html', 'Custom fields'],
      ['/pt-BR/developer-docs/latest/development/typescript.html', 'TypeScript'],
      ['/pt-BR/developer-docs/latest/development/providers.html', 'Providers'],
    ],
  },
  {
    title: '💻 Developer Resources',
    collapsable: false,
    initialOpenGroupIndex: -1, // make sure that no subgroup is expanded by default
    sidebarDepth: 2,
    children: [
      {
        title: 'REST API',
        path: '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html',
        collapsable: true,
        initialOpenGroupIndex: -1,
        sidebarDepth: 3,
        children: [
          ['/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html', 'API endpoints'],
          {
            title: 'API parameters',
            path: '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest/api-parameters.html',
            collapsable: true,
            initialOpenGroupIndex: -1,
            children: [
              [
                '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html',
                'Filtering, Locale, and Publication State'
              ],
              [
                '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html',
                'Population & Field Selection'
              ],
              [
                '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest/sort-pagination.html',
                'Sort & Pagination'
              ],
            ]
          },
          ['/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/rest/relations.html', 'Relations']
        ],
      },
      [
        '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html',
        'GraphQL API',
      ],
      {
        title: 'Entity Service API',
        path:
          '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html',
        collapsable: true,
        children: [
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html',
            'CRUD operations',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service/filter.html',
            'Filters',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html',
            'Populate',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service/order-pagination.html',
            'Ordering & pagination',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/entity-service/components-dynamic-zones.html',
            'Components and dynamic zones',
          ],
        ],
      },
      {
        title: 'Query Engine API',
        path:
          '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine-api.html',
        collapsable: true,
        // sidebarDepth: 3,
        children: [
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine/single-operations.html',
            'Single Operations',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine/bulk-operations.html',
            'Bulk Operations',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine/filtering.html',
            'Filtering',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine/populating.html',
            'Populating',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/database-apis-reference/query-engine/order-pagination.html',
            'Ordering & pagination',
          ],
        ],
      },
      {
        title: 'Plugin APIs',
        collapsable: true,
        children: [
          [
            '/pt-BR/developer-docs/latest/developer-resources/plugin-api-reference/server.html',
            'Server API for plugins',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/plugin-api-reference/admin-panel.html',
            'Admin Panel API for plugins',
          ],
        ],
      },
      ['/pt-BR/developer-docs/latest/developer-resources/cli/CLI', 'Command Line Interface'],
      ['/pt-BR/developer-docs/latest/developer-resources/error-handling.html', 'Error handling'],
      ['/pt-BR/developer-docs/latest/developer-resources/unit-testing', 'Unit testing'],
      ['/pt-BR/developer-docs/latest/developer-resources/database-migrations.html', 'Database migrations'],
      ['/pt-BR/developer-docs/latest/developer-resources/data-management.html', 'Data Management System'],
      {
        title: 'Integrations',
        path: '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations.html',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/react', 'React'],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/vue-js',
            'Vue.js',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/angular',
            'Angular',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/next-js',
            'Next.js',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/nuxt-js',
            'Nuxt.js',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/graphql',
            'GraphQL',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/gatsby',
            'Gatsby',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/gridsome',
            'Gridsome',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/jekyll',
            'Jekyll',
          ],
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/11ty', '11ty'],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/svelte',
            'Svelte',
          ],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/sapper',
            'Sapper',
          ],
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/ruby', 'Ruby'],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/python',
            'Python',
          ],
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/dart', 'Dart'],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/flutter',
            'Flutter',
          ],
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/go', 'Go'],
          ['/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/php', 'PHP'],
          [
            '/pt-BR/developer-docs/latest/developer-resources/content-api/integrations/laravel',
            'Laravel',
          ],
        ],
      },
    ],
  },
  {
    title: '🧩 Strapi plugins',
    path: '/pt-BR/developer-docs/latest/plugins/plugins-intro.html',
    collapsable: false,
    children: [
      ['/pt-BR/developer-docs/latest/plugins/graphql', 'GraphQL'],
      ['/pt-BR/developer-docs/latest/plugins/i18n', 'Internationalization (i18n)'],
      ['/pt-BR/developer-docs/latest/plugins/users-permissions', 'Users & Permissions'],
      ['/pt-BR/developer-docs/latest/plugins/email', 'Email'],
      ['/pt-BR/developer-docs/latest/plugins/upload', 'Upload'],
      ['/pt-BR/developer-docs/latest/plugins/sentry', 'Sentry'],
      ['/pt-BR/developer-docs/latest/plugins/documentation', 'API Documentation'],
    ],
    sidebarDepth: 1,
  },
  {
    title: '♻️ Update & Migration',
    collapsable: false,
    children: [
      ['/pt-BR/developer-docs/latest/update-migration-guides/update-version.html', 'Update'],
      {
        title: 'Migration',
        path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides.html',
        collapsable: true,
        children: [
          ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides.html#v4-guides', 'v4 migration guides'],
          {
            title: 'v3 to v4 migration guides',
            path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides.html#v3-to-v4-migration-guides',
            collapsable: true,
            children: [
              {
                title: 'Code migration guide',
                initialOpenGroupIndex: -1, // make sure that no subgroup is expanded by default
                path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code-migration.html',
                collapsable: true,
                children: [
                  {
                    title: 'Updating the back end',
                    path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend.html',
                    collapsable: true,
                    children: [
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/configuration.html', 'Configurations'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/dependencies.html', 'Dependencies'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/routes.html', 'Routes'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/controllers.html', 'Controllers'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/services.html', 'Services'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/content-type-schema.html', 'Content-type schema'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/policies.html', 'Policies'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/route-middlewares.html', 'Route middlewares'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/global-middlewares.html', 'Global middlewares'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/graphql.html', 'GraphQL'],
                    ]
                  },
                  {
                    title: 'Updating the front end',
                    path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend.html',
                    collapsable: true,
                    children: [
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend/wysiwyg.html', 'WYSIWYG customization'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend/translations.html', 'Translations'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend/webpack.html', 'Webpack configuration'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend/theming.html', 'Theme customizations'],
                      ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/code/frontend/strapi-global.html', 'Strapi global variable calls'],
                    ]
                  }
                ]
              },
              {
                title: 'Data migration guide',
                path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/data-migration.html',
                collapsable: true,
                children: [
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/data/sql.html', 'SQL v3 to v4 migration'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/data/sql-relations.html', 'SQL relations cheatsheet'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/data/mongo.html', 'MongoDB v3 to SQL v3 migration'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/data/mongo-sql-cheatsheet.html', 'MongoDB vs. SQL cheatsheet'],
                ],
              },
              {
                title: 'Plugin migration guide',
                path: '/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin-migration.html',
                collapsable: true,
                children: [
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/update-folder-structure.html', 'Updating the folder structure'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/migrate-back-end.html', 'Migrating the back end'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/migrate-front-end.html', 'Migrating the front end'],
                  ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/enable-plugin.html', 'Enabling a plugin'],
                ]
              },
            ]
          },
          // ['/pt-BR/developer-docs/latest/update-migration-guides/migration-guides.html#v3-guides', 'v3 migration guides'], // commented out as it creates a "visual bug" and this is just a link to v3 docs after all
        ],
      },
    ],
  },
];
