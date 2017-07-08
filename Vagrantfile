# -*- mode: ruby -*-
# vi: set ft=ruby :

node_version = 'lts/boron'

$sudo_script = <<SUDOSCRIPT
apt-get -y install build-essential ruby ruby-dev zlib1g-dev
gem install github-pages -v 141 --no-ri --no-rdoc
SUDOSCRIPT

$user_script = <<USERSCRIPT
curl -s https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
export NVM_DIR="/home/ubuntu/.nvm"
source ~/.nvm/nvm.sh
nvm install #{node_version} 2> /dev/null
nvm alias default #{node_version}
npm install -g grunt-cli
USERSCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", :keep_color => true, :inline => $sudo_script
  config.vm.provision "shell", :keep_color => true, :inline => $user_script, :privileged => false
end
