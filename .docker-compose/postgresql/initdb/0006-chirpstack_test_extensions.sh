#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname="chirpstack_test" <<-EOSQL
    create extension pg_trgm;
    create extension hstore;
EOSQL