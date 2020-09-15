# frozen_string_literal: true

class EntitiesController < ApplicationController
  def show
    @entity = entity
  end

  def entity
    Blacklight.default_index.connection.select(params: query_params).dig('response', 'docs').first
  end

  def query_params
    { fq: "author_uri_ssim:\"#{params[:id]}\"", rows: 1 }
  end
end
