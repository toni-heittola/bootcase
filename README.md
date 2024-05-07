bootcase - Pelican theme
========================

`bootcase` is Pelican Bootstrap based theme designed for academic community sites and academic personal sites. Theme is made for Pelican v3.7.1 and Bootstrap v3.3.7.

Originally, the theme was developed for [DCASE](https://dcase.community/) site, but it should be helpful in other similar projects. The theme favours a basic and minimalistic Bootstrap layout with minimal modifications through CSS. Theme implements content and sidebar (left-hand side) type of layout. Theme supports categorising the pages under sub-directories, allowing each of these "sub-sites" to have a different color scheme to help the user track his/her location within the site. 

The left-hand side sidebar is used to show extra information. The theme is designed to work with the following plugins:

- `pelican-bdates` -- Plugin to generate important dates listings, [GitHub](https://github.com/toni-heittola/pelican-bdates)      
- `pelican-bnews` -- Plugin to generate most recent article listings, [GitHub](https://github.com/toni-heittola/pelican-bnews)
- `pelican-bpersonnel` -- Plugin to generate personnel listings, [GitHub](https://github.com/toni-heittola/pelican-bpersonnel)
- `pelican-brepository` -- Plugin to generate file repository listings and items  [GitHub](https://github.com/toni-heittola/pelican-brepository)
- `pelican-bsponsors` -- Plugin to generate sponsor listings, [GitHub](https://github.com/toni-heittola/pelican-bsponsors)
- `pelican-btoc` -- Plugin to generate table of content, [GitHub](https://github.com/toni-heittola/pelican-btoc)

If these plugins are activated, their per page content will be shown in the sidebar. 

Additional plugins that are developed to work with the theme:

- `pelican-btex` -- Plugin to generate bibliography, [GitHub](https://github.com/toni-heittola/pelican-btex)
- `pelican-bglossary` -- Plugin to generate glossary, [GitHub](https://github.com/toni-heittola/pelican-bglossary)
- `pelican-datatable` -- Plugin to generate data tables, [GitHub](https://github.com/toni-heittola/pelican-datatable)
- `pelican-include` -- Plugin to fetch file content, [GitHub](https://github.com/toni-heittola/pelican-include)
- `pelican-modified` -- Plugin to fetch file modification time, [GitHub](https://github.com/toni-heittola/pelican-modified)

**Author**

Toni Heittola (toni.heittola@gmail.com), [GitHub](https://github.com/toni-heittola), [Home page](http://www.cs.tut.fi/~heittolt/)

# Usage instructions

To install bootcase, copy theme files under `theme/bootcase/` directory and in `pelicanconf.py` set:

    THEME = 'themes/bootcase/'

Additional parameters to set:

    DIRECT_TEMPLATES = ['news']
    PAGE_URL = '{slug}'
    PAGE_SAVE_AS = '{slug}.html'

Theme settings are set in variable `THEME_SETTINGS`. To read theme default settings in, and overriding only specific settings add following code to `pelicanconf.py`:
    
    # Set theme
    THEME = 'themes/bootcase/'
    
    # Import theme python tools 
    sys.path.append(THEME)
    import bootcase
    
    # Read settings from YAML file.
    THEME_SETTINGS_USER = bootcase.load_yaml('theme.settings.yaml')
    
    # Override theme default settings with previosly read settings.
    THEME_SETTINGS = bootcase.apply_theme_defaults(
        theme_path=THEME,
        user_settings=THEME_SETTINGS_USER
    )
    
    # Show settings to logging.info    
    bootcase.show_settings(settings=THEME_SETTINGS)
 

## Default settings

Theme default settings are specified in `theme.defaults.yaml`:

    # Site settings
    site:
      show_name: false
      show_logo: true
      favicon: false
      favicon_ie: false
      apple_touch_icon: false
    
    # Assets settings
    assets:
      fontawesome: true
      colorbox: false
      audio: false
      timeago: false
      fulpage: false
      scrollreveal: true
      anijs: false
      pygments: false
    
    # Bootstrap settings
    bootstrap-theme: false

    # Misc settings
    web_fonts: https://fonts.googleapis.com/css?family=Heebo:900
    google_analytics_tracking_id: false
    custom_css: false
    
    # Menu settings
    menu:
      top_left:
      top_right:
      sub:
    
    # Footer settings
    footer:
      show: true
    
    # Header defaults
    header_defaults:
      article_list_background_image: theme::everyday-patterns/bricks-toledo-02.jpg
      article_background_image: theme::everyday-patterns/bricks-toledo-02.jpg
      page_background_image: theme::everyday-patterns/bricks-toledo-02.jpg
        
    # Article info settings
    article:
      show_author: true
      show_category: true
    
    # Article category specific style settings
    article_categories:
    
    # Page style settings, accessed based on sub site label
    page_substyles:
      default:
        header_bg_tint: rgba(0, 0, 0, 0.65)
        header_overlay_tint: rgba(255, 255, 255, 0.1)
    
      main:
        header_bg_tint: rgba(0, 0, 0, 0.85)
        header_overlay_tint': rgba(255, 255, 255, 0.1)
    
      article:
        header_bg_tint: rgba(0, 0, 0, 0.85)
        header_overlay_tint: rgba(255, 255, 255, 0.1)


## Site settings

Set in `THEME_SETTINGS['site']`:
    
| parameter label  | default value | description                                            |
| ---------------- | ------------- | ------------------------------------------------------ |
| show_name        | false         | Show site name in top menu                             |
| show_logo        | true          | Show site logo, logo set with SITELOGO                 |
| favicon          | false         | Path to favicon, or false if none set                  |
| favicon_ie       | false         | Path to IE specific favicon, or false if none set.     |
| apple_touch_icon | false         | Path to touch icon, or false if none set.              |
    
## Assets settings

Set in `THEME_SETTINGS['assets']`:

| parameter label  | default value | description                                                                       |
| ---------------- | ------------- | --------------------------------------------------------------------------------- |
| fontawesome      | true          | Load [FontAwesome v4.7](https://fontawesome.com/v4.7.0)                           |
| colorbox         | false         | Load [Colorbox v1.5.14](http://www.jacklmoore.com/colorbox/), jQuery lightbox.    |
| audio            | false         | Load basic audio player, with flash fallback.                                     |
| timeago          | false         | Load [Timeago.js v3.0.2](https://github.com/hustcc/timeago.js) to format dates.   |
| fullpage         | false         | Load [Fullpage.js v2.9.4](https://github.com/alvarotrigo/fullPage.js) for one page layout. |
| scrollreveal     | true          | Load [ScrollReveal v3.1.4](https://github.com/jlmakes/scrollreveal.js)            |
| anijs            | false         | Load [AniJS](http://anijs.github.io)                                              |
| pygments         | false         | Load pygments style files.                                                        |

## General theme settings

| parameter label              | default value | description                                                                       |
| ---------------------------- | ------------- | --------------------------------------------------------------------------------- |
| bootstrap-theme              | false         | One can use alternative bootstrap theme by setting `THEME_SETTINGS['bootstrap-theme']` to correct theme label, and making sure theme is located under `bootcase/static/assets/bootstrap/css/`. Filename pattern for the theme is `bootstrap.THEMELABEL.min.css`. |
| web_fonts                    | https://fonts.googleapis.com/css?family=Heebo:900 | Load webfonts                     |
| google_analytics_tracking_id | false         | Google Analytics tracking ID for the site. Set to false if none used. |
| custom_css                   | false         | Path to custom css file. use this to override default css from bootstrap and theme.  |
               
## Menu system

Theme provides two type of main level menus, `top_left` and `top_right`. Theme supports sub-sites and different sub-menus for them (`sub`). Menu system is set in `THEME_SETTINGS['menu']`.

Menus are set using list of *menu dictionary items*. Menu item is a dictionary with following fields:

| parameter label   | type          | description                                                                       |
| ----------------- | ------------- | --------------------------------------------------------------------------------- |
| url               | string        | Menu item url.                                                                    | 
| logo              | bool          | Item only with a logo image.                                                      |
| img               | string        | Path to the image for logo item.                                                  |
| title             | string        | Menu item title. If no url is set, and title is set, menu header is inserted.     |
| sub_site_fetching | string        | Alternative sub-path used to activate the menu item. For example, if article list is mapped at /news, and articles are under articles/ sub-path, this parameter can be used to activate correct menu item when article is open    |
| dropdown          | list of menu items | Sub-menu.                                                                    |
| divider           | bool          | When true, only menu divider is inserted.                                         |
| header            | bool          | When true, only title without link is printed                                     |
| tooltip           | bool          | Add tooltip for the menu item.                                                    |
| tooltip_text      | string        | Tooltip text.                                                                     |
| tooltip_placement | string        | Tooltip placement, see [Bootstrap documentation for more](https://getbootstrap.com/docs/3.3/javascript/#tooltips).  |


`THEME_SETTINGS['menu']['top_left']` and `THEME_SETTINGS['menu']['top_right']` menus are set up with a list of menu items. 
Sub-site menu, `THEME_SETTINGS['menu']['sub']` is set up with a dictionary containing list of menu items. This dictionary is having sub-site labels as keys. For example, for `subsite_a/test.html` the sub-site label is `subsite_a`.

## Footer settings

Set in `THEME_SETTINGS['footer']`:

| parameter label  | default value | description                                                                       |
| ---------------- | ------------- | --------------------------------------------------------------------------------- |
| show             | true          | Show footer.                                                                      |

## Header defaults

For each page, there is header and theme allows user to set per page background image. 
In case per page image is not set, default images are used. These are set in `THEME_SETTINGS['header_defaults']`:

| parameter label  | default value | description                                                                       |
| ---------------- | ------------- | --------------------------------------------------------------------------------- |
| article_list_background_image | theme::everyday-patterns/bricks-toledo-02.jpg | Header for article list page.        |
| article_background_image | theme::everyday-patterns/bricks-toledo-02.jpg | Header for article page.        |
| page_background_image | theme::everyday-patterns/bricks-toledo-02.jpg | Header for static page.        |

Image paths starting with `theme::` will be routed from `themes/bootcase/static/images/`. Currently, [Everyday-patterns](https://github.com/toni-heittola/everyday-patterns) image collection is bundled with the theme.  

## Article info settings

For article list and individual articles one can set what info is shown with `THEME_SETTINGS['article']`:

| parameter label  | default value | description                                                                       |
| ---------------- | ------------- | --------------------------------------------------------------------------------- |
| show_author      | true          | Show author of the article.                                                       |
| show_category    | true          | Show category of the article.                                                     |

## Article category styles

Theme provides article page headers which can he configured based on article category. This is set in `THEME_SETTINGS['article_categories']` as dictionary having article category label as key and style defined in a dictionary with following parameters:

| parameter label     | type          | description                                                                    |
| ------------------  | ------------- | ------------------------------------------------------------------------------ |
| label_css           | string        | Category label css class.                                                      |
| header_bg_tint      | string        | Header background image tint color. E.g `rgba(0, 0, 0, 0.65)`                  | 
| header_overlay_tint | string        | Header overlay tint color. E.g `rgba(0, 0, 0, 0.65)`                           |
| header_image        | string        | Header image path.                                                             |

## Static page style settings

Theme provides configurable header styles for static pages based on sub-site label. This is set in `THEME_SETTINGS['page_substyles']` as dictionary having sub-site label as key and style defined in a dictionary with following parameters:

| parameter label     | type          | description                                                                    |
| ------------------  | ------------- | ------------------------------------------------------------------------------ |
| header_bg_tint      | string        | Header background image tint color. E.g `rgba(0, 0, 0, 0.65)`                  | 
| header_overlay_tint | string        | Header overlay tint color. E.g `rgba(0, 0, 0, 0.65)`                           |
| header_image        | string        | Header image path.                                                             |
 
Pages from main-level are set through sub-site label `THEME_SETTINGS['page_substyles']['main']`, and pages without defined sub-site label in `THEME_SETTINGS['page_substyles']['default']`.
 
## Article and static page specific styling

Each article can have separate styling through file metadata. Parameters supported for article:

| parameter label     | type          | description                                                                    |
| ------------------  | ------------- | ------------------------------------------------------------------------------ |
| HeaderImage         | string        | Path to image                                                                  |  

Each static page can have separate styling through file metadata. Example:

    Title: Example article 
    Date: 2018-02-15 12:00
    Category: cat1
    Author: Author1       
    Slug: challenge2018/index
    HeaderText: Extra header text
    HeaderTextSecondary: Extra header text (secondary)    
    HeaderImage: theme::everyday-patterns/wall-granada-02.jpg
    HeaderOverlay: images/overlay.svg    

Parameters supported for static page:

| parameter label     | type          | description                                                                    |
| ------------------  | ------------- | ------------------------------------------------------------------------------ |
| HeaderImage         | string        | Path to image. This can be direct path to image e.g. under `images` or to image bundled with this theme, e.g., `theme::everyday_patterns/wall-granada-02.jpg`.                                                                  |  
| HeaderOverlay       | string        | Path to overlay image. This can be SVG file or image file.                     |
| HeaderText          | string        | Header extra text.                                                             |
| HeaderTextSecondary | string        | Secondary extra text for header.                                               |

