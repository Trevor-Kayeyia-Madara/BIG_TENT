#!/usr/bin/env bash
# exit on error
set -o errexit

# Install gems and their dependencies
bundle install

# Precompile assets for production
bundle exec rails assets:precompile

# Clean up assets
bundle exec rails assets:clean

# Run database migrations
bundle exec rails db:migrate
