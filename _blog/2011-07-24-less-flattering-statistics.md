---
title: Less flattering statistics
date: '2011-07-24T17:12:00.002Z'
author: Vadim Zeitlin
modified_time: '2011-07-24T18:51:13.898Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-9190319444461982228
blogger_orig_url: http://wxwidgets.blogspot.com/2011/07/less-flattering-statistics.html
---

I've stopped counting the number of opened and fixed Trac bugs quite some time
ago because it was too much trouble to do it semi-manually. But one of the side
effects of the recrudescence of [my love affair with Perl] is that I'm looking
for excuses to write more Perl code and so I spent half an hour today on writing
a [small script] allowing to gather ticket statistics automatically. This is
probably not the best way to do it (it would be better to install some Trac
statistics plugin server-side) and the script itself is pretty trivial so it
didn't quench my quest for more Perl neither but at least it does quickly give
the statistics I wanted.

The bad part is that I didn't want the statistics I got because it in spite of
all our efforts the number of opened bugs in wxWidgets keeps increasing. The
only good news is that the rate of increase seems to have decreased or at least
stabilized: if in 2009 we had 271 new bugs (computed as the difference between
1270 opened and 145 reopened ones and 1144 closed ones), in 2010 we had "only"
275 new bugs and so far in 2011 we have only 20 news ones (and it's not as
people got simply tired of reporting them, there were still 521 newly opened
bugs since the beginning of the year). But in all, we still have 544 more bugs
today than in May 2008 when Trac statistics begin so the journey towards
bug-free future remains long...

Out of curiosity I also collected the month statistics using the following
intimidating command combining the wonders of [zsh] short loop syntax and GNU
date [relative dates support]:

    % for ((year=2008;$year<=2011;year++)); \
      for ((i=1;$i<=12;i++)); \
      ./trac-ticket-stats --csv trac.wxwidgets.org $year-$i-01 \
        `date --date="1 day ago 1 month $year-$i-01" +%F`

and discovered somewhat surprising variations between the months: on average, we
get 60 net new tickets per month but there are some outliers. In Januaries there
are almost no new bugs (2) while in October there are 112 of them. Looking at
the number of bugs created, more bugs are created in March, October and July
(which are very close) while wxWidgets users seem to be on vacation in June when
almost twice less bugs are opened. As for us, the developers, we seem to start
every new year with good resolutions as January is the month with by far the
most bug fixes while by June working on them really loses its appeal and two
times fewer of them are resolved.

[my love affair with Perl]: http://www.tt-solutions.com/en/articles/diving_into_modern_perl
[small script]: http://www.tt-solutions.com/en/portfolio/trac_ticket_stats
[zsh]: http://www.zsh.org/
[relative dates support]: http://www.gnu.org/s/coreutils/manual/html_node/Relative-items-in-date-strings.html#Relative-items-in-date-strings
