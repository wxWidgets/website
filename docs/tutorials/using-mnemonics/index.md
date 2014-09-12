---
title: "Using Mnemonics"
---

An mnemonic is an underlined letter in a menu or labeled dialog control that
indicates to a user a quick, keyboard method of simulating a click on that
element. For example, an Apply button may have the letter A underlined. On
Windows and UNIX, pressing Alt+A is a convenient way to push that button. Mac
OS X does not support underlined mnemonics.


## How do I keep the underlines from disappearing in Windows?

On Microsoft Windows 2000 and XP, the underlines only appear while ALT is
pressed. This makes the mnemonics difficult to debug. Especially in context
menus!

Windows can be instructed to automatically show underlines for accelerator keys
by checking the Show extra keyboard help in programs box in the Keyboard pane
of the Accessibility Options applet in the Windows Control panel.
Alternatively, right-click on the desktop background, go to Properties ->
Appearance -> Effects, and clear the checkbox labeled Hide keyboard navigation
indicators until I use the Alt key.


## How is an mnemonic added to a form control or menu item?

An mnemonic can be added to a form control or menu item label by adding an '&'
before the letter.


## How do I pick an mnemonic letter?

1.  Avoid duplicates
    * Don't use the same mnemonic letter is twice in the same window.
    * Be especially careful of drop down menus in the same window. For example,
      for mail quick search controls, don't use F, E, V, M, S, T, W or H
      (<u>F</u>ile, <u>E</u>dit, <u>V</u>iew, <u>M</u>essage, <u>S</u>pam,
      <u>T</u>ools, <u>W</u>indow, <u>H</u>elp).
    * Help wanted: it would be useful to have an automated tool to check for
      duplicate and missing mnemonics in wxWindows-based applications.
2.  Make it easy to see:
    * Use letters at the beginning of the first or second word of the label.
    * Use a distinctive consonant or a vowel in the label.
    * Use letters with wide widths, such as w, m, and capital letters.
    * Avoid letters with descenders, such as g, j, p, q, or y.
    * Avoid letters next to a letter with a descender.
    * Avoid letters that are only one pixel wide, such as i or l.
3.  Make it easy to remember
    * Do the most important prompts first, so that they get the best mnemonics.
    * See if a similar prompt has an mnemonic elsewhere in Windows, and use the
      same mnemonic. It's important to use standard mnemonics, to take
      advantage of people's muscle memory. For example: P<u>r</u>operties,
      Rena<u>m</u>e, <u>D</u>elete, Cu<u>t</u>, <u>C</u>opy, <u>P</u>aste,
      <u>O</u>pen, <u>F</u>ind, Find <u>n</u>ext, <u>S</u>ave,
      Save <u>a</u>s, <u>P</u>rint, E<u>x</u>it.
    * If not, try the first letter of the first word in the prompt.
    * Next, try the first letter of another word in the prompt.
    * Finally, use any non-silent letter in an action word (do these after the rest of the dialog has mnemonics chosen).
4.  Common elements that don't get mnemonics:
    * OK buttons.
    * Cancel buttons.
    * Close buttons.
    * Tab panel labels.
