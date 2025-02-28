#!/bin/bash
set -e
pip install -r requirements.txt 
echo "Requirements installed"

uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload
