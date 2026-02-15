#!/bin/bash

# Configuration
URL="http://localhost:3000/feed.xml"
OUTPUT="public/feed.xml"
MAX_ATTEMPTS=30
SLEEP_SECONDS=2

# Function to fetch feed
fetch_feed() {
    if curl -s -o "$OUTPUT" --fail --max-time 5 "$URL"; then
        echo "RSS feed generated at $OUTPUT"
        return 0
    else
        return 1
    fi
}

# Try to fetch from existing server
if fetch_feed; then
    echo "Successfully fetched from running server."
    exit 0
fi

# If failed, start server
echo "Starting local server..."
nohup npm run dev > server.log 2>&1 &
SERVER_PID=$!
echo "Server started with PID $SERVER_PID"

# Loop to fetch feed
count=0
while [ $count -lt $MAX_ATTEMPTS ]; do
    echo "Attempting to fetch feed ($((count+1))/$MAX_ATTEMPTS)..."
    if fetch_feed; then
        echo "Success!"
        kill $SERVER_PID
        exit 0
    fi
    sleep $SLEEP_SECONDS
    count=$((count+1))
done

# Cleanup if failed
echo "Failed to generate RSS feed after $MAX_ATTEMPTS attempts."
kill $SERVER_PID
exit 1
