#!/usr/bin/env bash
$1 || echo "First parameter is false."
$2 && echo "$(pwd)"
$3 && echo "$(ls)" || echo "Third parameter is false."