require 'open-uri'
require 'json'
require 'yaml'

module GithubHelpers
  SOCIAL_MEDIA_ISSUE_URL = "https://api.github.com/repos/archdragon/nightwood_blog/issues/1"

  def social_media_updates
    source = open(SOCIAL_MEDIA_ISSUE_URL).read
    json = JSON.parse(source)
    YAML.load(json["body"]["items"])
  end
end
