# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'
Rails.application.load_tasks

require 'solr_wrapper/rake_task' unless Rails.env.production?

namespace :server do
  desc 'Start solr, index data, and start the rails server'
  task :start => [:environment] do
    config = YAML.safe_load(File.open("#{Rails.root}/.solr_wrapper.yml").read)

    SolrWrapper.wrap do |solr|
      solr.with_collection(name: config.dig('collection', 'name')) do
        EntityFixtures.new.index
        %x(rails s)
      end
    end
  end
end

namespace :entity_app do
  desc 'Index entity app fixtures'
  task :seed => [:environment] do
    EntityFixtures.new.index
  end
end
