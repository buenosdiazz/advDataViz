# README

The following repo contains boilerplate files for a simple, clean web site design to display data visualization examples. Because data viz libraries may include complex CSS and JavaScript, these templates are designed eliminate potential conflicts as much as possible.


## Dependencies

These templates utilize CSS Grid for layout. CSS Grid is fully supported in the following web browsers:

- Firefox 52+
- Google Chrome 57+
- Microsoft Edge 16+
- Safari 10.1+
- Opera 44+

Users who visit the pages using older versions are presented with a message encouraging them to update their browsers. The design will appear exceedingly simplistic, but should still function.


## Notes

**`index.html`**

- A navigation bar is included. This is for links to personal portfolios, e-mail, etc. It may be removed if unwanted. (To slim down related CSS, also remove selectors which include `header nav`.)

- A footer is included. This is also optional. (To slim down related CSS, remove selectors which include `footer`.)

- The `main` section stretches the width of the browser. It can be limited by adjusting the values (`250px 1fr`) in the `grid-template-columns` property to the `main` code block in `style.css`. Either value can be adjusted to utilize explicit (i.e. `600px`, `20em`) or variable (`fr`) values, or a combination of both.


**`inner-page.html`**

- This template is for individual data viz examples.

- By default, it utilizes a one-column, full-width layout. Rules exist within `style.css` to transform the design to a two-column layout with each column being of equal, variable (`1fr`) width.

- Because the templates are designed for a user to add to the site piecemeal  (week-to-week), the navigation is a breadcrumb for users to return to `index.html`.

  This approach is used to allow the developer to focus on building out data viz examples -- not focus on site design. When no more examples are to be added, a developer can swap out the `<nav>` on each page (for the completed one on `index.html`) and make minor modifications to `style.css` to allow for a more robust navigation throughout the site.

  (Ideally, we could implement a front- or back-end script to handle a dynamic navigation. We're avoiding this approach multiple reasons: 1. It allows these templates to be used on static site hosts (no back-end processing is necessary); 2. We want to avoid including JavaScript which *could* interfere with the data viz code / libraries. Again: Keeping it simple.)

- `div#chart` is included as a placeholder. Remove this and the corresponding css in `style.css` before adding your code for a data viz example.

- `<script>` tags appear at the bottom of the page for easy inclusion of libraries and scripts. Note some libraries may require scripts be added to the `<head>` of an HTML document. Refer to each library's documentation for details.


**`style.css`**

- To convert inner pages from a one- to two-column layout, remove the `#inner main` code block on lines 122-124. Uncomment the `#inner main` and `#writing` code blocks on lines 141-147. This will create two equal, variable width (`1fr 1fr`) sections.

- The value for `grid-template-columns` can be adjusted to used explicit or variable widths, or a combination of both. There may be times where the column containing a data viz is a fixed with. Because the current code sets columns adjust to browser window width, this would leave a fat chunk of white space between the chart and text on some pages. There are two ways to contend with this:

  - Determine a set width for *all* data visualizations and stick to it as the site is built. Change the explicit width of `grid-template-columns` in `style.css` (i.e. `grid-template-columns: 600px 1fr` -- this will create a fixed width of 600px for the first column and let the browser use all remaining space for the written content). The problem with this approach is a fixed width which works for an early example may not be enough for a future one.

  - Using inline styles are not best practice when building web sites, but present an acceptable use case here. An inline style in HTML will take precedence and overwrite the `grid-template-columns` property set in `style.css`.  To achieve the same result demonstrated above, the `<main>` tag would be adjusted as follows:

    `<main style="grid-template-columns: 600px 1fr">`

    The values can then be adjusted to accommodate the varying widths of unique data viz examples (i.e. 600px, 300px, 525px, etc.).

- The `#writing` code block sets up proper horizontal alignment between the chart and explanation/analysis. Is only necessary for the two-column design.

- Remove the `#chart` code block before using these templates. It exists for demonstration purposes only.


## License

These templates are released under the MIT License. Please see the accompanying LICENSE documentation for details.
