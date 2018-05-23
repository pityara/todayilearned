require "capistrano/setup"
require "capistrano/deploy"
require "capistrano/scm/git"
require "capistrano/bundler"
require "capistrano/rvm"
require "capistrano/rails"
require "capistrano/rails/console"
require "capistrano/puma"

set :rvm_type, :user
set :rvm_ruby_version, '2.5.0'
install_plugin Capistrano::SCM::Git
install_plugin Capistrano::Puma
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
