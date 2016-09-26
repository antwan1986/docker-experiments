echo;

# Prints the entry for the linked container (using the supplied alias).
echo "Hosts Entry:";
cat /etc/hosts | grep mongodb;

echo;

# Prints the environment variables for the linked container.
echo "Environment Variables:";
env | grep MONGODB;

echo;