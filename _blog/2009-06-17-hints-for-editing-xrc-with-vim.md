---
title: Hints for Editing XRC with Vim
date: '2009-06-17T09:30:00.000Z'
author: Vadim Zeitlin
tags:
- xrc vim
modified_time: '2009-06-17T16:32:51.441Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4164514205263227374
blogger_orig_url: http://wxwidgets.blogspot.com/2009/06/hints-for-editing-xrc-with-vim.html
---

If you are one of those strange people who prefer to write XRC files manually
instead of using one of the many GUI editors, and also one of the enlightened
people using [Vim] as their text editor you may be interested in this hint:
although Vim is smart enough to detect that XRC files are XML without any extra
prodding (as the presence of header at start of each XRC file is enough for XML
file type detection to work), things can be made more comfortable with a little
extra effort.

[Vim]: http://www.vim.org/

Before doing anything else you need to modify your `.vimrc` or `_vimrc` (under
Windows) file to detect XRC files as a separate file type. For this simply add
the following line to it:

```
au BufNewFile,BufReadPost *.xrc set ft=xrc
```

I also like to start with XML boilerplate already filled in when I create a new
file so I additionally have

```
au BufNewFile *.xrc read ~/vim/template.xrc
```

where the file template.xrc contains:

    <?xml version="1.0"?>
    <resource>
        <object class="" name="">
        </object>
    </resource>

Now, I'd like to do spell checking in the XRC elements which contain user
visible text. For this I create the file `~/vim/syntax/xrc.vim` (this works
under Windows too, just use whatever Vim considers to be your home directory
instead of `~`) with the following contents:

```
runtime syntax/xml.vim

syn region xmlString start="\(<title>\)\@<=[A-Z0-9]" end="\(</title>\)\@=" contains=xmlEntity,@Spell
syn region xmlString start="\(<text>\)\@<=[A-Z0-9]" end="\(</text>\)\@=" contains=xmlEntity,@Spell
syn region xmlString start="\(<label>\n\?\)\@<=[A-Z0-9]" end="\(</label>\)\@=" contains=xmlEntity,@Spell
```

and enjoy Vim help with correcting your mipsellings (how did you notice I wasn't
writing this post in Vim?). Notice that the region definition is not very
elegant but this was the best way I could find to make it work: using `\zs`
unfortunately [didn't work].

[didn't work]: http://groups.google.com/group/vim_use/browse_thread/thread/d4fb8bc5be234d5d

Next, I also defined a couple of helpful macros to insert the common
constructions into XRC. This is done in `~/vim/ftplugin/xrc.vim` (which will be
sourced automatically by Vim thanks to our file type autocommand):

```
runtime! ftplugin/xml.vim

nmap <Leader>o o<object class=""><C-M><Esc>kf"a
nmap <Leader>v o<object class="wxBoxSizer"><C-M><Esc>O<Tab><orient>wxVERTICAL<Esc>o
nmap <Leader>h o<object class="wxBoxSizer"><C-M><Esc>O<Tab><orient>wxHORIZONTAL<Esc>o
nmap <Leader>i o<object class="sizeritem"><C-M><Esc>O<Tab><flag>wxALL<Esc>o<border>5
```

Notice that this supposes that you have the [XML editing] plugin installed,
notably it relies on it to close all the tags. But surely you don't edit XML in
Vim without it anyhow, right?

Much more could probably be done but I find that the above already makes editing
XRC much more comfortable. And I definitely can do it much faster in Vim than
using any GUI I tried so far.

[XML editing]: http://www.vim.org/scripts/script.php?script_id=301
