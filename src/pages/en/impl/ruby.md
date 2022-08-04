---
title: Ruby Daraja wrapper
description: A ruby wrapper for seamless integration with Mpesa's Daraja API
layout: ../../../layouts/MainLayout.astro
---

Documentation for the ruby wrapper implementation of the `Daraja-sdks`.

## Installation
**Using gem**
```bash
gem install daraja
```

**Using bundler**
```ruby
# Add this to your Gemfile
gem "daraja", "~> 1.0.0"

# If you creating a gem that depends on daraja, add this to your specfile instead:
spec.add_dependency "daraja", "~> 1.0.0"
```
**And then run:**
```bash
bundle .
```

## Usage
```ruby
require "daraja"

Daraja::Mpesa.new(app_key: ENV['APP_KEY'], app_secret: ENV['APP_SECRET']) do |app|
    # Do something with the app...
    puts app
end
```