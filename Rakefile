IMAGE_NAME = 'fandom-global-elements'
DEFAULT_PORT = 80

def get_local_ip()
  network_ip = `ifconfig en0 | grep inet | grep -v inet6 | awk '{print $2}'`
  network_ip.strip!
  network_ip
end

task :build_image do
  sh "docker build --tag #{IMAGE_NAME} ."
end

task :dev, [:port] do |t, args|
  root_dir = File.expand_path(File.dirname(__FILE__)+'/')
  port = args[:port] || DEFAULT_PORT
  network_ip = get_local_ip()

  command = "docker run -it --rm " \
            "--add-host=hostmachine:#{network_ip} " \
            "--publish #{port}:80 " \
            "--volume #{root_dir}:/fandom-global-elements " \
            "#{IMAGE_NAME} sh -c \"nginx -c /fandom-global-elements/nginx/nginx.conf; cd /fandom-global-elements; sh\""
  exec(command)
end
