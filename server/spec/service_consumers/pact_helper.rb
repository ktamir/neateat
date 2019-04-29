require 'pact/provider/rspec'

Pact.service_provider "neateat-server" do

  honours_pact_with 'neateat-client' do

    # This example points to a local file, however, on a real project with a continuous
    # integration box, you would use a [Pact Broker](https://github.com/pact-foundation/pact_broker) or publish your pacts as artifacts,
    # and point the pact_uri to the pact published by the last successful build.

    pact_uri 'http://localhost:8080/pacts/provider/neateat-server/consumer/neateat-client/latest'
  end
end