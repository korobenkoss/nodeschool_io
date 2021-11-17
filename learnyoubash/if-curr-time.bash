#!/usr/bin/env bash

HOUR=$(date +%H)

if [[ HOUR -ge 0 && HOUR -lt 12 ]];then
    echo "Good morning!"
elif [[ HOUR -ge 12 && HOUR -lt 18 ]];then
    echo "Good afternoon!"
elif [[ HOUR -ge 18 && HOUR -le 24 ]];then
    echo "Good evening!"
else
    echo "Error"
fi