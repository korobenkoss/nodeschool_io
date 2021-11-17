#!/usr/bin/env bash
array=(I am "${@:2:2}" and "${@:4:1}")
echo "${array[*]}"
