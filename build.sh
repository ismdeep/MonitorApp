#!/usr/bin/env bash
project_dir=`pwd`

rm -rfv android
rm -rfv build
ionic build --prod
ionic capacitor add android
ionic capacitor copy android
