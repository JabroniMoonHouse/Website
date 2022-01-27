#!/bin/bash
yarn run build
cp build/index.html build/200.html
surge build/ $1