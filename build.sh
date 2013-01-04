#!/bin/bash

r.js -o baseUrl=lib paths.almond=../vendor/almond paths.selector-generator=../vendor/selector-generator name=almond include=selector-generator,range-serializer out=dist/range-serializer.js optimize=none
