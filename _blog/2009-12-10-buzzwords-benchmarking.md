---
title: Buzzwords  Benchmarking
date: '2009-12-10T16:08:00.007Z'
author: Vadim Zeitlin
modified_time: '2009-12-10T19:21:58.239Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2609919014653286180
blogger_orig_url: http://wxwidgets.blogspot.com/2009/12/buzzwords-benchmarking.html
---

First, a word of warning: this post is not really about wxWidgets at all but I
thought that my experience could be interesting for people doing cross-platform
development and so might overlap with the interests of this blog readers.

The experience in question was the recent upgrade of my main Windows development
machine. I need to develop for Windows but, at least in principle, it doesn't
mean that I need to run it as my main OS -- personally I'm feeling more
comfortable under traditional Unix-ish desktop environments rather than in
Windows UI (as an aside, ever since OS X acquired virtual desktops support I
hoped Microsoft would add it to Windows too, but apparently they don't copy the
_useful_ OS X features...). However traditionally I did use Windows (Windows 3.1
at the dawn of time, then NT 4.0 for more than 6 years and later Windows Server
2003 for about 5) just because using Microsoft Visual Studio is much more
productive than cross-compiling from Linux, especially because of incomparably
better debugging support. Nevertheless I always hoped to be able to switch to
using Windows in a virtual machine under some Unix-like OS and this is what I
tried to do with the latest hardware upgrade. The main question was, of course,
how much slower would building software inside of a VM be compared to doing it
natively -- so "virtualization" is the first of two buzzwords of the title that
I wanted to benchmark.

The second one is "SSD". I've heard so much of how it's the greatest thing since
the invention of computer from everybody starting from [Anand Lal Shimpi] to
[Linus Torvalds] that I couldn't prevent myself from spending a good part of the
new box price on a pitifully small (160GB) but hardly inexpensive Intel 2nd
generation ("PostVille") X25-M SSD drive. And, of course, I was curious to know
if this was money well spent for what matters to me -- that is,
compiling/linking speed.

[Anand Lal Shimpi]: http://www.anandtech.com/
[Linus Torvalds]: http://torvalds-family.blogspot.com/2008/10/so-i-got-one-of-new-intel-ssds.html

So I did some benchmarks on the new machine. They were perhaps not very
thorough, e.g. I didn't reformat the drive after each run, however the variation
remained small (1-2 seconds for the tests of physical systems) and the results
were consistent so they still seem significant enough to me. The main caveat is
that they clearly only make sense for this particular hardware configuration, it
could be perfectly possible that using faster and/or more CPU(s) would change
the balance. But I didn't have the possibility to test with anything else than
this system, with its i7 860 CPU and 8GB of DDR-3 RAM (FWIW I also played a bit
with RAM timings to see if this could change anything but they're absolutely
insignificant in real-life benchmarks). The system also has 2 1TB Samsung F3
SATA drives which were used as baseline for SSD results (without RAID).

First of all, I compared the times for building wxWidgets under Linux. Here are
some results under Ubuntu 9.10 (using g++ 4.4) and Debian Testing (using g++
4.3):

| Command                 | OS     | Disk/FS  |  Time (sec)|
|-------------------------|--------|----------|-----------:|
| configure               | Ubuntu | HD/ext4  |          15|
| configure               | Ubuntu | SSD/ext4 |          15|
| configure               | Ubuntu | tmpfs    |          15|
|----
| make -j4                | Ubuntu | HD/ext4  |          91|
| make -j4                | Ubuntu | SSD/ext4 |          90|
| make -j8                | Ubuntu | HD/ext4  |          73|
| make -j8                | Ubuntu | SSD/ext4 |          70|
| make -j8                | Debian | HD/ext3  |          66|
| make -j8                | Debian | HD/ext2  |          63|
| make -j8                | Debian | SSD/ext3 |          64|
| make -j8                | Debian | HD/ext4  |          63|
| make -j8                | Debian | tmpfs    |          59|
|----
| make -C samples/widgets | Any    | any      |          13|
{: .table .table-striped .table-hover .table-sm .table-responsive .m-4 }

The first results seem to be obvious: SSD hardly presents any advantages in this
test. I was rather surprised by this as I thought that compilation and
especially linking was a disk-intensive activity. However it turns out that I
was completely wrong and that in at least this hardware configuration it's
almost entirely CPU-bound. This can be seen by noticing that even using tmpfs
(which is clearly the most efficient disk you can use, provided there is enough
of free RAM -- as was the case here) results in less than 10% gain. Also note
that under Ubuntu there is no difference at all between HD and SSD when using 4
CPUs but a small difference in favour of SSD appears when 8 of them are used.
This gives me some hope that maybe SSD can be useful with e.g. upcoming 6-core
(and hence 12 logical CPUs taking hyper-threading into account) Intel
processors. Or, even now, by using 2 or more Xeons instead of a single i7.

Next I installed Windows 7 (64 bit edition) and [beta 2 of MSVS 2010]. I won't
give the benchmarking results for g++ under Windows as it's catastrophically
slow compared to MSVC. Running configure alone took 100 seconds and building
(with -j8) took more than 200. Instead I'll give some benchmarks for nmake
(which doesn't support parallel builds) and msbuild (which can be used for
building MSVS projects in 2010), both under the native Windows 7 installation
and in the same installation (or at least produced using the same unattended
setup file) in a virtual machine with 4GB of RAM and 4 CPUs under VMWare
Workstation 7:

| Command      | OS        | Disk |  Time (sec)|
|--------------|-----------|------|-----------:|
| nmake        | Native    | HD   |         134|
| nmake        | Native    | SSD  |         132|
| nmake (x64)  | Native    | HD   |         162|
|----
| msbuild /m:8 | Native    | HD   |          32|
| msbuild /m:4 | Native    | HD   |          34|
| msbuild /m:8 | Native    | SSD  |          31|
|----
| nmake        | VM7/Linux | Any  |         251|
| msbuild /m:2 | VM7/Linux | SSD  |          99|
| msbuild /m:4 | VM7/Linux | SSD  |          57|
| msbuild /m:4 | VM7/Win7  | SSD  |          67|
{: .table .table-striped .table-hover .table-sm .table-responsive .m-4 }

[beta 2 of MSVS 2010]: http://msdn.microsoft.com/en-us/vstudio/dd582936.aspx

There are two conclusions which can be made from the first half (under native
installation of Windows 7). First, and the most important one for me, is that
there is once again no difference between using HD and SSD to speak of. Second,
amazingly, x64 builds are 20% slower than x86 ones. I don't know if it's due to
x64 not being as optimized as the x86 one or just because x64 binaries are
larger (by around the same 20%) and so take more time to generate.

The most interesting question however was if Linux could be used for developing
under Windows efficiently. Unfortunately the numbers are not good. The best case
is slowdown of almost 100% and I discarded the initial timings for the builds
inside a VM: for some reason they take markedly longer time then the subsequent
ones (10-15 seconds longer, both under Linux and Windows hosts). I don't know
why exactly does this happen but it doesn't even really matter as even with the
best results I still don't cherish the idea of spending twice as long waiting
for the compile to finish. Of course, extra 20 seconds in case of wxWidgets
build is not long at all but some of the other projects I'm working on take much
longer to build and wait an extra half an hour is a big difference.

Notice that VMware Workstation only allows to use 4 CPUs (and not 8). I thought
that the performance might be better if all CPUs were usable and so also tried 2
other virtualization solutions: [KVM] and [VirtualBox]. To kill any suspense,
they were very far from working better than VMware. I didn't even benchmark KVM
because I simply couldn't import my existing VM into it and spending time to
reinstall MSVS 2010 in it just didn't seem to be worth the trouble because it
felt sluggish enough interactively (probably because due to lack of any
equivalent to VMware tools or VBox guest additions?) to not make me want to use
it for longer than 5 minutes anyhow. KVM is also clearly very raw, I ran into
(admittedly Debian-specific, but still) [bugs] while installing it and generally
it just doesn't seem like something that is meant to work out of the box for
interactive use right now.

[KVM]: https://www.linux-kvm.org/page/Main_Page
[VirtualBox]: https://www.virtualbox.org/
[bugs]: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=557744

VBox is another matter: it installed without any problems, imported my existing
VM (after conversion to QCOW2 format) and allowed me to configure it with 8
CPUs. It also was perfectly usable interactively after I uninstalled VMware
tools and installed the guest additions. All in all, it's a great way to use
Windows under Linux... occasionally. Because the performance is just incredibly
poor. I don't know if it's something SMP-related and I hope that this might
improve in the next versions of VirtualBox (I used the last one available now,
3.1.0) but right now it's not even funny, just look at the numbers:

| What         | OS         | Disk |  Time (sec)|
|--------------|------------|------|-----------:|
| nmake        | VBox/Linux | HD   |         545|
| msbuild /m:4 | VBox/Linux | HD   |         750|
| msbuild /m:8 | VBox/Linux | HD   |        1944|
{: .table .table-striped .table-hover .table-sm .table-responsive .m-4 }

Using nmake is only about twice slower than under VMware (and 4 times slower
than in physical machine) but there is clearly a problem with scheduling if
building using 4 concurrent processes takes even longer than this and building
using 8 of them is 4 times slower yet (that's half an hour build time instead of
half a minute in a physical machine!).

To summarize, there are two conclusions. The most interesting one, if only
because it was rather unexpected to me, is that if build times are your primary
concern then you should spend your money on an extra Xeon instead of an SSD. I
couldn't test it but it seems clear that building using 16 logical CPUs would be
much faster than using 8 of them. SSD doesn't provide any advantage at all just
because it isn't the bottleneck -- the CPU(s) is/are. Looking at perfmon charts
under Windows it is quite clear: the disk utilization hovers around 10% with
occasional spikes to 30% but CPU use is pegged at 100% during the entire build
(when using msbuild /m:8). Of course, SSD have other advantages. As many people
have noticed, booting is much quicker. And so is launching new applications. But
personally I just don't care about either: I simply never reboot any of my
machines and I mostly work with the same applications which are always running.
I do notice that switching between different projects in MSVS IDE is much
quicker when using SSD but IMO this doesn't justify the price premium.
Undoubtedly I simply don't do enough of disk-intensive work but as much as I try
I simply can't muster the same kind of enthusiasm as others have expressed after
switching to using an SSD. The main advantage I see is the absolute quiet:
although the hard disks are rather quiet as well, they do produce some noise
when spinning up after a period of inactivity. But, again, this is hardly a
game-changing advantage.

The second conclusion is less unexpected: compilation remains one of the
probably worst activities for virtualization from performance point of view.
This is somewhat surprising combined with my newly gained knowledge that it is
CPU, rather than IO, intensive -- it would seem that it should virtualize very
well because of this. But it doesn't, unless you count "twice slower" as being
very well. Of course, this is not the end of the world and you could develop for
Windows using a VM under Linux. It's certainly very usable and you almost don't
notice any difference with the physical machine neither with VMware nor
VirtualBox; I seriously considered just putting up with the extra wait (but
finally couldn't use Linux on this machine anyhow because of the [problems with
resuming from suspend] and so had no choice but to install Windows anyhow). OTOH
you do need to buy VMware Workstation instead of using VirtualBox if you plan to
do this (I probably need to add a disclaimer that I'm not affiliated with VMware
in any way, I just love using their software even since version 3 and up to
version 7 which I bought after doing these benchmarks, it's really invaluable
for developing/testing and that you should, of course, compare their performance
yourself just in case my case was somehow exceptional).

[problems with resuming from suspend]: https://bugzilla.redhat.com/show_bug.cgi?id=540199
