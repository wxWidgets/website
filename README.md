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
[markdown]: https://daringfireball.net/projects/markdown/

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
start up the built-in webserver that will automatically re-generate all pages
any time it's corresponding file is changed here.

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
