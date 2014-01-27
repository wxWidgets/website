# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
apt-get -y install build-essential curl git
gem install jekyll rdiscount --no-ri --no-rdoc
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
source /home/vagrant/.nvm/nvm.sh
nvm install 0.10
nvm alias default 0.10
npm install -g grunt-cli
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :inline => $script
end
