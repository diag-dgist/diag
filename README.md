
Website creating using the Gatsby Theme [`@lekoarts/gatsby-theme-emma`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma).

## ✨ Features

- MDX
- react-spring page animations
- Optional MDX pages which automatically get added to the navigation
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest

## 🚀 How to edit pages

### 1. **Clone the repo.**

```sh
git clone {repo url}
```

### 2.  **Open the code and start customizing**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`

### Adding content

#### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Use `defer` to opt-in into Deferred Static Generation (DSG)
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
client: "LekoArts"
title: "Theme"
cover: "./image.jpg"
date: "2019-06-10"
service: "Theme"
color: "#8e9d31"
defer: false
---
```

#### Adding a new page

Additional pages will be shown in the navigation (left side) and allow you to display content other than projects, e.g. a "Contact" or "About Me" page. General setup:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
title: "Name"
slug: "/name"
cover: "./name.jpg"
defer: false
---
```

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.
