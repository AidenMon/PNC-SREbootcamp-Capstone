#!/bin/bash
CONTAINER_NAME="mysql-container"

MYSQL_USER="root"
MYSQL_PASSWORD="rootmysql"
MYSQL_DB="banking_dbv9"

# Run a SLEEP query inside the database to delay execution
docker exec -i $CONTAINER_NAME mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB <<EOF
SELECT SLEEP(10);
EOF

echo "Slow query simulation complete."
