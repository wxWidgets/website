#!/bin/sh

# Set WX_SITE_DIR before running this script, and also run:
# svn checkout https://github.com/wxWidgets/wxWidgets/trunk/locale/

MSGFMT='msgfmt'
CATALOGS_DIR="$WX_SITE_DIR/_cron/locale"
STATUS_FILE="$WX_SITE_DIR/about/translations/stats.js"

cd $CATALOGS_DIR
svn update > /dev/null 2>&1

echo 'processTranslationStats({' > $STATUS_FILE

for i in ${CATALOGS_DIR}/*.po ; do
  catname=`basename $i .po`
  if test "x$catname" != "xwxstd" ; then
    x=`$MSGFMT --verbose -o /dev/null $i 2>&1 | grep 'translated messages' | \
         sed -e 's/[,\.]//g' \
             -e 's/\([0-9]\+\) translated messages\?/TR=\1/' \
             -e 's/\([0-9]\+\) fuzzy translations\?/FZ=\1/' \
             -e 's/\([0-9]\+\) untranslated messages\?/UT=\1/'`
    TR=0 FZ=0 UT=0
    eval $x
    if [ "$PO_FLAG_FIRST" ] ; then
      echo "," >> $STATUS_FILE
    else
      PO_FLAG_FIRST="set"
    fi
    printf "\"$catname\":[$TR,$FZ,$UT]" >> $STATUS_FILE
  fi
done

echo '});' >> $STATUS_FILE

