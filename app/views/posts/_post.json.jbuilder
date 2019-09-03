json.extract! post, :id, :title, :content, :post_date, :navigation, :created_at, :updated_at
json.url post_url(post, format: :json)
