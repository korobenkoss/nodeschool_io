#!/usr/bin/env bash

case "$1" in
    (png)
        echo "This is png."
    ;;
    (jpg|jpeg)
        echo "This is jpeg."
    ;;
    (gif)
        echo "This is gif."
    ;;
    (*)
        echo "$1 is not an image!"
    ;;
esac