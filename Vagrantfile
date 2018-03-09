# -*- mode: ruby -*-
# vi: set ft=ruby :

node_version = 'lts/boron'

$sudo_script = <<SUDOSCRIPT
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get -y install build-essential nodejs ruby ruby-dev zlib1g-dev
npm install -g grunt-cli
gem install github-pages -v 141 --no-ri --no-rdoc
SUDOSCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :keep_color => true, :inline => $sudo_script
end
