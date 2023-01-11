# -*- mode: ruby -*-
# vi: set ft=ruby :

$sudo_script = <<SUDOSCRIPT
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get -y install build-essential nodejs ruby ruby-bundler ruby-dev yarn zlib1g-dev
SUDOSCRIPT

$environment_variables = <<SCRIPT
tee "/etc/profile.d/wxwebsite.sh" > "/dev/null" <<EOF
export WX_SITE_DIR=/vagrant
EOF
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", inline: $environment_variables, run: "always"
  config.vm.provision "shell", inline: $sudo_script, keep_color: true
end
