
# config/initializers/carrierwave.rb

CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                        # required
    :aws_access_key_id      => ENV["AKIAI6JO2ANEBZNCUSJQ"],                        # required
    :aws_secret_access_key  => ENV["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"]                         # required
  }
  config.fog_directory  = ENV["nomstervandegrift"]                     # required
end
