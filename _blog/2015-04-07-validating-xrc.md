---
title: Validating XRC
date: '2015-04-07T19:41:00.000Z'
author: Vadim Zeitlin
tags:
- howto
- tools
- xrc
modified_time: '2015-04-08T14:54:57.200Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8631970937935456031
blogger_orig_url: http://wxwidgets.blogspot.com/2015/04/validating-xrc.html
---

If you write your [XRC files] by hand (which is probably relatively rare as most
people prefer to edit them visually, but it does happen), and if you are human
(which is probably not so rare), you are bound to make mistakes in them. Some of
these mistakes result in invalid XML which give errors when loading the XRC
file, some of them are not a big deal and are just ignored by the XRC parser,
but some others can result in the layout mysteriously not working as expected,
which can be annoying. Validating XRC files, i.e. verifying that they conform to
the scheme describing all the valid XRC elements, allows to avoid all these
problems at once, so it is strongly recommended to do it -- and this post will
explain how, in details.

[XRC files]: https://docs.wxwidgets.org/trunk/overview_xrcformat.html

Setup
-----

To validate them you need two things: a schema and a tool using it. The schema
exists in [our repository] since October 2013 and is also available at the
public URL [http://www.wxwidgets.org/wxxrc]. As for the [tools], anything
supporting compact RELAX NG schema syntax can work, but in practice this seems
to limit the choices either to the online validator at [validator.nu] (_Edit_:
this validator can't be used for validating XRC currently as RELAX NG support
[seems to be broken]) or the original command-line validator, written by James
Clark, one of the persons behind RELAX NG, called [Jing], and the offline
version is, unsurprisingly, much more useful as it can be integrated into the
build process or used as part of pre-commit hook checks easily, so this is the
one we are going to look at. The latest Jing release is available from [Google
Code], but as the entire site will be [closing soon], it might not work any
longer by the time you are reading this, so [here] is the smaller and more
up-to-date version. It is completely standalone and requires just a working Java
installation, you can put the JAR file anywhere you want and simply run

    $ java -jar /full/path/to/jing/jar

(in spite of the dollar sign indicating the Unix prompt, this works under
Windows, too). The basic Jing command line syntax is just the schema file
followed by any number of files to validate, however XRC schema uses the compact
syntax which has to be explicitly selected by its `-c` option, so in the
simplest case the full command line would look like

    $ java -jar jing.jar -c $WXWIN/misc/schema/xrc_schema.rnc myfile.xrc

where `WXWIN` environment variable is supposed to contain the full path of your
wxWidgets installation. As an aside, it is also possible to avoid hard coding
the path to the XRC schema, which may be important to make the validation step
work on different machines. The natural way to do it would be to just use the
canonical URI instead of the path to the schema, i.e.
`http://www.wxwidgets.org/wxxrc` but currently this doesn't work, seemingly
because of a bug in Jing handling HTTP-to-HTTPS redirections. The following
command does work:

    $ java -jar jing.jar -c https://www.wxwidgets.org/wxxrc myfile.xrc

but still has two problems: first, the URI is, formally speaking, wrong as it
should be using "http" schema. Second, and probably more importantly in
practice, it can be slow as the file needs to be downloaded from network every
time. To fix this problem, an [XML catalog] mapping the canonical URI to a local
file can be used. I won't pretend to know much about XML catalogs (because I
don't), but here is a minimal one that can be used to set up the correct
redirection:

```xml
<?xml version="1.0"?>
<!DOCTYPE catalog
  PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN"
         "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">

<catalog xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
    <uri name="http://www.wxwidgets.org/wxxrc"
         uri="file:///$WXWIN/misc/schema/xrc_schema.rnc"/>
</catalog>
```

If you save the above file as `catalog.xml` and adjust the value of the uri
attribute to contain the correct path to `xrc_schema.rnc` on your machine
(notice that triple slashes _are_ needed), you should be able to use:

    $ java -jar jing.jar -C catalog.xml -c http://www.wxwidgets.org/wxxrc myfile.xrc

[our repository]: https://github.com/wxWidgets/wxWidgets/tree/master/misc/schema
[http://www.wxwidgets.org/wxxrc]: http://www.wxwidgets.org/wxxrc
[tools]: http://relaxng.org/#validators
[validator.nu]: http://validator.nu/
[seems to be broken]: https://github.com/validator/validator/issues/89
[Jing]: http://www.thaiopensource.com/relaxng/jing.html
[Google Code]: http://jing-trang.googlecode.com/files/jing-20091111.zip
[closing soon]: http://google-opensource.blogspot.fr/2015/03/farewell-to-google-code.html
[here]: http://www.tt-solutions.com/downloads/jing-20150407.jar
[XML catalog]: https://en.wikipedia.org/wiki/XML_Catalog

Using (or not) Custom XRC Elements
----------------------------------

After the setup describe above you can use the standard schema `xrc_schema.rnc`
to validate the contents of all the standard XRC elements, such as `<sizeritem>`
or `<object class="wxButton">`. However any custom elements are simply ignored
by default because the standard schema has no knowledge of them. Of course, you
might not have any custom XRC elements at all. In this case, you should use
`xrc_schema_builtin_only.rnc`, located in the same `$WXWIN/misc/schema`
directory of your wxWidgets installation, to forbid any of them from appearing.
There is no canonical URI for it, so you should simply pass full path to it on
Jing command line.

The more interesting case is when you do define some custom XRC handlers. In
this case using `xrc_schema_builtin_only.rnc` would result in errors about
invalid value of attribute "class" for all your custom elements, so you need to
define a custom schema describing just them. An example of doing it is shown in
[misc/schema/README], but here is an even simpler custom schema:

    default namespace = "http://www.wxwidgets.org/wxxrc"
    namespace xrc = "http://www.wxwidgets.org/wxxrc"

    include "http://www.wxwidgets.org/wxxrc" {
      customClasses =
        element object {
            attribute class { "Frobnicator" } &
            stdObjectNodeAttributes &
            stdWindowProperties &
            [xrc:p="o"] element num_times {_, t_integer }*
        }
    }

This schema allows appearance of a custom `Frobnicator` window-like (because of
`stdWindowProperties` inclusion) element which can have one specific (but
optional, because of the trailing `*`) `num_times` attribute, i.e. would
validate the following XRC fragment:

```xml
<?xml version="1.0"?>
<resource xmlns="http://www.wxwidgets.org/wxxrc" version="2.5.3.0">
    <object class="Frobnicator" name="my_frob">
        <num_times>17</num_times>
    </object>
</resource>
```

if you issue

    $ java -jar jing.jar -C catalog.xml -c frob.rnc frob.xrc

command. Of course, the same fragment would also be accepted by the standard
schema, the real benefit of using a custom one is that typos in either
"Frobnicator" or "num_times" would be detected only by the latter.

[misc/schema/README]: https://github.com/wxWidgets/wxWidgets/blob/WX_3_0_2/misc/schema/README#L54

TL;DR Summary
-------------

Your easy guide to XRC validation:

1.  Download [jing.jar]
2.  For one-time validation of only standard XRC elements just run

        $ java -jar jing.jar -c https://www.wxwidgets.org/wxxrc myfile.xrc

3.  For repeated use, download [XML catalog], edit the file path in it and run

        $ java -jar jing.jar -C catalog.xml -c http://www.wxwidgets.org/wxxrc myfile.xrc

4.  If you use custom XRC elements, consider defining a schema for them too, it
    is simple to do.

[jing.jar]: http://www.tt-solutions.com/downloads/jing-20150407.jar
[XML catalog]: https://gist.githubusercontent.com/vadz/8581aa5745fd07b6b810/raw/wxxrc_catalog.xml
