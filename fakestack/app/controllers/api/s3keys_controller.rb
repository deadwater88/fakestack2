class Api::S3keysController < ApplicationController

  def index
    filename = params[:filename]
    filetype = params[:filetype]
    @signedurl = set_s3_direct_post(filename, filetype)
    render json: @signedurl, status: 201
  end

end
