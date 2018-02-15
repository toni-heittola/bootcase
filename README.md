bootcase - Pelican theme
========================

`bootcase` is Pelican Bootstrap based theme designed for academic community sites and academic personal sites. Theme is made for Pelican v3.7.1 and Bootstrap v3.3.7.

Originally the theme was developed for [DCASE2016](http://www.cs.tut.fi/sgn/arg/dcase2016/) and [DCASE2017](http://www.cs.tut.fi/sgn/arg/dcase2017/) sites, but it should be useful for other similar projects. Theme is favoring a basic and minimalistic Bootstrap layout with minimal modifications through CSS. Theme implements basic two column layout. Theme supports categorization of the pages under sub-directories allowing each of these "sub-site"" to have different color schemes to help user keep track location within the site. 

Left-hand side sidebar is use to show extra information. Theme is designed to work with following plugins:

- `pelican-bdates` -- Plugin to generate important dates listings, [GitHub](https://github.com/toni-heittola/pelican-bdates)      
- `pelican-bpersonnel` -- Plugin to generate personnel listings, [GitHub](https://github.com/toni-heittola/pelican-bpersonnel)
- `pelican-bnews` -- Plugin to generate most recent article listings, [GitHub](https://github.com/toni-heittola/pelican-bnews)
- `pelican-brepository` -- Plugin to generate file repository listings and items  [GitHub](https://github.com/toni-heittola/pelican-brepository)
- `pelican-bsponsors` -- Plugin to generate sponsor listings, [GitHub](https://github.com/toni-heittola/pelican-bsponsors)
- `pelican-btoc` -- Plugin to generate table of content, [GitHub](https://github.com/toni-heittola/pelican-btoc)

If these plugins are activated, their per page content will be shown in page sidebar. 

**Author**

Toni Heittola (toni.heittola@gmail.com), [GitHub](https://github.com/toni-heittola), [Home page](http://www.cs.tut.fi/~heittolt/)

# Usage

To install bootcase, copy theme files under `theme/bootcase/` directory and in `pelicanconf.py` set:

    THEME = 'themes/bootcase/'

## General settings

Theme is configured from `pelicanconf.py`. 

To hide site name from responsive menu, set `THEME_HIDE_SITENAME` to `True`.

One can use alternative bootstrap theme by setting `THEME_BOOTSTRAP_THEME` to correct, and making sure theme is located under `bootcase/static/assets/bootstrap/css/`. Filename pattern for the theme is `bootstrap.THEMENAME.min.css`.

## Setting included assets

To control which assets are included in the theme, edit `pelicanconf.py`:

    THEME_INCLUDED_ASSETS = {
        'colorbox': False,
        'audio': False,
        'timeago': False,
        'fulpage': False,
        'scrollreveal': True,
        'anijs': False,
    }
        
To add Google fonts, edit `pelicanconf.py`:

    THEME_GOOGLE_FONTS = 'https://fonts.googleapis.com/css?family=Heebo:900'
               
## Menu system

Theme provides two type of main level menus, one with only image logos, and one with full icon and text labels. Theme supports subsites and different sub menus for them. 

### Main menu

To set main menu, edit `pelicanconf.py`:

    THEME_MENUITEMS_MAIN = [
        ('News', 'news', 'fa fa-newspaper-o fa-1x fa-fw', False),
        ('Main1',
         [
             ('Title 1', 'sub1', 'fa fa-info-circle fa-fw', False),
             ('Title 2', 'sub2', 'fa fa-calendar fa-fw', False),
             ('Title 3', 'sub3', 'fa fa-gears fa-fw', False),
         ], 'fa fa-users fa-1x fa-fw', False),
        
        ('External link', 'https://google.com', 'fa fa-comments fa-1x fa-fw', True),
        ('', 'https://github.com/DCASE-REPO', 'fa fa-github fa-1x', True),
    ]
    
This parameter is given as list of tuples. Each item in the list contains following information:

1. Title 
2. URL, to create dropdown menus, this field can contain a list, following similar tuple structure
3. Icon css classes (theme supports fontawesome icons)
4. Link type, indicates is the link external (True) or internal (False).    

### Logo menu

To set logo menu, edit `pelicanconf.py`:
    
    THEME_MENUITEMS_LOGO = [
        ('', SITEURL + '/images/logos/logo_home.png', False),
        ('subsite1/', SITEURL + '/images/logos/logo_sub1.png', False),
        ('subsite2/', SITEURL + '/images/logos/logo_sub1.png', False),
        ('http://www.google.com', SITEURL + '/images/logos/logo_google.png', True),
    ]          
    
This parameter is given as list of tuples. Each item in the list contains following information:
 
1. URL
2. Path to logo image
3. Link type, indicates is the link external (True) or internal (False).    

### Sub-site menus

To set menus for sub-sites, edit `pelicanconf.py`:

    THEME_MENUITEMS_SUB = {
        'subsite1': [
            ('Title1', 'title1', 'fa fa-newspaper-o fa-1x fa-fw', False),
        ],
        'subsite2': [
            ('title2', 'title2', 'fa fa-newspaper-o fa-1x fa-fw', False),
        ]    
    }

This parameter is given as dictionary where the key is the subdirectory name and value is menu list as is used in main menu.  

## Page and Article Headers

Theme provides configurable header for pages and news articles. Header can be controlled per page / article following way:

    Title: Main title 
    HeadertextSecondary: Secondary smaller title
    HeaderImage: theme::everyday-patterns/wall-granada-02.jpg
    HeaderOverlay: images/overlays/overlay.svg  

`HeaderImage` can be direct path to image e.g. under `images` or to image bundled with this theme `theme::everyday_patterns/wall-granada-02.jpg`.

`HeaderOverlay` can be SVG file or image file. 

Header can be tinted based on subsite (first-level of directories). The colors are set in `pelicanconf.py`:

    THEME_SITECOLORS = {
        'main': {
            'main': '#76cd76',
            'tint': 'rgba(0, 0, 0, 0.85)',
            'overlay': 'rgba(255, 255, 255, 0.1)'
        },
        'subsite1': {
            'main': '#76cd76',
            'tint': 'rgba(18, 52, 18, 0.65)',
            'overlay': 'rgba(255, 255, 255, 0.1)'
        },
        'subsite2': {
            'main': '#e99002',
            'tint': 'rgba(120, 72, 0, 0.65)',
            'overlay': 'rgba(255, 255, 255, 0.1)'
        },
        'article': {
            'header1': 'rgb(0, 0, 0)',
            'header2': 'rgba(0, 0, 0, 0.55)',
            'overlay': 'rgba(255, 255, 255, 0.1)'
        }
    }
      
`THEME_DEFAULT_ARTICLE_HEADER_BG` can be used to set default header image for articles without specified `HeaderImage`. `THEME_DEFAULT_HEADER_BACKGROUND_TINT` and `THEME_DEFAULT_HEADER_OVERLAY_TINT` are used if no tint colors are specified in `THEME_SITECOLORS`.       
`THEME_ARTICLE_LIST_HEADER_BG` sets the header image for article list. 
      
## News article category labels

One can set news article header based on category of the article. Configuration is done in `pelicanconf.py`:

    THEME_ARTICLE_CATEGORIES = {
        'category1': {
            'label-css': 'label label-default',
            'tint': 'rgba(0, 0, 0, 0.65)',
        },
        'category2': {
            'label-css': 'label label-success',
            'tint': 'rgba(18, 52, 18, 0.65)',
        },
        'category3': {
            'label-css': 'label label-warning',
            'tint': 'rgba(120, 72, 0, 0.65)',
        },
    } 
    
`label-css` is used as css class of category label. `tint` is used to add color to the header on the news article page.

## Google analytics

To use Google analytics with the theme, add correct ID to `THEME_GOOGLE_ANALYTICS` in `pelicanconf.py` or set to `False`.


