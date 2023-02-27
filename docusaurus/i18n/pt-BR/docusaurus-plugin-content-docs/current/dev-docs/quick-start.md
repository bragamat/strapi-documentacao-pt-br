---
sidebar_label: 'Guia Rápido'
displayed_sidebar: devDocsSidebar
sidebar_position: 2
title: Guia Rápido - Documentação de Desenvolvimento do Strapi
description: Se prapare para fazer o Strapi, seu CMS headless open source favorito pronto para rodar em menos de 3 minutos
# next: ./troubleshooting

---

import InstallPrerequisites from '../snippets/installation-prerequisites.md'

# Guia Rápido

O Strapi oferece muita flexibilidade. Se você deseja ir rápido e ver rapidamente o resultado final, ou prefere se aprofundar mais no produto, temos tudo coberto. Para este tutorial, optaremos pela abordagem DIY (_Do it yourself_ - faça você mesmo) e construiremos um projeto e uma estrutura de dados do zero.

:::prerequisites
<InstallPrerequisites components={props.components} />
:::

## 🚀 Parte A: Crie um novo projeto com Strapi

### Passo 1: Execute o _script_ de instalação

Execute o seguinte comando em um terminal:

<Tabs groupId="yarn-npm">

<TabItem value="yarn" label="yarn">

```bash
yarn create strapi-app my-project --quickstart
```

</TabItem>

<TabItem value="npm" label="npm">

```bash
npx create-strapi-app@latest my-project --quickstart
```

</TabItem>

</Tabs>

:::info
A `instalação rápida` configura o Strapi com um banco de dados _SQLite_. Outros bancos de dados e opções de instalação estão disponíveis. (ver [guia de Instalação da CLI](/dev-docs/installation/cli)).
:::

### Passo 2: Cadastre o primeiro usuario administrador

Assim que a instalação estiver concluída, seu navegador abrirá automaticamente uma nova guia.

Ao preencher o formulário, você criará sua própria conta. Depois de concluído, você se tornará o primeiro usuário administrador desta aplicação Strapi. Boas vindas a bordo, comandante!

Agora você tem acesso ao [painel administrativo](http://localhost:1337/admin):

![Admin panel screenshot: dashboard](/img/assets/quick-start-guide/qsg-handson-part1-01-admin_panel_2.png)

:::callout 🥳 PARABÉNS!
Você acaba de criar um novo projeto Strapi! Você pode começar a mexer com Strapi e descobrir o produto por você usando nosso [Guia de Usuário](/user-docs/intro), ou vá para a parte B abaixo.
:::

## 🛠  Parte B: Construa seu conteúdo!

O _script_ de instalação acabou de criar um projeto vazio. Nós iremos agora guiar voce para criar o diretório _restaurants_, inpirado na nossa aplicação de exemplo: [_FoodAdvisor_](https://github.com/strapi/foodadvisor).

Em resumo, nós iremos criar uma estrutura de dados para o seu conteúdo, adicionaremos alguns dados e então iremos publicá-los, para que assim a _API_ para o seu conteúdo possa ser utilizada.

O painel administrativo do Strapi roda em: [http://localhost:1337/admin](http://localhost:1337/admin). É aqui que você irá passar a maior parte do seu tempo criando e atualizando conteúdo.

:::tip TIP
Se o servidor não está rodando ainda, no seu terminal, `cd` na pasta `my-project` e execute `npm run develop` (ou `yarn develop`) para iniciá-lo.
:::

### Passo 1: Crie tipos de coleções com o construtor de Tipos de Conteúdo - Content-type Builder

The Content-type Builder plugin helps you create your data structure. When creating an empty project with Strapi, this is where to get the party started!
O plugin _Content-type Builder_ ajuda você a criar sua estrutura de dados. É aqui que podemos iniciar a fest quando iniciamos um projeto Strapi do zero!

#### Crie uma _collection type_ "Restaurant"

Your restaurants directory will eventually include many restaurants, so we need to create a "Restaurant" collection type. Then we can describe the fields to display when adding a new restaurant entry:

1. Go to Plugins ![Content-type Builder icon](/img/assets/quick-start-guide/icons/content_types_builder.svg) [Content-type Builder](http://localhost:1337/admin/plugins/content-type-builder) in the main navigation.
2. Click on **Create new collection type**.
3. Type `Restaurant` for the _Display name_, and click **Continue**.  
4. Click the Text field.
5. Type `name` in the _Name_ field.
6. Switch to the _Advanced Settings_ tab, and check the **Required field** and the **Unique field** settings.
7. Click on **Add another field**.
8. Choose the Rich text field.
9. Type `description` under the _Name_ field, then click **Finish**.
10. Finally, click **Save** and wait for Strapi to restart.

![GIF: Create Restaurant collection type in Content-type Builder](/img/assets/quick-start-guide/qsg-handson-restaurant_2.gif)

Once Strapi has restarted, "Restaurant" is listed under ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) _Content Manager > Collection types_ in the navigation. Wow, you have just created your very first content-type! It was so cool — let's create another one right now, just for pleasure.

#### Create a "Category" collection type

It would help getting a bit more organized if our restaurants directory had some categories. Let's create a "Category" collection type:

1. Go to Plugins ![Content-type Builder icon](/img/assets/quick-start-guide/icons/content_types_builder.svg) [Content-type Builder](http://localhost:1337/admin/plugins/content-type-builder) in the main navigation.
2. Click on **Create new collection type**.
3. Type `Category` for the _Display name_, and click **Continue**.
4. Click the Text field.
5. Type `name` in the _Name_ field.
6. Switch to the _Advanced Settings_ tab, and check the **Required field** and the **Unique field** settings.
7. Click on **Add another field**.
8. Choose the Relation field.
9. On the right side, click the _Category_ relational fields box and select "Restaurant".
10. In the center, select the icon that represents "many-to-many" ![icon many-to-many](/img/assets/quick-start-guide/icon_manytomany.png). The text should read `Categories has and belongs to many Restaurants`.

![Admin Panel screenshot: relations](/img/assets/quick-start-guide/qsg-handson-part2-02-collection_ct.png)

11. Finally, click **Finish**, then the **Save** button, and wait for Strapi to restart.

### Step 2: Use the collection types to create new entries

Now that we have created a basic data structure with 2 collection types, "Restaurant" and "Category", let's use them to actually add content by creating new entries.

#### Create an entry for the "Restaurant" collection type

1. Go to ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) [Content Manager > Collection types - Restaurant](http://localhost:1337/admin/content-manager/collectionType/api::restaurant.restaurant) in the navigation.
2. Click on **Create new entry**.
3. Type the name of your favorite local restaurant in the _Name_ field. Let's say it's `Biscotte Restaurant`.
4. In the _Description_ field, write a few words about it. If you're lacking some inspiration, you can use `Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.`
5. Click **Save**.

![Screenshot: Biscotte Restaurant in Content Manager](/img/assets/quick-start-guide/qsg-handson-part2-03-restaurant.png)

The restaurant is now listed in the [Collection types - Restaurant](http://localhost:1337/admin/content-manager/collectionType/api::restaurant.restaurant) view.

#### Add Categories

Let's go to ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) [Content Manager > Collection types - Category](http://localhost:1337/admin/content-manager/collectionType/api::category.category) and create 2 categories:

1. Click on **Create new entry**.
2. Type `French Food` in the _Name_ field.
3. Click **Save**.
4. Go back to _Collection types - Category_, then click again on **Add new entry**.  
5. Type `Brunch` in the _Name_ field, then click **Save**.

![GIF: Add Categories](/img/assets/quick-start-guide/qsg-handson-categories.gif)

The "French Food" and "Brunch" categories are now listed in the [Collection types - Category](http://localhost:1337/admin/content-manager/collectionType/api::category.category) view.

#### Add a Category to a Restaurant

Go to ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) [Content Manager > Collection types - Restaurant](http://localhost:1337/admin/content-manager/collectionType/api::restaurant.restaurant) in the navigation, and click on "Biscotte Restaurant".

In the right sidebar, in the **Categories** drop-down list, select "Brunch". Click **Save**.

### Step 3: Set Roles & Permissions

We have just added a restaurant and 2 categories. We now have enough content to consume (pun intended). But first, we need to make sure that the content is publicly accessible through the API:

1. Click on _General ![Settings icon](/img/assets/quick-start-guide/icons/settings.svg) Settings_ at the bottom of the main navigation.
2. Under _Users & Permissions Plugin_, choose [Roles](http://localhost:1337/admin/settings/users-permissions/roles).
3. Click the **Public** role.
4. Scroll down under _Permissions_.
5. In the _Permissions_ tab, find _Restaurant_ and click on it.
6. Click the checkboxes next to **find** and **findone**.
7. Repeat with _Category_: click the checkboxes next to **find** and **findone**.
8. Finally, click **Save**.

![Screenshot: Public Role in Users & Permissions plugin](/img/assets/quick-start-guide/qsg-handson-part2-04-roles.png)

### Step 4: Publish the content

By default, any content you create is saved as a draft. Let's publish our categories and restaurant.

First, navigate to ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) [Content Manager > Collection types - Category](http://localhost:1337/admin/content-manager/collectionType/api::category.category). From there:

1. Click the "Brunch" entry.
2. On the next screen, click **Publish**.
3. In the _Confirmation_ window, click **Yes, publish**.  

Then, go back to the Categories list and repeat for the "French Food" category.

Finally, to publish your favorite restaurant, go to ![Content Manager icon](/img/assets/quick-start-guide/icons/content.svg) [Content Manager > Collection types - Restaurant](http://localhost:1337/admin/content-manager/collectionType/api::restaurant.restaurant), click the restaurant entry, and **Publish** it.

![GIF: Publish content](/img/assets/quick-start-guide/qsg-handson-publish.gif)

### Passo 5: Use a _API_

OK dear gourmet, we have just finished creating our content and making it accessible through the API. You can give yourself a pat on the back — but you have yet to see the final result of your hard work.

There you are: the list of restaurants is accessible at [http://localhost:1337/api/restaurants](http://localhost:1337/api/restaurants).

Testar agora! O resultado deve ser similar ao do exemplo de resposta abaixo 👇.

<details>
<summary>Clica aqui para ver um exemplo de resposta de API</summary>

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Biscotte Restaurant",
        "description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",
        "createdAt": "2021-11-18T13:34:53.885Z",
        "updatedAt": "2021-11-18T13:59:05.035Z",
        "publishedAt": "2021-11-18T13:59:05.033Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

</details>

:::callout 🥳 CONGRATULATIONS!  
Agora seu conteúdo está criado, publicado, e você tem permissões para os consultar através da API.
Manda ver na criação na criaçãp de conteúdo!
:::

## ⏩ O que fazer a partir daqui?

Agora que você sabe o básico de criar e publicar conteúdo com Strapi, nós te encorajamos a explorar e entender a fundo alguns recursos do Strapi:

<!-- TODO: uncomment this one when API token page is ready -->
<!-- - 👉 [create an API token](/user-docs/settings/managing-global-settings#managing-api-tokens) to restrict access to your API, -->
<!-- TODO: uncomment this one and make it replace the duplicate line without GraphQL -->
<!-- - 👉 learn how to use Strapi's [REST](/dev-docs/api/rest) and [GraphQL](/dev-docs/api/graphql) APIs to query the content, -->
- 👉 Aprenda como usar a API [REST](/dev-docs/api/rest) do Strapi para consultar ou pesquisar conteúdo,
- 👉 E [customizar seu _backend_ Strapi](/dev-docs/backend-customization) e [painel administrativo](/dev-docs/admin-panel-customization).
