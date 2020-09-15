# frozen_string_literal: true

##
# Index entity related documents to solr
class EntityFixtures
  def index
    files.each do |file|
      solr.add(file)
    end
    solr.commit
  end

  def delete
    solr.delete_by_query('*:*')
    solr.commit
  end

  private

  def solr
    @solr ||= Blacklight.default_index.connection
  end

  def files
    @files ||= Dir["#{directory}/**/*.yml"].map do |file|
      YAML.safe_load(File.open(file)).map { |k, v| [k, k.ends_with?('_struct') ? v.to_json : v] }.to_h
    end
  end

  def directory
    "#{Rails.root}/data/entities"
  end
end
