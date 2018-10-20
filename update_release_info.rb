#!/usr/bin/env ruby

# This script updates the release_asset information from github
# 1. Update versions in _data/releases.yml
# 2. Run this script to generate _data/release_assets/*.json

require 'yaml'
require 'json'
require 'open-uri'

# Remove current release asset information
Dir['_data/release_assets/*.json'].each do |info_file_name|
  File.delete(info_file_name)
end

# Download updated release asset information
release_info = YAML.safe_load(File.open('_data/releases.yml'))
release_info.each do |release|
  version = release['version']
  asset_info_url = 'https://api.github.com/repos/wxWidgets/wxWidgets/releases/tags/v%s' % version

  puts 'Updating asset info for %s...' % version
  download = open(asset_info_url)
  data = JSON.parse(download.read)
  File.open('_data/release_assets/%s.json' % version, 'w+') do |f| 
    f.write(JSON.pretty_generate(data))
  end
end
