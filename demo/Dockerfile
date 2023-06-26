# Specify the base image
FROM eclipse-temurin:17 as BUILD
# Set the working directory inside the container
WORKDIR /demo
# Copy the entire current directory (.) into the container at /Backend
COPY target/demo-0.0.1-SNAPSHOT.jar demo.jar
# Expose port 8080 to allow external access to the container
EXPOSE 8080

# Define the command to be executed when the container starts
#CMD mvn spring-boot:run
CMD ["java", "-jar", "demo.jar"]
#docker build -f Dockerfile -t demo:v0.1 .
