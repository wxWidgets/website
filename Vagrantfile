# -*- mode: ruby -*-
# vi: set ft=ruby :

$sudo_script = <<SUDOSCRIPT
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get -y install build-essential nodejs ruby ruby-bundler ruby-dev yarn zlib1g-dev
SUDOSCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :keep_color => true, :inline => $sudo_script
end
