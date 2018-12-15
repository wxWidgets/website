#!/usr/bin/env ruby

# Set WX_SITE_DIR before running this script
# This script updates the download statistics from github

require 'yaml'
require 'json'
require 'open-uri'

wx_site_dir = ENV["WX_SITE_DIR"]

# Download updated release asset information
release_info = YAML.safe_load(File.open('%s/_data/releases.yml' % wx_site_dir))
release_info.each do |release|
  version = release['version']
  asset_info_url = 'https://api.github.com/repos/wxWidgets/wxWidgets/releases/tags/v%s' % version

  download = open(asset_info_url)
  data = JSON.parse(download.read)

  # Only a subset of data from github is required
  release['assets'] = []
  data['assets'].each do |asset|
    release['assets'].push({
        "id" => asset["id"],
        "size" => asset["size"],
        "download_count" => asset["download_count"]
    })
  end
end

File.open('%s/downloads/downloads.json' % wx_site_dir, 'w+') do |f| 
  f.write(JSON.pretty_generate(release_info))
end
