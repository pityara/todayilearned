require "capistrano/setup"
require "capistrano/deploy"
require "capistrano/bundler"
require "capistrano/rvm"
require "capistrano/rails"
require "capistrano/puma"
install_plugin Capistrano::Puma
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
