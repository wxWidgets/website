# -*- mode: ruby -*-
# vi: set ft=ruby :

$sudo_script = <<SUDOSCRIPT
apt-get -y install build-essential curl git ruby-dev
gem install github-pages --no-ri --no-rdoc
SUDOSCRIPT

$user_script = <<USERSCRIPT
curl -s https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
export NVM_DIR="/home/vagrant/.nvm"
source /home/vagrant/.nvm/nvm.sh
nvm install 0.10 2> /dev/null
nvm alias default 0.10
npm install -g grunt-cli
USERSCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :keep_color => true, :inline => $sudo_script
  config.vm.provision "shell", :keep_color => true, :inline => $user_script, :privileged => false
end
