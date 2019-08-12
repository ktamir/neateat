require 'pact/provider/rspec'

Pact.service_provider "neateat-server" do

  honours_pact_with 'neateat-client' do
    pact_uri 'http://localhost:9292/pacts/provider/neateat-server/consumer/neateat-client/latest'
  end
end