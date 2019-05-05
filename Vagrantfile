Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu1804"
  config.vm.network "public_network", bridge: "packer-hyperv-iso"
  config.vm.synced_folder '.', '/vagrant', type: "smb", smb_username: ENV['VAGRANT_SMB_USR'], smb_password: ENV['VAGRANT_SMB_PASS'], mount_options: ['vers=3.0']
end
