wxWidgets Website
=================

The wxWidgets website is built using [Jekyll][jekyll], using [Node.js][node]
to compile all static assets including the [Bootstrap][bootstrap] library the
site is built on using [Sass][sass] stylesheets. Most of the content on the
website is written using [Markdown][markdown], making it extremely easy to write
and maintain. Icons are provided by [Font Awesome][fa].

[jekyll]: https://jekyllrb.com/
[node]: https://nodejs.org/
[bootstrap]: https://getbootstrap.com/
[fa]: https://fontawesome.com/
[sass]: https://sass-lang.com/
[markdown]: https://guides.github.com/features/mastering-markdown/

## Quick-start Guide

We've prepared a Vagrant configuration that can automatically install and
configure all dependencies listed above. So it's a bit more to download, but is
the quickest and most reliable way to dive right in if you aren't already
familiar with Jekyll or Node.js. Simply download and install both
[VirtualBox][vb] and [Vagrant][vagrant], and run the following from a command
prompt in this checkout:

    $ vagrant up

This will take 15 to 20 minutes to complete the first time. After your
Vagrant box is up and running, you can SSH in by running:

    $ vagrant ssh

This checkout will be shared with this virtual machine at `/vagrant`, so you
can go there now and run `yarn dist` to compile all assets, and run `jekyll` to
start up the built-in webserver that will process all files on startup. This
will need to be restarted to process any changes.

    $ cd /vagrant
    $ yarn --no-bin-links
    $ yarn dist
    $ jekyll serve --host 0.0.0.0

Note that you only need to run `yarn dist` once per new checkout. Now you can
edit content at verify your changes by pulling up the website running inside of
your Vagrant box (after restarting Jekyll): <http://localhost:4000/>

Jekyll can automatically watch for changes, however, it's not able to when
running within VirtualBox since filesystem notifications don't work over a
shared folder. If you find yourself working on changes that require frequent
rebuilds, you should consider installing all dependencies locally so you can
run Jekyll with automatic rebuilds:

    $ jekyll serve --watch

[vb]: https://www.virtualbox.org/wiki/Downloads
[vagrant]: https://www.vagrantup.com/downloads.html

## Minimal Setup for Content Editing Only

If you only want to modify some page contents and are not going to touch any
CSS or JavaScript code, you can avoid installing Node.js and NPM packages with
Yarn since it is only really needed to produce the minified CSS and JavaScript
files which can be retrieved from the main site:

    $ curl https://www.wxwidgets.org/assets/css/global.min.css > assets/css/global.min.css
    $ curl https://www.wxwidgets.org/assets/js/global.min.js > assets/js/global.min.js

Then you only have to install [Jekyll][] and run it in order to preview your
changes locally before pushing them out.

## Posting News or Blog Posts

Jekyll has a helpful guide on [writing posts] that outlines almost exactly how
we manage our News posts here. Our News posts are managed using this system, but
note that we don't use categories or tags on News (we do use tags on blog posts
though). Our Developer Blog posts are very similar, except they are located in
the `_blog` directory.

[writing posts]: https://jekyllrb.com/docs/posts/

To create a fresh News post, you can run:

```
./new_post Some Exciting News Title
```

This will create the post file, and fill in all necessary YAML front matter.
Then simply write your post in Markdown after the `---` marker. By default, the
script will enable comments on your post. If this isn't desired, find `comments`
in the YAML front matter, and change it from `true` to `false`.

For the blog posts, just use `./new_blog` instead of `new_post`, otherwise the
behaviour is exactly the same.

## Tips and Conventions used in Markdown

Note that on top of standard Markdown, this site supports much of the additional
features provided by [GFM (GitHub Flavored Markdown)][gfm].

[gfm]: https://guides.github.com/features/mastering-markdown/

The following GFM features are supported:

* Syntax Highlighting
* Tables
* Automatic linking for URLs
* Strikethrough

The use of Jekyll means that pages don't need to be entirely just Markdown. All
content can use Liquid templates to generate HTML markup using settings or data
provided in YAML front matter. It's also possible to mix both Markdown and HTML
in the same file (just leave a blank line between them), just in case you can't
accomplish what you want with Markdown. This should be rare in news or blog
posts, but a little more common in official site content.

If you add images, scripts, or other files referenced in your content, it's best
to add it close to the content your adding it to. For example, all screenshots
shown on the Screenshots page are located here:

```
about/screenshots/
```

This applies to news and blog posts as well, but is a bit more confusing since
the post will be in either `_posts` or `_blog`, but their files need to be under
their final post destination path: `news` and `blog`. For example, this post:

```
_blog/2009-07-05-june-news.md
```

has a screenshot under:

```
blog/2009/07/june-news/button_gtk.png
```

which can be referenced in HTML like so:

```
<img src="button_gtk.png">
```

or in Markdown like this:

```
![GTK Button](button_gtk.png)
```

If you use a parent path instead, it may be easier to specify an absolute path
to that file in your content. This should be done if you reference the same
files from multiple pages or posts.
