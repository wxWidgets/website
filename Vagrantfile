# -*- mode: ruby -*-
# vi: set ft=ruby :

$sudo_script = <<SUDOSCRIPT
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get update
apt-get -y install build-essential nodejs ruby ruby-bundler ruby-dev yarn zlib1g-dev
SUDOSCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :keep_color => true, :inline => $sudo_script
end
