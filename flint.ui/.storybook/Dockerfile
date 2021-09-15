# Select reference image
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN yarn install

# Make port 6006 available
EXPOSE 6006

# run storybook app
CMD ["yarn", "storybook"]
