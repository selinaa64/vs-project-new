# Specify the base image
FROM maven:3.8.4-openjdk-17 as BUILD
# Set the working directory inside the container
WORKDIR /demo
# Copy the entire current directory (.) into the container at /Backend
COPY . .

# Expose port 8080 to allow external access to the container
EXPOSE 8080

# Define the command to be executed when the container starts
RUN ./mvnw package -DskipTests

#docker build -f Dockerfile -t demo:v0.1 .
