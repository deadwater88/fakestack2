module ApplicationHelper

  def jbuilderSymbolize property
    property.deep_symbolize_keys.each do |k, v|
      json.set! k do
        json.extract! v, :id, :first_name, :last_name, :profile_img_url
      end
    end
  end
end
