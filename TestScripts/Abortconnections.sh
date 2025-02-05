CONTAINER_NAME="mysql-container"

MYSQL_USER="root"
MYSQL_PASSWORD="wrong_password"
MYSQL_DB="banking_dbv9"

ABORT_COUNT=10
for i in $(seq 1 $ABORT_COUNT); do
    # Start a MySQL connection and immediately kill the process
    docker exec -i $CONTAINER_NAME sh -c "mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB";
done
