#! /usr/bin/env ruby

require "erb"
require "json"
require "open-uri"
require "cgi"

def get_all_jobs()
  api_url = "https://api.greenhouse.io/v1/boards/snyk/jobs?content=true"
  data = URI.parse(api_url).read
  obj = JSON.parse(data)

  template = File.read('template.erb')
  
  obj["jobs"].each do |job|
    job_title = job["title"].gsub("/", ' or ').strip.concat(".md")
    File.open(job_title, "w") do |f| 
      @job_title = job["title"]
      @content = CGI.unescapeHTML(job["content"])
      @application_url = job["absolute_url"];
      renderer = ERB.new(File.read("template.erb"));
      f.puts renderer.result()
    end
  end
end

@url = get_all_jobs()