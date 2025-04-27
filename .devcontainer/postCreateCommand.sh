#!/usr/bin/env bash

set -ex

ruby update_release_info.rb
ruby _cron/update_download_stats.rb

git clone --depth=1 https://github.com/wxWidgets/wxWidgets.git

_cron/update_wxxrc_schema.sh
_cron/update_translation_stats.sh
